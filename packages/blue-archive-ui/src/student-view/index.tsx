import type { Student, StudentMetadata } from "@barp/core";
import { AttackType, DefenseType, Role } from "@barp/core";
import { BASE_URL } from "../constants";
import { Stars, StarType } from "../stars";

import "./index.less";
import { CSSProperties } from "react";

interface Props {
  metadata: StudentMetadata;
  student?: Student;
}

const SchaleDbRoles: Record<Role, string> = {
  [Role.Tank]: "Tanker",
  [Role.Dealer]: "DamageDealer",
  [Role.Healer]: "Healer",
  [Role.Support]: "Supporter",
  [Role.TacticalSupport]: "Vehicle",
};

export const StudentView: React.FC<Props> = ({ metadata, student }) => {
  const sdRole = SchaleDbRoles[metadata.role];

  const avatarURL = `${BASE_URL}/student/collection/${metadata.id}.webp`;
  const attackURL = `${BASE_URL}/ui/Type_Attack.png`;
  const defenseURL = `${BASE_URL}/ui/Type_Defense.png`;
  const roleURL = `${BASE_URL}/ui/Role_${sdRole}.png`;

  const attackClass = ["attack", metadata.attackType].join(" ");
  const defenseClass = ["defense", metadata.defenseType].join(" ");
  const roleClass = ["role", metadata.squad].join(" ");

  const metadataOverlay: React.ReactNode[] = [
    <img
      key={"role"}
      className={roleClass}
      src={roleURL}
      alt={`student-${metadata.id} role`}
    />,
    <div key={"attack"} className={attackClass}>
      <img
        src={attackURL}
        alt={`student-${metadata.id} attack`}
        width={24}
        height={24}
      />
    </div>,
    <div key={"defense"} className={defenseClass}>
      <img
        src={defenseURL}
        alt={`student-${metadata.id} defense`}
        width={24}
        height={24}
      />
    </div>,
  ];

  const studentOverlay: React.ReactNode[] = [];

  let avatarFilter: CSSProperties["filter"];
  if (student !== undefined) {
    const type = student.weaponRank > 0 ? StarType.Weapon : StarType.Student;
    const amount = student.weaponRank > 0 ? student.weaponRank : student.rank;
    studentOverlay.push(
      <Stars type={type} amount={amount} size={40} gap={-16} />,
    );
    studentOverlay.push(<span className="level">Lv. {student.level}</span>);
  } else {
    metadataOverlay.push(
      <Stars
        type={StarType.Student}
        amount={metadata.rarity}
        size={40}
        gap={-16}
      />,
    );
    avatarFilter = `brightness(0.33)`;
  }

  return (
    <div className="student-view">
      <div className="upper" style={{ filter: avatarFilter }}>
        <img
          className="avatar"
          src={avatarURL}
          alt={`student-${metadata.id} avatar`}
          width={200}
          height={226}
        />
        {metadataOverlay}
        {studentOverlay}
      </div>
      <div className="lower">
        <span>{metadata.name}</span>
      </div>
    </div>
  );
};
