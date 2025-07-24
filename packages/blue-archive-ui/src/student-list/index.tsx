import { StudentView } from "@/student-view";
import { Student, StudentMetadata } from "@barp/core";

import "./index.less";

interface Props {
  metadatas: StudentMetadata[];
  students: Student[];
}

export const StudentList: React.FC<Props> = ({ metadatas, students }) => {
  const owneds: React.ReactNode[] = [];
  const unowneds: React.ReactNode[] = [];

  metadatas.forEach((metadata) => {
    const student = students.find((s) => s.metadataId === metadata.id);
    const view = (
      <StudentView
        key={metadata.id}
        metadata={metadata}
        student={student}
        style={{ marginBottom: 8, marginRight: 8 }}
      />
    );
    if (student !== undefined) {
      owneds.push(view);
    } else {
      unowneds.push(view);
    }
  });

  return (
    <div className="student-list">
      <div className="student-group">{owneds}</div>
      <div className="divider">
        <span>未持有</span>
      </div>
      <div className="student-group">{unowneds}</div>
    </div>
  );
};
