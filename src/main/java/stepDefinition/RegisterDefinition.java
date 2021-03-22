package stepdefinition;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;
import page.Common;
import page.RegisterPage;
import pages.WelcomePage;

import java.util.Random;


public class RegisterDefinition {

    String mail,phoneNumber;

    @Given("^Open Finhay application$")
    public void open_Finhay_application() {
        WelcomePage welcomePage = new WelcomePage();
        RegisterPage registerPage = new RegisterPage();
        Common common = new Common();
    }
    @Given("^I Click button Skips$")
    public void i_Click_button_Skips()  {
        WelcomePage.clickToSkipBtn1();
    }
    @When("^I click button Dang Ky$")
    public void i_click_button_Dang_Ky() {
        WelcomePage.clickToRegisterBtn();
    }

    @When("^I Click Lastname textbox$")
    public void i_Click_Lastname_textbox()  {
        RegisterPage.clickToLastNameTextbox();
    }

    @When("^I Click button return in keyboard$")
    public void i_Click_button_return_in_keyboard()  {
        RegisterPage.clickReturninKeyBoardBtn();
    }

    @When("^I Click Firstname textbox$")
    public void i_Click_Firstname_textbox()  {
        RegisterPage.clickToFirstNameTextbox();
    }
    @Then("^Verify button Tiep tuc steps one enable$")
    public void verify_button_Tiep_tuc_steps_one_enable() {
        Assert.assertFalse(RegisterPage.isEnbledContinueBtn);
    }
    @When("^I click button Continue steps one$")
    public void i_click_button_Continue_steps_one(){
        RegisterPage.clickContinue1();
    }

    @Then("^Verify button Continue step two disable$")
    public void verify_button_Continue_step_two_disable()  {
        Assert.assertFalse(RegisterPage.isEnbledContinueButton2());
    }
    @When("^I click Email textbox$")
    public void i_click_Email_textbox()  {
        RegisterPage.clickToEmailTextbox();

    }

    @When("^I Click button hide Keyboard$")
    public void i_Click_button_hide_Keyboard()  {
        RegisterPage.clickReturninKeyBoardBtn2(); ;
    }

    @When("^I Click to Phone textbox$")
    public void i_Click_to_Phone_textbox()  {
        RegisterPage.clickToPhoneTextbox();
    }
    @Then("^Verify error message Phone \"([^\"]*)\"$")
    public void verify_error_message_Phone(String errorPhone)  {
        Assert.assertEquals(errorPhone,RegisterPage.getTextErrorMessagePhone());
    }

    @When("^I click button Continue in step two$")
    public void i_click_button_Continue_in_step_two() {
        RegisterPage.clickContinue2();
    }


    @Then("^Verify display text Minimum of (\\d+) characters$")
    public void verify_display_text_Minimum_of_characters(int arg1)  {
        Assert.assertTrue(RegisterPage.isDisplayLengChar());
    }

    @Then("^Verify display text There is (\\d+) capital letter$")
    public void verify_display_text_There_is_capital_letter(int arg1)  {
        Assert.assertTrue(RegisterPage.isDisplayCapChar());
    }

    @Then("^Verify display text MThere is (\\d+) special character$")
    public void verify_display_text_MThere_is_special_character(int arg1)  {
        Assert.assertTrue(RegisterPage.isDisplaySpecialChar());
    }

    @Then("^Verify display text There is (\\d+) lower case letter$")
    public void verify_display_text_There_is_lower_case_letter(int arg1)  {
        Assert.assertTrue(RegisterPage.isDisplayNormalChar());
    }

    @When("^I no input confirm password \"([^\"]*)\"$")
    public void i_no_input_confirm_password(String confirmPass)  {
        RegisterPage.inputConfirmPass(confirmPass);
    }

    @Then("^Verify password textbox display \"([^\"]*)\"$")
    public void verify_password_textbox_display(String passHide) {
        Assert.assertEquals(passHide,RegisterPage.getTextPassHide());
    }

    @Then("^Verify confirm password textbox display \"([^\"]*)\"$")
    public void verify_confirm_password_textbox_display(String confirmPassHide) {
        Assert.assertEquals(confirmPassHide,RegisterPage.getTextConfirmPassHide());
    }
    @When("^I Click button Show password$")
    public void i_Click_button_Show_password()  {
        RegisterPage.clickShowPass();
    }

    @When("^I Click button Show confirm password$")
    public void i_Click_button_Show_confirm_password()  {
        RegisterPage.clickShowConfirmPass();
    }

    @Then("^Verify password textbox show \"([^\"]*)\"$")
    public void verify_password_textbox_show(String passShow)  {
        Assert.assertEquals(passShow,RegisterPage.getTextPassShow());
    }

    @Then("^Verify confirm password textbox show \"([^\"]*)\"$")
    public void verify_confirm_password_textbox_show(String confirmPassShow)  {
        Assert.assertEquals(confirmPassShow,RegisterPage.getTextConfirmPasswordShow());
    }
    @When("^I  input confirm password \"([^\"]*)\"$")
    public void i_input_confirm_password(String confirmPass)  {
        RegisterPage.inputConfirmPass(confirmPass);
    }

    @When("^I input to password\"([^\"]*)\"$")
    public void i_input_Password(String pass)  {
        RegisterPage.inputToPassword(pass);
    }

    @Then("^verify error message wrong confirm password\"([^\"]*)\"$")
    public void verify_error_message_wrong_confirm_password(String errorConfirm)  {
        Assert.assertEquals(errorConfirm,RegisterPage.getTextConfirmPassworError());
    }

    @Then("^Verify button Skip display$")
    public void verify_button_Skip_display()  {
        Assert.assertTrue(RegisterPage.isDisplayCancelButton());
    }

    @When("^I Click button Skip$")
    public void i_Click_button_Skip()  {
        RegisterPage.clickcancel();
    }


    @Then("^Verify button OK, I will validate the OTP display$")
    public void verify_button_OK_I_will_validate_the_OTP_display()  {
        Assert.assertTrue(RegisterPage.isDisplaynoSkip());
    }

    @Then("^I still want to skip this step display$")
    public void i_still_want_to_skip_this_step_display()  {
        Assert.assertTrue(RegisterPage.isDisplayStillSkip());
    }

    @When("^I Click button confirm skip$")
    public void i_Click_button_confirm_skip()  {
        RegisterPage.clickstillSkip();
    }

    @Then("^Verify button Discover Now display$")
    public void verify_button_Discover_Now_display()  {
        Assert.assertTrue(RegisterPage.isDisplayContinueToHome());
    }

    @When("^I Click button Discover Now$")
    public void i_Click_button_Discover_Now()  {
        RegisterPage.clickToContinueToHome();
    }

    @Then("^Verify avatar display$")
    public void verify_avatar_display()  {
        Assert.assertTrue(RegisterPage.isDisplayAvatar());
    }

    @When("^I Click to Avatar$")
    public void i_Click_to_Avatar()  {
        RegisterPage.clicktoAvatar();
    }

    @When("^I Click button Logout$")
    public void i_Click_button_Logout()  {
        Common.swipeMobileUp();
        Common.swipeMobileUp();
        Common.swipeMobileUp();
        Common.swipeMobileUp();
        Common.swipeMobileUp();

        RegisterPage.clicktoLogout();
    }
    @Given("^I click skip in popup$")
    public void i_click_skip_in_popup() {
        RegisterPage.clickSkipPopup();
    }

    @Then("^Button resend via SMS disable$")
    public void button_resend_via_SMS_disable() {
        Assert.assertFalse(RegisterPage.isEnableresendSMS());
    }

    @Then("^Button Resend via Phone number enable$")
    public void button_Resend_via_Phone_number_enable() {
        Assert.assertFalse(RegisterPage.isEnableresendCall());
    }
    @Given("^When I click button Dang Ky$")
    public void when_I_click_button_Dang_Ky()  {
        WelcomePage.clickToRegisterBtn();
    }
    @Then("^I Click button ok in popup$")
    public void i_Click_button_ok_in_popup() {
        RegisterPage.clicktoOkDuplicateMail();
    }

    @Then("^I Click Back in steps (\\d+)$")
    public void i_Click_Back_in_steps(int arg1){
        RegisterPage.clickBackSteps3();
    }
    @Then("^Verify error message duplicate mail display \"([^\"]*)\"$")
    public void verify_error_message_duplicate_mail_display(String message) {
        Assert.assertEquals(message,RegisterPage.getTextMessageDuplicateMail());
    }












    @Then("^Verify button Dang ky bang Google display$")
    public void verify_button_Dang_ky_bang_Google_display() {
        Assert.assertTrue(RegisterPage.isDisplayRegisterByGoogle());
    }

    @And("^Verify Dang ky bang so dien thoai  display$")
    public void verify_Dang_ky_bang_so_dien_thoai_display() {
        Assert.assertTrue(RegisterPage.isDisplayRegisterByPhone());
    }

    @When("^I click button Dang ky bang so dien thoai$")
    public void i_click_button_Dang_ky_bang_so_dien_thoai() {
        RegisterPage.clickToRegisterByPhone();
    }

    @Then("^Veriry Tiep Tuc button undisplay$")
    public void veriry_Tiep_Tuc_button_undisplay() {
        Assert.assertFalse(RegisterPage.isEnbledContinueBtn);
    }

    @When("^I input to Phone \"([^\"]*)\"$")
    public void i_input_to_Phone(String phone) {
        RegisterPage.inputToPhone(phone);
    }

    @Then("^Verify Tiep tuc button disable$")
    public void verify_Tiep_tuc_button_disable() {
        Assert.assertFalse(RegisterPage.isEnbledContinueBtn);
    }

    @When("^I input to Email \"([^\"]*)\"$")
    public void i_input_to_Email(String email) {
        RegisterPage.inputToEmail(email);
    }

    @Then("^Verify Tiep tuc button undisplay$")
    public void verify_Tiep_tuc_button_undisplay() {
        Assert.assertFalse(RegisterPage.isEnbledContinueBtn);
    }

    @When("^I click button Tiep tuc$")
    public void i_click_button_Tiep_tuc() {
        RegisterPage.clickToContinueBtn();
    }

    @Then("^Verify error message \"([^\"]*)\"$")
    public void verify_error_message(String errorMesage) {
        Assert.assertEquals(errorMesage, RegisterPage.getTextEmailError());
    }

    @Then("^Verify icon Error display$")
    public void verify_icon_Error_display() {
        Assert.assertTrue(RegisterPage.isDisplayiconErrorEmail());
    }

    @Then("^Verify error message display \"([^\"]*)\"$")
    public void verify_error_message_display(String errorMessage) {
        Assert.assertEquals(errorMessage, RegisterPage.getErrorMessageDuplicateEmail());
    }

    @Then("^Verify error message Phone display \"([^\"]*)\"$")
    public void verify_error_message_Phone_display(String errorPhone) {
        Assert.assertEquals(errorPhone, RegisterPage.getTextPhoneError());
    }

    @Then("^Verify icon Steps display$")
    public void verify_icon_Steps_display() {
        Assert.assertTrue(RegisterPage.isDisplayIconSteps2());
    }

    @Then("^Lastname textbox display$")
    public void lastname_textbox_display() {
        Assert.assertTrue(RegisterPage.isDisplayFirstName());
    }

    @Then("^Firstname textbox dislay$")
    public void firstname_textbox_dislay() {
        Assert.assertTrue(RegisterPage.isDisplayName());
    }



    @When("^I input Lastname \"([^\"]*)\"$")
    public void i_input_Lastname(String lastName) {
        RegisterPage.inputToLastName(lastName);
    }



    @When("^I input lastname is \"([^\"]*)\"$")
    public void i_input_lastname_is(String lastname) {
        RegisterPage.inputToLastName(lastname);
    }

    @When("^I input first name \"([^\"]*)\"$")
    public void i_input_first_name(String firstName) {
        RegisterPage.inputToName(firstName);
    }

    @When("^I input last name \"([^\"]*)\"$")
    public void i_input_last_name(String lastName) {
        RegisterPage.inputToLastName(lastName);
    }



    @When("^I input firstname \"([^\"]*)\"$")
    public void i_input_firstname(String firstName) {
        RegisterPage.inputToName(firstName);
    }

    @Then("^I click button Tiep tuc steps two$")
    public void i_click_button_Tiep_tuc_steps_two() {
        RegisterPage.clickToContinueBtn2();
    }

    @Then("^Verify icon steps three display$")
    public void verify_icon_steps_three_display() {
        Assert.assertTrue(RegisterPage.isDisplayIconSteps3());
    }

    @Then("^Verify Password textbox enable$")
    public void verify_Password_textbox_enable() {
        Assert.assertTrue(RegisterPage.isDisplayedPassword());
    }

    @Then("^Verify checkbox terms of use enable$")
    public void verify_checkbox_terms_of_use_enable() {
        Assert.assertTrue(RegisterPage.isDisplayedCheckPolicy());
    }

    @Then("^Verify checkbox commitment enable$")
    public void verify_checkbox_commitment_enable() {
        Assert.assertTrue(RegisterPage.isDisplayedCheckOld());
    }

    @Then("^Verify Complete Register button$")
    public void verify_Complete_Register_button() {
        Assert.assertFalse(RegisterPage.isEnabledContinueBtn3());
    }

    @Then("^I input password \"([^\"]*)\"$")
    public void i_input_password(String password)  {
        RegisterPage.inputToPassword(password);
    }

    @Then("^I click button Complete Register$")
    public void i_click_button_Complete_Register() {
        RegisterPage.clickToContinue3();
    }

    @Then("^Verify error message format Phone \"([^\"]*)\"$")
    public void verify_error_message_format_Phone(String errorPhone)  {
        Assert.assertEquals(errorPhone,RegisterPage.getTextErrorMessageWrongFormatPhone());
    }

    @Then("^I click button OK$")
    public void i_click_button_OK()  {
        RegisterPage.clickToOkButton();
    }

    @When("^I input password least eight char \"([^\"]*)\"$")
    public void i_input_password_least_eight_char(String password) {
        RegisterPage.inputToPassword(password);
    }

    @When("^I selected checkbox terms of use$")
    public void i_selected_checkbox_terms_of_use() {
        RegisterPage.clickToPolicy();

    }

    @When("^I selected checkbox commitment$")
    public void i_selected_checkbox_commitment() {
        RegisterPage.clickToOld();
    }

    @Then("^Verify button Complete Register disable$")
    public void verify_button_Complete_Register_disable() {
        Assert.assertFalse(RegisterPage.isEnabledContinueBtn3());
    }

    @When("^I no input password \"([^\"]*)\"$")
    public void i_no_input_password(String password) {
        RegisterPage.inputToPassword(password);
    }

    @When("^I input to password \"([^\"]*)\"$")
    public void i_input_to_password(String password) {
        RegisterPage.inputToPassword(password);
    }

    @Then("^Verify button Complete Register enable$")
    public void verify_button_Complete_Register_enable() {
        Assert.assertTrue(RegisterPage.isEnabledContinueBtn3());
    }

    @Then("^I click button Completed Register$")
    public void i_click_button_Completed_Register() {
        RegisterPage.clickToContinue3();
    }
    @When("^I click button back step three$")
    public void i_click_button_back_step_three()  {
        RegisterPage.clickToBackStep3();
    }

    @When("^I click button  back step two$")
    public void i_click_button_back_step_two(){
        RegisterPage.clickToBackStep2();
    }

    @When("^I input correct Phone number \"([^\"]*)\"$")
    public void i_input_correct_Phone_number(String phone)  {
        RegisterPage.inputToPhone(phone);
    }

    @When("^I click button Continue one$")
    public void i_click_button_Continue_one()  {
        RegisterPage.clickToContinueBtn();
    }

    @When("^I click button Continue two$")
    public void i_click_button_Continue_two()  {
        RegisterPage.clickToContinueBtn2();
    }
    @When("^I  input to password again \"([^\"]*)\"$")
    public void i_input_to_password_again(String pass) {
        RegisterPage.inputToPassword(pass);
    }
    @When("^I click link terms of use$")
    public void i_click_link_terms_of_use() {
        RegisterPage.clickToTermsOfUse();
    }

    @Then("^Verify file pdf display$")
    public void verify_file_pdf_display() {
        Assert.assertTrue(RegisterPage.isDisplayfileTermsOfUse());
    }

    @Then("^Click button back out terms of use$")
    public void click_button_back_out_terms_of_use()  {
        RegisterPage.clickToBackTermsOfUse();
    }
    @When("^And I  input to password again \"([^\"]*)\"$")
    public void and_I_input_to_password_again(String pass) {
        RegisterPage.inputToPassword(pass);
    }
    @Then("^Verify button Active now display$")
    public void verify_button_Active_now_display(){
        Assert.assertTrue(RegisterPage.isDisplayedActivePhone());
    }

    @Then("^Verify button Active by Email display$")
    public void verify_button_Active_by_Email_display() {
        Assert.assertTrue(RegisterPage.isDisplayedActiveEmail());
    }

    @Then("^Verify button Logout display$")
    public void verify_button_Logout_display()  {
        Assert.assertTrue(RegisterPage.isDisplayedLogout());
    }
    @When("^I click buton Cancel$")
    public void i_click_buton_Cancel()  {
        RegisterPage.clickToCancel();
    }

    @Then("^Verify video intro display$")
    public void verify_video_intro_display() {
        Assert.assertTrue(RegisterPage.isDisplayIntroVideo());
    }

    @Then("^Verify button Continue intro display$")
    public void verify_button_Continue_intro_display(){
        Assert.assertTrue(RegisterPage.isDisplayContinueToHome());
    }

    @When("^I click button Continue intro$")
    public void i_click_button_Continue_intro()  {
        RegisterPage.clickToContinueToHome();
    }

    @Then("^Verify icon Avatar display$")
    public void verify_icon_Avatar_display()  {
        Assert.assertTrue(RegisterPage.isDisplayAvatar());
    }
    @When("^I click Logout button$")
    public void i_click_Logout_button()  {
        RegisterPage.clickToLogout();
    }

    @Then("^Button Register display$")
    public void button_Register_display()  {
        Assert.assertTrue(WelcomePage.isDisplayRegisterBtn());
    }

    @Given("^I click button Register$")
    public void i_click_button_Register()  {
        WelcomePage.clickToRegisterBtn();
    }

    @Given("^I Click button Register by Phone$")
    public void i_Click_button_Register_by_Phone() {
        RegisterPage.clickToRegisterByPhone();
    }

    @Given("^I input Firstname \"([^\"]*)\"$")
    public void i_input_Firstname(String firstName)  {
        RegisterPage.inputToName(firstName);
    }

    @Given("^I Click button Completed Register$")
    public void i_Click_button_Completed_Register() {
        RegisterPage.clickToContinueBtn2();
    }

    @When("^I click  Active now$")
    public void i_click_Active_now_display() {
        RegisterPage.clickToActivePhone();
    }

    @Then("^Verify Phone registed display$")
    public void verify_Phone_registed_display()  {
        Assert.assertTrue(RegisterPage.isDisplayedtPhone());
    }
    @Then("^Verify Notice display \"([^\"]*)\"$")
    public void verify_Notice_display(String notice)  {
        Assert.assertEquals(notice,RegisterPage.getTextNotice());
    }


    @Then("^Verify button get the activation code display$")
    public void verify_button_get_the_activation_code_display()  {
        Assert.assertTrue(RegisterPage.isDisplayedgetOtp());
    }

    @Then("^Verify button I had code$")
    public void verify_button_I_had_code()  {
        Assert.assertTrue(RegisterPage.isDisplayedhaveOtp());
    }

    @When("^I click button Get the activation$")
    public void i_click_button_Get_the_activation()  {
        RegisterPage.clickTogetOtp();
    }



    @Then("^Verify content code display$")
    public void verify_content_code_display()  {
        Assert.assertTrue(RegisterPage.isDisplayContentCode());
    }

    @Then("^I click icon Close$")
    public void i_click_icon_Close() {
        RegisterPage.clickToIconClose();
    }

    @Then("^Verify button Get active code$")
    public void verify_button_Get_active_code()  {
        Assert.assertTrue(RegisterPage.isDisplayButtonGetCodeActive());
    }


    @When("^I Click button Agree$")
    public void i_Click_button_Agree()  {
        RegisterPage.clickToAgree();
    }

    @Then("^Verify message seen OTP \"([^\"]*)\"$")
    public void verify_message_seen_OTP(String message)  {
        Assert.assertEquals(message, RegisterPage.getMessageNoti());
    }

    @Then("^I Click button OK$")
    public void i_Click_button_OK()  {
        RegisterPage.clickToButtonOkSeenOTP();
    }

    @Then("^Verify textbox input pincode display$")
    public void verify_textbox_input_pincode_display()  {
        Assert.assertTrue(RegisterPage.isDisplayTextboxPincode());
    }

    @Then("^Verify button Resend via SMS display$")
    public void verify_button_Resend_via_SMS_display()  {
        Assert.assertTrue(RegisterPage.isDisplayresendCodeViaSMSButton());
    }

    @Then("^Verify button Resend via phone number display$")
    public void verify_button_Resend_via_phone_number_display()  {
        Assert.assertTrue(RegisterPage.isDisplayButtonresendCodeViaPhone());
    }
    @When("^I Click button Resend via SMS display$")
    public void i_Click_button_Resend_via_SMS_display()  {
        RegisterPage.clickresendCodeViaSMSButton();
    }

    @Then("^Verify message Resend via SMS display \"([^\"]*)\"$")
    public void verify_message_Resend_via_SMS_display(String message)  {
        Assert.assertEquals(message,RegisterPage.getTextMessageResendCodeViaSMS());
    }

    @Then("^I Click button OK resend via SMS$")
    public void i_Click_button_OK_resend_via_SMS()  {
        RegisterPage.clickokButtonResendCodeViaSMS();
    }

    @Then("^Display countdown time$")
    public void display_countdown_time()  {
        Assert.assertTrue(RegisterPage.getCountdownTime());
    }



    @When("^I Click button Resend via Phone number display$")
    public void i_Click_button_Resend_via_Phone_number_display()  {
        RegisterPage.clickokButtonResendCodeViaPhone();
    }

    @Then("^Verify message Resend via Phone number display \"([^\"]*)\"$")
    public void verify_message_RResend_via_Phone_number_display(String message)  {
        Assert.assertEquals(message,RegisterPage.getTextMessageResendCodeViaPhone());
    }

    @Then("^I Click button OK Resend via Phone number$")
    public void i_Click_button_OK_Resend_via_Phone_number()  {
        RegisterPage.clickokButtonResendCodeViaPhone();
    }

    @When("^I input pincode \"([^\"]*)\"$")
    public void i_input_pincode(String pinCode)  {
        RegisterPage.inputPinCode(pinCode);
    }


    @Then("^Verify message input pincode least six number \"([^\"]*)\"$")
    public void verify_message_input_pincode_least_six_number(String message)  {
        Assert.assertEquals(message,RegisterPage.getTextMessageBlankOTP());

    }

    @Then("^I Click button OK when input pincode least six number$")
    public void i_Click_button_OK_when_input_pincode_least_six_number()  {
        RegisterPage.clickokBlankOTPButton();
    }

    @Then("^Verify message when input wrong pincode \"([^\"]*)\"$")
    public void verify_message_when_input_wrong_pincode(String message)  {
        Assert.assertEquals(message,RegisterPage.getTextMessageWrongOTP());
    }

    @Then("^I Click button OK when input wrong pincode$")
    public void i_Click_button_OK_when_input_wrong_pincode()  {
        RegisterPage.clickokWrongOTPButton();
    }

    @When("^I click in texbox pincode$")
    public void i_click_in_texbox_pincode()  {
        RegisterPage.clickToPinCodeTextbox();
    }


    @When("^I click Active now$")
    public void i_click_Active_now()  {
        RegisterPage.clickToActivePhone();
    }

    @When("^I click Active by Phone$")
    public void i_click_Active_by_Phone()  {
        RegisterPage.clickTogetOtp();
    }
    @When("^I click Active when input code$")
    public void i_click_Active_when_input_code()  {
        Common.swipeMobileDown();
        Common.swipeMobileDown();
        RegisterPage.clicktoActiveNow();
    }
    @When("^I click button hide keyboard$")
    public void i_click_button_hide_keyboard()  {
        RegisterPage.clickHideKeyBoardButton();
    }
    @Given("^I Click button Register By google$")

    public void i_Click_button_Register_By_google()  {
        RegisterPage.clicktoRegisterByGoogle();
    }

    @Given("^I choose acc google register$")
    public void i_choose_acc_google_register()  {
        RegisterPage.clicktoAccGoogle();
    }

    @Then("^Verify email register  display \"([^\"]*)\"$")
    public void verify_email_register_display(String email)  {
        Assert.assertEquals(email,RegisterPage.getTextEmail());
    }


    @When("^I Click I had code active$")
    public void i_Click_I_had_code_active()  {
        Common.swipeMobileUp();
        Common.swipeMobileUp();
        RegisterPage.clicktohaveOTP();
    }

    @When("^I input to Phone correct$")
    public void i_input_to_Phone_correct()  {
        phoneNumber = "098" + randomNumber();
        RegisterPage.inputToPhone(phoneNumber);
    }

    @When("^I input to Email correct$")
    public void i_input_to_Email_correct()  {
        mail = "johnterry" + randomNumber() + "@hotmail.com";
        RegisterPage.inputToEmail(mail);
    }
    @Then("^Show webview choosing acc google$")
    public void show_webview_choosing_acc_google() {
        RegisterPage.isDisplayWebviewGoogle();
    }

    public int randomNumber() {
        Random rand = new Random();
        return rand.nextInt(9999999);
    }
}



