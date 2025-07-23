import { CSSProperties } from "react";
import { BASE_URL } from "../constants";

import "./index.less";

interface Props {
  type: StarType;
  size?: number;
  amount?: number;
  gap?: number;
}

export enum StarType {
  Student,
  Weapon,
}

const StudentPalette = [
  "#FEE21F",
  "#FFEC36",
  "#FFE227",
  "#FFF489",
  "#F7C247",
  "#FFFBD6",
  "#FEE25E",
  "#FFFBEE",
  "#FFF9B3",
  "#FECC17",
];

const WeaponPalette = [
  "#90E7FE",
  "#A8FAFC",
  "#86E4FA",
  "#E2FDFF",
  "#94DEFC",
  "#DAF7FF",
  "#8CEDFD",
  "#ECFEFE",
  "#E4FCFB",
  "#7DD9FA",
];

export const Stars: React.FC<Props> = ({
  type,
  size = 48,
  amount = 1,
  gap = size * -0.2,
}) => {
  const starNodes: React.ReactNode[] = [];
  const palette = type === StarType.Student ? StudentPalette : WeaponPalette;
  for (let index = 0; index < amount; index++) {
    const marginLeft = index === 0 ? 0 : gap;
    starNodes.push(
      <Star palette={palette} outer={size / 2} style={{ marginLeft }} />,
    );
  }
  const width = amount * size + gap * amount;
  return (
    <div className="stars" style={{ width, height: size }}>
      {starNodes}
    </div>
  );
};

interface StarProps {
  palette?: string[];
  outer?: number;
  inner?: number;
  style?: CSSProperties;
}

interface Point {
  x: number;
  y: number;
}

export const Star: React.FC<StarProps> = ({
  palette = StudentPalette,
  outer = 128,
  inner = outer * 0.6,
  style,
}) => {
  const size = outer * 2;
  const viewBox = `${-outer} ${-outer} ${size} ${size}`;

  const polygons: React.ReactNode[] = [];
  const points: Point[] = [];
  const origin: Point = { x: 0, y: 0 };

  for (let i = 0; i < 10; i++) {
    const angle = (i * Math.PI) / 5 + Math.PI / 10;
    const r = i % 2 === 1 ? outer : inner;
    const x = r * Math.cos(angle);
    const y = r * Math.sin(angle);
    points.push({ x, y });
  }

  for (let index = 0; index < 10; index++) {
    const nextIndex = (index + 1) % 10;
    const pts = [origin, points[index], points[nextIndex]];
    polygons.push(
      <polygon
        points={pts.map((p) => `${p.x},${p.y}`).join(" ")}
        fill={palette[index]}
      />,
    );
  }

  polygons.push(
    <polygon
      points={points.map((p) => `${p.x},${p.y}`).join(" ")}
      fill="none"
      stroke={"gray"}
      strokeWidth={2}
    />,
  );

  return (
    // biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
    <svg viewBox={viewBox} style={style}>
      {polygons}
      {polygons}
    </svg>
  );
};
