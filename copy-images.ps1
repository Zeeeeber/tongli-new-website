$sourceDir = "E:/美工素材图片/发品-临时文件/木皮/科技木皮/11月科技皮主图"
$targetBase = "D:/tongli-new-website/public/images/products/engineered-wood-veneer"
$jsonFile = "D:/tongli-new-website/docs/import/engineered_wood_veneer_34_products_data_title_format.json"

[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
[Console]::InputEncoding = [System.Text.Encoding]::UTF8

$content = Get-Content -Path $jsonFile -Raw -Encoding UTF8
$json = $content | ConvertFrom-Json

Write-Host ("Loaded " + $json.Count + " products")

$report = @()

foreach ($product in $json) {
    $targetDir = Join-Path $targetBase $product.slug
    $sourceImages = $product.sourceImages

    $imageMap = @{}
    $firstImgFile = $null
    foreach ($img in $sourceImages) {
        if ($img -match '\(1\)') {
            $firstImgFile = $img
            break
        }
    }

    $orderedImages = @()
    if ($firstImgFile -ne $null) {
        $orderedImages += $firstImgFile
    }
    foreach ($img in $sourceImages) {
        if ($img -ne $firstImgFile) {
            $orderedImages += $img
        }
    }

    $imageIndex = 1
    $copiedCount = 0
    $missingFiles = @()

    foreach ($img in $orderedImages) {
        $sourceFile = Join-Path $sourceDir $img
        $ext = [System.IO.Path]::GetExtension($img)
        if ($imageIndex -eq 1) {
            $newName = "image-01$ext"
        } else {
            $padded = "{0:D2}" -f $imageIndex
            $newName = "image-$padded$ext"
        }
        $destFile = Join-Path $targetDir $newName
        if (Test-Path $sourceFile) {
            Copy-Item -Path $sourceFile -Destination $destFile -Force
            $imageMap[$newName] = $img
            $copiedCount++
        } else {
            $missingFiles += $img
        }
        $imageIndex++
    }

    $actualFirstImage = $null
    if ($imageMap.ContainsKey("image-01")) {
        $actualFirstImage = $imageMap["image-01"]
    }

    $sorted = $imageMap.GetEnumerator() | Sort-Object Name
    $allImagesStr = ""
    $firstOne = $true
    foreach ($e in $sorted) {
        if ($firstOne) {
            $allImagesStr = $e.Value
            $firstOne = $false
        } else {
            $allImagesStr = $allImagesStr + ", " + $e.Value
        }
    }

    $galleryImages = @()
    for ($i = 1; $i -le $copiedCount; $i++) {
        $num = "{0:D2}" -f $i
        $galleryImages += $product.galleryBasePath + "image-$num.png"
    }

    $report += [PSCustomObject]@{
        oldName = $product.oldName
        slug = $product.slug
        imageCount = $sourceImages.Count
        copiedCount = $copiedCount
        missingCount = $missingFiles.Count
        firstImageOriginal = $product.firstImageOriginalName
        actualFirstImage = $actualFirstImage
        hasFirstImage = ($actualFirstImage -ne $null)
        missingFilesStr = [String]::Join(", ", $missingFiles)
        featuredImage = $product.featuredImage
        galleryBasePath = $product.galleryBasePath
        allImages = $allImagesStr
        galleryPaths = [String]::Join(", ", $galleryImages)
    }

    $status = if ($missingFiles.Count -gt 0) { "[WARN] " + $product.oldName + ": missing " + $missingFiles.Count + " file(s)" } else { "[OK] " + $product.oldName + ": " + $copiedCount + " images, first=" + $actualFirstImage }
    Write-Host $status
}

Write-Host ""
Write-Host "Total products processed:"
Write-Host $report.Count

Write-Host ""
Write-Host "MISSING FILES:"
$hasMissing = $false
foreach ($r in $report) {
    if ($r.missingCount -gt 0) {
        $hasMissing = $true
        Write-Host ("  " + $r.oldName + ": " + $r.missingFilesStr)
    }
}
if (-not $hasMissing) { Write-Host "  None" }

Write-Host ""
Write-Host "PRODUCTS WITHOUT FIRST IMAGE:"
$hasNoFirst = $false
foreach ($r in $report) {
    if (-not $r.hasFirstImage) {
        $hasNoFirst = $true
        Write-Host ("  " + $r.oldName)
    }
}
if (-not $hasNoFirst) { Write-Host "  None" }

Write-Host ""
Write-Host "IMAGE COUNTS LESS THAN 7:"
$hasLt7 = $false
foreach ($r in $report) {
    if ($r.copiedCount -lt 7) {
        $hasLt7 = $true
        Write-Host ("  " + $r.oldName + ": " + $r.copiedCount + " images (expected 7)")
    }
}
if (-not $hasLt7) { Write-Host "  All products have 7+ images" }

Write-Host ""
Write-Host "========================================"
Write-Host "GALLERY PATHS"
Write-Host "========================================"
foreach ($r in $report) {
    Write-Host ""
    Write-Host ($r.oldName + " (" + $r.slug + "):")
    Write-Host ("  featuredImage: " + $r.featuredImage)
    Write-Host ("  gallery: [" + $r.galleryPaths + "]")
}
