package com.backend.portofolio.User;


import com.backend.portofolio.MailSender.EmailSenderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping(path = "api/v1/user")
public class UserController {

    private final UserService userService;

    @Autowired
    private EmailSenderService emailSenderService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping
    public void registerNewUser(@RequestBody User user) {

        userService.addNewUser(user);
        sendUserEmail(user); //bot-send-mail

    }

    String mainMail = "marcotighiliu@yahoo.com";

    //Sends the users info to main email
    public void sendUserEmail(User user) {

        String thisMessage = user.getMessage();
        String thisSubject = user.getName().concat(" / ").concat(user.getEmail().concat(" contacted you!"));
        emailSenderService.sendMail(mainMail, thisSubject, thisMessage);

    }




}
