package cucumberOptions;

import core.AppiumBase;
import cucumber.api.CucumberOptions;
import cucumber.api.java.Before;
import cucumber.api.testng.CucumberFeatureWrapper;
import cucumber.api.testng.TestNGCucumberRunner;
import org.testng.annotations.*;

import java.net.MalformedURLException;

@CucumberOptions(
        features = "src/main/resources/features/register.feature",
        glue = "stepdefinition",
        //dryRun = true,
        plugin = { "json:target/cucumber.createDriverjson", "pretty",
                "html:target/cucumber-reports" },
        tags ={"@Register"}
)
public class RunCukeTest {
    private TestNGCucumberRunner testNGCucumberRunner;
    AppiumBase appiumBase = new AppiumBase();

    @BeforeTest
    public void initializeTest() throws MalformedURLException {
        appiumBase.createDriver();
    }

    @BeforeClass(alwaysRun = true)
    public void setUpClass(){
        testNGCucumberRunner = new TestNGCucumberRunner(this.getClass());
    }

    @Test(groups = "cucumber", description = "Runs cucumber feature", dataProvider = "features")
    public void feature(CucumberFeatureWrapper cucumberFeatureWrapper){
        testNGCucumberRunner.runCucumber(cucumberFeatureWrapper.getCucumberFeature());
    }
    @DataProvider
    public Object[][] features(){
        return testNGCucumberRunner.provideFeatures();
    }

    @AfterClass(alwaysRun = true)
    public void tearDownClass(){
        testNGCucumberRunner.finish();
    }

    @AfterTest
    public void setAfterTest() {
        appiumBase.tearDown();
    }

}
