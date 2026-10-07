import { ImageResponse } from "next/og";

export const alt = "Julian Pinzón — UX/UI Designer & Front-end Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEs = lang === "es";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "90px",
          background: "#0d0d0b",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            color: "#d6ff5c",
            letterSpacing: 2,
            textTransform: "uppercase",
          }}
        >
          Julian Pinzón
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 92,
            fontWeight: 700,
            lineHeight: 1.08,
            letterSpacing: -2,
            color: "#faf8f3",
            marginTop: 28,
          }}
        >
          <span>{isEs ? "Diseño interfaces" : "I design interfaces"}</span>
          <span style={{ color: "#d6ff5c" }}>
            {isEs ? "y las programo." : "and I build them."}
          </span>
        </div>
        <div style={{ display: "flex", fontSize: 30, color: "#a9a496", marginTop: 36 }}>
          {isEs
            ? "Diseñador UX/UI & desarrollador front-end"
            : "UX/UI Designer & Front-end Developer"}
        </div>
      </div>
    ),
    size
  );
}
