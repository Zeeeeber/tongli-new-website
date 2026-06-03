"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

// ============================================
// Projects Data — exact image paths
// ============================================
type ProductType =
  | "Wood Veneer Panel"
  | "HPL"
  | "3D Wood Panel"
  | "Natural Wood Veneer"
  | "Engineered Wood Veneer"
  | "Melamine Board"
  | "Wood Veneer Edge Banding"
  | "Supporting Boards";

interface ProjectImage {
  src: string;
  alt: string;
}

interface Project {
  id: number;
  name: string;
  location: string;
  productType: ProductType;
  products: string;
  images: ProjectImage[];
  size: "tall" | "medium" | "short" | "square";
  cols: 1 | 2;
}

const projects: Project[] = [
  {
    id: 1,
    name: "Shangri-La Hotel Philippines",
    location: "Philippines",
    productType: "Wood Veneer Panel",
    products: "Q/C Teak veneer plywood · C/C White Oak veneer plywood",
    images: [
      { src: "/images/projects/1.菲律宾香格里拉酒店工程-护墙板/1.菲律宾香格里拉酒店工程-护墙板.png", alt: "Shangri-La Hotel cover" },
      { src: "/images/projects/1.菲律宾香格里拉酒店工程-护墙板/菲律宾宿雾岛香格里拉麦克坦Spa度假酒店设计_12.jpg", alt: "Shangri-La Hotel wall paneling" },
      { src: "/images/projects/1.菲律宾香格里拉酒店工程-护墙板/菲律宾宿雾岛香格里拉麦克坦Spa度假酒店设计_13.jpg", alt: "Shangri-La Hotel wall paneling detail" },
    ],
    size: "tall",
    cols: 1,
  },
  {
    id: 2,
    name: "Kuala Lumpur Restaurant",
    location: "Kuala Lumpur, Malaysia",
    productType: "HPL",
    products: "Wood Grain HPL",
    images: [
      { src: "/images/projects/2.吉隆坡餐厅-HPL/吉隆坡餐厅HPL (1).jpg", alt: "Restaurant HPL interior" },
      { src: "/images/projects/2.吉隆坡餐厅-HPL/吉隆坡餐厅HPL (2).jpg", alt: "Restaurant HPL detail" },
      { src: "/images/projects/2.吉隆坡餐厅-HPL/吉隆坡餐厅HPL (3).jpg", alt: "Restaurant HPL finish" },
    ],
    size: "medium",
    cols: 1,
  },
  {
    id: 3,
    name: "Singapore IBS Hotel",
    location: "Singapore",
    productType: "Wood Veneer Panel",
    products: "C/C White Oak veneer plywood · C/C Red White Oak veneer plywood",
    images: [
      { src: "/images/projects/3.新加坡IBS酒店/项目案例图 (1).jpg", alt: "IBS Hotel paneling" },
      { src: "/images/projects/3.新加坡IBS酒店/项目案例图 (2).jpg", alt: "IBS Hotel wall paneling" },
      { src: "/images/projects/3.新加坡IBS酒店/项目案例图 .jpg", alt: "IBS Hotel detail" },
    ],
    size: "tall",
    cols: 1,
  },
  {
    id: 4,
    name: "BookXcees at Sunway Square",
    location: "Kuala Lumpur, Malaysia",
    productType: "HPL",
    products: "Wood Grain HPL · Solid Color HPL",
    images: [
      { src: "/images/projects/4.HPL-书店-马来西亚吉隆坡/BookXcees at Sunway Square (1).jpg", alt: "BookXcees bookstore" },
      { src: "/images/projects/4.HPL-书店-马来西亚吉隆坡/BookXcees at Sunway Square (2).jpg", alt: "BookXcees interior" },
      { src: "/images/projects/4.HPL-书店-马来西亚吉隆坡/BookXcees at Sunway Square (3).jpg", alt: "BookXcees HPL detail" },
      { src: "/images/projects/4.HPL-书店-马来西亚吉隆坡/BookXcees at Sunway Square (4).jpg", alt: "BookXcees shelving" },
    ],
    size: "short",
    cols: 2,
  },
  {
    id: 5,
    name: "Penthouse — Full House Customization",
    location: "Singapore",
    productType: "Wood Veneer Panel",
    products: "Pecan veneer plywood",
    images: [
      { src: "/images/projects/5.山核桃私人大平层-全屋定制-新加坡/核山桃 (1).jpg", alt: "Penthouse interior" },
      { src: "/images/projects/5.山核桃私人大平层-全屋定制-新加坡/核山桃 (2).jpg", alt: "Penthouse wood paneling" },
      { src: "/images/projects/5.山核桃私人大平层-全屋定制-新加坡/核山桃 (3).jpg", alt: "Penthouse detail" },
    ],
    size: "medium",
    cols: 1,
  },
  {
    id: 6,
    name: "Private Residence — Teak",
    location: "Guangzhou, China",
    productType: "Wood Veneer Panel",
    products: "Teak veneer plywood",
    images: [
      { src: "/images/projects/6.柚木木饰面-私人住宅-全屋定制-广州/私人住宅全屋定制 (1).jpg", alt: "Residence teak paneling" },
      { src: "/images/projects/6.柚木木饰面-私人住宅-全屋定制-广州/私人住宅全屋定制 (2).jpg", alt: "Residence interior" },
      { src: "/images/projects/6.柚木木饰面-私人住宅-全屋定制-广州/私人住宅全屋定制 (3).jpg", alt: "Residence detail" },
    ],
    size: "tall",
    cols: 1,
  },
  {
    id: 7,
    name: "Private Residence — Thailand",
    location: "Thailand",
    productType: "Wood Veneer Panel",
    products: "Black Finish White Oak Tiger Grain Veneer plywood",
    images: [
      { src: "/images/projects/7.私人住宅全屋定制-电视柜背景墙衣柜酒柜/白橡虎斑 (1).jpg", alt: "TV cabinet paneling" },
      { src: "/images/projects/7.私人住宅全屋定制-电视柜背景墙衣柜酒柜/白橡虎斑 (2).jpg", alt: "Accent wall detail" },
      { src: "/images/projects/7.私人住宅全屋定制-电视柜背景墙衣柜酒柜/白橡虎斑 (3).jpg", alt: "Wardrobe paneling" },
      { src: "/images/projects/7.私人住宅全屋定制-电视柜背景墙衣柜酒柜/白橡虎斑 (5).jpg", alt: "Wine cabinet" },
      { src: "/images/projects/7.私人住宅全屋定制-电视柜背景墙衣柜酒柜/白橡虎斑 (6).jpg", alt: "Interior overview" },
    ],
    size: "medium",
    cols: 1,
  },
  {
    id: 8,
    name: "U.S. Private Villa — Accent Wall",
    location: "United States",
    productType: "3D Wood Panel",
    products: "Black Walnut Solid Wood Hammer Grain Carved Panel",
    images: [
      { src: "/images/projects/8.美国私人别墅全屋定制-背景墙/美国私人别墅全屋定制-背景墙 (1).jpg", alt: "Villa accent wall" },
      { src: "/images/projects/8.美国私人别墅全屋定制-背景墙/美国私人别墅全屋定制-背景墙 (2).jpg", alt: "Carved panel detail" },
      { src: "/images/projects/8.美国私人别墅全屋定制-背景墙/美国私人别墅全屋定制-背景墙 (3).jpg", alt: "3D panel finish" },
      { src: "/images/projects/8.美国私人别墅全屋定制-背景墙/美国私人别墅全屋定制-背景墙 (4).jpg", alt: "Living room paneling" },
      { src: "/images/projects/8.美国私人别墅全屋定制-背景墙/美国私人别墅全屋定制-背景墙 (5).jpg", alt: "Panel detail" },
    ],
    size: "short",
    cols: 2,
  },
  {
    id: 9,
    name: "Zurich House — Mexico",
    location: "Mexico",
    productType: "Wood Veneer Panel",
    products: "White Oak veneer plywood · Walnut wood veneer plywood",
    images: [
      { src: "/images/projects/9.墨西哥-苏黎世公寓/苏黎世公寓-t-unoauno arqaz arquitectura_3.jpg", alt: "Zurich house interior" },
      { src: "/images/projects/9.墨西哥-苏黎世公寓/苏黎世公寓-t-unoauno arqaz arquitectura_9.jpg", alt: "Paneling detail" },
      { src: "/images/projects/9.墨西哥-苏黎世公寓/苏黎世公寓-t-unoauno arqaz arquitectura_12.jpg", alt: "Walnut veneer wall" },
      { src: "/images/projects/9.墨西哥-苏黎世公寓/苏黎世公寓-t-unoauno arqaz arquitectura_18.jpg", alt: "Living area paneling" },
      { src: "/images/projects/9.墨西哥-苏黎世公寓/苏黎世公寓-t-unoauno arqaz arquitectura_23.jpg", alt: "Interior finish" },
    ],
    size: "tall",
    cols: 1,
  },
  {
    id: 10,
    name: "Israel 3D Carved Door Factory",
    location: "Israel",
    productType: "3D Wood Panel",
    products: "White Oak 3D Wood Panel · Red Oak 3D Wood Panel · Black Walnut 3D Wood Panel",
    images: [
      { src: "/images/projects/10.以色列-3D雕刻板-门厂客户/以色列-3d雕刻门厂.jpg", alt: "3D carved panel" },
    ],
    size: "square",
    cols: 1,
  },
  {
    id: 11,
    name: "Philippines Hotel Lobby — Wall Paneling",
    location: "Philippines",
    productType: "Wood Veneer Panel",
    products: "3.6m Dyed White Oak veneer plywood",
    images: [
      { src: "/images/projects/11.菲律宾-酒店大堂护墙板/13.染色白橡加长木饰面板3.6m.jpg", alt: "Hotel lobby paneling" },
    ],
    size: "tall",
    cols: 1,
  },
  {
    id: 12,
    name: "Amazon U.S. — Woodwork Client",
    location: "United States",
    productType: "Wood Veneer Panel",
    products: "920mm × 920mm Black Walnut veneer Basswood plywood",
    images: [
      { src: "/images/projects/12.美国亚马逊电商客户-黑胡桃椴木胶合板/美国亚马逊电商客户-黑胡桃椴木胶合板 (1).jpg", alt: "Walnut plywood product" },
      { src: "/images/projects/12.美国亚马逊电商客户-黑胡桃椴木胶合板/美国亚马逊电商客户-黑胡桃椴木胶合板 (2).jpg", alt: "Product detail" },
      { src: "/images/projects/12.美国亚马逊电商客户-黑胡桃椴木胶合板/美国亚马逊电商客户-黑胡桃椴木胶合板 (3).jpg", alt: "Walnut finish" },
      { src: "/images/projects/12.美国亚马逊电商客户-黑胡桃椴木胶合板/美国亚马逊电商客户-黑胡桃椴木胶合板 (4).jpg", alt: "Plywood surface" },
      { src: "/images/projects/12.美国亚马逊电商客户-黑胡桃椴木胶合板/美国亚马逊电商客户-黑胡桃椴木胶合板 (5).jpg", alt: "Product overview" },
    ],
    size: "medium",
    cols: 1,
  },
  {
    id: 13,
    name: "Apartment — Full Custom Package",
    location: "Dongguan, China",
    productType: "Wood Veneer Panel",
    products: "White Oak veneer plywood",
    images: [
      { src: "/images/projects/13.公寓全屋定制-护墙板衣柜电视柜/65.进屋就是满满的高级感！我爱白橡贴皮 (1).jpg", alt: "Apartment wall paneling" },
      { src: "/images/projects/13.公寓全屋定制-护墙板衣柜电视柜/65.进屋就是满满的高级感！我爱白橡贴皮 (2).jpg", alt: "Wardrobe detail" },
      { src: "/images/projects/13.公寓全屋定制-护墙板衣柜电视柜/65.进屋就是满满的高级感！我爱白橡贴皮 (3).jpg", alt: "White Oak interior" },
      { src: "/images/projects/13.公寓全屋定制-护墙板衣柜电视柜/65.进屋就是满满的高级感！我爱白橡贴皮 (4).jpg", alt: "Living area" },
      { src: "/images/projects/13.公寓全屋定制-护墙板衣柜电视柜/65.进屋就是满满的高级感！我爱白橡贴皮 (5).jpg", alt: "High-end finish" },
    ],
    size: "short",
    cols: 2,
  },
  {
    id: 14,
    name: "Blue Bottle Coffee — Future Harbor Store",
    location: "Japan",
    productType: "Wood Veneer Panel",
    products: "White Oak veneer plywood · Red Oak veneer plywood",
    images: [
      { src: "/images/projects/14.Blue Bottle咖啡港未来店-家具桌子椅子柜子/丨咖啡店丨咖啡港未来店东京科技与工艺结合的木制家具_5.jpg", alt: "Blue Bottle furniture" },
      { src: "/images/projects/14.Blue Bottle咖啡港未来店-家具桌子椅子柜子/丨咖啡店丨咖啡港未来店东京科技与工艺结合的木制家具_8.jpg", alt: "Blue Bottle table detail" },
      { src: "/images/projects/14.Blue Bottle咖啡港未来店-家具桌子椅子柜子/丨咖啡店丨咖啡港未来店东京科技与工艺结合的木制家具_10.jpg", alt: "Blue Bottle cabinet" },
      { src: "/images/projects/14.Blue Bottle咖啡港未来店-家具桌子椅子柜子/丨咖啡店丨咖啡港未来店东京科技与工艺结合的木制家具_11.jpg", alt: "Blue Bottle interior" },
      { src: "/images/projects/14.Blue Bottle咖啡港未来店-家具桌子椅子柜子/丨咖啡店丨咖啡港未来店东京科技与工艺结合的木制家具_12.jpg", alt: "Wood furniture detail" },
      { src: "/images/projects/14.Blue Bottle咖啡港未来店-家具桌子椅子柜子/丨咖啡店丨咖啡港未来店东京科技与工艺结合的木制家具_14.jpg", alt: "Blue Bottle store" },
      { src: "/images/projects/14.Blue Bottle咖啡港未来店-家具桌子椅子柜子/丨咖啡店丨咖啡港未来店东京科技与工艺结合的木制家具_15.jpg", alt: "Craftsmanship detail" },
    ],
    size: "tall",
    cols: 1,
  },
  // --- Projects 15-27 added 2026-06-02 ---
  {
    id: 15,
    name: "Leymarie Gourdon Apartment",
    location: "France",
    productType: "Wood Veneer Panel",
    products: "White Oak veneer plywood · Teak veneer plywood",
    images: [
      { src: "/images/projects/15.巴蒂尼奥勒斯美术馆Leymarie Gourdon-公寓-法国-白橡柚木/巴蒂尼奥勒斯美术馆_1.jpg", alt: "Leymarie Gourdon interior" },
      { src: "/images/projects/15.巴蒂尼奥勒斯美术馆Leymarie Gourdon-公寓-法国-白橡柚木/巴蒂尼奥勒斯美术馆_2.jpg", alt: "Leymarie Gourdon panel detail" },
      { src: "/images/projects/15.巴蒂尼奥勒斯美术馆Leymarie Gourdon-公寓-法国-白橡柚木/巴蒂尼奥勒斯美术馆_3.jpg", alt: "Teak veneer application" },
      { src: "/images/projects/15.巴蒂尼奥勒斯美术馆Leymarie Gourdon-公寓-法国-白橡柚木/巴蒂尼奥勒斯美术馆_4.jpg", alt: "White oak panel detail" },
      { src: "/images/projects/15.巴蒂尼奥勒斯美术馆Leymarie Gourdon-公寓-法国-白橡柚木/巴蒂尼奥勒斯美术馆_8.jpg", alt: "Apartment interior view" },
      { src: "/images/projects/15.巴蒂尼奥勒斯美术馆Leymarie Gourdon-公寓-法国-白橡柚木/巴蒂尼奥勒斯美术馆_11.jpg", alt: "Wall paneling detail" },
      { src: "/images/projects/15.巴蒂尼奥勒斯美术馆Leymarie Gourdon-公寓-法国-白橡柚木/巴蒂尼奥勒斯美术馆_12.jpg", alt: "Wood finish detail" },
      { src: "/images/projects/15.巴蒂尼奥勒斯美术馆Leymarie Gourdon-公寓-法国-白橡柚木/巴蒂尼奥勒斯美术馆_20.jpg", alt: "Interior wide shot" },
    ],
    size: "medium",
    cols: 1,
  },
  {
    id: 16,
    name: "PDG Real Estate HQ",
    location: "Melbourne, Australia",
    productType: "Wood Veneer Panel",
    products: "White Melamine Board · Smoked Oak veneer plywood · Walnut veneer plywood",
    images: [
      { src: "/images/projects/16.PDG房地产开发商的总部带来了酒店的感觉-办公室-墨尔本-三聚氰胺板/豪华材料为PDG房地产开发商的总部带来了酒店的感觉_3.jpg", alt: "PDG HQ reception" },
      { src: "/images/projects/16.PDG房地产开发商的总部带来了酒店的感觉-办公室-墨尔本-三聚氰胺板/豪华材料为PDG房地产开发商的总部带来了酒店的感觉_4.jpg", alt: "Office interior detail" },
      { src: "/images/projects/16.PDG房地产开发商的总部带来了酒店的感觉-办公室-墨尔本-三聚氰胺板/豪华材料为PDG房地产开发商的总部带来了酒店的感觉_13.jpg", alt: "Smoked oak paneling" },
      { src: "/images/projects/16.PDG房地产开发商的总部带来了酒店的感觉-办公室-墨尔本-三聚氰胺板/豪华材料为PDG房地产开发商的总部带来了酒店的感觉_16.jpg", alt: "Walnut veneer wall" },
      { src: "/images/projects/16.PDG房地产开发商的总部带来了酒店的感觉-办公室-墨尔本-三聚氰胺板/豪华材料为PDG房地产开发商的总部带来了酒店的感觉_29.jpg", alt: "Meeting room" },
      { src: "/images/projects/16.PDG房地产开发商的总部带来了酒店的感觉-办公室-墨尔本-三聚氰胺板/豪华材料为PDG房地产开发商的总部带来了酒店的感觉_31.jpg", alt: "Office corridor" },
      { src: "/images/projects/16.PDG房地产开发商的总部带来了酒店的感觉-办公室-墨尔本-三聚氰胺板/豪华材料为PDG房地产开发商的总部带来了酒店的感觉_32.jpg", alt: "Panel detail" },
      { src: "/images/projects/16.PDG房地产开发商的总部带来了酒店的感觉-办公室-墨尔本-三聚氰胺板/豪华材料为PDG房地产开发商的总部带来了酒店的感觉_33.jpg", alt: "Executive office" },
      { src: "/images/projects/16.PDG房地产开发商的总部带来了酒店的感觉-办公室-墨尔本-三聚氰胺板/豪华材料为PDG房地产开发商的总部带来了酒店的感觉_36.jpg", alt: "Interior finish" },
    ],
    size: "short",
    cols: 2,
  },
  {
    id: 17,
    name: "Private Villa Full-House Custom",
    location: "Indonesia",
    productType: "Wood Veneer Panel",
    products: "Water-based paint walnut veneer plywood",
    images: [
      { src: "/images/projects/17.私人别墅-全屋定制-墙板、柜门/私人别墅-全屋定制-墙板、柜门 (1).jpg", alt: "Villa interior" },
      { src: "/images/projects/17.私人别墅-全屋定制-墙板、柜门/私人别墅-全屋定制-墙板、柜门 (2).jpg", alt: "Walnut wall paneling" },
      { src: "/images/projects/17.私人别墅-全屋定制-墙板、柜门/私人别墅-全屋定制-墙板、柜门 (3).jpg", alt: "Cabinet door detail" },
      { src: "/images/projects/17.私人别墅-全屋定制-墙板、柜门/私人别墅-全屋定制-墙板、柜门 (4).jpg", alt: "Full house application" },
      { src: "/images/projects/17.私人别墅-全屋定制-墙板、柜门/私人别墅-全屋定制-墙板、柜门 (5).jpg", alt: "Interior finish" },
    ],
    size: "medium",
    cols: 1,
  },
  {
    id: 18,
    name: "Mexico Wood Veneer Trader",
    location: "Mexico",
    productType: "Natural Wood Veneer",
    products: "C/C White Oak Wood Veneer",
    images: [
      { src: "/images/projects/18.白橡天然木皮-墨西哥经销商/18.白橡天然木皮-墨西哥经销商 (1).jpg", alt: "Veneer sample display" },
      { src: "/images/projects/18.白橡天然木皮-墨西哥经销商/18.白橡天然木皮-墨西哥经销商 (2).jpg", alt: "White Oak veneer collection" },
      { src: "/images/projects/18.白橡天然木皮-墨西哥经销商/18.白橡天然木皮-墨西哥经销商 (3).jpg", alt: "Veneer pattern detail" },
      { src: "/images/projects/18.白橡天然木皮-墨西哥经销商/18.白橡天然木皮-墨西哥经销商 (4).jpg", alt: "Trader showroom" },
      { src: "/images/projects/18.白橡天然木皮-墨西哥经销商/18.白橡天然木皮-墨西哥经销商 (5).jpg", alt: "Wood veneer stock" },
    ],
    size: "square",
    cols: 1,
  },
  {
    id: 19,
    name: "Dubai Tourism Hotel Project",
    location: "Dubai, UAE",
    productType: "Engineered Wood Veneer",
    products: "Engineered Wood Veneer",
    images: [
      { src: "/images/projects/19.中东迪拜旅游酒店项目/科技木皮-迪拜-酒店项目 (1).jpg", alt: "Dubai hotel lobby" },
      { src: "/images/projects/19.中东迪拜旅游酒店项目/科技木皮-迪拜-酒店项目 (2).jpg", alt: "Hotel corridor" },
      { src: "/images/projects/19.中东迪拜旅游酒店项目/科技木皮-迪拜-酒店项目 (3).jpg", alt: "Engineered veneer panel" },
      { src: "/images/projects/19.中东迪拜旅游酒店项目/科技木皮-迪拜-酒店项目 (4).jpg", alt: "Guest room wall paneling" },
      { src: "/images/projects/19.中东迪拜旅游酒店项目/科技木皮-迪拜-酒店项目 (5).jpg", alt: "Hotel interior detail" },
      { src: "/images/projects/19.中东迪拜旅游酒店项目/科技木皮-迪拜-酒店项目 (6).jpg", alt: "Ceiling application" },
      { src: "/images/projects/19.中东迪拜旅游酒店项目/科技木皮-迪拜-酒店项目 (7).jpg", alt: "Hotel suite interior" },
      { src: "/images/projects/19.中东迪拜旅游酒店项目/科技木皮-迪拜-酒店项目 (8).jpg", alt: "Bathroom wall finish" },
    ],
    size: "medium",
    cols: 1,
  },
  {
    id: 20,
    name: "Singapore Showroom Display",
    location: "Singapore",
    productType: "Wood Veneer Panel",
    products: "300x300mm Engineered Wood Veneer Panel",
    images: [
      { src: "/images/projects/20.新加坡全屋定制公司展厅样板.png/新加坡全屋定制公司展厅样板 (1).jpg", alt: "Singapore showroom display" },
      { src: "/images/projects/20.新加坡全屋定制公司展厅样板.png/新加坡全屋定制公司展厅样板 (2).jpg", alt: "Showroom sample wall" },
    ],
    size: "tall",
    cols: 1,
  },
  {
    id: 21,
    name: "Middle East Commercial Space",
    location: "Middle East",
    productType: "Wood Veneer Panel",
    products: "Walnut Wood Veneer Panel · Teak Wood Veneer Panel",
    images: [
      { src: "/images/projects/21.黑胡桃-柚木木饰面板-中东-商业空间-礼堂/商业室内设计案例_3.jpg", alt: "Commercial auditorium" },
      { src: "/images/projects/21.黑胡桃-柚木木饰面板-中东-商业空间-礼堂/商业室内设计案例_6.jpg", alt: "Walnut panel installation" },
      { src: "/images/projects/21.黑胡桃-柚木木饰面板-中东-商业空间-礼堂/商业室内设计案例_10.jpg", alt: "Teak veneer ceiling" },
      { src: "/images/projects/21.黑胡桃-柚木木饰面板-中东-商业空间-礼堂/商业室内设计案例_12.jpg", alt: "Auditorium interior" },
      { src: "/images/projects/21.黑胡桃-柚木木饰面板-中东-商业空间-礼堂/商业室内设计案例_17.jpg", alt: "Commercial wall paneling" },
      { src: "/images/projects/21.黑胡桃-柚木木饰面板-中东-商业空间-礼堂/商业室内设计案例_18.jpg", alt: "Interior detail" },
      { src: "/images/projects/21.黑胡桃-柚木木饰面板-中东-商业空间-礼堂/商业室内设计案例_23.jpg", alt: "Venue finish" },
      { src: "/images/projects/21.黑胡桃-柚木木饰面板-中东-商业空间-礼堂/商业室内设计案例_28.jpg", alt: "Space wide view" },
    ],
    size: "medium",
    cols: 1,
  },
  {
    id: 22,
    name: "USA 3D Carved Panel Restaurant",
    location: "USA",
    productType: "3D Wood Panel",
    products: "3D Red Oak Solid Wood Panel · 3D White Oak Solid Wood Panel",
    images: [
      { src: "/images/projects/22.美国3D雕刻板餐厅-墙板/美国3D雕刻板餐厅-墙板.jpg", alt: "3D carved wall panel" },
      { src: "/images/projects/22.美国3D雕刻板餐厅-墙板/美国3D雕刻板餐厅-墙板 (1).jpg", alt: "Restaurant 3D paneling" },
      { src: "/images/projects/22.美国3D雕刻板餐厅-墙板/美国3D雕刻板餐厅-墙板 (2).jpg", alt: "Red oak carved detail" },
      { src: "/images/projects/22.美国3D雕刻板餐厅-墙板/美国3D雕刻板餐厅-墙板 (3).jpg", alt: "White oak 3D finish" },
      { src: "/images/projects/22.美国3D雕刻板餐厅-墙板/美国3D雕刻板餐厅-墙板 (4).jpg", alt: "Restaurant interior" },
      { src: "/images/projects/22.美国3D雕刻板餐厅-墙板/美国3D雕刻板餐厅-墙板 (5).jpg", alt: "3D texture detail" },
    ],
    size: "medium",
    cols: 1,
  },
  {
    id: 23,
    name: "Kuwait Furniture Factory Edge Banding",
    location: "Kuwait",
    productType: "Wood Veneer Edge Banding",
    products: "Red Oak · White Ash · White Oak · Walnut · Elm · Sapelli Wood Veneer Edge Banding",
    images: [
      { src: "/images/projects/23.科威特本土家具厂家 实木木皮封边条.png/科威特本土家具厂家 实木木皮封边条 (1).jpg", alt: "Edge banding collection" },
      { src: "/images/projects/23.科威特本土家具厂家 实木木皮封边条.png/科威特本土家具厂家 实木木皮封边条 (2).jpg", alt: "Walnut edge banding" },
      { src: "/images/projects/23.科威特本土家具厂家 实木木皮封边条.png/科威特本土家具厂家 实木木皮封边条 (3).jpg", alt: "Oak edge banding" },
      { src: "/images/projects/23.科威特本土家具厂家 实木木皮封边条.png/科威特本土家具厂家 实木木皮封边条 (4).jpg", alt: "Factory stock display" },
      { src: "/images/projects/23.科威特本土家具厂家 实木木皮封边条.png/科威特本土家具厂家 实木木皮封边条 (5).jpg", alt: "Species variety" },
      { src: "/images/projects/23.科威特本土家具厂家 实木木皮封边条.png/科威特本土家具厂家 实木木皮封边条 (6).jpg", alt: "Edge banding detail" },
      { src: "/images/projects/23.科威特本土家具厂家 实木木皮封边条.png/科威特本土家具厂家 实木木皮封边条 (7).jpg", alt: "Factory showroom" },
    ],
    size: "square",
    cols: 1,
  },
  {
    id: 24,
    name: "Spain Social Space Melamine",
    location: "Spain",
    productType: "Melamine Board",
    products: "Wood Grain Melamine Board",
    images: [
      { src: "/images/projects/24.西班牙社交空间/现代社交空间设计_6.jpg", alt: "Spain social space" },
      { src: "/images/projects/24.西班牙社交空间/现代社交空间设计_7.jpg", alt: "Melamine wall finish" },
      { src: "/images/projects/24.西班牙社交空间/现代社交空间设计_9.jpg", alt: "Interior detail" },
      { src: "/images/projects/24.西班牙社交空间/现代社交空间设计_11.jpg", alt: "Wood grain melamine" },
      { src: "/images/projects/24.西班牙社交空间/现代社交空间设计_12.jpg", alt: "Social space wide" },
      { src: "/images/projects/24.西班牙社交空间/现代社交空间设计_13.jpg", alt: "Ceiling application" },
      { src: "/images/projects/24.西班牙社交空间/现代社交空间设计_15.jpg", alt: "Space finish" },
    ],
    size: "medium",
    cols: 1,
  },
  {
    id: 25,
    name: "Israel 3D Panel Distributor Showroom",
    location: "Israel",
    productType: "3D Wood Panel",
    products: "3D Wood Panel",
    images: [
      { src: "/images/projects/25.3d雕刻板以色列-板材经销商-展厅样板.png/以色列-板材经销商-展厅样板 (1).jpg", alt: "Israel 3D panel showroom" },
      { src: "/images/projects/25.3d雕刻板以色列-板材经销商-展厅样板.png/以色列-板材经销商-展厅样板 (2).jpg", alt: "3D panel wall display" },
      { src: "/images/projects/25.3d雕刻板以色列-板材经销商-展厅样板.png/以色列-板材经销商-展厅样板 (3).jpg", alt: "Panel detail" },
      { src: "/images/projects/25.3d雕刻板以色列-板材经销商-展厅样板.png/以色列-板材经销商-展厅样板 (4).jpg", alt: "Showroom wide shot" },
      { src: "/images/projects/25.3d雕刻板以色列-板材经销商-展厅样板.png/以色列-板材经销商-展厅样板 (5).jpg", alt: "Texture close-up" },
      { src: "/images/projects/25.3d雕刻板以色列-板材经销商-展厅样板.png/以色列-板材经销商-展厅样板 (6).jpg", alt: "Panel collection" },
      { src: "/images/projects/25.3d雕刻板以色列-板材经销商-展厅样板.png/以色列-板材经销商-展厅样板 (7).jpg", alt: "Display wall" },
    ],
    size: "medium",
    cols: 1,
  },
  {
    id: 26,
    name: "India Private Villa Project",
    location: "India",
    productType: "Wood Veneer Panel",
    products: "Walnut Wood Veneer Panel · Red Oak Wood Veneer Panel · Tinted Wenge Veneer Plywood",
    images: [
      { src: "/images/projects/26.印度私人别墅全屋定制工程/印度私人住宅棵树环绕的温馨家园_7.jpg", alt: "India villa interior" },
      { src: "/images/projects/26.印度私人别墅全屋定制工程/印度私人住宅棵树环绕的温馨家园_10.jpg", alt: "Walnut wall paneling" },
      { src: "/images/projects/26.印度私人别墅全屋定制工程/印度私人住宅棵树环绕的温馨家园_34.jpg", alt: "Villa wide shot" },
      { src: "/images/projects/26.印度私人别墅全屋定制工程/印度私人住宅棵树环绕的温馨家园_38.jpg", alt: "Red oak application" },
      { src: "/images/projects/26.印度私人别墅全屋定制工程/印度私人住宅棵树环绕的温馨家园_43.jpg", alt: "Tinted wenge detail" },
    ],
    size: "medium",
    cols: 1,
  },
  {
    id: 27,
    name: "Ghost Gallery",
    location: "Thailand",
    productType: "Supporting Boards",
    products: "Full Birch Plywood",
    images: [
      { src: "/images/projects/27.幽灵画廊-泰国-桦木胶合板/桦木胶合板-泰国-画廊 (1).jpg", alt: "Ghost gallery interior" },
      { src: "/images/projects/27.幽灵画廊-泰国-桦木胶合板/桦木胶合板-泰国-画廊 (2).jpg", alt: "Birch plywood wall" },
      { src: "/images/projects/27.幽灵画廊-泰国-桦木胶合板/桦木胶合板-泰国-画廊 (3).jpg", alt: "Gallery exhibition space" },
      { src: "/images/projects/27.幽灵画廊-泰国-桦木胶合板/桦木胶合板-泰国-画廊 (4).jpg", alt: "Minimal interior" },
      { src: "/images/projects/27.幽灵画廊-泰国-桦木胶合板/桦木胶合板-泰国-画廊 (5).jpg", alt: "Birch finish detail" },
      { src: "/images/projects/27.幽灵画廊-泰国-桦木胶合板/桦木胶合板-泰国-画廊 (6).jpg", alt: "Gallery wide view" },
    ],
    size: "medium",
    cols: 1,
  },
];

const categories = [
  { id: "all", label: "All" },
  { id: "Wood Veneer Panel", label: "Wood Veneer Panel" },
  { id: "HPL", label: "HPL" },
  { id: "3D Wood Panel", label: "3D Wood Panel" },
  { id: "Natural Wood Veneer", label: "Natural Wood Veneer" },
  { id: "Engineered Wood Veneer", label: "Engineered Wood Veneer" },
  { id: "Melamine Board", label: "Melamine Board" },
  { id: "Wood Veneer Edge Banding", label: "Edge Banding" },
  { id: "Supporting Boards", label: "Supporting Boards" },
];

const aspectRatios = {
  short: "aspect-[4/3]",
  square: "aspect-square",
  medium: "aspect-[3/4]",
  tall: "aspect-[2/3]",
};

const productTypeColors: Record<ProductType, string> = {
  "Wood Veneer Panel": "#0F6B3A",
  HPL: "#8B5E3C",
  "3D Wood Panel": "#1F2621",
  "Natural Wood Veneer": "#4A6741",
  "Engineered Wood Veneer": "#5C4033",
  "Melamine Board": "#6B7280",
  "Wood Veneer Edge Banding": "#9B7E52",
  "Supporting Boards": "#4B5563",
};

// ============================================
// Project Card
// ============================================
function ProjectCard({
  project,
  onHover,
  onLeave,
  onClick,
  isHovered,
}: {
  project: Project;
  onHover: (id: number) => void;
  onLeave: () => void;
  onClick: (project: Project) => void;
  isHovered: boolean;
}) {
  const mainImage = project.images[0];
  const spanClass = project.cols === 2 ? "md:col-span-2" : "";
  const aspectClass = aspectRatios[project.size];

  return (
    <div
      className={`group relative break-inside-avoid overflow-hidden cursor-pointer bg-[#E9E0D2] rounded-xl shadow-sm hover:shadow-2xl transition-all duration-300 hover:scale-[1.015] ${spanClass}`}
      onMouseEnter={() => onHover(project.id)}
      onMouseLeave={onLeave}
      onClick={() => onClick(project)}
    >
      <div className={`relative ${aspectClass}`}>
        <Image
          src={mainImage.src}
          alt={mainImage.alt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          unoptimized
        />
      </div>

      {/* Bottom info bar */}
      <div className="absolute bottom-0 left-0 right-0 px-4 py-3 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
        <div className="flex items-center justify-between">
          <div className="min-w-0 flex-1 pr-3">
            <p className="text-white text-xs font-medium truncate">{project.name}</p>
            <p className="text-white/60 text-[10px] truncate">{project.location}</p>
          </div>
          <span
            className="shrink-0 px-2 py-0.5 rounded text-[9px] font-semibold text-white"
            style={{ backgroundColor: productTypeColors[project.productType] + "cc" }}
          >
            {project.productType}
          </span>
        </div>
      </div>

      {/* Hover overlay */}
      <div
        className={`absolute inset-0 flex flex-col justify-center p-6 transition-all duration-400 ${
          isHovered
            ? "opacity-100 bg-gradient-to-br from-[#0F6B3A]/90 via-[#124B34]/85 to-[#0F6B3A]/90"
            : "opacity-0"
        }`}
      >
        <div className="space-y-3">
          <div>
            <p className="text-white/60 text-[10px] uppercase tracking-widest mb-0.5">Project</p>
            <h3 className="text-white font-bold text-base leading-tight">{project.name}</h3>
          </div>

          <div className="w-8 h-0.5 bg-white/30 rounded-full" />

          <div className="space-y-1.5">
            <p className="text-white/60 text-[10px]">
              <span className="uppercase tracking-wider">Location</span>
              <br />
              <span className="text-white font-medium text-xs">{project.location}</span>
            </p>
            <p className="text-white/60 text-[10px]">
              <span className="uppercase tracking-wider">Product</span>
              <br />
              <span className="text-white font-medium text-xs">{project.productType}</span>
            </p>
            <p className="text-white/60 text-[10px]">
              <span className="uppercase tracking-wider">Materials</span>
              <br />
              <span className="text-white/90 font-medium text-[10px] leading-relaxed">{project.products}</span>
            </p>
          </div>

          {project.images.length > 1 && (
            <div className="pt-1 flex items-center gap-2">
              <div className="flex items-center gap-1">
                {project.images.slice(0, Math.min(project.images.length, 4)).map((img, i) => (
                  <div key={i} className="w-5 h-5 rounded-sm border border-white/30 overflow-hidden">
                    <Image
                      src={img.src}
                      alt=""
                      width={20}
                      height={20}
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                ))}
                {project.images.length > 4 && (
                  <span className="text-white/50 text-[10px]">+{project.images.length - 4}</span>
                )}
              </div>
            </div>
          )}
        </div>

        <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between">
          <span className="text-white/40 text-[9px] tracking-widest uppercase">View Details</span>
          <svg className="w-4 h-4 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

// ============================================
// Project Modal
// ============================================
function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);

  // Reset index when project changes
  useEffect(() => {
    setCurrentIndex(0);
    setIsZoomed(false);
  }, [project.id]);

  useEffect(() => {
    requestAnimationFrame(() => setIsVisible(true));
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      onClose();
      setIsZoomed(false);
    }, 300);
  };

  const handlePrev = () => {
    setCurrentIndex((i) => (i - 1 + project.images.length) % project.images.length);
  };

  const handleNext = () => {
    setCurrentIndex((i) => (i + 1) % project.images.length);
  };

  const currentImage = project.images[currentIndex] ?? project.images[0];

  // ==========================================
  // MODE 1: Fullscreen Lightbox (zoom mode)
  // ==========================================
  if (isZoomed) {
    return (
      <div
        className={`fixed inset-0 z-[60] flex items-center justify-center bg-black transition-all duration-300 ${
          isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsZoomed(false)}
      >
        {/* Zoomed image — full viewport */}
        <div className="relative w-full h-full">
          <Image
            src={currentImage.src}
            alt={currentImage.alt}
            fill
            className="object-contain"
            sizes="100vw"
            unoptimized
            quality={100}
            priority
          />
        </div>

        {/* Top bar */}
        <div className="absolute top-0 left-0 right-0 flex items-center justify-between p-4 bg-gradient-to-b from-black/60 to-transparent">
          <div className="flex items-center gap-3">
            <button
              className="text-white/80 hover:text-white transition-colors p-2 bg-white/10 rounded-full backdrop-blur-sm"
              onClick={(e) => { e.stopPropagation(); setIsZoomed(false); }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <span className="text-white text-sm font-medium">{currentImage.alt}</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-white/60 text-xs">
              {currentIndex + 1} / {project.images.length}
            </span>
            <button
              className="text-white/80 hover:text-white transition-colors p-2 bg-white/10 rounded-full backdrop-blur-sm"
              onClick={(e) => { e.stopPropagation(); setIsZoomed(false); }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Prev/Next arrows */}
        {project.images.length > 1 && (
          <>
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-all p-3 bg-white/10 rounded-full backdrop-blur-sm hover:bg-white/20"
              onClick={(e) => { e.stopPropagation(); handlePrev(); }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-all p-3 bg-white/10 rounded-full backdrop-blur-sm hover:bg-white/20"
              onClick={(e) => { e.stopPropagation(); handleNext(); }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}

        {/* Thumbnail strip */}
        {project.images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 max-w-full px-4 overflow-x-auto scrollbar-hide">
            {project.images.map((img, i) => (
              <button
                key={i}
                className={`relative w-14 h-10 rounded overflow-hidden border-2 transition-all flex-shrink-0 ${
                  i === currentIndex
                    ? "border-white scale-110 shadow-lg"
                    : "border-white/30 opacity-50 hover:opacity-100"
                }`}
                onClick={(e) => { e.stopPropagation(); setCurrentIndex(i); }}
              >
                <Image
                  src={img.src}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="56px"
                  unoptimized
                />
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }

  // ==========================================
  // MODE 2: Split View (default)
  // ==========================================
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ${
        isVisible ? "bg-black/80 backdrop-blur-sm" : "bg-transparent pointer-events-none"
      }`}
      onClick={handleClose}
    >
      {/* Modal Panel */}
      <div
        className={`relative w-full max-w-6xl bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col lg:flex-row transition-all duration-300 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
        }`}
        onClick={(e) => e.stopPropagation()}
        style={{ maxHeight: "90vh" }}
      >
        {/* Close */}
        <button
          className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors p-2 z-20 bg-black/30 rounded-full backdrop-blur-sm"
          onClick={handleClose}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Image Section — click to zoom */}
        <div className="relative lg:w-3/5 bg-black flex-shrink-0 group">
          <div
            className="relative w-full cursor-zoom-in"
            style={{ height: "50vh", maxHeight: "500px" }}
            onClick={() => setIsZoomed(true)}
          >
            <Image
              src={currentImage.src}
              alt={currentImage.alt}
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 60vw"
              unoptimized
              quality={90}
              priority
            />
          </div>
          {/* Zoom hint */}
          <div className="absolute bottom-3 right-3 transition-opacity duration-200 group-hover:opacity-100 opacity-0">
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-black/50 rounded-full text-white/80 text-[10px] backdrop-blur-sm">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
              </svg>
              Click to enlarge
            </div>
          </div>

          {/* Navigation arrows */}
          {project.images.length > 1 && (
            <>
              <button
                className="absolute left-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-all p-2 bg-black/30 rounded-full backdrop-blur-sm hover:bg-black/50"
                onClick={(e) => { e.stopPropagation(); handlePrev(); }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-all p-2 bg-black/30 rounded-full backdrop-blur-sm hover:bg-black/50"
                onClick={(e) => { e.stopPropagation(); handleNext(); }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {/* Top badges */}
          <div className="absolute top-3 left-3 flex items-center gap-2">
            <span
              className="px-3 py-1 rounded-full text-white text-[11px] font-semibold backdrop-blur-sm"
              style={{ backgroundColor: productTypeColors[project.productType] + "dd" }}
            >
              {project.productType}
            </span>
            {project.images.length > 1 && (
              <span className="px-2 py-1 rounded-full bg-black/40 text-white text-[10px] backdrop-blur-sm">
                {currentIndex + 1} / {project.images.length}
              </span>
            )}
          </div>

          {/* Thumbnail strip */}
          {project.images.length > 1 && (
            <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2">
              {project.images.map((img, i) => (
                <button
                  key={i}
                  className={`relative w-12 h-8 rounded overflow-hidden border-2 transition-all flex-shrink-0 ${
                    i === currentIndex
                      ? "border-white scale-105 shadow-lg"
                      : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                  onClick={(e) => { e.stopPropagation(); setCurrentIndex(i); }}
                >
                  <Image
                    src={img.src}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="48px"
                    unoptimized
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Details Section */}
        <div className="lg:w-2/5 flex flex-col overflow-y-auto">
          <div className="p-6 lg:p-8 flex-1">
            {/* Header */}
            <div className="mb-6">
              <p className="text-[#0F6B3A] text-xs font-semibold uppercase tracking-widest mb-2">
                Project #{String(project.id).padStart(3, "0")}
              </p>
              <h2 className="text-xl lg:text-2xl font-bold text-[#1F2621] mb-1 leading-tight">
                {project.name}
              </h2>
              <div className="flex items-center gap-1.5 mt-1.5">
                <svg className="w-3.5 h-3.5 text-[#6b7280]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-[#6b7280] text-sm">{project.location}</p>
              </div>
            </div>

            {/* Info Grid */}
            <div className="bg-[#F7F3EC] rounded-xl p-5 mb-6 space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#0F6B3A]/10 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-[#0F6B3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <div>
                  <p className="text-[#6b7280] text-[11px] uppercase tracking-widest mb-0.5">Product Type</p>
                  <p className="text-[#1F2621] text-sm font-medium">{project.productType}</p>
                </div>
              </div>
              <div className="w-full h-px bg-[#D4C9BC]/50" />
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#0F6B3A]/10 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-[#0F6B3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7c0-2-1-3-3-3H7C5 4 4 5 4 7z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[#6b7280] text-[11px] uppercase tracking-widest mb-0.5">Materials Used</p>
                  <p className="text-[#1F2621] text-sm font-medium leading-relaxed">{project.products}</p>
                </div>
              </div>
              <div className="w-full h-px bg-[#D4C9BC]/50" />
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#0F6B3A]/10 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-[#0F6B3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[#6b7280] text-[11px] uppercase tracking-widest mb-0.5">Location</p>
                  <p className="text-[#1F2621] text-sm font-medium">{project.location}</p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#0F6B3A] text-white rounded-xl font-medium hover:bg-[#124B34] transition-all duration-200 text-sm shadow-lg shadow-[#0F6B3A]/20 hover:shadow-xl hover:shadow-[#0F6B3A]/30 hover:-translate-y-0.5"
                onClick={handleClose}
              >
                <span>Request Similar Materials</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <button
                onClick={handleClose}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-gray-200 text-[#6b7280] rounded-xl font-medium hover:bg-gray-50 transition-all duration-200 text-sm"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================
// Main Page
// ============================================
export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const [galleryKey, setGalleryKey] = useState(0);

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.productType === activeCategory);

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setGalleryKey((k) => k + 1);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden py-16 lg:py-20 bg-[#F7F3EC]">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-8 left-[10%] w-px h-32 bg-[#0F6B3A]" />
          <div className="absolute top-8 left-[25%] w-px h-20 bg-[#0F6B3A]" />
          <div className="absolute top-8 right-[15%] w-px h-24 bg-[#0F6B3A]" />
          <div className="absolute bottom-8 left-[35%] w-px h-16 bg-[#0F6B3A]" />
        </div>
        <div className="container mx-auto px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#0F6B3A]/10 rounded-full mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-[#0F6B3A]" />
            <span className="text-[#0F6B3A] text-xs font-semibold tracking-widest uppercase">Global Projects</span>
          </div>
          <h1 className="text-3xl lg:text-5xl font-bold text-[#1F2621] mb-4 leading-tight">
              Project Gallery
            </h1>
          <p className="text-[#6b7280] text-sm max-w-lg mx-auto">
            {projects.length} completed projects across {new Set(projects.map((p) => p.location.split(",").pop()?.trim() || p.location)).size} countries, showcasing our wood material expertise worldwide.
            </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="sticky top-16 z-30 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-2 py-3 overflow-x-auto scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`px-4 py-1.5 text-xs font-medium whitespace-nowrap rounded-full border transition-all duration-200 ${
                  activeCategory === cat.id
                    ? "bg-[#0F6B3A] text-white border-[#0F6B3A]"
                    : "text-[#6b7280] border-gray-200 hover:border-[#0F6B3A] hover:text-[#0F6B3A]"
                }`}
              >
                {cat.label}
              </button>
            ))}
            <div className="ml-auto shrink-0 text-[#6b7280] text-xs">
              {filteredProjects.length} project{filteredProjects.length !== 1 ? "s" : ""}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-6 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div key={galleryKey} className="columns-2 md:columns-2 lg:columns-3 gap-4 space-y-4 animate-fadeIn">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onHover={setHoveredProject}
                onLeave={() => setHoveredProject(null)}
                onClick={(p) => setSelectedProject(p)}
                isHovered={hoveredProject === project.id}
              />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-24">
              <svg className="w-16 h-16 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-[#6b7280]">No projects found in this category</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-[#F7F3EC]">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-[#1F2621] mb-3">
            Start Your Next Project
                  </h2>
          <p className="text-[#6b7280] mb-8 text-sm max-w-md mx-auto">
            From concept to completion, our team delivers premium wood materials tailored to your specifications.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#0F6B3A] text-white rounded-xl font-medium hover:bg-[#124B34] transition-colors text-sm shadow-lg shadow-[#0F6B3A]/20"
                >
              <span>Request Material Advice</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/products"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-[#D4C9BC] text-[#1F2621] rounded-xl font-medium hover:border-[#0F6B3A] hover:text-[#0F6B3A] transition-colors text-sm"
              >
                <span>View Materials</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}
