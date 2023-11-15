import { HTTPSTATUS } from "@api/types";

export const successfulSignUpData = {
  code: HTTPSTATUS.created,
  status: "Created",
  message: "회원가입이 완료되었습니다",
  data: null,
};

export const unsuccessfulSignUpData = {
  code: HTTPSTATUS.badRequest,
  status: "Bad Request",
  message: "회원가입이 실패했습니다",
  data: null,
};

export const successfulOAuthURLData = {
  code: HTTPSTATUS.success,
  status: "Success",
  message: "OAuth URL을 성공적으로 가져왔습니다",
  data: {
    url: "https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=dfb1e25a2b97d03b0b225d4874a34823&redirect_uri=http://localhost:5173/signin?provider=kakao&scope=openid&state=276795850273511360818854556981559492420&nonce=e9e62073a211c8c9cf23d1e41a4182b7&code_challenge=6rUx4nIA1D1V51T8yOiQwlq0Y-h9SZIv2ZlrtcGK_0Y&code_challenge_method=S256",
  },
};

export const successfulSignInData = {
  code: HTTPSTATUS.success,
  status: "Success",
  message: "로그인이 성공했습니다",
  data: {
    jwt: {
      accessToken: "iamaccesstoken",
      refreshToken: "iamrefreshtoken",
    },
    user: {
      id: 1,
      nickname: "Kakamotobi",
      email: "daeram.chung@gmail.com",
      profileUrl: "https://avatars.githubusercontent.com/u/79886384?v=4",
    },
  },
};

export const unsuccessfulSignInData = {
  code: HTTPSTATUS.badRequest,
  status: "Bad Request",
  message: "로그인이 실패했습니다",
  data: null,
};

export const successfulSignOutData = {
  code: HTTPSTATUS.success,
  status: "Success",
  message: "로그아웃이 성공했습니다",
  data: null,
};

export const successfulNicknameDuplicationCheckData = {
  code: HTTPSTATUS.success,
  status: "Success",
  message: "닉네임이 사용 가능합니다",
  data: null,
};

export const unsuccessfulNicknameDuplicationCheckData = {
  code: HTTPSTATUS.badRequest,
  status: "Bad Request",
  message: "닉네임이 중복되었습니다",
  data: null,
};

export const successfulEmailDuplicationCheckData = {
  code: HTTPSTATUS.success,
  status: "Success",
  message: "이메일이 사용 가능합니다",
  data: null,
};

export const unsuccessfulEmailDuplicationCheckData = {
  code: HTTPSTATUS.badRequest,
  status: "Bad Request",
  message: "이메일이 중복되었습니다",
  data: null,
};

export const successfulEmailVerificationData = {
  code: HTTPSTATUS.success,
  status: "Success",
  message: "이메일로 검증코드를 전송하였습니다",
  data: null,
};

export const unsuccessfulEmailVerificationData = {
  code: HTTPSTATUS.badRequest,
  status: "Bad Request",
  message: "이메일 검증코드 전송을 실패했습니다",
  data: null,
};
