package page;

import core.AppiumBase;
import io.appium.java_client.android.AndroidElement;
import io.appium.java_client.pagefactory.AndroidFindBy;
import io.appium.java_client.pagefactory.AppiumFieldDecorator;
import org.openqa.selenium.By;
import org.openqa.selenium.support.PageFactory;

import org.openqa.selenium.support.ui.WebDriverWait;

public class RegisterPage extends AppiumBase {
    public static String before = null;
    public static String after = null;
    public static boolean isDisplayedContinueBtn;
    public static boolean isEnbledContinueBtn;
    private WebDriverWait explicitWait;
    private long longTimeOut = 30;
    public RegisterPage () {
        PageFactory.initElements(new AppiumFieldDecorator(driver),this);
        page.Common common = new page.Common();

    }
    @AndroidFindBy(id = "vn.finhay.finhay:id/googleLogin")
    private static AndroidElement registerByGoogle;
    @AndroidFindBy(id = "vn.finhay.finhay:id/tv_register_by_phone")
    private static AndroidElement registerByPhone;
    @AndroidFindBy(xpath = "//android.widget.TextView[@text='oanh.nguyen@finhay.com.vn']")
    private static AndroidElement accountNameGoogle ;
    @AndroidFindBy(id = "android:id/message")
    private static AndroidElement popupMessageError;
    @AndroidFindBy(id = "vn.finhay.finhay:id/email_error")
    private static AndroidElement errorMessageDuplicateEmail;
    @AndroidFindBy(id = "vn.finhay.finhay:id/et_phone")
    private static AndroidElement phone;
    @AndroidFindBy(id = "vn.finhay.finhay:id/et_email")
    private static AndroidElement email;
    @AndroidFindBy(id = "vn.finhay.finhay:id/step1_cont")
    private static AndroidElement continueBtn;
    @AndroidFindBy(id = "vn.finhay.finhay:id/email_error")
    private static AndroidElement emailError;
    @AndroidFindBy(id = "vn.finhay.finhay:id/emailStatus")
    private static  AndroidElement iconEmailError;
    @AndroidFindBy(id = "vn.finhay.finhay:id/phone_error")
    private static AndroidElement phoneError;
    @AndroidFindBy(id="android:id/button1")
    private static AndroidElement okbutton;
    @AndroidFindBy(id ="vn.finhay.finhay:id/status5")
    private AndroidElement iconSteps2;
    @AndroidFindBy(id = "vn.finhay.finhay:id/et_first_name")
    private static AndroidElement firstName;
    @AndroidFindBy(id = "vn.finhay.finhay:id/et_name")
    private static AndroidElement name;
    @AndroidFindBy(id ="vn.finhay.finhay:id/status9")
    private static AndroidElement iconSteps3;
    @AndroidFindBy(id = "vn.finhay.finhay:id/step2_cont")
    private static AndroidElement continueBtn2;
    @AndroidFindBy(id = "vn.finhay.finhay:id/et_password")
    private static AndroidElement password;
    @AndroidFindBy(id = "vn.finhay.finhay:id/check_policy")
    private static AndroidElement checkPolicy;
    @AndroidFindBy(id = "vn.finhay.finhay:id/check_old")
    private static AndroidElement checkOld;
    @AndroidFindBy(id = "vn.finhay.finhay:id/step3_cont")
    private static AndroidElement continueBtn3;
    @AndroidFindBy(id = "vn.finhay.finhay:id/tv_logout")
    private static AndroidElement logout;
    @AndroidFindBy(id = "vn.finhay.finhay:id/tv_active_phone")
    private static AndroidElement activePhone;
    @AndroidFindBy(id = "vn.finhay.finhay:id/tv_active_email")
    private static AndroidElement activeEmail;
    @AndroidFindBy(id = "vn.finhay.finhay:id/cancel")
    private static AndroidElement cancel;
    @AndroidFindBy(id = "vn.finhay.finhay:id/introVideo")
    private AndroidElement introVideo;
    @AndroidFindBy(id = "vn.finhay.finhay:id/tv_continue")
    private static AndroidElement continueToHome;
    @AndroidFindBy(id = "vn.finhay.finhay:id/tv_active")
    private static AndroidElement getOtp;
    @AndroidFindBy(id = "vn.finhay.finhay:id/hasCode")
    private static AndroidElement haveOtp;
    //    @AndroidFindBy(id = "vn.finhay.finhay:id/edt_phone")
//    private static AndroidElement edtPhone;
    @AndroidFindBy(id = "vn.finhay.finhay:id/txt_invite")
    private static AndroidElement agreeBtn;
    @AndroidFindBy(id = "android:id/message")
    private static AndroidElement messageNoti;
    @AndroidFindBy(id = "android:id/button1")
    private static AndroidElement okButtoseenOTP;
    @AndroidFindBy(id = "vn.finhay.finhay:id/tv_time")
    private static AndroidElement CountdownTime;
    @AndroidFindBy (id = "vn.finhay.finhay:id/step3_back")
    private static AndroidElement backStep3;
    @AndroidFindBy (id = "vn.finhay.finhay:id/step2_back")
    private static AndroidElement backStep2;
    @AndroidFindBy(id = "vn.finhay.finhay:id/pdfView")
    private static AndroidElement filePDFTermsOfUse;
    @AndroidFindBy(xpath =   "//android.widget.ImageButton[@content-desc=\"Navigate up\"]")
    private static AndroidElement backTermsOfUse;
    @AndroidFindBy(id = "vn.finhay.finhay:id/policy")
    private static AndroidElement policyLink;
    @AndroidFindBy(id = "vn.finhay.finhay:id/avatar")
    private static AndroidElement avatar;
    @AndroidFindBy (id = "vn.finhay.finhay:id/img_close")
    private static AndroidElement iconClose;
    @AndroidFindBy (id = "vn.finhay.finhay:id/edt_pincode")
    private static AndroidElement pinCodeTextbox;
    @AndroidFindBy (id = "vn.finhay.finhay:id/txt_resend")
    private static AndroidElement resendCodeViaSMSButton;
    @AndroidFindBy (id = "vn.finhay.finhay:id/txt_resend_by_call")
    private static AndroidElement resendCodeViaPhone;
    @AndroidFindBy (id = "android:id/message")
    private static AndroidElement messageResendCodeViaSMS;
    @AndroidFindBy (id = "android:id/button1")
    private static AndroidElement okButtonResendCodeViaSMS;
    @AndroidFindBy (id = "android:id/message")
    private static AndroidElement messageResendCodeViaPhone;
    @AndroidFindBy (id = "android:id/button1")
    private static AndroidElement okButtonResendCodeViaPhone;
    @AndroidFindBy (id = "android:id/message")
    private static AndroidElement messageBlankOTP;
    @AndroidFindBy (id = "android:id/button1")
    private static AndroidElement okBlankOTPButton;
    @AndroidFindBy (id = "android:id/message")
    private static AndroidElement messagewrongOTP;
    @AndroidFindBy (id = "android:id/button1")
    private static AndroidElement okWrongOTPButton;
    @AndroidFindBy (id = "vn.finhay.finhay:id/txt_logout")
    private static AndroidElement logOutProfileButton;
    @AndroidFindBy(id = "vn.finhay.finhay:id/message")
    private static AndroidElement notice;

    @AndroidFindBy(id = "vn.finhay.finhay:id/lnStep1")
    private static AndroidElement steps1;
    @AndroidFindBy(id = "vn.finhay.finhay:id/lnStep2")
    private static AndroidElement steps2;
    @AndroidFindBy(id = "vn.finhay.finhay:id/step1_cont")
    private static AndroidElement continue1;
    @AndroidFindBy(id ="vn.finhay.finhay:id/step2_cont")
    private static AndroidElement continue2;
    @AndroidFindBy(id ="vn.finhay.finhay:id/txt_leng_characters")
    private static AndroidElement lengChar;
    @AndroidFindBy(id ="vn.finhay.finhay:id/txt_caps_characters")
    private static AndroidElement capsChar;
    @AndroidFindBy(id ="vn.finhay.finhay:id/txt_special_characters")
    private static AndroidElement specialChar;
    @AndroidFindBy(id ="vn.finhay.finhay:id/txt_characters")
    private static AndroidElement nomarlChar;
    @AndroidFindBy(id ="vn.finhay.finhay:id/et_again_password")
    private static AndroidElement confirmPassTextbox;
    @AndroidFindBy(id ="vn.finhay.finhay:id/passwordShow")
    private static AndroidElement showPass;
    @AndroidFindBy(id ="vn.finhay.finhay:id/again_passwordShow")
    private static AndroidElement showConfirmPass;
    @AndroidFindBy(id ="vn.finhay.finhay:id/pass_again_error")
    private static AndroidElement confirmPassError;
    @AndroidFindBy(id ="vn.finhay.finhay:id/txt_content")
    private static AndroidElement contentSkip;
    @AndroidFindBy(id ="vn.finhay.finhay:id/txt_ok")
    private static AndroidElement noSkip;
    @AndroidFindBy(id ="vn.finhay.finhay:id/txt_close_this_step")
    private static AndroidElement stillSkip;
    @AndroidFindBy(id ="android:id/button1")
    private static AndroidElement confirmLogOut;
    @AndroidFindBy(id ="vn.finhay.finhay:id/secondary_button")
    private static AndroidElement skipsPopup;
    @AndroidFindBy(id ="android:id/message")
    private static AndroidElement errorMessageDuplicateMail;
    @AndroidFindBy(id ="android:id/button1")
    private static AndroidElement okDuplicateMail;
    @AndroidFindBy(id ="vn.finhay.finhay:id/tv_active")
    private static AndroidElement activeNow;
    @AndroidFindBy(id ="vn.finhay.finhay:id/root")
    private static AndroidElement hideKeyBoard;
    @AndroidFindBy(id ="com.google.android.gms:id/account_picker_container")
    private static AndroidElement webviewGoogle;


    public static boolean isDisplayWebviewGoogle(){
        return  isDisplayed(By.id("com.google.android.gms:id/account_picker_container"));
    }
    public static String getTextEmail() {
        return email.getText();
    }
    public static void clicktoRegisterByGoogle(){

        isVisibleAndClickable(By.id("vn.finhay.finhay:id/googleLogin"));
        registerByGoogle.click();
    }
    public static void clicktoAccGoogle(){

        isVisibleAndClickable(By.xpath("//android.widget.TextView[@text='oanh.nguyen@finhay.com.vn']"));
        accountNameGoogle.click();
    }
    public static void clicktohaveOTP(){

        isVisibleAndClickable(By.id("vn.finhay.finhay:id/hasCode"));
        haveOtp.click();
    }
    public static void clicktoActiveNow(){

        isVisibleAndClickable(By.id("vn.finhay.finhay:id/tv_active"));
        activeNow.click();
    }
    public static void clickBackSteps3(){
        backStep3.click();
    }
    public static void clicktoOkDuplicateMail(){
        okDuplicateMail.click();
    }
    public static String getTextMessageDuplicateMail() {
        return errorMessageDuplicateMail.getText();
    }
    public static boolean isEnableresendSMS(){
        return resendCodeViaSMSButton.isEnabled();
    }
    public static boolean isEnableresendCall(){
        return resendCodeViaPhone.isEnabled();
    }
    public static void clickSkipPopup(){
        isVisibleAndClickable(By.id("vn.finhay.finhay:id/secondary_button"));
        skipsPopup.click();
    }
    public static void clicktoconfirmLogOut(){
        confirmLogOut.click();
    }
    public static void clicktoLogout(){
        logOutProfileButton.click();
    }

    public static void clickstillSkip(){
        stillSkip.click();
    }
    public static String getTextContentSkip() {
        return contentSkip.getText();
    }
    public static boolean isDisplaynoSkip(){
        return  isDisplayed(By.id("vn.finhay.finhay:id/txt_ok"));
    }
    public static boolean isDisplayStillSkip(){
        return  isDisplayed(By.id("vn.finhay.finhay:id/txt_close_this_step"));
    }
    public static boolean isDisplayCancelButton(){
        return  isDisplayed(By.id("vn.finhay.finhay:id/cancel"));
    }
    public static void clickcancel(){
        cancel.click();
    }
    public static void clickShowPass(){
        showPass.click();
    }
    public static void clickShowConfirmPass(){
        showConfirmPass.click();
    }
    public static String getTextPassShow() {
        return password.getText();
    }
    public static String getTextConfirmPassworError() {
        return confirmPassError.getText();
    }
    public static String getTextConfirmPasswordShow() {
        return confirmPassTextbox.getText();
    }
    public static String getTextPassHide() {
        return password.getText();
    }
    public static String getTextConfirmPassHide() {
        return confirmPassTextbox.getText();
    }

    public static String getTextPassshow() {
        return password.getText();
    }
    public static String getTextConfirmPassShow() {
        return confirmPassTextbox.getText();
    }
    public static void inputConfirmPass(String rePass){
        confirmPassTextbox.clear();
        confirmPassTextbox.sendKeys(rePass);
    }
    public static boolean isDisplayLengChar(){
        return  isDisplayed(By.id("vn.finhay.finhay:id/txt_leng_characters"));
    }
    public static boolean isDisplayCapChar(){
        return  isDisplayed(By.id("vn.finhay.finhay:id/txt_caps_characters"));
    }
    public static boolean isDisplaySpecialChar(){
        return  isDisplayed(By.id("vn.finhay.finhay:id/txt_special_characters"));
    }
    public static boolean isDisplayNormalChar(){
        return  isDisplayed(By.id("vn.finhay.finhay:id/et_again_password"));
    }
    public static void clickContinue2(){
        continue2.click();
    }
    public static void clickContinue1(){
        continue1.click();
    }
    public static void clickToPhoneTextbox(){
        phone.click();
    }
    public static void clickToEmailTextbox(){
        email.click();
    }
    public static void clickReturninKeyBoardBtn(){
        steps1.click();
    }
    public static void clickReturninKeyBoardBtn2(){
        isVisibleAndClickable(By.id("vn.finhay.finhay:id/lnStep2"));
        steps2.click();
    }
    public static void clickToLastNameTextbox(){
        firstName.click();
    }
    public static void clickToFirstNameTextbox(){
        name.click();
    }

    public static void clickToPinCodeTextbox(){
        pinCodeTextbox.click();
    }
    public static String getTextNotice() {
        return notice.getText();
    }
    public static void clickToIconAvatar(){
        avatar.click();
    }
    public static String getTextMessageWrongOTP() {
        return messagewrongOTP.getText();
    }
    public static void clickokBlankOTPButton() {
        okBlankOTPButton.click();
    }
    public static void clickokWrongOTPButton() {
        okWrongOTPButton.click();
    }
    public static String getTextMessageBlankOTP() {
        return messageBlankOTP.getText();
    }
    public static String getTextErrorMessagePhone() {
        return phoneError.getText();
    }
    public static void clickHideKeyBoardButton() {
        isVisibleAndClickable(By.id("vn.finhay.finhay:id/root"));
        hideKeyBoard.click();
    }
    public static void clickokButtonResendCodeViaPhone() {
        okButtonResendCodeViaPhone.click();
    }
    public static String getTextMessageResendCodeViaPhone() {
        return messageResendCodeViaPhone.getText();
    }
    public static void clickokButtonResendCodeViaSMS(){
        okButtonResendCodeViaSMS.click();
    }
    public static String getTextMessageResendCodeViaSMS() {
        return messageResendCodeViaSMS.getText();
    }
    public static void clickresendCodeViaPhone(){
        resendCodeViaPhone.click();
    }
    public static void clickresendCodeViaSMSButton(){
        resendCodeViaSMSButton.click();
    }


    public static void inputPinCode(String pinCode){
        pinCodeTextbox.clear();
        pinCodeTextbox.sendKeys(pinCode);
    }
    public  static void clickToButtonOkSeenOTP(){
        okButtoseenOTP.click();
    }
    public static void clickToIconClose() {
        iconClose.click();
    }
    public static boolean isDisplayContentCode(){
        return  isDisplayed(By.id("vn.finhay.finhay:id/txt_content"));
    }

    public static boolean isEnableContinue3Btn(){
        return  continueBtn3.isEnabled();
    }
    public static boolean isDisplayButtonGetCodeActive(){
        return  isDisplayed(By.id("vn.finhay.finhay:id/tv_active"));
    }
    public static boolean isDisplayTextboxPincode(){
        return  isDisplayed(By.id("vn.finhay.finhay:id/edt_pincode"));
    }
    public static boolean isDisplayresendCodeViaSMSButton(){
        return  isDisplayed(By.id("vn.finhay.finhay:id/txt_resend"));
    }
    public static boolean isDisplayButtonresendCodeViaPhone(){
        return  isDisplayed(By.id("vn.finhay.finhay:id/txt_resend_by_call"));
    }
    public static boolean isDisplayfileTermsOfUse() {
        return isDisplayed(By.id("vn.finhay.finhay:id/pdfView"));
    }
    public static boolean isDisplayAvatar() {
        return isDisplayed(By.id("vn.finhay.finhay:id/avatar"));
    }
    public  static  void  clicktoAvatar(){avatar.click();}
    public static void clickToTermsOfUse() {
        policyLink.click();
    }
    public static void clickToBackTermsOfUse() {
        backTermsOfUse.click();
    }
    public static boolean getCountdownTime() {
        while (true) {
            after = CountdownTime.getText();
            if (!after.equals(before)) {
                System.out.println(after);
                before = after;
            }
        }
    }
    public void clickToRegisterByGooogle() {
        registerByGoogle.click();
    }
    public static void clickToBackStep3(){
        backStep3.click();
    }
    public static void clickToBackStep2(){
        backStep2.click();
    }
    public static void clickToRegisterByPhone() {
        registerByPhone.click();
    }
    public static void inputToEmail(String mail) {
        isVisibleAndClickable(By.id("vn.finhay.finhay:id/et_email"));
        email.clear();
        email.sendKeys(mail);
    }
    public int getLengthPhone() {
        return phone.getText().length();
    }

    public static void inputToPhone(String phoneNumber) {
        isVisibleAndClickable(By.id("vn.finhay.finhay:id/et_phone"));
        phone.clear();
        phone.sendKeys(phoneNumber);
    }
    public static void clickToContinueBtn(){
        isVisibleAndClickable(By.id("vn.finhay.finhay:id/step1_cont"));
        continueBtn.click();
    }
    public static String getTextPhoneError() {
        return phoneError.getText();
    }
    public static String getTextEmailError(){
        return emailError.getText();
    }
    public static String getTextErrorMessageWrongFormatPhone(){
        return  popupMessageError.getText();
    }
    public static void inputToLastName(String value) {
        isVisibleAndClickable(By.id("vn.finhay.finhay:id/et_first_name"));
        firstName.clear();
        firstName.sendKeys(value);
    }
    public static void inputToName(String value) {
        isVisibleAndClickable(By.id("vn.finhay.finhay:id/et_name"));
        name.clear();
        name.sendKeys(value);
    }
    public static boolean isDisplayRegisterByGoogle() {
        return isDisplayed(By.id("vn.finhay.finhay:id/googleLogin"));
    }
    public static boolean isDisplayIconSteps2() {
        return isDisplayed(By.id("vn.finhay.finhay:id/status5"));
    }
    public static boolean isDisplayiconErrorEmail() {
        return isDisplayed(By.id("vn.finhay.finhay:id/emailStatus"));
    }
    public static String getErrorMessageDuplicateEmail() {
        return errorMessageDuplicateEmail.getText();
    }
    public static boolean isDisplayRegisterByPhone() {
        return isDisplayed(By.id("vn.finhay.finhay:id/tv_register_by_phone"));
    }
    public boolean isDisplayPhoneError() {
        return isDisplayed(By.id("vn.finhay.finhay:id/phone_error"));
    }
    public static boolean isDisplayFirstName() {
        return isDisplayed(By.id("vn.finhay.finhay:id/et_first_name"));
    }
    public static boolean isDisplayName() {
        return isDisplayed(By.id("vn.finhay.finhay:id/et_name"));
    }
    /*public void getAccountNameGoogle(String accountName) throws Exception {
        for (AndroidElement element:accountNameGoogle) {
            if((element.getText()).equals(accountName)) {
                element.click();
                break;
            } else {
                throw new Exception("Khong ton tai Acc Google");
            }
        }
    }*/
    public String getTextError()  {
        return popupMessageError.getText();
    }
    public boolean isEnbledContinueBtn() {
        return continueBtn.isEnabled();
    }
    public static boolean isEnbledContinueButton2() {
        return continue2.isEnabled();
    }
    public boolean isDisplayedContinueBtn() {
        return continueBtn.isDisplayed();
    }
    public static void clickToContinueBtn2() {
        continueBtn2.click();
    }
    public static void clickToContinueBtn3() {
        continueBtn3.click();
    }
    public static boolean isDisplayedPassword() {
        return isDisplayed(By.id("vn.finhay.finhay:id/et_password"));
    }
    public static boolean isDisplayedCheckPolicy() {
        return isDisplayed(By.id("vn.finhay.finhay:id/check_policy"));
    }
    public static boolean isDisplayedCheckOld() {
        return isDisplayed(By.id("vn.finhay.finhay:id/check_old"));
    }
    public static boolean isDisplayIconSteps3() {
        return isDisplayed(By.id("vn.finhay.finhay:id/status9"));
    }
    public static boolean isSelectedPolicy() {
        return checkPolicy.isSelected();
    }
    public static boolean isSelectedToOld() {
        return checkOld.isSelected();
    }
    public static void inputToPassword(String value) {
        password.sendKeys(value);
    }
    public static void clickToPolicy(){
        checkPolicy.click();
    }
    public  static void clickToOkButton()
    {
        okbutton.click();
    }
    public static void clickToOld() {
        checkOld.click();
    }
    public static void clickToContinue3() {
        continueBtn3.click();
    }
    public static boolean isEnabledContinueBtn3 () {
        return continueBtn3.isEnabled();
    }
    public static boolean isDisplayedLogout() {
        return isDisplayed(By.id("vn.finhay.finhay:id/tv_logout"));
    }
    public static boolean isDisplayedActivePhone() {
        return isDisplayed(By.id("vn.finhay.finhay:id/tv_active_phone"));
    }
    public static boolean isDisplayedActiveEmail() {
        return isDisplayed(By.id("vn.finhay.finhay:id/tv_active_email"));
    }
    public static boolean isDisplayedActiveCancel() {
        return isDisplayed(By.id("vn.finhay.finhay:id/tv_active_email"));
    }
    public static boolean isDisplayIntroVideo() {
        return isDisplayed(By.id("vn.finhay.finhay:id/introVideo"));
    }
    public static boolean isDisplayContinueToHome() {
        return isDisplayed(By.id("vn.finhay.finhay:id/tv_continue"));
    }
    public static void clickToContinueToHome() {
        continueToHome.click();
    }
    public static void clickToLogout() {
        logout.click();
    }
    public static void clickToCancel() {
        cancel.click();
    }
    public static void clickToActiveEmail() {
        activeEmail.click();
    }
    public static void clickToActivePhone() {
        activePhone.click();
    }
    public static boolean isDisplayedgetOtp() {
        return isDisplayed(By.id("vn.finhay.finhay:id/tv_active"));
    }
    public static boolean isDisplayedhaveOtp() {
        return isDisplayed(By.id("vn.finhay.finhay:id/hasCode"));
    }
    public static boolean isDisplayedtPhone() {
        return isDisplayed(By.id("vn.finhay.finhay:id/edt_phone"));
    }
    //    public String getPhoneDefaultOtp() {
//        return edtPhone.getText();
//    }
    public static void clickToAgree() {
        agreeBtn.click();
    }
    //    public static void deletePhoneOtp() {
//        edtPhone.clear();
//    }
//    public static void inputToPhone() {
//        edtPhone.clear();
//    }
    public static void clickTogetOtp() {
        getOtp.click();
    }
    public static String getMessageNoti() {
        return messageNoti.getText();
    }



}
