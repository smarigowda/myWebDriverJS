var webdriver = require('selenium-webdriver');

var driver = new webdriver.Builder().
   withCapabilities(webdriver.Capabilities.chrome()).
   build();

driver.get('https://customer-perf.iml.pearson-intl.com');
// driver.findElement(webdriver.By.name('q')).sendKeys('webdriver');
driver.findElement(webdriver.By.linkText('Login')).click();
driver.findElement(webdriver.By.id('username')).sendKeys('Perf_Stu100218');
driver.findElement(webdriver.By.id('password')).sendKeys('123Sakai');
driver.findElement(webdriver.By.className('btn-submit')).click();
driver.findElement(webdriver.By.name('courseId')).click();
driver.findElement(webdriver.By.name('submit')).click();
driver.findElement(webdriver.By.partialLinkText('Join your Instructor')).click();
driver.findElement(webdriver.By.id('accessCode')).sendKeys('100210-0183');
driver.findElement(webdriver.By.name('submit')).click();
driver.findElement(webdriver.By.linkText('Join')).click();

// driver.wait(function() {
//  return driver.getTitle().then(function(title) {
//    return title === 'webdriver - Google Search';
//  });
// }, 10000);

// driver.quit();
