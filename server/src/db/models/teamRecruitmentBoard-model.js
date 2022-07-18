import { model } from 'mongoose';
import { TeamRecruitmentBoardSchema } from '../schemas/teamRecruitmentBoard-schema';

const TeamRecruitmentBoard = model(
  'teamRecruitments',
  TeamRecruitmentBoardSchema
);

export class TeamRecruitmentBoardModel {
  // 팀원 모집 조회 - 닉네임
  async findByNickName(nickName) {
    const user = await TeamRecruitmentBoard.findOne({ nickName });
    return user;
  }

  // 팀원 모집 생성
  async createTeam(teamInfo) {
    const newTeam = await TeamRecruitmentBoard.create(teamInfo);
    return newTeam;
  }

  // 팀원 모집 삭제
  async deleteTeam(titleId) {
    const team = await TeamRecruitmentBoard.findOneAndDelete({ _id: titleId });
    return team;
  }

  // 모든 팀원 모집 조회
  async findAllTeam() {
    const allTeams = await TeamRecruitmentBoard.find({});
    return allTeams;
  }

  // 팀원 모집 수정
  async update({ titleId, update }) {
    const filter = { _id: titleId };
    const option = { returnOriginal: false };

    const updatedTeam = await TeamRecruitmentBoard.findOneAndUpdate(
      filter,
      update,
      option
    );
    return updatedTeam;
  }
}

const teamRecruitmentBoardModel = new TeamRecruitmentBoardModel();

export { teamRecruitmentBoardModel };
