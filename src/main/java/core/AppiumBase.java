package core;

import io.appium.java_client.PerformsTouchActions;
import io.appium.java_client.TouchAction;
import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.android.AndroidElement;

import io.appium.java_client.remote.MobileCapabilityType;

import org.openqa.selenium.By;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.remote.DesiredCapabilities;

import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.net.MalformedURLException;
import java.net.URL;
import java.util.HashMap;

public class AppiumBase {
    public static AndroidDriver driver;
    public static WebDriverWait wait;
    public  static AndroidElement element;
    public static JavascriptExecutor jsExecutor;

    public void createDriver() throws MalformedURLException {
        DesiredCapabilities capabilities = new DesiredCapabilities();
        capabilities.setCapability("platformName", "Android");
        capabilities.setCapability("udid", "emulator-5554");
        capabilities.setCapability("automationName", "UiAutomator2");
        capabilities.setCapability("appPackage", "vn.finhay.finhay");
        capabilities.setCapability("appActivity", ".screens.splashScreen.SplashScreen");
        capabilities.setCapability(MobileCapabilityType.NEW_COMMAND_TIMEOUT, "300000");

        driver = new AndroidDriver(new URL("http://0.0.0.0:4724/wd/hub"), capabilities);
        wait = new WebDriverWait(driver, 40);


    }

    public void tearDown(){
        driver.closeApp();
        driver.quit();
    }
    protected static boolean isDisplayed(By locator) {
        try {
            wait.until(ExpectedConditions.visibilityOfElementLocated(locator));
            return true;
        } catch (Exception e) {
            return false;
        }
    }

    protected static void isVisibleAndClickable(By locator) {
        wait.until(ExpectedConditions.elementToBeClickable(locator));
    }
    protected static void scrollToElement(String locator) {
        element = (AndroidElement) driver.findElement(By.id(locator));
        jsExecutor.executeScript("arguments[0].scrollIntoView(true);", element);
    }
    public static void clickToElementByJS(String locator) {
        element = (AndroidElement) driver.findElement(By.id(locator));
        jsExecutor.executeScript("arguments[0].click();", element);
    }

}



