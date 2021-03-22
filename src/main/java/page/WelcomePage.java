package pages;

import core.AppiumBase;
import io.appium.java_client.TouchAction;
import io.appium.java_client.android.AndroidElement;
import io.appium.java_client.pagefactory.AndroidFindBy;
import io.appium.java_client.pagefactory.AppiumFieldDecorator;
import org.openqa.selenium.By;
import org.openqa.selenium.support.PageFactory;

public class WelcomePage extends AppiumBase {
    public WelcomePage() {
        PageFactory.initElements(new AppiumFieldDecorator(driver),this);
    }
    @AndroidFindBy(id = "vn.finhay.finhay:id/tvSkip")
    private AndroidElement skipBtn;
    @AndroidFindBy(id = "vn.finhay.finhay:id/lnNext")
    private AndroidElement nextBtn;
    @AndroidFindBy(id = "vn.finhay.finhay:id/tv_tittle")
    private AndroidElement tittlePage;
    @AndroidFindBy(id = "vn.finhay.finhay:id/tvStart")
    private AndroidElement startBtn;
    // page welcome to login or register
    @AndroidFindBy(id = "vn.finhay.finhay:id/tv_register")
    private static AndroidElement registerBtn;
    @AndroidFindBy(id = "vn.finhay.finhay:id/tv_login")
    private AndroidElement loginBtn;
    @AndroidFindBy(id = "android:id/content")
    private AndroidElement touchOutside;
    @AndroidFindBy(id = "vn.finhay.finhay:id/tvSkip")
    private static AndroidElement skipBtn1;
    @AndroidFindBy(id = "vn.finhay.finhay:id/tv_login")
    private AndroidElement loginBtn1;
    @AndroidFindBy(id = "vn.finhay.finhay:id/editEmail")
    private AndroidElement emailTxt1;
    @AndroidFindBy(id = "vn.finhay.finhay:id/editPass")
    private AndroidElement passwordTxt1;
    @AndroidFindBy(id = "vn.finhay.finhay:id/loginBtn")
    private AndroidElement loginBtn2;




    public static void clickToSkipBtn1() {
        isVisibleAndClickable(By.id("vn.finhay.finhay:id/tvSkip"));
        skipBtn1.click();
    }
    public void clickToLoginBtn1() {
        isVisibleAndClickable(By.id("vn.finhay.finhay:id/tv_login"));
        loginBtn1.click();
    }
    public void inputToEmailTxt1() {
        isVisibleAndClickable(By.id("vn.finhay.finhay:id/editEmail"));
        emailTxt1.sendKeys("0987654322");
    }
    public void inputToPasswordTxt1() {
        isVisibleAndClickable(By.id("vn.finhay.finhay:id/editPass"));
        passwordTxt1.sendKeys("12345678");
    }
    public void clickToLoginBtn2() {
        isVisibleAndClickable(By.id("vn.finhay.finhay:id/loginBtn"));
        loginBtn2.click();
    }



    public void clickToSkipBtn() {
        isVisibleAndClickable(By.id("vn.finhay.finhay:id/tvSkip"));
        skipBtn.click();
    }
    public void clickToNextBtn() {
        isVisibleAndClickable(By.id("vn.finhay.finhay:id/lnNext"));
        nextBtn.click();
    }
    public void clickToStartBtn() {
        isVisibleAndClickable(By.id("vn.finhay.finhay:id/tvStart"));
        startBtn.click();
    }
    public String getTitlePage() {
        isVisibleAndClickable(By.id("vn.finhay.finhay:id/tv_tittle"));
        return tittlePage.getText();
    }
    public void setAirplaneMode() {
        driver.toggleWifi();;
    }
    public void resetApp() {
        driver.resetApp();
    }
    // hiện tại hàm này đang
    public void setAndroidDeviceAirplaneMode(boolean status) {

        try {

            String airplaneModeStatus = "";

            if (status) {

                airplaneModeStatus = "1";

            } else {

                airplaneModeStatus = "0";

            }

            String sdkPath = System.getenv("ANDROID_HOME") + "/platform-tools/";
            System.out.println(System.getenv("ANDROID_HOME"));

            Runtime.getRuntime().exec(sdkPath + "adb shell settings put global airplane_mode_on " + airplaneModeStatus);

            Thread.sleep (1000);

            Process process = Runtime.getRuntime ().exec(sdkPath + "adb shell am broadcast -a android.intent.action.AIRPLANE_MODE");

            process.waitFor();

            Thread. sleep (4000);

            if (status) {

                System.out.println("Android device Airplane mode status is set to ON");

            } else {

                System.out.println("Android device Airplane mode status is set to OFF");

            }
        } catch (Exception e) {
            System. out .println(e.getMessage());
            System.out.println("Unable to set android device Airplane mode.");
        }

    }

    public void clickToLogin() {
        isVisibleAndClickable(By.id("vn.finhay.finhay:id/tv_login"));
        loginBtn.click();
    }
    public static void clickToRegisterBtn() {
        isVisibleAndClickable(By.id("vn.finhay.finhay:id/tv_register"));
        registerBtn.click();
    }

    public void clickTouchOutside() {
        touchOutside.click();
    }
    public boolean isDisplayLoginBtn() {
        return isDisplayed(By.id("vn.finhay.finhay:id/tv_login"));
    }
    public static boolean isDisplayRegisterBtn() {
        return isDisplayed(By.id("vn.finhay.finhay:id/tv_register"));
    }


}
