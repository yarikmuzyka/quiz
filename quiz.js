const BANK = [
  {q:"Який метод повертає один SelenideElement за CSS-селектором?",o:['$$("sel")','$("sel")','find("sel")','getElement("sel")'],c:1,e:'$() — основний метод для пошуку одного елемента за CSS або XPath.'},
  {q:'Який метод повертає колекцію елементів?',o:['$()','findAll()','$$()','elements()'],c:2,e:'$$() повертає ElementsCollection — колекцію всіх відповідних елементів.'},
  {q:'Яка умова перевіряє що елемент видимий?',o:['Condition.exist','Condition.present','Condition.visible','Condition.displayed'],c:2,e:'Condition.visible — елемент у DOM та видимий. exist/present — лише присутність у DOM.'},
  {q:'Як відкрити URL у Selenide?',o:['driver.get(url)','Selenide.navigate(url)','open(url)','browser.open(url)'],c:2,e:'Статичний метод open(url) — стандартний спосіб навігації у Selenide.'},
  {q:'Яким методом завантажити файл через input type file?',o:['setValue(path)','click()','uploadFile(new File(path))','attach(path)'],c:2,e:'uploadFile(new File(path)) коректно завантажує файл навіть для прихованих input-елементів.'},
  {q:'Що робить shouldBe()?',o:['Клікає якщо видимий','Перевіряє умову з очікуванням і кидає AssertionError','Повертає boolean','Встановлює Thread.sleep()'],c:1,e:'shouldBe() — assertion з вбудованим очікуванням до таймауту, кидає AssertionError при невдачі.'},
  {q:'Яке значення таймауту за замовчуванням у Selenide?',o:['2 секунди','4 секунди','10 секунд','30 секунд'],c:1,e:'За замовчуванням Selenide чекає 4 секунди. Змінюється через Configuration.timeout.'},
  {q:'Як змінити глобальний таймаут?',o:['Selenide.setTimeout(ms)','Configuration.timeout = ms','WebDriver.manage().timeouts().implicitlyWait()','SelenideConfig.wait = ms'],c:1,e:'Configuration.timeout = N задає таймаут у мілісекундах для всіх очікувань Selenide.'},
  {q:'Яка умова перевіряє що елемент є в DOM (навіть прихований)?',o:['Condition.visible','Condition.exist','Condition.hidden','Condition.inDOM'],c:1,e:'Condition.exist (або Condition.present) — елемент є в DOM незалежно від видимості.'},
  {q:'Як перевірити що елемент НЕ видимий?',o:['shouldBe(Condition.hidden)','shouldNotBe(Condition.visible)','shouldBe(Condition.invisible)','A або B'],c:3,e:'Обидва варіанти коректні: shouldBe(hidden) та shouldNotBe(visible) еквівалентні.'},
  {q:'Як клікнути на елемент у Selenide?',o:['$(sel).click()','$(sel).perform(click)','Actions.click($(sel))','$(sel).trigger("click")'],c:0,e:'$(sel).click() — прямий виклик методу на SelenideElement.'},
  {q:'Як ввести текст у поле вводу, очистивши попередній вміст?',o:['$(sel).type(text)','$(sel).sendKeys(text)','$(sel).setValue(text)','$(sel).input(text)'],c:2,e:'setValue() очищає поле і вводить новий текст. sendKeys() додає до існуючого.'},
  {q:'Як отримати текст елемента?',o:['$(sel).getText()','$(sel).text()','$(sel).getAttribute("text")','$(sel).getInnerText()'],c:1,e:'$(sel).text() повертає видимий текстовий вміст елемента.'},
  {q:'Як перевірити текст елемента?',o:['$(sel).shouldHave(Condition.text("Hi"))','$(sel).assertEquals("Hi")','$(sel).shouldBe(Condition.text("Hi"))','$(sel).hasText("Hi")'],c:0,e:'shouldHave(Condition.text()) — перевірка тексту з очікуванням. text() перевіряє входження підрядка.'},
  {q:'Що перевіряє Condition.exactText()?',o:['Входження підрядка','Точний збіг тексту','Регулярний вираз','Текст без урахування регістру'],c:1,e:'exactText() перевіряє повний збіг тексту елемента, на відміну від text() який шукає підрядок.'},
  {q:'Як перевірити значення атрибута href?',o:['shouldBe(Condition.attribute("href","url"))','shouldHave(Condition.attribute("href","url"))','getAttribute("href").equals("url")','hasAttribute("href","url")'],c:1,e:'shouldHave(Condition.attribute(name, value)) — перевірка атрибута з очікуванням.'},
  {q:'Яка умова перевіряє CSS-клас елемента?',o:['Condition.attribute("class","name")','Condition.cssClass("name")','Condition.hasClass("name")','Condition.className("name")'],c:1,e:'Condition.cssClass("name") перевіряє наявність конкретного CSS-класу у елемента.'},
  {q:'Як перевірити що checkbox відмічений?',o:['shouldBe(Condition.selected)','shouldBe(Condition.checked)','shouldHave(Condition.attribute("checked"))','A або B'],c:3,e:'Обидва Condition.selected і Condition.checked перевіряють стан checkbox/radio.'},
  {q:'Як отримати значення атрибута?',o:['$(sel).attr("name")','$(sel).getAttribute("name")','$(sel).get("name")','A та B'],c:3,e:'Обидва методи attr() та getAttribute() повертають значення атрибута.'},
  {q:'Як отримати значення CSS-властивості?',o:['$(sel).css("prop")','$(sel).getCssValue("prop")','$(sel).style("prop")','A та B'],c:3,e:'getCssValue() та css() — обидва методи повертають значення CSS-властивості.'},
  {q:'Як вибрати опцію у select за текстом?',o:['$(sel).setValue("text")','$(sel).selectOption("text")','$(sel).click(); $(opt).click()','new Select($(sel)).selectByText("text")'],c:1,e:'selectOption("text") — зручний метод Selenide для вибору опції за видимим текстом.'},
  {q:'Як вибрати опцію у select за value?',o:['selectOption("value")','selectOptionByValue("value")','setValue("value")','A або C'],c:3,e:'selectOptionByValue() або setValue() — обидва працюють для вибору за атрибутом value.'},
  {q:'Як зробити hover на елемент?',o:['$(sel).hover()','$(sel).mouseOver()','Actions.moveToElement($(sel))','$(sel).moveTo()'],c:0,e:'$(sel).hover() — вбудований метод Selenide для mouse over без Actions API.'},
  {q:'Як виконати double-click?',o:['$(sel).dblclick()','$(sel).doubleClick()','$(sel).click().click()','Actions.doubleClick($(sel))'],c:0,e:'$(sel).dblclick() — метод подвійного кліку в Selenide.'},
  {q:'Як виконати right-click?',o:['$(sel).rightClick()','$(sel).contextClick()','$(sel).click(RIGHT)','$(sel).contextmenu()'],c:1,e:'$(sel).contextClick() викликає контекстне меню (правий клік).'},
  {q:'Як натиснути клавішу Enter на елементі?',o:['$(sel).sendKeys(Keys.ENTER)','$(sel).pressEnter()','$(sel).keyPress(Keys.ENTER)','A або B'],c:3,e:'Обидва варіанти коректні: sendKeys(Keys.ENTER) та pressEnter().'},
  {q:'Як очистити поле вводу?',o:['$(sel).clear()','$(sel).setValue("")','$(sel).val("")','A та B'],c:3,e:'clear() та setValue("") обидва очищають поле. clear() — Selenium метод, setValue("") — Selenide.'},
  {q:'Що означає $$(sel).first()?',o:['Перший елемент колекції','Найкращий збіг','Елемент з індексом 1','Головний елемент'],c:0,e:'first() повертає перший SelenideElement з колекції, аналог get(0).'},
  {q:'Що означає $$(sel).last()?',o:['Останній доданий','Найдальший від viewport','Останній елемент колекції','Елемент з найбільшим z-index'],c:2,e:'last() повертає останній елемент колекції.'},
  {q:'Як отримати елемент за індексом у колекції?',o:['$$(sel)[i]','$$(sel).get(i)','$$(sel).item(i)','B та C'],c:1,e:'$$(sel).get(i) — отримання елемента за індексом (з нуля).'},
  {q:'Як перевірити кількість елементів у колекції?',o:['$$(sel).shouldHave(CollectionCondition.size(n))','$$(sel).count() == n','$$(sel).shouldBe(size(n))','$$(sel).length == n'],c:0,e:'CollectionCondition.size(n) — перевірка розміру колекції з очікуванням.'},
  {q:'Яка умова перевіряє що колекція не порожня?',o:['CollectionCondition.notEmpty()','CollectionCondition.sizeGreaterThan(0)','CollectionCondition.size(1)','A або B'],c:3,e:'notEmpty() та sizeGreaterThan(0) — обидва перевіряють що колекція містить хоча б один елемент.'},
  {q:'Як перейти до iframe?',o:['$(sel).switchTo()','switchTo().frame($(sel))','$(sel).frame()','Selenide.switchToFrame(sel)'],c:0,e:'$(sel).switchTo() перемикає контекст до iframe represented by the element.'},
  {q:'Як повернутись з iframe до основного контенту?',o:['switchTo().defaultContent()','Selenide.switchBack()','$(sel).switchBack()','switchTo().parent()'],c:0,e:'switchTo().defaultContent() — стандартний WebDriver метод, доступний через Selenide.switchTo().'},
  {q:'Як перейти до нового вікна/таба?',o:['switchTo().window(title)','Selenide.switchWindow(title)','switchTo().newWindow()','switchTo().tab(index)'],c:0,e:'switchTo().window(title) перемикає на вікно за заголовком або handle.'},
  {q:'Яким методом Selenide робить скріншот?',o:['Selenide.screenshot("name")','takeScreenshot("name")','Screenshots.take("name")','$(sel).screenshot()'],c:0,e:'Selenide.screenshot("name") зберігає скріншот і повертає шлях до файлу.'},
  {q:'Де за замовчуванням зберігаються скріншоти Selenide?',o:['./screenshots','./target/screenshots','./build/reports/tests','./test-output'],c:1,e:'За замовчуванням скріншоти зберігаються у target/screenshots (Maven-проект).'},
  {q:'Як налаштувати папку для скріншотів?',o:['Selenide.screenshotDir = path','Configuration.reportsFolder = path','Configuration.screenshotPath = path','Screenshots.setFolder(path)'],c:1,e:'Configuration.reportsFolder задає папку для скріншотів та інших звітів.'},
  {q:'Що таке SelenideElement?',o:['Wrapper над WebElement з lazy init та assertions','Підклас WebDriver','Інтерфейс для PageObject','Спеціальний тип локатора'],c:0,e:'SelenideElement — обгортка над WebElement з ледачою ініціалізацією, автоочікуванням і зручними assertions.'},
  {q:'Яке призначення Configuration.browser?',o:['Встановлює версію браузера','Вказує який браузер використовувати','Шлях до WebDriver','Режим headless'],c:1,e:'Configuration.browser = "chrome"/"firefox"/"edge" — вибір браузера для тестів.'},
  {q:'Як увімкнути headless-режим?',o:['Configuration.headless = true','Configuration.browser = "headless"','ChromeOptions.setHeadless(true)','Selenide.headless()'],c:0,e:'Configuration.headless = true — найпростіший спосіб увімкнути headless у Selenide.'},
  {q:'Що робить Selenide.closeWebDriver()?',o:['Закриває поточну вкладку','Очищає cookies','Закриває WebDriver і браузер','Перезапускає сесію'],c:2,e:'closeWebDriver() закриває WebDriver і всі вікна браузера. Зазвичай викликається в @AfterAll.'},
  {q:'Як Selenide обробляє StaleElementReferenceException?',o:['Кидає виняток відразу','Автоматично повторює пошук елемента','Перезавантажує сторінку','Потрібно обробляти вручну'],c:1,e:'Selenide автоматично обробляє StaleElementReferenceException, повторно знаходячи елемент.'},
  {q:'Що таке soft assertions у Selenide?',o:['Assertions що не зупиняють тест при помилці','Assertions для мобільних','Assertions з меншим таймаутом','Assertions тільки для тексту'],c:0,e:'Soft assertions збирають всі помилки і показують їх разом в кінці тесту, не зупиняючи його.'},
  {q:'Як увімкнути soft assertions у JUnit5?',o:['@ExtendWith(SoftAssertions.class)','SoftAssertions.assertSoftly(...)','@ExtendWith(SoftAssertionsExtension.class)','Configuration.softAssertions = true'],c:2,e:'@ExtendWith(SoftAssertionsExtension.class) — JUnit5 extension для автоматичних soft assertions.'},
  {q:'Що таке Condition.matchText()?',o:['Точний збіг','Перевірка регулярним виразом','Пошук підрядка без урахування регістру','Перевірка placeholder'],c:1,e:'Condition.matchText(regex) перевіряє текст елемента за регулярним виразом.'},
  {q:'Яким методом виконати JavaScript у Selenide?',o:['Selenide.runJS("script")','executeJavaScript("script")','Selenide.executeScript("script")','js("script")'],c:2,e:'Selenide.executeScript() — обгортка над JavascriptExecutor.executeScript().'},
  {q:'Як перевірити значення input через value?',o:['shouldHave(Condition.value("text"))','shouldBe(Condition.value("text"))','shouldHave(Condition.attribute("value","text"))','A або C'],c:3,e:'Condition.value() та attribute("value") — обидва перевіряють значення атрибута value.'},
  {q:'Як знайти дочірній елемент всередині батьківського?',o:['$(parent).$(child)','$(parent).find(child)','$(parent + " " + child)','A та B'],c:3,e:'$(parent).$(child) та $(parent).find(child) — обидва методи для пошуку вкладених елементів.'},
  {q:'Як знайти всі дочірні елементи?',o:['$(parent).$$(child)','$(parent).findAll(child)','$(parent).children(child)','A та B'],c:3,e:'$$(child) та findAll(child) на SelenideElement шукають всі відповідні дочірні елементи.'},
  {q:"Що таке ElementsCollection.filterBy()?",o:['Сортує елементи','Фільтрує колекцію за умовою','Знаходить перший збіг','Видаляє елементи з DOM'],c:1,e:'filterBy(condition) повертає нову колекцію з елементами що відповідають умові.'},
  {q:'Що робить $$(sel).excludeWith(condition)?',o:['Видаляє елементи з DOM','Повертає колекцію без елементів що відповідають умові','Приховує елементи','Повертає null для невидимих'],c:1,e:'excludeWith(condition) — протилежність filterBy, виключає елементи що відповідають умові.'},
  {q:'Яка умова перевіряє що поле disabled?',o:['Condition.readonly','Condition.disabled','Condition.notEnabled','Condition.attribute("disabled")'],c:1,e:'Condition.disabled перевіряє що елемент має атрибут disabled.'},
  {q:'Яка умова перевіряє що поле enabled?',o:['Condition.enabled','Condition.active','Condition.notDisabled','Condition.interactive'],c:0,e:'Condition.enabled перевіряє що елемент активний і доступний для взаємодії.'},
  {q:'Як перевірити що елемент сфокусований?',o:['Condition.focused','Condition.active','Condition.hasFocus','shouldBe(Condition.focused)'],c:3,e:'shouldBe(Condition.focused) перевіряє що елемент наразі має фокус.'},
  {q:'Як завантажити файл (download) у Selenide?',o:['$(sel).download()','Selenide.download($(sel))','$(sel).downloadFile()','Files.download($(sel))'],c:0,e:'$(sel).download() завантажує файл і повертає об\'єкт File.'},
  {q:'Що таке Configuration.fileDownload?',o:['Папка завантажень','Метод завантаження файлів (HTTPGET, FOLDER, CDP)','Таймаут завантаження','Дозволені типи файлів'],c:1,e:'Configuration.fileDownload визначає стратегію завантаження: HTTPGET, FOLDER або CDP.'},
  {q:'Що таке Configuration.proxyEnabled?',o:['Використання системного proxy','Вмикає вбудований proxy Selenide для перехоплення запитів','Анонімний режим','Блокування зовнішніх запитів'],c:1,e:'proxyEnabled = true вмикає вбудований BrowserMob proxy для перехоплення трафіку і завантажень.'},
  {q:'Як перевірити URL сторінки?',o:['Selenide.url().equals(url)','webdriver().getCurrentUrl()','webdriver().shouldHave(urlContaining(url))','Selenide.webdriver().shouldHave(Condition.url(url))'],c:2,e:'webdriver().shouldHave(urlContaining()) або urlStartingWith() — перевірка URL з очікуванням.'},
  {q:'Як перевірити заголовок сторінки?',o:['Selenide.title() == title','webdriver().shouldHave(title(title))','$(title).shouldHave(text(title))','Selenide.shouldHaveTitle(title)'],c:1,e:'webdriver().shouldHave(title("text")) — перевірка title сторінки.'},
  {q:'Що таке Selenide.refresh()?',o:['Скидає таймаут','Перезавантажує сторінку','Очищає cookies','Закриває popup'],c:1,e:'Selenide.refresh() перезавантажує поточну сторінку (аналог F5).'},
  {q:'Яким методом повернутись на попередню сторінку?',o:['Selenide.back()','Selenide.goBack()','navigate().back()','browser.back()'],c:0,e:'Selenide.back() — зручний статичний метод навігації назад.'},
  {q:'Що робить $(sel).scrollTo()?',o:['Скролить сторінку до елемента','Скролить всередині елемента','Перевіряє видимість після скролу','Переміщує елемент'],c:0,e:'$(sel).scrollTo() скролить viewport до елемента, щоб він став видимим.'},
  {q:'Як виконати скрол до елемента через JS?',o:['$(sel).scrollIntoView(true)','$(sel).scrollTo()','Selenide.scroll(sel)','executeScript("scroll", $(sel))'],c:0,e:'$(sel).scrollIntoView(true) виконує JavaScript scrollIntoView для точного позиціонування.'},
  {q:'Що таке $x() у Selenide?',o:['Пошук за XPath','Пошук за XML','Спеціальний jQuery-селектор','Зарезервовано для майбутнього'],c:0,e:'$x("//xpath") — скорочення для $(By.xpath("//xpath")).'},
  {q:'Як знайти елемент за текстом посилання?',o:['$(By.linkText("text"))','$a("text")','$(By.partialLinkText("text"))','A або C'],c:3,e:'By.linkText() для точного збігу та By.partialLinkText() для часткового — обидва працюють у Selenide.'},
  {q:'Як викликати стандартний WebDriver з Selenide?',o:['Selenide.driver()','WebDriverRunner.getWebDriver()','Configuration.driver','Selenide.getDriver()'],c:1,e:'WebDriverRunner.getWebDriver() повертає поточний WebDriver екземпляр.'},
  {q:'Що таке WebDriverRunner.setWebDriver()?',o:['Створює новий driver','Встановлює зовнішній WebDriver як поточний','Налаштовує capabilities','Реєструє listener'],c:1,e:'setWebDriver() дозволяє передати власний WebDriver екземпляр, якщо Selenide не повинен його створювати.'},
  {q:'Яким способом встановити Chrome options у Selenide?',o:['Configuration.chromeOptions','new ChromeOptions() передати в Configuration.browserCapabilities','Configuration.chromeSwitches','Selenide.setChromeOptions()'],c:1,e:'Створіть ChromeOptions і передайте в Configuration.browserCapabilities.'},
  {q:'Що таке @Rule SelenideRule (JUnit4)?',o:['Автоматично закриває браузер','Робить скріншот при провалі тесту','Ініціалізує driver','Налаштовує звіти'],c:1,e:'SelenideRule автоматично робить скріншот при провалі тесту в JUnit4.'},
  {q:'Чим відрізняється shouldBe() від shouldHave()?',o:['shouldBe для стану, shouldHave для властивостей — семантично','shouldBe швидший','shouldHave кидає інший виняток','Немає різниці, це аліаси'],c:3,e:'shouldBe() і shouldHave() — аліаси, функціонально ідентичні. Різниця лише семантична.'},
  {q:'Що таке Condition.and()?',o:['Логічне OR двох умов','Логічне AND двох умов','Послідовна перевірка','Умова з кастомним таймаутом'],c:1,e:'Condition.and("name", cond1, cond2) — перевіряє що обидві умови виконані одночасно.'},
  {q:'Що таке Condition.or()?',o:['Логічне OR — хоча б одна умова виконана','Логічне AND','Спроба кількох локаторів','Умова за замовчуванням'],c:0,e:'Condition.or("name", cond1, cond2) — виконана якщо хоча б одна з умов true.'},
  {q:'Як перевірити що елемент НЕ існує в DOM?',o:['shouldBe(Condition.hidden)','shouldNotBe(Condition.exist)','shouldBe(Condition.missing)','B або C'],c:3,e:'shouldNotBe(exist) та shouldBe(missing) — обидва перевіряють відсутність елемента в DOM.'},
  {q:'Як передати кілька клавіш одночасно (Ctrl+A)?',o:['$(sel).sendKeys(Keys.chord(Keys.CONTROL,"a"))','$(sel).pressKeys(Keys.CONTROL, "a")','$(sel).hotkey("ctrl+a")','$(sel).keyDown(Keys.CONTROL).sendKeys("a")'],c:0,e:'Keys.chord() об\'єднує клавіші в одну строку для sendKeys.'},
  {q:'Що таке ElementsCollection.texts()?',o:['Повертає перший текст','Повертає List<String> текстів всіх елементів','Перевіряє тексти','Конкатенує тексти'],c:1,e:'texts() повертає список рядків з текстами всіх елементів колекції.'},
  {q:'Яка умова для колекції перевіряє конкретні тексти?',o:['CollectionCondition.texts("a","b")','CollectionCondition.exactTexts("a","b")','CollectionCondition.containsTexts("a","b")','A або B'],c:3,e:'texts() — входження, exactTexts() — точний збіг. Обидва перевіряють всі елементи колекції.'},
  {q:'Що таке SelenideAppiumDriver?',o:['Driver для мобільного тестування через Appium','Driver для тестування API','Headless Chrome driver','Remote driver для Grid'],c:0,e:'SelenideAppiumDriver — інтеграція Selenide з Appium для мобільного тестування.'},
  {q:'Як налаштувати Remote WebDriver (Selenium Grid)?',o:['Configuration.remote = gridUrl','Configuration.grid = gridUrl','Selenide.setRemote(gridUrl)','WebDriverRunner.useGrid(gridUrl)'],c:0,e:'Configuration.remote = "http://grid-url/wd/hub" — налаштування remote driver.'},
  {q:'Що таке Configuration.browserSize?',o:['Максимальний розмір','Розмір вікна браузера у форматі "WxH"','Розмір скріншота','Zoom рівень'],c:1,e:'Configuration.browserSize = "1920x1080" задає розмір вікна браузера.'},
  {q:'Як використати власний WebDriverProvider?',o:['Реалізувати WebDriverFactory і передати в Configuration.browserCapabilities','Реалізувати WebDriverProvider і передати клас в Configuration.browser','Перевизначити Selenide.open()','Зареєструвати в WebDriverRunner'],c:1,e:'Configuration.browser = MyWebDriverProvider.class.getName() — кастомний провайдер driver.'},
  {q:'Що таке Selenide.confirm()?',o:['Закриває модальні вікна','Підтверджує JavaScript alert','Підтверджує форму','Погоджується з cookies'],c:1,e:'Selenide.confirm() натискає OK на JavaScript alert/confirm діалозі.'},
  {q:'Що таке Selenide.dismiss()?',o:['Видаляє елемент','Скасовує JavaScript confirm діалог','Закриває браузер','Відміняє завантаження'],c:1,e:'Selenide.dismiss() натискає Cancel на JavaScript confirm діалозі.'},
  {q:'Як отримати текст JavaScript alert?',o:['Selenide.getAlert()','switchTo().alert().getText()','Selenide.alert()','Selenide.prompt()'],c:1,e:'switchTo().alert().getText() — стандартний WebDriver спосіб отримати текст alert.'},
  {q:'Що таке Condition.href()?',o:['Перевіряє повний href','Перевіряє що href містить підрядок','Перевіряє протокол','Перевіряє якір (#)'],c:0,e:'Condition.href(url) перевіряє точне значення атрибута href елемента.'},
  {q:'Як перевірити placeholder поля?',o:['shouldHave(Condition.attribute("placeholder","text"))','shouldHave(Condition.placeholder("text"))','shouldBe(Condition.placeholder("text"))','A або B'],c:3,e:'Обидва варіанти коректні для перевірки placeholder.'},
  {q:'Що таке $(sel).as("name")?',o:['Перейменовує елемент для звітів','Створює аліас локатора','Групує елементи','Ставить label'],c:0,e:'as("name") задає зручне ім\'я елементу, яке відображається в логах та повідомленнях про помилки.'},
  {q:'Як встановити кастомне повідомлення помилки в assertion?',o:['shouldBe(visible).otherwise("msg")','shouldBe(visible.because("msg"))','shouldBe(visible, "msg")','$(sel).as("msg").shouldBe(visible)'],c:3,e:'$(sel).as("msg").shouldBe(visible) — найчистіший спосіб задати контекст помилки.'},
  {q:'Що таке Selenide.sleep()?',o:['Зупиняє лише поточний assertion','Викликає Thread.sleep() (не рекомендовано)','Розумне очікування','Ставить в чергу'],c:1,e:'Selenide.sleep(ms) — wrapper над Thread.sleep(). Використовувати лише у крайньому випадку.'},
  {q:'Яку анотацію JUnit5 використати для закриття браузера після всіх тестів?',o:['@AfterEach','@AfterAll','@After','@Cleanup'],c:1,e:'@AfterAll static void tearDown() { closeWebDriver(); } — закриває браузер після всього класу.'},
  {q:'Що таке Configuration.holdBrowserOpen?',o:['Не закриває браузер після тестів (для дебагу)','Тримає вкладки відкритими','Блокує закриття через closeWebDriver()','Зберігає стан сесії'],c:0,e:'holdBrowserOpen = true залишає браузер відкритим після тестів для відлагодження.'},
  {q:'Як перевірити стан radio button?',o:['shouldBe(Condition.checked)','shouldBe(Condition.selected)','shouldHave(Condition.attribute("checked"))','Всі варіанти коректні'],c:3,e:'checked, selected та attribute("checked") — всі три підходять для перевірки radio/checkbox стану.'},
  {q:'Що таке $$(sel).shouldHave(CollectionCondition.itemWithText("text"))?',o:['Перевіряє перший елемент','Перевіряє що хоча б один елемент містить текст','Перевіряє всі елементи','Знаходить за індексом'],c:1,e:'itemWithText("text") перевіряє що в колекції є хоча б один елемент із вказаним текстом.'},
  {q:'Як Selenide інтегрується з Allure?',o:['Автоматично, без налаштувань','Через залежність selenide-allure і @ExtendWith(AllureSelenide.class)','Через Configuration.reporter = "allure"','Через AspectJ weaving тільки'],c:1,e:'Додайте залежність selenide-allure та @ExtendWith(AllureSelenide.class) для автоматичних скріншотів у Allure.'},
  {q:'Що таке AllureSelenide listener?',o:['Додає скріншоти та логи в Allure звіт','Запускає Allure сервер','Генерує HTML звіт','Збирає метрики'],c:0,e:'AllureSelenide автоматично прикріплює скріншоти при кроках і помилках до Allure звіту.'},
  {q:'Що таке Configuration.screenshots?',o:['Кількість скріншотів','Вмикає/вимикає автоматичні скріншоти при помилках','Формат скріншотів','Розмір скріншота'],c:1,e:'Configuration.screenshots = true/false — вмикає або вимикає автоматичні скріншоти при провалі тесту.'},
  {q:'Що таке Configuration.savePageSource?',o:['Зберігає HTML сторінки при помилці','Зберігає cookies','Зберігає локальне сховище','Зберігає мережеві запити'],c:0,e:'savePageSource = true зберігає HTML-код сторінки поряд зі скріншотом при провалі.'},
  {q:'Який артефакт Maven підключає Selenide?',o:['com.codeborne:selenide:VERSION','org.selenide:selenide:VERSION','io.github.selenide:core:VERSION','com.selenide:selenide-core:VERSION'],c:0,e:'com.codeborne:selenide:VERSION — офіційний Maven artifact від розробника Selenide.'},
  {q:'Що таке $(sel).shouldBe(visible, Duration.ofSeconds(10))?',o:['Глобально змінює таймаут','Задає кастомний таймаут тільки для цього assertion','Повторює перевірку 10 разів','Ставить sleep на 10 секунд'],c:1,e:'Duration.ofSeconds(10) як другий аргумент shouldBe() задає таймаут лише для цього конкретного очікування.'},
  {q:'Яким методом можна натиснути кнопку що знаходиться поза viewport?',o:['$(sel).click()','$(sel).scrollTo().click()','$(sel).forceClick()','$(sel).jsClick()'],c:1,e:'scrollTo().click() спочатку прокручує до елемента, потім клікає на нього.'},
  {q:'Що таке $(sel).parent()?',o:['Перший батьківський елемент','Всі батьківські елементи','Попередній sibling','Корінь DOM'],c:0,e:'$(sel).parent() повертає SelenideElement що є безпосереднім батьківським вузлом.'},
  {q:'Як знайти найближчого предка за CSS?',o:['$(sel).ancestor("css")','$(sel).closest("css")','$(sel).parent("css")','$(sel).up("css")'],c:1,e:'$(sel).closest("css") — аналог jQuery closest(), шукає найближчого предка що відповідає селектору.'},
  {q:'Що таке $(sel).sibling(n)?',o:['Батьківський елемент','N-ий наступний sibling','N-ий попередній sibling','Елемент на тому ж рівні за індексом'],c:1,e:'sibling(n) повертає n-ий наступний елемент-сусід відносно поточного.'},
  {q:'Що таке $(sel).preceding(n)?',o:['N-ий наступний sibling','N-ий попередній sibling','Батьківський елемент','Попередня сторінка'],c:1,e:'preceding(n) повертає n-ий попередній елемент-сусід (попередній sibling).'},
  {q:'Що таке Condition.interactable?',o:['Елемент видимий та enabled','Елемент у viewport','Елемент не покритий іншим','Елемент visible + enabled + не покритий'],c:3,e:'Condition.interactable перевіряє що елемент visible, enabled і не перекритий іншим елементом.'},
  {q:'Яким методом виконати drag and drop у Selenide?',o:['$(sel).dragAndDrop(target)','$(sel).dragAndDropTo(target)','Actions.dragAndDrop($(sel), target)','$(sel).drag(target)'],c:1,e:'$(sel).dragAndDropTo(SelenideElement target) або dragAndDropTo(String cssSelector).'},
  {q:'Що таке Configuration.pollingInterval?',o:['Інтервал між кроками тесту','Інтервал перевірки умов при очікуванні','Інтервал між скріншотами','Пауза після кожного кліку'],c:1,e:'pollingInterval — частота перевірки умови (мс) під час очікування. За замовчуванням 200мс.'},
];

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const letters = ['A', 'B', 'C', 'D'];
let questions = [];
let current = 0;
let correctCount = 0;
let wrongCount = 0;
let answered = false;

function initQuiz() {
  questions = shuffle(BANK);
  current = 0;
  correctCount = 0;
  wrongCount = 0;
  answered = false;
}

function updateHeader() {
  document.getElementById('metaCounter').textContent = (current + 1) + ' / ' + questions.length;
  document.getElementById('metaCorrect').textContent = correctCount;
  document.getElementById('metaWrong').textContent = wrongCount;
}

function renderQuestion() {
  answered = false;
  const q = questions[current];
  const total = questions.length;

  document.getElementById('progressFill').style.width = ((current / total) * 100) + '%';
  document.getElementById('questionNum').textContent = String(current + 1).padStart(2, '0');
  document.getElementById('questionText').textContent = q.q;
  document.getElementById('feedbackBox').style.display = 'none';
  document.getElementById('nextBtn').style.display = 'none';

  updateHeader();

  const container = document.getElementById('optionsContainer');
  container.innerHTML = '';

  const shuffledIdx = shuffle([0, 1, 2, 3]);
  shuffledIdx.forEach((origIdx, newPos) => {
    const btn = document.createElement('button');
    btn.className = 'option';
    btn.dataset.isCorrect = (origIdx === q.c) ? '1' : '0';
    btn.innerHTML =
      '<span class="option-letter">' + letters[newPos] + '</span>' +
      '<span>' + q.o[origIdx] + '</span>';
    btn.addEventListener('click', () => selectAnswer(btn, q));
    container.appendChild(btn);
  });
}

function selectAnswer(clickedBtn, q) {
  if (answered) return;
  answered = true;

  document.querySelectorAll('.option').forEach(b => b.disabled = true);

  const fb = document.getElementById('feedbackBox');
  if (clickedBtn.dataset.isCorrect === '1') {
    correctCount++;
    clickedBtn.classList.add('correct');
    fb.className = 'feedback correct';
    fb.textContent = '✓ Правильно! ' + q.e;
  } else {
    wrongCount++;
    clickedBtn.classList.add('wrong');
    document.querySelectorAll('.option').forEach(b => {
      if (b.dataset.isCorrect === '1') b.classList.add('show-answer');
    });
    fb.className = 'feedback wrong';
    fb.textContent = '✗ Неправильно. ' + q.e;
  }
  fb.style.display = 'block';
  updateHeader();

  const nextBtn = document.getElementById('nextBtn');
  nextBtn.style.display = 'flex';
  nextBtn.innerHTML = current < questions.length - 1
    ? 'Наступне <span>→</span>'
    : 'Переглянути результат <span>→</span>';
}

function showResults(finishedEarly) {
  document.getElementById('quizScreen').style.display = 'none';
  document.getElementById('resultsScreen').style.display = 'flex';

  const done = finishedEarly ? current : current + 1;
  const pct = done > 0 ? Math.round(correctCount / done * 100) : 0;

  document.getElementById('resultPercent').textContent = pct + '%';
  document.getElementById('resCorrect').textContent = correctCount;
  document.getElementById('resWrong').textContent = wrongCount;
  document.getElementById('resTotal').textContent = done;
  document.getElementById('resSkipped').textContent = questions.length - done;
  document.getElementById('progressFill').style.width = '100%';

  let msg = '';
  if (pct === 100) msg = 'Ідеальний результат — Selenide від зубів відлітає!';
  else if (pct >= 80) msg = 'Відмінно, тема добре засвоєна.';
  else if (pct >= 60) msg = 'Непогано, але є що повторити.';
  else if (pct >= 40) msg = 'Варто переглянути документацію Selenide.';
  else msg = 'Рекомендуємо детально вивчити Selenide API.';
  document.getElementById('resultMsg').textContent = msg;
}

// Event listeners
document.getElementById('startBtn').addEventListener('click', () => {
  initQuiz();
  document.getElementById('startScreen').style.display = 'none';
  document.getElementById('quizScreen').style.display = 'block';
  document.getElementById('headerMeta').style.display = 'flex';
  renderQuestion();
});

document.getElementById('nextBtn').addEventListener('click', () => {
  if (current < questions.length - 1) {
    current++;
    renderQuestion();
  } else {
    showResults(false);
  }
});

document.getElementById('finishBtn').addEventListener('click', () => {
  showResults(!answered);
});

document.getElementById('restartBtn').addEventListener('click', () => {
  initQuiz();
  document.getElementById('resultsScreen').style.display = 'none';
  document.getElementById('quizScreen').style.display = 'block';
  renderQuestion();
});
