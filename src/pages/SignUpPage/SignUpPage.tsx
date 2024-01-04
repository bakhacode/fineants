import { SignUpData, postEmailVerification } from "@api/auth";
import useSignUpMutation from "@api/auth/queries/useSignUpMutation";
import { useFunnel } from "@fineants/demolition";
import { Button } from "@mui/material";
import AuthBasePage from "@pages/AuthBasePage";
import Routes from "@router/Routes";
import designSystem from "@styles/designSystem";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ProgressBoard } from "./ProgressBoard/ProgressBoard";
import {
  EmailSubPage,
  NicknameSubPage,
  PasswordSubPage,
  VerificationSubPage,
} from "./subPages";
import MainSubPage from "./subPages/MainSubPage";
import ProfileImageSubPage from "./subPages/ProfileImageSubPage";

export default function SignUpPage() {
  const navigate = useNavigate();

  const stepList = [
    "main",
    "nickname",
    "email",
    "verification",
    "password",
    "profileImage",
  ];
  const progressList = {
    "닉네임 입력": ["nickname"],
    "이메일 입력/인증": ["email", "verification"],
    "비밀번호 생성": ["password"],
    "프로필 이미지 등록": ["profileImage"],
  };

  const { currentStep, Funnel, changeStep } = useFunnel(stepList);
  const [signUpData, setSignUpData] = useState<SignUpData>({
    nickname: "",
    profileImage: null,
    email: "",
    verificationCode: "",
    password: "",
    passwordConfirm: "",
  });

  const { mutate: signUpMutate } = useSignUpMutation();

  return (
    <AuthBasePage>
      <SignUpContainer>
        <ProgressBoard progressList={progressList} currentStep={currentStep} />
        <SubPageContainer>
          <Funnel>
            <Funnel.Step name="main">
              <MainSubPage onNext={() => changeStep("nickname")} />
            </Funnel.Step>

            <Funnel.Step name="nickname">
              <NicknameSubPage
                onPrev={() => changeStep("main")}
                onNext={(data: string) => {
                  setSignUpData((prev) => ({ ...prev, nickname: data }));
                  changeStep("email");
                }}
              />
            </Funnel.Step>

            <Funnel.Step name="email">
              <EmailSubPage
                onPrev={() => changeStep("nickname")}
                onNext={(data: string) => {
                  setSignUpData((prev) => ({ ...prev, email: data }));
                  // Request server to send verification code
                  // TODO: handle error
                  postEmailVerification(signUpData.email);
                  changeStep("verification");
                }}
              />
            </Funnel.Step>

            <Funnel.Step name="verification">
              <VerificationSubPage
                email={signUpData.email}
                onPrev={() => changeStep("email")}
                onNext={(data: string) => {
                  setSignUpData((prev) => ({
                    ...prev,
                    verificationCode: data,
                  }));
                  changeStep("password");
                }}
              />
            </Funnel.Step>

            <Funnel.Step name="password">
              <PasswordSubPage
                onPrev={() => changeStep("verification")}
                onNext={async (password: string, passwordConfirm: string) => {
                  setSignUpData((prev) => ({
                    ...prev,
                    password,
                    passwordConfirm,
                  }));
                  changeStep("profileImage");
                }}
              />
            </Funnel.Step>

            <Funnel.Step name="profileImage">
              <ProfileImageSubPage
                onPrev={() => changeStep("password")}
                onNext={(data: File | null) => {
                  setSignUpData((prev) => ({ ...prev, profileImage: data }));
                  signUpMutate(createSignUpFormData(signUpData));
                }}
              />
            </Funnel.Step>
          </Funnel>
        </SubPageContainer>
        <SupportContainer>
          이미 회원이신가요?
          <TextButton onClick={() => navigate(Routes.SIGNIN)}>
            로그인하기
          </TextButton>
        </SupportContainer>
      </SignUpContainer>
    </AuthBasePage>
  );
}

const SupportContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${designSystem.color.neutral.gray600};
  font: ${designSystem.font.body3};
`;

const TextButton = styled(Button)`
  padding: 0;
  color: ${designSystem.color.primary.blue500};
  font: ${designSystem.font.button2};
`;

const SignUpContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 48px;
  width: 720px;
  height: 100%;
  padding: 0 80px;
`;

const SubPageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const createSignUpFormData = (object: SignUpData) =>
  Object.keys(object).reduce((formData, key) => {
    const value = object[key];
    if (value !== null) {
      formData.append(key, value);
    }
    return formData;
  }, new FormData());
