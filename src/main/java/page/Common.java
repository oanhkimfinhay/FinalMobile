package page;

import core.AppiumBase;
import io.appium.java_client.TouchAction;
import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.android.AndroidElement;
import io.appium.java_client.pagefactory.AndroidFindBy;
import io.appium.java_client.pagefactory.AppiumFieldDecorator;
import io.appium.java_client.touch.TapOptions;
import io.appium.java_client.touch.offset.ElementOption;
import io.appium.java_client.touch.offset.PointOption;
import org.apache.commons.lang3.StringUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.support.PageFactory;

import java.util.HashMap;


public class Common extends AppiumBase {
    public Common() {
        PageFactory.initElements(new AppiumFieldDecorator(driver), this);
    }
    @AndroidFindBy(id = "vn.finhay.finhay:id/backBtn")
    private AndroidElement backBtn;
    @AndroidFindBy(id = "android:id/button1")
    private AndroidElement okBtn;
    @AndroidFindBy(id = "android:id/message")
    private AndroidElement messageText;

    public void backToPreviousPage() {
        backBtn.click();
    }
    public void clickToOkPopup() {
        okBtn.click();
    }
    public String getTextMessage() {
        return messageText.getText();
    }


    public void leftRightSwipe() {

        Dimension size = driver.manage().window().getSize();

        int startx = (int) (size.width * 0.90);

        int endx = (int) (size.width * 0.10);

        int starty = size.height / 2;

        swipe(startx, endx, starty, startx, starty);

    }


    public void rightLeftSwipe() {

        Dimension size = driver.manage().window().getSize();

        int startx = (int) (size.width * 0.90);

        int endx = (int) (size.width * 0.10);

        int starty = size.height / 2;

        swipe(startx, startx, starty, endx, starty);

    }


    public static void swipeMobileDown() {

        Dimension size = driver.manage().window().getSize();

        int starty = (int) (size.height * 0.8);

        int endy = (int) (size.height * 0.2);

        int startx = size.width / 2;

        swipe(startx, startx, endy, startx, starty);

    }


    public static void swipeMobileUp() {

        Dimension size = driver.manage().window().getSize();

        int starty = (int) (size.height * 0.7);

        int endy = (int) (size.height * 0.3);

        int startx = size.width / 2;

        swipe(startx, startx, starty, startx, endy);

    }


    public static void swipe(int i, int startx, int starty, int endx, int endy) {

        new TouchAction(driver).longPress(PointOption.point(startx, starty))

                .moveTo(PointOption.point(endx, endy))

                .release().perform();

    }

    public void tapByElement (AndroidElement androidElement) {
        TouchAction action = new TouchAction(driver);
        action.tap(TapOptions.tapOptions().withElement(ElementOption.element(androidElement))).perform();
    }

    public void swipeUpInContainer(By locator, AndroidElement androidElementContainer, int count){
        boolean isVisible = checkElementDisplayed(locator);
        if (isVisible){
            return;
        }
        int startx = 0;
        int starty = 0;
        int endx = 0;
        int endy = 0;

        startx = endx = androidElementContainer.getLocation().getX() + Math.round(androidElementContainer.getSize().getWidth() / 2);

        starty = (int) (androidElementContainer.getLocation().getY() + Math.round(0.8 * androidElementContainer.getSize().getHeight()));
        endy = (int) (androidElementContainer.getLocation().getY() + Math.round(0.2 * androidElementContainer.getSize().getHeight()));
        System.out.println(startx+"_"+ starty+"_"+endx+"_"+ endy);
        for (int i = 0; i < count; ++i) {
            swipe(startx, startx, starty, endx, endy);
            isVisible = checkElementDisplayed(locator);
            if (isVisible){
                break;
            }
        }
    }

    public static void swipeDownInContainer(By locator, AndroidElement androidElementContainer, int count){
        boolean isVisible = checkElementDisplayed(locator);
        if (isVisible){
            return;
        }
        int startx = 0;
        int starty = 0;
        int endx = 0;
        int endy = 0;

        startx = endx = androidElementContainer.getLocation().getX() + Math.round(androidElementContainer.getSize().getWidth() / 2);

        starty = (int) (androidElementContainer.getLocation().getY() + Math.round(0.2 * androidElementContainer.getSize().getHeight()));
        endy = (int) (androidElementContainer.getLocation().getY() + Math.round(0.8 * androidElementContainer.getSize().getHeight()));
        System.out.println(startx+"_"+ starty+"_"+endx+"_"+ endy);
        for (int i = 0; i < count; ++i) {
            swipe(startx, startx, starty, endx, endy);
            isVisible = checkElementDisplayed(locator);
            if (isVisible){
                break;
            }
        }
    }

    public void swipeLeftInContainer(By locator, AndroidElement androidElementContainer, int count){
        boolean isVisible = checkElementDisplayed(locator);
        if (isVisible){
            return;
        }
        int startx = 0;
        int starty = 0;
        int endx = 0;
        int endy = 0;

        starty = endy = androidElementContainer.getLocation().getY() + Math.round(androidElementContainer.getSize().getHeight() / 2);

        startx = (int) (androidElementContainer.getLocation().getX() + Math.round(0.8 * androidElementContainer.getSize().getWidth()));
        endx = (int) (androidElementContainer.getLocation().getX() + Math.round(0.2 * androidElementContainer.getSize().getWidth()));
        System.out.println(startx+"_"+ starty+"_"+endx+"_"+ endy);
        for (int i = 0; i < count; ++i) {
            swipe(startx, startx, starty, endx, endy);
            isVisible = checkElementDisplayed(locator);
            if (isVisible){
                break;
            }
        }
    }
    public void swipeRightInContainer(By locator, AndroidElement androidElementContainer, int count){
        boolean isVisible = checkElementDisplayed(locator);
        if (isVisible){
            return;
        }
        int startx = 0;
        int starty = 0;
        int endx = 0;
        int endy = 0;

        starty = endy = androidElementContainer.getLocation().getY() + Math.round(androidElementContainer.getSize().getHeight() / 2);

        startx = (int) (androidElementContainer.getLocation().getX() + Math.round(0.2 * androidElementContainer.getSize().getWidth()));
        endx = (int) (androidElementContainer.getLocation().getX() + Math.round(0.8 * androidElementContainer.getSize().getWidth()));
        System.out.println(startx+"_"+ starty+"_"+endx+"_"+ endy);
        for (int i = 0; i < count; ++i) {
            swipe(startx, startx, starty, endx, endy);
            isVisible = checkElementDisplayed(locator);
            if (isVisible){

                break;
            }
        }
    }
    public static boolean checkElementDisplayed(By locator) {
        boolean isDisplay = false;
        AndroidElement androidElement = null;
        try {
            androidElement = (AndroidElement) driver.findElement(locator);
        }catch (Exception e){

        }
        if (null != androidElement) {
            try {
                if (null != androidElement.getLocation()) {
                    int x = androidElement.getLocation().getX();
                    int y = androidElement.getLocation().getY();
                    Dimension windowSize = driver.manage().window().getSize();
                    String deviceScreenSize = "";

                    int yMaxScreen = (int) Math.round(windowSize.getHeight());
                    int xMaxScreen = (int) Math.round(windowSize.getWidth());
                    if (driver instanceof AndroidDriver) {
                        deviceScreenSize = StringUtils.substringBetween(driver.toString(), "deviceScreenSize=",
                                ",");
                    }
                    if (null != deviceScreenSize && !deviceScreenSize.equals("")) {
                        yMaxScreen = Integer.parseInt(deviceScreenSize.split("x")[1]);
                        xMaxScreen = Integer.parseInt(deviceScreenSize.split("x")[0]);
                    }
                    if (x >= 0 && x < xMaxScreen && y >= 0 && y < yMaxScreen) {

                        isDisplay = true;
                    }
                }
            } catch (Exception e) {

            }

        }
        return isDisplay;
    }
    public static void verticalSwipe()
    {
        Dimension dim = driver.manage().window().getSize();
        int height = dim.getHeight();
        int width = dim.getWidth();
        int x = width/2;
        int starty = (int)(height*0.80);
        int endy = (int)(height*0.20);
        swipe(x, starty, x, endy, 500);

    }
}
