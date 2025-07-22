import { test } from 'vitest';
import Client from './axios-client';

const client = new Client({
  baseURL: "https://schaledb.com",
  lang: "cn",
  server: "jp",
});

test('客户端测试', async () => {
  const students = await client.getStudents();
  for (const key in students) {
    const student = students[key];
    let role = "其他";
    switch (student.TacticRole) {
      case "DamageDealer":
        role = "输出";
        break;
      case "Healer":
        role = "治疗";
        break;
      case "Supporter":
        role = "辅助";
        break;
      case "Tanker":
        role = "坦克";
        break;
      case "Vehicle":
        role = "载具";
        break;
    }
    console.info(`No.${student.Id} 【${role}】 ${student.Name}`);
  }
});
