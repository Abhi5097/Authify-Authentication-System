package com.Abhishek.authify.controller;


import com.Abhishek.authify.io.ProfileRequest;
import com.Abhishek.authify.io.ProfileResponse;
import com.Abhishek.authify.service.EmailService;
import com.Abhishek.authify.service.ProfileService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.annotation.CurrentSecurityContext;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
public class ProfileController {


    private final ProfileService profileService;
    private final EmailService emailService;



    @PostMapping("/register")
    public ProfileResponse register(@Valid @RequestBody ProfileRequest request) {
        ProfileResponse response= profileService.createProfile(request);
        emailService.sendWelcomeEmail(response.getEmail(),response.getName());
        return response;
    }

    @GetMapping("/profile")
  public ProfileResponse getProfile(@CurrentSecurityContext(expression = "authentication?.name")String email) {
        return profileService.getProfile(email);
    }

}
