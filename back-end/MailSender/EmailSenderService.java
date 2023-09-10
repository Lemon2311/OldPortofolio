package com.backend.portofolio.MailSender;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailSender;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.stereotype.Service;

@Service
public class EmailSenderService {

    @Autowired
    private MailSender mailSender;

    public void sendMail(String receiver,
                         String subject,
                         String message) {

        SimpleMailMessage email = new SimpleMailMessage();
        email.setFrom("bottighiliu@gmail.com");
        email.setTo(receiver);
        email.setText(message);
        email.setSubject(subject);

        mailSender.send(email);

        System.out.println("Mail Sent successfully!");

    }



}
