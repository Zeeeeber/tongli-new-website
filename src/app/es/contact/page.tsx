import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Tongli Timber in Spanish | Wood Veneer & Panels",
  description:
    "Contact Tongli Timber for wood veneer, decorative panels, melamine board and custom panel solutions.",
  robots: {
    index: false,
    follow: false,
  },
};

const WHATSAPP_LINK =
  "https://wa.me/8615817587053?text=Hello%20Tongli%20Timber%2C%20I%20would%20like%20to%20ask%20about%20your%20wood%20veneer%20and%20decorative%20panel%20products.";
const EMAIL_LINK =
  "mailto:tonglitimber@tongli-dg.com?subject=Product%20Inquiry%20from%20Tongli%20Website";
const PHONE_LINK = "tel:+8615817587053";

const styles = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#f7f4ec",
    padding: "48px 20px",
    fontFamily:
      'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    color: "#1f2a23",
  },
  wrapper: {
    maxWidth: "720px",
    margin: "0 auto",
  },
  badge: {
    display: "inline-block",
    fontSize: "12px",
    letterSpacing: "1.4px",
    textTransform: "uppercase" as const,
    color: "#3b6b4a",
    backgroundColor: "#e6efe6",
    padding: "6px 12px",
    borderRadius: "999px",
    marginBottom: "16px",
  },
  title: {
    fontSize: "34px",
    lineHeight: "1.2",
    color: "#1d4634",
    margin: "0 0 8px 0",
    fontWeight: 700,
  },
  subtitle: {
    fontSize: "15px",
    color: "#5a6a60",
    margin: "0 0 28px 0",
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    padding: "28px",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.04)",
    border: "1px solid #e7e3d6",
  },
  paragraph: {
    fontSize: "16px",
    lineHeight: 1.65,
    color: "#2a3a30",
    margin: "0 0 20px 0",
  },
  contactRow: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "4px",
    padding: "14px 0",
    borderBottom: "1px solid #eceadf",
  },
  contactLabel: {
    fontSize: "13px",
    color: "#6b7770",
    textTransform: "uppercase" as const,
    letterSpacing: "0.8px",
  },
  contactValue: {
    fontSize: "17px",
    color: "#1f2a23",
    fontWeight: 500,
  },
  buttonGroup: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "12px",
    marginTop: "24px",
  },
  primaryButton: {
    display: "inline-block",
    textAlign: "center" as const,
    backgroundColor: "#1d4634",
    color: "#ffffff",
    textDecoration: "none",
    padding: "14px 20px",
    borderRadius: "8px",
    fontSize: "15px",
    fontWeight: 600,
  },
  whatsappButton: {
    display: "inline-block",
    textAlign: "center" as const,
    backgroundColor: "#25d366",
    color: "#ffffff",
    textDecoration: "none",
    padding: "14px 20px",
    borderRadius: "8px",
    fontSize: "15px",
    fontWeight: 600,
  },
  phoneButton: {
    display: "inline-block",
    textAlign: "center" as const,
    backgroundColor: "#ffffff",
    color: "#1d4634",
    textDecoration: "none",
    padding: "14px 20px",
    borderRadius: "8px",
    fontSize: "15px",
    fontWeight: 600,
    border: "1px solid #1d4634",
  },
  backLink: {
    display: "inline-block",
    marginTop: "28px",
    color: "#1d4634",
    textDecoration: "underline",
    fontSize: "14px",
  },
};

export default function SpanishContactPage() {
  return (
    <main style={styles.page}>
      <div style={styles.wrapper}>
        <span style={styles.badge}>Pilot · Español</span>
        <h1 style={styles.title}>Contact Tongli Timber</h1>
        <p style={styles.subtitle}>Spanish contact page pilot</p>

        <section style={styles.card}>
          <p style={styles.paragraph}>
            This is a pilot Spanish contact page. Please contact Tongli Timber
            directly by email, WhatsApp or phone for wood veneer, decorative
            panels, melamine board and custom panel solutions.
          </p>

          <div style={styles.contactRow}>
            <span style={styles.contactLabel}>Email</span>
            <span style={styles.contactValue}>tonglitimber@tongli-dg.com</span>
          </div>

          <div style={styles.contactRow}>
            <span style={styles.contactLabel}>WhatsApp</span>
            <span style={styles.contactValue}>+86 15817587053</span>
          </div>

          <div style={{ ...styles.contactRow, borderBottom: "none" }}>
            <span style={styles.contactLabel}>Phone</span>
            <span style={styles.contactValue}>+86 15817587053</span>
          </div>

          <div style={styles.buttonGroup}>
            <a
              href={EMAIL_LINK}
              style={styles.primaryButton}
            >
              Email Us
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.whatsappButton}
            >
              Chat on WhatsApp
            </a>
            <a href={PHONE_LINK} style={styles.phoneButton}>
              Call +86 15817587053
            </a>
          </div>
        </section>

        <a href="/" style={styles.backLink}>
          ← Back to English Website
        </a>
      </div>
    </main>
  );
}