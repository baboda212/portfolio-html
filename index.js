
//service_b9p0liv
//template_l0zriid
//zQIzIHhxcQkidTaUa

//npm install @emailjs/browser --save

//react로 변경시 이메일 코드 아래로 수정요망



import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Email = () => {
    const form = useRef();
    const dispatch = useDispatch();
  
    const closeEmail = () => {
      dispatch({ type: "CLOSE_EMAIL" });
    };
  
    const sendEmail = (e) => {
      e.preventDefault();
      emailjs
        .sendForm(
          "service_b9p0liv",
          "template_l0zriid",
          form.current,
          "zQIzIHhxcQkidTaUa"
        )
        .then(
          (result) => {
            alert("전송되었습니다.");
            closeEmail();
          },
          (error) => {
            alert("전송을 실패했습니다.");
          }
        );
    };
  
    return (
      <EmailForm ref={form} onSubmit={sendEmail}>
        <button onClick={closeEmail}> X </button>
        <label>Name</label>
        <input type="text" name="from_name" placeholder="이름을 입력해주세요." />
        <label>Phone</label>
        <input type="tel" name="phone" placeholder="연락처를 입력해주세요." />
        <label>Email</label>
        <input type="email" name="email" placeholder="메일 주소를 입력해주세요" />
        <label>Message</label>
        <textarea name="text" />
        <input type="submit" value="Send" />
      </EmailForm>
    );
    };
