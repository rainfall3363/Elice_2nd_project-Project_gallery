import { Router } from 'express';
import { loginRequired } from '../middlewares';
import { teamRecruitmentBoardService } from '../services';

const teamRecruitmentBoardRouter = Router();

// 팀원 모집 추가 api 호출
teamRecruitmentBoardRouter.post('/', loginRequired, async (req, res, next) => {
  try {
    const nickName = req.currentNickName;
    const { title, description } = req.body;

    const newTeam = await teamRecruitmentBoardService.addRecruitment({
      nickName,
      title,
      description,
    });

    res.status(200).json(newTeam);
  } catch (error) {
    next(error);
  }
});

// 팀원 모집 전체 조회
teamRecruitmentBoardRouter.get('/list', async (req, res, next) => {
  try {
    const allTeam = await teamRecruitmentBoardService.getRecruitments();
    res.status(200).json(allTeam);
  } catch (error) {
    next(error);
  }
});

// 팀원 모집 조회 api 호출
teamRecruitmentBoardRouter.get('/postId/:postId', async (req, res, next) => {
  try {
    const postId = req.params.postId;
    const team = await teamRecruitmentBoardService.getRecruitmentById({
      postId,
    });
    res.status(200).json(team);
  } catch (error) {
    next(error);
  }
});

// 팀원 모집 수정 api 호출
teamRecruitmentBoardRouter.patch(
  '/postId/:postId',
  loginRequired,
  async (req, res, next) => {
    try {
      const postId = req.params.postId;
      const { title, tag, description } = req.body;

      const toUpdate = {
        ...(title && { title }),
        ...(tag && { tag }),
        ...(description && { description }),
      };

      const updatedTeamInfo = await teamRecruitmentBoardService.editRecruitment(
        postId,
        toUpdate
      );

      res.status(200).json(updatedTeamInfo);
    } catch (error) {
      next(error);
    }
  }
);

// 팀원 모집 삭제 api 호출
teamRecruitmentBoardRouter.delete(
  '/',
  loginRequired,
  async (req, res, next) => {
    try {
      const postId = req.body.postId;
      const deletedTeam = await teamRecruitmentBoardService.deleteRecruitment(
        postId
      );

      res.status(200).json(deletedTeam);
    } catch (error) {
      next(error);
    }
  }
);

export { teamRecruitmentBoardRouter };
