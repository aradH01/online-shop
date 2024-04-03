'use client';
import { Typography } from '@/components/atoms/Typography';
import { useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import { useRouter, useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import {Button} from "@/components/molecules/Button/Buttom";
import OTPInput from "@/components/organisms/OTP-input/OtppInput";
import {Timeout} from "react-number-format/types/types";
import {Data_Signup} from "@/types/pages";
import Image from "next/image";
import Pic from "@/images/login-bg.jpg";
const { Title } = Typography;

const StyledButton = styled(Button)`
  span {
    color: ${({ theme }) => theme.font.primary};
    font-weight: 400;
  }
  margin: 1.5rem auto 2rem;
`;

const CodeVerificationPage = () => {
  const { handleSubmit } = useForm<Data_Signup>();
  const [counterState, setCounterState] = useState({
    count: 120,
    isCounting: true,
  });
  const [code, setCode] = useState('');
  const [isDisable, setIsDisable] = useState(true);
  // eslint-disable-next-line no-undef
  const interval = useRef<Timeout>();
  const second = counterState.count % 60;
  const minute = Math.floor(counterState.count / 60);
  const router = useRouter();
  useEffect(() => {
    if (counterState.isCounting) {
      clearInterval(interval.current);
      interval.current = setInterval(() => {
        setCounterState((prev) => ({
          count: Math.max(prev.count - 1, 0),
          isCounting: prev.count > 0,
        }));
      }, 1000);
    } else {
      clearInterval(interval.current);
    }
    if (!counterState.isCounting) {
      setIsDisable(false);
    }
  }, [counterState.isCounting]);
  function resendCode() {
    /*dispatch(
      sendVerificationCode({
        mobile: signupInfo?.mobile.replace(/\s/g, ''),
        onSuccess: async (data: onSuccess_Response) => {
          showNotify({
            text: data.message,
            color: 'green',
          } as SnackbarSettings);
        },
      })
    );*/
    setCounterState({
      count: 120,
      isCounting: true,
    });
    setIsDisable(true);
  }
  const searchParams = useSearchParams();
  const submit = (data: Data_Signup) => {
    console.log(data)
  };

  return (
      <div className="relative h-[100dvh] h-[100vh]">
          <div className="absolute w-full h-full blur-[6px]">
              <Image src={Pic} alt="" fill/>
          </div>
    <div
        className="
        absolute py-10 px-2 bottom-1/2 right-1/2 translate-x-1/2 border border-solid border-white rounded-2xl translate-y-1/2 bg-glass-bg
        flex-column max-w-xl md:w-1/2 sm:w-full
        ">
      <Title
        className="mt-6 !text-center"
        color="primary"
        level="h2"
        size="xlg"
        weight="semiBold"
      >
تایید کد      </Title>
      <Typography.Paragraph
        className="!text-[15px] !font-normal !text-center mt-4"
        color="nonActive"
      >
          ما یک رمز عبور رقمی به شماره تلفن شما ارسال کردیم.
          <br/>
          لطفا پیامک را چک کنید و کد را در اینجا قرار دهید تا حساب خود را فعال کنید.
      </Typography.Paragraph>
      <div className="flex flex-col justify-center items-center mt-8">
        <Typography.Paragraph
          className="!text-center !text-[15px] !font-medium mb-2"
          color="primary"
        >
          کد تا 2 دقیقه معتبر است:
        </Typography.Paragraph>
        <Typography.Paragraph
          className="font-medium text-[22px] mb-[40px]"
          color="primary"
        >
          {minute} : {second}
        </Typography.Paragraph>
      </div>
      <div className="flex justify-center">
        <OTPInput
          autoFocus
          isNumberInput
          length={4}
          className="otpContainer flex flex-row-reverse"
          inputClassName="otpInput"
          onChangeOTP={(otp) => setCode(otp)}
        />
      </div>
      <StyledButton
        title="ارسال مجدد"
       text
        onClick={() => resendCode()}
        disabled={isDisable}
      />
      <Button
        title="تایید"
        onClick={handleSubmit(submit)}
        className="mx-auto"
      />
    </div>
      </div>
  );
};

export default CodeVerificationPage;
