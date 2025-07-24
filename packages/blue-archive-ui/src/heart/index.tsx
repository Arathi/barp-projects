import { HTMLAttributes, SVGAttributes } from "react";

interface Props {
  width: number;
  height: number;
  fill?: SVGAttributes<SVGPathElement>["fill"];
  stroke?: SVGAttributes<SVGPathElement>["stroke"];
  bond?: number;
}

export const Heart: React.FC<Props> = ({
  width,
  height,
  fill = "pink",
  stroke = "gray",
  bond,
}) => {
  const r = width / 4;
  const viewBox = `${-width / 2} ${-r} ${width} ${height}`;
  const yMax = height - r;

  function Arc(
    rx: number,
    ry: number,
    angle: number, // [0,360)
    largeArgFlag: 0 | 1,
    sweepFlag: 0 | 1,
    x: number,
    y: number,
  ): string {
    return `A ${rx} ${ry} ${angle} ${largeArgFlag} ${sweepFlag} ${x} ${y}`;
  }

  function Bezier(cx: number, cy: number, x: number, y: number): string {
    return `Q ${cx},${cy} ${x},${y}`;
  }

  const definitions: string[] = [
    `M ${-2 * r},0`,
    Arc(r, r, 180, 1, 1, 0, 0),
    Arc(r, r, 180, 1, 1, 2 * r, 0),
    Bezier(2 * r, yMax / 2, 0, yMax),
    Bezier(-2 * r, yMax / 2, -2 * r, 0),
    "z",
  ];

  const bondText = `${bond}`;
  const bondX = bondText.length === 2 ? -8 : -4;
  const bondY = 13;
  const bondSize = bondText.length === 2 ? 14 : 14;
  return (
    // biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
    <svg viewBox={viewBox}>
      <path fill={fill} stroke={stroke} d={definitions.join(" ")} />
      <text x={bondX} y={bondY} fill="black" fontSize={bondSize}>
        {bondText}
      </text>
    </svg>
  );
};
