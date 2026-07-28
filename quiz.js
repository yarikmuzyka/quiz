const TOPICS = {
  selenide: {
    label: 'Selenide',
    badge: '100 запитань · UI автоматизація',
    desc: 'Selenide API: локатори, умови, конфігурація, колекції, файли, інтеграції та багато іншого.',
    code: [
      '$("button")',
      '  .shouldBe(visible)',
      '  .click();',
      '',
      '$$(".item")',
      '  .shouldHave(',
      '    size(5));'
    ],
    bank: [
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
    ]
  },
  restassured: {
    label: 'REST Assured',
    badge: '100 запитань · API тестування',
    desc: 'REST API та Rest Assured: HTTP методи, статус-коди, assertions, автентифікація, JSON/XML, специфікації та багато іншого.',
    code: [
      'given()',
      '  .header("Auth", token)',
      '  .body(payload)',
      '.when()',
      '  .post("/users")',
      '.then()',
      '  .statusCode(201);'
    ],
    bank: [
      {q:'Який Maven artifact підключає Rest Assured?',o:['io.rest-assured:rest-assured','com.jayway.restassured:rest-assured','org.rest-assured:core','io.restassured:rest-assured-all'],c:0,e:'io.rest-assured:rest-assured — офіційний artifact починаючи з версії 3.x (переїхали з com.jayway).'},
      {q:'Яка структура BDD-стилю Rest Assured?',o:['setup / execute / verify','arrange / act / assert','given / when / then','before / request / response'],c:2,e:'given() / when() / then() — BDD-структура Rest Assured: передумови, дія, перевірка.'},
      {q:'Як надіслати GET-запит у Rest Assured?',o:['RestAssured.get(url)','given().when().get(url)','request("GET", url)','http.get(url)'],c:1,e:'given().when().get(url) — стандартний спосіб. Також можна просто get(url) зі статичним імпортом.'},
      {q:'Як перевірити статус-код відповіді?',o:['.then().status(200)','.then().statusCode(200)','.then().assertStatus(200)','.then().responseCode(200)'],c:1,e:'then().statusCode(200) — перевіряє HTTP статус-код відповіді.'},
      {q:'Як встановити базовий URL для всіх запитів?',o:['RestAssured.baseURL = url','RestAssured.baseURI = url','RestAssured.setBase(url)','given().baseUrl(url)'],c:1,e:'RestAssured.baseURI = "https://api.example.com" — глобальне налаштування базового URL.'},
      {q:'Як встановити базовий порт?',o:['RestAssured.basePort = 8080','RestAssured.port = 8080','RestAssured.setPort(8080)','given().port(8080)'],c:1,e:'RestAssured.port = 8080 задає порт для всіх запитів.'},
      {q:'Як додати заголовок до запиту?',o:['.header("Name","Value")','.addHeader("Name","Value")','.set("Name","Value")','.withHeader("Name","Value")'],c:0,e:'given().header("Name", "Value") додає HTTP заголовок до запиту.'},
      {q:'Як додати кілька заголовків одразу?',o:['.headers(map)','.headers("K1","V1","K2","V2")','.addHeaders(map)','A та B'],c:3,e:'headers(Map) та headers("k1","v1","k2","v2") — обидва варіанти додають кілька заголовків.'},
      {q:'Як встановити Content-Type: application/json?',o:['.header("Content-Type","application/json")','.contentType("application/json")','.contentType(ContentType.JSON)','B або C'],c:3,e:'contentType(ContentType.JSON) або contentType("application/json") — обидва коректні.'},
      {q:'Як передати тіло запиту (body)?',o:['.body(object)','.payload(object)','.data(object)','.content(object)'],c:0,e:'given().body(object) — передає тіло запиту. Автоматично серіалізується якщо підключений Jackson/Gson.'},
      {q:'Як зробити POST-запит?',o:['.when().post(url)','.when().send(url, "POST")','.post(url)','.request("POST", url)'],c:0,e:'when().post(url) — надсилає POST запит на вказаний endpoint.'},
      {q:'Як зробити PUT-запит?',o:['.when().put(url)','.when().update(url)','.when().patch(url)','.when().replace(url)'],c:0,e:'when().put(url) — надсилає PUT запит.'},
      {q:'Як зробити DELETE-запит?',o:['.when().delete(url)','.when().remove(url)','.when().destroy(url)','.when().drop(url)'],c:0,e:'when().delete(url) — надсилає DELETE запит.'},
      {q:'Як зробити PATCH-запит?',o:['.when().patch(url)','.when().partialUpdate(url)','.when().modify(url)','.when().update(url)'],c:0,e:'when().patch(url) — надсилає PATCH запит для часткового оновлення.'},
      {q:'Як отримати значення поля з JSON-відповіді за шляхом?',o:['.then().extract().jsonPath().get("field")','.then().body("field", equalTo(val))','.then().extract().path("field")','A та C'],c:3,e:'extract().path("field") та jsonPath().get("field") — обидва витягують значення з JSON відповіді.'},
      {q:'Як перевірити значення поля в JSON-відповіді?',o:['.then().body("field", equalTo("value"))','.then().json("field").equals("value")','.then().assert("field", "value")','.then().check("field", "value")'],c:0,e:'then().body("field", equalTo("value")) — перевірка поля використовуючи Hamcrest матчер.'},
      {q:'Як перевірити що масив містить елемент?',o:['.body("list", contains("item"))','.body("list", hasItem("item"))','.body("list", includes("item"))','.body("list", containsItem("item"))'],c:1,e:'hasItem() — Hamcrest матчер що перевіряє наявність елемента в колекції.'},
      {q:'Як витягнути все тіло відповіді як рядок?',o:['.then().extract().body().asString()','.then().extract().response().body()','.then().getBody()','.then().extract().asString()'],c:0,e:'extract().body().asString() повертає тіло відповіді як String.'},
      {q:'Як десеріалізувати відповідь у Java об\'єкт?',o:['.then().extract().as(MyClass.class)','.then().extract().body().as(MyClass.class)','.then().extract().response().as(MyClass.class)','A та B'],c:3,e:'extract().as(Class) та extract().body().as(Class) — обидва десеріалізують JSON в Java об\'єкт.'},
      {q:'Що таке RequestSpecification?',o:['Шаблон запиту з заздалегідь налаштованими параметрами','Специфікація для перевірки запиту','Клас для валідації URL','Інтерфейс для HTTP клієнта'],c:0,e:'RequestSpecification — об\'єкт з попередньо налаштованими headers, baseURI, contentType тощо для повторного використання.'},
      {q:'Як створити RequestSpecification?',o:['new RequestSpecification()','given().spec(spec)','RequestSpecBuilder builder = new RequestSpecBuilder()','RestAssured.requestSpecification = spec'],c:2,e:'RequestSpecBuilder дозволяє будувати специфікацію, яку потім передають в given().spec(spec).'},
      {q:'Що таке ResponseSpecification?',o:['Шаблон для перевірки відповідей','Клас відповіді сервера','Wrapper над Response','Конфігурація парсингу'],c:0,e:'ResponseSpecification — набір assertions для відповіді, що можна перевикористовувати через then().spec(spec).'},
      {q:'Як додати query parameter?',o:['.queryParam("key","value")','.param("key","value")','.addParam("key","value")','A та B'],c:3,e:'queryParam() та param() — обидва додають query параметри до URL (?key=value).'},
      {q:'Як додати path parameter?',o:['.pathParam("id", 5)','.urlParam("id", 5)','.routeParam("id", 5)','.substituteParam("id", 5)'],c:0,e:'pathParam("id", 5) підставляє значення в URL шаблон: "/users/{id}" → "/users/5".'},
      {q:'Як налаштувати Basic автентифікацію?',o:['.auth().basic("user","pass")','.header("Authorization","Basic ...")','.basicAuth("user","pass")','.authentication().basic("user","pass")'],c:0,e:'given().auth().basic("username", "password") — автоматично додає Base64-encoded Authorization заголовок.'},
      {q:'Як налаштувати Bearer Token автентифікацію?',o:['.auth().oauth2(token)','.header("Authorization","Bearer "+token)','.bearer(token)','A та B'],c:3,e:'auth().oauth2(token) та header("Authorization","Bearer "+token) — обидва підходять для Bearer auth.'},
      {q:'Як вимкнути перевірку SSL-сертифіката?',o:['RestAssured.useRelaxedHTTPSValidation()','RestAssured.disableSSL()','given().relaxedHTTPSValidation()','A та C'],c:3,e:'useRelaxedHTTPSValidation() глобально або relaxedHTTPSValidation() для конкретного запиту вимикають SSL валідацію.'},
      {q:'Як перевірити заголовок відповіді?',o:['.then().header("Name","Value")','.then().headers("Name","Value")','.then().assertHeader("Name","Value")','.then().responseHeader("Name","Value")'],c:0,e:'then().header("Content-Type", "application/json") — перевірка значення заголовка відповіді.'},
      {q:'Що таке JsonPath у Rest Assured?',o:['Бібліотека для навігації по JSON структурі','HTTP клієнт','Серіалізатор','Validator JSON схеми'],c:0,e:'JsonPath дозволяє навігувати по JSON відповіді використовуючи Groovy GPath вирази.'},
      {q:'Як отримати список значень з JSON масиву?',o:['jsonPath.getList("items.name")','jsonPath.get("items[*].name")','jsonPath.list("items.name")','A та B'],c:3,e:'getList("items.name") та get("items[*].name") — обидва повертають List зі значеннями поля з масиву.'},
      {q:'Що таке XmlPath у Rest Assured?',o:['Аналог JsonPath для XML відповідей','XML валідатор','XSLT процесор','XML серіалізатор'],c:0,e:'XmlPath дозволяє навігувати по XML відповіді через GPath вирази, аналогічно до JsonPath.'},
      {q:'Як логувати запит у Rest Assured?',o:['.log().all()','.given().log().all()','.debug()','.log(LogLevel.ALL)'],c:1,e:'given().log().all() логує всі деталі запиту: URL, headers, body. Також log().headers(), log().body() тощо.'},
      {q:'Як логувати відповідь?',o:['.then().log().all()','.response().log()','.log().response()','.extract().log()'],c:0,e:'then().log().all() логує всі деталі відповіді. log().ifError() логує тільки при помилці.'},
      {q:'Як логувати тільки при помилці?',o:['.log().ifValidationFails()','.log().onError()','.log().ifError()','.log().whenFailed()'],c:0,e:'log().ifValidationFails() — найкраща практика: логує запит/відповідь тільки коли тест провалився.'},
      {q:'Як встановити таймаут з\'єднання?',o:['RestAssured.config().connectionConfig(ConnectionConfig.connectionConfig().closeIdleConnectionsAfterEachResponse())','given().config(RestAssured.config().httpClient(HttpClientConfig.httpClientConfig().setParam(...)))','RestAssured.timeout = 5000','given().timeout(5000)'],c:1,e:'HttpClientConfig з параметром CoreConnectionPNames.CONNECTION_TIMEOUT або SO_TIMEOUT задає таймаут.'},
      {q:'Як перевірити розмір масиву в JSON відповіді?',o:['.body("list.size()", equalTo(3))','.body("list", hasSize(3))','.body("list", size(3))','A або B'],c:3,e:'body("list.size()", equalTo(3)) (GPath) та body("list", hasSize(3)) (Hamcrest) — обидва перевіряють розмір.'},
      {q:'Що таке RestAssured.filters()?',o:['Фільтри для перехоплення та модифікації запитів/відповідей','Фільтрація JSON полів','Middleware для автентифікації','Логування специфічних запитів'],c:0,e:'Filters дозволяють перехоплювати, модифікувати або логувати запити та відповіді глобально.'},
      {q:'Що таке RequestLoggingFilter?',o:['Фільтр що логує тільки запити','Фільтр що логує запити та відповіді','Фільтр для відладки','Фільтр для CI/CD'],c:0,e:'RequestLoggingFilter логує деталі запиту. Разом з ResponseLoggingFilter охоплює повний HTTP трафік.'},
      {q:'Як передати форм-дані (form params)?',o:['.formParam("key","value")','.form("key","value")','.param("key","value") з POST','.body("key=value")'],c:0,e:'formParam("key","value") — для application/x-www-form-urlencoded запитів.'},
      {q:'Як завантажити файл multipart?',o:['.multiPart("file", new File(path))','.file("file", new File(path))','.attach("file", new File(path))','.upload("file", new File(path))'],c:0,e:'multiPart("file", new File(path)) додає файл як multipart/form-data частину запиту.'},
      {q:'Як перевірити час відповіді?',o:['.then().time(lessThan(2000L))','.then().responseTime(lessThan(2000L))','.then().duration(lessThan(2000L))','.then().latency(lessThan(2000L))'],c:0,e:'then().time(lessThan(2000L)) — перевіряє що час відповіді менше заданого значення в мілісекундах.'},
      {q:'Що таке ResponseBody.prettyPrint()?',o:['Повертає форматований JSON рядок','Виводить форматовану відповідь у консоль','Зберігає відповідь у файл','Конвертує у XML'],c:1,e:'prettyPrint() виводить відповідь у форматованому вигляді в консоль і повертає її як рядок.'},
      {q:'Як зберегти відповідь для подальшого використання?',o:['Response response = given().when().get(url).then().extract().response()','Response response = when().get(url)','ValidatableResponse r = given().get(url)','ResponseBody r = get(url).body()'],c:0,e:'extract().response() повертає об\'єкт Response для подальшого використання поза ланцюжком.'},
      {q:'Що таке ObjectMapping у Rest Assured?',o:['Автоматична серіалізація/десеріалізація Java об\'єктів','Маппінг URL шляхів','Конфігурація заголовків','Схема валідації'],c:0,e:'ObjectMapping автоматично серіалізує об\'єкти в JSON/XML для запиту і назад при відповіді (через Jackson, Gson тощо).'},
      {q:'Як налаштувати Jackson для серіалізації?',o:['RestAssured.config().objectMappingConfig(ObjectMappingConfig.objectMappingConfig().jackson2ObjectMapperFactory(...))','RestAssured.jackson(new ObjectMapper()).serializerConfig().useForAllRequests()','given().mapper(new ObjectMapper()).then().serializationConfig(JACKSON_2)','RestAssured.objectMapper = new ObjectMapper(); RestAssured.enableJacksonSerialization()'],c:0,e:'objectMappingConfig з jackson2ObjectMapperFactory дозволяє кастомізувати ObjectMapper глобально.'},
      {q:'Що таке Hamcrest матчер equalTo()?',o:['Перевіряє рівність двох об\'єктів','Перевіряє що об\'єкт рівний null','Перевіряє входження підрядка','Перевіряє розмір колекції'],c:0,e:'equalTo(value) — Hamcrest матчер що перевіряє точну рівність. Використовується в body() assertions.'},
      {q:'Що таке Hamcrest матчер containsString()?',o:['Перевіряє що рядок містить підрядок','Перевіряє що колекція містить елемент','Перевіряє входження символу','Перевіряє prefix рядка'],c:0,e:'containsString("text") перевіряє що рядок містить вказаний підрядок.'},
      {q:'Що таке Hamcrest матчер notNullValue()?',o:['Перевіряє що значення не null і не порожнє','Перевіряє що значення не null','Перевіряє що рядок не порожній','Перевіряє що список не порожній'],c:1,e:'notNullValue() перевіряє що значення не є null. Для не порожнього рядка використовуй not(emptyString()).'},
      {q:'Як зробити assertion на кілька полів одночасно?',o:['Кілька .body() в одному ланцюжку','Використати and()','Використати assertAll()','Кількох then() в одному запиті'],c:0,e:'then().body("f1", equalTo(v1)).body("f2", equalTo(v2)) — кілька body() assertions в одному ланцюжку.'},
      {q:'Як валідувати відповідь проти JSON Schema?',o:['.then().body(matchesJsonSchema(schema))','.then().validateSchema(schema)','.then().jsonSchema(schema)','.then().assertSchema(schema)'],c:0,e:'matchesJsonSchema(File/String) — валідує відповідь проти JSON Schema. Потрібен модуль json-schema-validator.'},
      {q:'Який artifact потрібен для JSON Schema валідації?',o:['io.rest-assured:json-schema-validator','io.rest-assured:schema-validator','org.everit.json:org.everit.json.schema','com.networknt:json-schema-validator'],c:0,e:'io.rest-assured:json-schema-validator — офіційний модуль Rest Assured для валідації JSON Schema.'},
      {q:'Як надіслати запит із cookies?',o:['.cookie("name","value")','.cookies("name","value")','.addCookie("name","value")','A та B'],c:3,e:'cookie("name","value") та cookies(Map) — обидва підходять для передачі cookies у запиті.'},
      {q:'Як отримати cookie з відповіді?',o:['response.cookie("name")','response.getCookie("name")','response.cookies().get("name")','A та B'],c:3,e:'response.cookie("name") та response.getCookie("name") — обидва повертають значення cookie з відповіді.'},
      {q:'Що таке RestAssured.reset()?',o:['Скидає всі глобальні налаштування RestAssured до дефолтних','Очищує сесію','Закриває HTTP з\'єднання','Скидає таймаут'],c:0,e:'RestAssured.reset() скидає baseURI, basePath, port та всі інші глобальні налаштування до значень за замовчуванням.'},
      {q:'Що таке basePath у RestAssured?',o:['Базовий шлях що додається до всіх URL','Alias для baseURI','Шлях до конфіг-файлу','Папка для логів'],c:0,e:'RestAssured.basePath = "/api/v1" — додається між baseURI і endpoint у кожному запиті.'},
      {q:'Як передати JSON-рядок як тіло запиту?',o:['given().body(jsonString).contentType(ContentType.JSON)','given().jsonBody(jsonString)','given().content(jsonString)','given().payload(jsonString)'],c:0,e:'body(String) з contentType(ContentType.JSON) — передає JSON рядок як тіло і встановлює правильний Content-Type.'},
      {q:'Що таке GPath у Rest Assured?',o:['Groovy-based синтаксис для навігації по JSON та XML','Graphql Path синтаксис','Глобальний path для URL','Generic path matcher'],c:0,e:'GPath — Groovy синтаксис навігації, який Rest Assured використовує в JsonPath та XmlPath.'},
      {q:'Як перевірити що поле існує в JSON?',o:['.body("field", notNullValue())','.body("field", exists())','.body("field", hasKey("field"))','.body(hasKey("field"))'],c:0,e:'body("field", notNullValue()) — якщо поле існує, воно не null. Для відсутності: body("field", nullValue()).'},
      {q:'Як отримати статус-код відповіді?',o:['response.statusCode()','response.getStatusCode()','response.status()','A та B'],c:3,e:'response.statusCode() та response.getStatusCode() — обидва повертають HTTP статус-код як int.'},
      {q:'Як отримати заголовок відповіді?',o:['response.header("Name")','response.getHeader("Name")','response.headers().get("Name")','A та B'],c:3,e:'response.header("Name") та response.getHeader("Name") — обидва повертають значення заголовка відповіді.'},
      {q:'Що таке SerenityRest?',o:['Rest Assured інтегрований з Serenity BDD для звітності','Окремий HTTP клієнт','Extension для Spring','Плагін для IntelliJ'],c:0,e:'SerenityRest — обгортка над Rest Assured що додає кроки Serenity BDD та автоматичну звітність.'},
      {q:'Як виконати запит із проксі?',o:['given().proxy("host", port)','RestAssured.proxy("host", port)','given().useProxy("host", port)','A та B'],c:3,e:'given().proxy() або RestAssured.proxy() — налаштування HTTP proxy для запитів.'},
      {q:'Що таке RestAssuredConfig?',o:['Глобальний об\'єкт конфігурації для всіх аспектів Rest Assured','Клас для зберігання credentials','Конфіг файл','Enum режимів роботи'],c:0,e:'RestAssuredConfig об\'єднує всі конфігурації: SSL, ObjectMapping, Connection, HttpClient тощо.'},
      {q:'Як налаштувати DecodeContentConfig?',o:['RestAssured.config().decoderConfig(DecoderConfig.decoderConfig().contentDecoders(GZIP))','given().decode(GZIP)','RestAssured.enableGzip()','given().contentDecoding("gzip")'],c:0,e:'DecoderConfig дозволяє налаштувати декодування відповіді, наприклад GZIP або DEFLATE.'},
      {q:'Що таке io.restassured.module.mockmvc?',o:['Модуль для тестування Spring MVC без запуску сервера','Модуль для mock HTTP сервера','Модуль для Mockito інтеграції','Модуль для тестування GraphQL'],c:0,e:'rest-assured-spring-mock-mvc дозволяє тестувати Spring MVC controllers через MockMvc без HTTP.'},
      {q:'Як перевірити що відповідь порожня?',o:['.then().body(emptyString())','.then().body(equalTo(""))','.then().body(isEmptyString())','A або C'],c:3,e:'emptyString() та isEmptyString() (deprecated) — Hamcrest матчери для перевірки порожнього тіла.'},
      {q:'Що таке ContentType.JSON у Rest Assured?',o:['Enum значення що представляє "application/json"','Клас для JSON парсингу','Анотація','Конфігурація серіалізатора'],c:0,e:'ContentType.JSON — enum константа Rest Assured що відповідає "application/json; charset=UTF-8".'},
      {q:'Як отримати весь список headers відповіді?',o:['response.headers()','response.getHeaders()','response.allHeaders()','A та B'],c:3,e:'response.headers() та response.getHeaders() — обидва повертають об\'єкт Headers з усіма заголовками.'},
      {q:'Як перевірити тип контенту відповіді?',o:['.then().contentType(ContentType.JSON)','.then().contentType("application/json")','.then().header("Content-Type", containsString("json"))','Всі варіанти коректні'],c:3,e:'contentType(ContentType.JSON), contentType("application/json") та header перевірка — всі коректні варіанти.'},
      {q:'Що таке ResponseSpecBuilder?',o:['Builder для створення ResponseSpecification','Builder для відповіді сервера','Клас для модифікації відповіді','Factory для Response об\'єктів'],c:0,e:'ResponseSpecBuilder будує ResponseSpecification — набір assertions що можна перевикористовувати через then().spec().'},
      {q:'Як перевірити що JSON поле є числом?',o:['.body("age", isA(Integer.class))','.body("age", instanceOf(Integer.class))','.body("age", typeOf(Integer.class))','A та B'],c:3,e:'isA(Integer.class) та instanceOf(Integer.class) — Hamcrest матчери для перевірки типу значення.'},
      {q:'Як зробити assertion на вкладений об\'єкт?',o:['.body("user.address.city", equalTo("Kyiv"))','.body("user", hasField("address.city", "Kyiv"))','.body("user/address/city", equalTo("Kyiv"))','.body(path("user.address.city"), equalTo("Kyiv"))'],c:0,e:'body("user.address.city", equalTo("Kyiv")) — GPath підтримує крапкову нотацію для вкладених полів.'},
      {q:'Що таке io.restassured.path.json.JsonPath клас?',o:['Утиліта для парсингу JSON без HTTP запиту','HTTP клієнт','Серіалізатор','Схема валідатор'],c:0,e:'JsonPath.from(jsonString).get("field") — можна парсити JSON рядок без виконання запиту.'},
      {q:'Як налаштувати Preemptive Basic Auth?',o:['.auth().preemptive().basic("u","p")','.auth().basic("u","p")','.auth().forced().basic("u","p")','.auth().eager().basic("u","p")'],c:0,e:'preemptive().basic() надсилає credentials одразу без очікування 401, на відміну від звичайного basic().'},
      {q:'Що таке DigestAuth у Rest Assured?',o:['.auth().digest("u","p")','.auth().digestAuth("u","p")','.auth().md5("u","p")','.auth().challenge("u","p")'],c:0,e:'auth().digest("user","pass") — HTTP Digest автентифікація, безпечніша за Basic.'},
      {q:'Як використати OAuth 1.0?',o:['.auth().oauth(key, secret, token, tokenSecret)','.auth().oauth1(key, secret)','.auth().oauth(key, secret)','.oauth(consumerKey, consumerSecret, token, tokenSecret)'],c:0,e:'auth().oauth(consumerKey, consumerSecret, accessToken, secretToken) — OAuth 1.0 підпис запиту.'},
      {q:'Як перевірити що масив відсортований?',o:['.body("list", contains(1,2,3))','.body("list", isSorted())','.body("list", hasItems(1,2,3))','.body("list.sort()", equalTo(list))'],c:0,e:'contains(1,2,3) перевіряє точний порядок і склад. hasItems перевіряє наявність без урахування порядку.'},
      {q:'Що таке AllureRestAssured filter?',o:['Фільтр що додає HTTP кроки до Allure звіту','Фільтр для логування','Фільтр для автентифікації','Фільтр для retry'],c:0,e:'new AllureRestAssured() — Rest Assured фільтр що автоматично додає запити/відповіді до Allure звіту як кроки.'},
      {q:'Як підключити AllureRestAssured?',o:['given().filter(new AllureRestAssured())','RestAssured.filters(new AllureRestAssured())','RestAssured.addFilter(new AllureRestAssured())','A та B'],c:3,e:'Можна додати глобально через RestAssured.filters() або для конкретного запиту через given().filter().'},
      {q:'Як встановити кодування для запиту?',o:['RestAssured.config().encoderConfig(EncoderConfig.encoderConfig().defaultContentCharset("UTF-8"))','given().charset("UTF-8").config(RestAssured.config().defaultRequestEncoding())','RestAssured.charset = "UTF-8"; RestAssured.enableEncoderConfigForRequests()','given().encoding("UTF-8").then().encoderConfig(EncoderConfig.defaultConfig())'],c:0,e:'EncoderConfig.encoderConfig().defaultContentCharset("UTF-8") задає кодування для тіла запиту.'},
      {q:'Що таке redirect handling у Rest Assured?',o:['Автоматичне проходження редиректів (301/302)','Перенаправлення запиту на proxy','Redirect pattern у URL','Обробка помилок'],c:0,e:'За замовчуванням Rest Assured автоматично слідує редиректам. Можна вимкнути через redirects().follow(false).'},
      {q:'Як вимкнути автоматичні редиректи?',o:['given().redirects().follow(false)','given().noRedirects()','RestAssured.followRedirects = false','given().config(config().redirect(redirectConfig().followRedirects(false)))'],c:3,e:'redirectConfig().followRedirects(false) або given().redirects().follow(false) — обидва вимикають авто-редиректи.'},
      {q:'Як зробити запит з multipart та JSON body?',o:['given().multiPart("data", json, "application/json").multiPart("file", file)','given().body(json).multiPart("file", file)','given().multiPart(json).multiPart(file)','given().mixed(json, file)'],c:0,e:'multiPart з вказаним content-type дозволяє надіслати JSON частину разом із файлом у multipart запиті.'},
      {q:'Що таке RestAssured.given() vs given()?',o:['Однакові — given() зі статичним імпортом','RestAssured.given() — нова сесія, given() — існуюча','given() підтримує fluent API, RestAssured.given() — ні','Відрізняються логуванням'],c:0,e:'given() зі static import io.restassured.RestAssured.* — те саме що RestAssured.given(). Чистіший синтаксис.'},
      {q:'Як перевірити що поле відповіді відповідає regex?',o:['.body("field", matchesPattern("regex"))','.body("field", matchesRegex("regex"))','.body("field", matches("regex"))','.body("field", containsString("regex"))'],c:1,e:'matchesRegex("regex") — Hamcrest матчер для перевірки відповідності рядка регулярному виразу.'},
      {q:'Що таке SoftAssertions у контексті Rest Assured?',o:['Вбудований механізм Rest Assured','Потрібна зовнішня бібліотека (AssertJ, JUnit5)','Доступно через then().softly()','Тільки для XML відповідей'],c:1,e:'Rest Assured не має вбудованих soft assertions. Використовуй AssertJ SoftAssertions або JUnit5 assertAll() разом з extract().'},
      {q:'Як перевірити що відповідь відповідає XML Schema (XSD)?',o:['.then().body(matchesXsd(xsdString))','.then().validateXml(xsdFile)','.then().xmlSchema(xsdFile)','.then().body(validatesXsd(xsdFile))'],c:0,e:'matchesXsd(String/File) — валідує XML відповідь проти XSD схеми. Аналог matchesJsonSchema для XML.'},
      {q:'Як отримати Response Time після запиту?',o:['response.time()','response.getTime()','response.timeIn(TimeUnit.MILLISECONDS)','A та C'],c:3,e:'response.time() та response.timeIn(TimeUnit) — обидва повертають час відповіді в різних одиницях.'},
      {q:'Що таке RequestSpecification.when()?',o:['Перехід до HTTP методу','Умовне виконання запиту','Налаштування таймаутів','Встановлення assertion'],c:0,e:'when() завершує налаштування запиту (given()) і переходить до вибору HTTP методу (get, post тощо).'},
      {q:'Як встановити proxy глобально?',o:['RestAssured.proxy = host(proxyHost).withPort(proxyPort)','RestAssured.proxy("host", port)','RestAssured.setProxy(new ProxySpec("host", port))','B та C'],c:1,e:'RestAssured.proxy("host", port) задає HTTP proxy для всіх наступних запитів глобально.'},
      {q:'Що таке io.restassured.module.webtestclient?',o:['Модуль для Spring WebFlux/WebTestClient','Модуль для WebSocket тестування','Модуль для браузерного тестування','Модуль для Selenium інтеграції'],c:0,e:'rest-assured-spring-web-test-client — інтеграція Rest Assured з Spring WebFlux через WebTestClient.'},
      {q:'Що таке ResponseOptions інтерфейс?',o:['Базовий інтерфейс Response та ValidatableResponse','Налаштування для обробки відповіді','Enum опцій відповіді','Клас для response body'],c:0,e:'ResponseOptions — базовий інтерфейс що визначає спільні методи для Response та ExtractableResponse.'},
      {q:'Як виконати запит та зберегти cookies для наступного?',o:['SessionFilter filter = new SessionFilter(); given().filter(filter)','given().storeCookies()','RestAssured.persistCookies = true','given().session(true)'],c:0,e:'SessionFilter автоматично зберігає та передає cookies між запитами — корисно для тестування з логіном.'},
      {q:'Що повертає extract().response()?',o:['Об\'єкт Response для використання поза ланцюжком','ValidatableResponse','String тіло','ResponseBody'],c:0,e:'extract().response() виводить з fluent ланцюжка і повертає Response об\'єкт для подальших операцій.'},
      {q:'Як перевірити що список містить тільки певні елементи (без зайвих)?',o:['.body("list", containsInAnyOrder("a","b","c"))','.body("list", contains("a","b","c"))','.body("list", hasItems("a","b","c"))','.body("list", equalTo(Arrays.asList("a","b","c")))'],c:0,e:'containsInAnyOrder перевіряє точний набір без урахування порядку. contains — те ж але з порядком.'},
      {q:'Яка різниця між contains() та hasItems() у Hamcrest?',o:['contains — точний набір і порядок, hasItems — лише наявність','contains — наявність, hasItems — точний збіг','Немає різниці','contains для масивів, hasItems для списків'],c:0,e:'contains() перевіряє точний склад і порядок. hasItems() перевіряє лише наявність вказаних елементів (можуть бути й інші).'},
      {q:'Як надіслати PUT запит із порожнім тілом?',o:['given().when().put(url)','.body("").when().put(url)','.body(new byte[0]).when().put(url)','given().contentType(ContentType.ANY).when().put(url)'],c:0,e:'given().when().put(url) без body() надсилає PUT з порожнім тілом.'},
      {q:'Що таке io.restassured.specification.RequestSender?',o:['Інтерфейс що надає методи get(), post(), put() тощо','Клас для відправки запитів','Утиліта для формування URL','Wrapper над HTTP клієнтом'],c:0,e:'RequestSender — інтерфейс повернутий when(), що надає методи HTTP методів: get, post, put, delete, patch тощо.'},
    ]
  },
  qaautomation: {
    label: 'QA Automation',
    badge: '100 запитань · Широкий блок',
    desc: 'Концепції тестування, піраміда тестів, TestNG/JUnit5, Maven/Gradle, CI/CD, патерни, Page Object, Git, Allure та багато іншого.',
    code: [
      '@Test',
      'void loginTest() {',
      '  // arrange',
      '  // act',
      '  // assert',
      '}',
      ''
    ],
    bank: [
      // ── Концепції тестування ──
      {q:'Що таке піраміда тестування (Test Pyramid)?',o:['Unit внизу, UI вгорі — більше швидких дешевих тестів знизу','UI внизу, Unit вгорі','Всі рівні рівнозначні','Тільки два рівні: manual та automated'],c:0,e:'Піраміда Майка Коена: Unit (основа) → Integration → UI (верхівка). Більше тестів знизу — швидше і дешевше.'},
      {q:'Що таке "крижана вафля" (Ice Cream Cone) антипатерн?',o:['Багато UI тестів, мало unit — зворотна піраміда','Тести без assertions','Тести що падають рандомно','Тести з дублюванням коду'],c:0,e:'Ice Cream Cone — антипатерн де більшість тестів UI/manual і мало unit. Повільно, дорого, ненадійно.'},
      {q:'Що таке Smoke тестування?',o:['Поверхова перевірка основної функціональності після деплою','Тестування продуктивності','Тестування всіх edge cases','Регресійне тестування'],c:0,e:'Smoke тести — швидка перевірка що система запустилась і базові функції працюють після нового деплою.'},
      {q:'Що таке Regression тестування?',o:['Перевірка що нові зміни не зламали існуючу функціональність','Тестування нових фіч','Перевірка продуктивності','Тестування безпеки'],c:0,e:'Regression testing перевіряє що вже існуючий функціонал не зламався після внесення змін у код.'},
      {q:'Що таке Sanity тестування?',o:['Вузька глибока перевірка конкретної функції після фіксу','Широка поверхова перевірка','Перевірка після кожного коміту','Перевірка UI'],c:0,e:'Sanity — вузьке поглиблене тестування конкретної функціональності, зазвичай після bugfix. Підмножина regression.'},
      {q:'Що таке Exploratory тестування?',o:['Неструктуроване вільне дослідження системи без заздалегідь написаних кейсів','Автоматизоване тестування','Тестування за чітким планом','Тестування API'],c:0,e:'Exploratory testing — одночасне навчання, проектування та виконання тестів. Ефективно для знаходження несподіваних багів.'},
      {q:'Що таке End-to-End (E2E) тестування?',o:['Тестування повного user flow від початку до кінця','Тестування кожного методу окремо','Тестування інтеграції двох модулів','Тестування API'],c:0,e:'E2E тести відтворюють реальні сценарії користувача від початку до кінця через всі шари системи.'},
      {q:'Що таке flaky test?',o:['Тест що нестабільно то проходить то падає без змін у коді','Тест що завжди падає','Тест що перевіряє помилки','Повільний тест'],c:0,e:'Flaky test — недетермінований тест. Причини: race conditions, залежність від часу, зовнішніх сервісів, порядку виконання.'},
      {q:'Що таке test data management?',o:['Стратегія підготовки, ізоляції та очищення тестових даних','Зберігання результатів тестів','Управління тест-кейсами','Версіонування тестів'],c:0,e:'Test data management — підходи до створення, підтримки та очищення даних: фікстури, factories, builders, DB скрипти.'},
      {q:'Що таке AAA патерн у тестах?',o:['Arrange-Act-Assert — структура тест-методу','Authentication-Authorization-Audit','Async-Await-Assert','API-Action-Assertion'],c:0,e:'AAA: Arrange (підготовка даних) → Act (виконання дії) → Assert (перевірка результату). Стандарт для читабельних тестів.'},
      // ── JUnit 5 ──
      {q:'Яка анотація JUnit5 позначає тест-метод?',o:['@Test','@TestMethod','@UnitTest','@RunTest'],c:0,e:'@Test з пакету org.junit.jupiter.api.Test позначає метод як тест JUnit5.'},
      {q:'Яка анотація JUnit5 виконується перед кожним тестом?',o:['@Before','@BeforeEach','@BeforeTest','@Setup'],c:1,e:'@BeforeEach — замінює @Before з JUnit4. Виконується перед кожним тест-методом у класі.'},
      {q:'Яка анотація JUnit5 виконується один раз перед усіма тестами класу?',o:['@BeforeAll','@BeforeClass','@BeforeEach','@ClassSetup'],c:0,e:'@BeforeAll (статичний метод) — замінює @BeforeClass з JUnit4. Виконується один раз для всього класу.'},
      {q:'Як пропустити тест у JUnit5?',o:['@Ignore','@Skip','@Disabled','@Exclude'],c:2,e:'@Disabled — замінює @Ignore з JUnit4. Можна додати причину: @Disabled("причина").'},
      {q:'Як параметризувати тест у JUnit5?',o:['@ParameterizedTest + @ValueSource','@DataProvider + @Test','@Parameters + @Test','@TestCase + @Data'],c:0,e:'@ParameterizedTest разом з @ValueSource, @CsvSource, @MethodSource тощо — параметризація в JUnit5.'},
      {q:'Що таке @ExtendWith у JUnit5?',o:['Реєструє extension для розширення поведінки тестів','Включає інший тест-клас','Задає порядок виконання','Налаштовує runner'],c:0,e:'@ExtendWith(MyExtension.class) — механізм розширення JUnit5 замість @RunWith з JUnit4.'},
      {q:'Як задати порядок виконання тестів у JUnit5?',o:['@TestMethodOrder(MethodOrderer.OrderAnnotation.class) + @Order(n)','@RunOrder(n)','@Priority(n)','@Sequence(n)'],c:0,e:'@TestMethodOrder на класі та @Order(n) на методах задають детермінований порядок виконання.'},
      {q:'Що таке @DisplayName у JUnit5?',o:['Задає зрозуміле ім\'я тесту для звітів','Перейменовує клас','Задає групу тестів','Описує assertion'],c:0,e:'@DisplayName("Людський опис тесту") відображається в звітах і IDE замість імені методу.'},
      {q:'Як згрупувати тести у JUnit5?',o:['@Tag("group") + фільтрація','@Group("name")','@Suite("name")','@Category(Group.class)'],c:0,e:'@Tag("smoke") на тестах і фільтрація через Maven/Gradle або IDE дозволяють запускати підмножини тестів.'},
      {q:'Що таке assertThrows у JUnit5?',o:['Перевіряє що метод кидає очікуваний виняток','Перевіряє що виняток НЕ кидається','Ловить будь-який виняток','Перевіряє тип помилки'],c:0,e:'assertThrows(Exception.class, () -> method()) повертає виняток для подальших перевірок його повідомлення тощо.'},
      // ── TestNG ──
      {q:'Яка анотація TestNG позначає тест-метод?',o:['@Test','@TestNG','@TestMethod','@Case'],c:0,e:'@Test з org.testng.annotations.Test — основна анотація TestNG для позначення тест-методу.'},
      {q:'Як задати групи тестів у TestNG?',o:['@Test(groups={"smoke"})','@Group("smoke")','@Tag("smoke")','@Category("smoke")'],c:0,e:'@Test(groups={"smoke","regression"}) — атрибут groups в @Test для групування та вибіркового запуску.'},
      {q:'Як задати залежність між тестами у TestNG?',o:['@Test(dependsOnMethods={"loginTest"})','@DependsOn("loginTest")','@After("loginTest")','@Requires("loginTest")'],c:0,e:'dependsOnMethods або dependsOnGroups — тест запускається тільки якщо залежний тест пройшов.'},
      {q:'Що таке DataProvider у TestNG?',o:['Метод що повертає масив даних для параметризованих тестів','Клас для генерації тестів','Провайдер WebDriver','Фабрика тест-об\'єктів'],c:0,e:'@DataProvider(name="data") повертає Object[][] — кожен рядок це набір параметрів для одного виклику тест-методу.'},
      {q:'Як підключити DataProvider до тест-методу у TestNG?',o:['@Test(dataProvider="data")','@UseDataProvider("data")','@Data("data")','@Parameterized("data")'],c:0,e:'@Test(dataProvider="data", dataProviderClass=DataClass.class) пов\'язує тест з DataProvider.'},
      {q:'Що таке testng.xml?',o:['Конфіг-файл для визначення suite, test, груп та порядку запуску','XML звіт результатів','Схема для XML assertions','Конфіг Maven'],c:0,e:'testng.xml — файл конфігурації TestNG suite: визначає які класи/методи/групи запускати та в якому порядку.'},
      {q:'Що таке ITestListener у TestNG?',o:['Інтерфейс для перехоплення подій тестів (pass, fail, skip)','Listener для HTTP запитів','Listener для WebDriver подій','Інтерфейс для DataProvider'],c:0,e:'ITestListener з методами onTestSuccess, onTestFailure, onTestSkipped тощо — для кастомної логіки при подіях тестів.'},
      {q:'Як зробити soft assertions у TestNG?',o:['SoftAssert sa = new SoftAssert(); ... sa.assertAll()','@Test(soft=true)','TestNG.softAssert()','@SoftAssert на методі'],c:0,e:'SoftAssert накопичує помилки без зупинки, assertAll() в кінці тесту кидає AssertionError з усіма помилками.'},
      // ── Maven / Gradle ──
      {q:'Яка команда Maven запускає тести?',o:['mvn test','mvn run','mvn execute','mvn verify'],c:0,e:'mvn test запускає unit-тести. mvn verify — запускає integration-тести та перевіряє якість.'},
      {q:'Який Maven плагін запускає TestNG/JUnit тести?',o:['maven-surefire-plugin','maven-test-plugin','maven-runner-plugin','maven-junit-plugin'],c:0,e:'maven-surefire-plugin — стандартний плагін для запуску unit-тестів під час фази test.'},
      {q:'Який Maven плагін запускає integration-тести?',o:['maven-failsafe-plugin','maven-surefire-plugin','maven-integration-plugin','maven-verify-plugin'],c:0,e:'maven-failsafe-plugin запускає *IT.java тести під час фази integration-test та verify.'},
      {q:'Як пропустити тести при збірці Maven?',o:['mvn install -DskipTests','mvn install -Dmaven.test.skip=true','mvn install --no-tests','A та B'],c:3,e:'-DskipTests компілює але не запускає. -Dmaven.test.skip=true не компілює і не запускає тести.'},
      {q:'Що таке pom.xml?',o:['Project Object Model — конфіг-файл Maven проекту','Список залежностей','Файл налаштувань','XML звіт'],c:0,e:'pom.xml описує проект: залежності, плагіни, властивості, профілі — основний файл конфігурації Maven.'},
      {q:'Яка команда Gradle запускає тести?',o:['gradle test','gradle run','gradle execute','gradle check'],c:0,e:'gradle test запускає тести. gradle check додатково запускає статичний аналіз та інші перевірки.'},
      {q:'Що таке Gradle wrapper (gradlew)?',o:['Скрипт що завантажує потрібну версію Gradle автоматично','Обгортка для gradle плагінів','Альтернатива pom.xml','Інструмент для деплою'],c:0,e:'gradlew/gradlew.bat — дозволяє запускати Gradle без встановлення, завантажуючи потрібну версію автоматично.'},
      // ── Git ──
      {q:'Яка команда Git створює нову гілку і переходить на неї?',o:['git checkout -b branch','git branch branch && git checkout branch','git new branch','A та B'],c:3,e:'git checkout -b та git switch -c — обидва створюють і переходять на нову гілку.'},
      {q:'Яка різниця між git merge та git rebase?',o:['merge зберігає всю історію, rebase перезаписує її лінійно','merge швидший, rebase повільніший','rebase зберігає commits, merge видаляє їх','Немає різниці'],c:0,e:'merge додає merge commit зберігаючи повну історію. rebase переносить commits на верхівку іншої гілки — чистіша лінійна історія.'},
      {q:'Що таке git stash?',o:['Тимчасово зберігає незакомічені зміни','Видаляє зміни назавжди','Створює нову гілку з змінами','Відправляє зміни на remote'],c:0,e:'git stash зберігає незакомічені зміни в стек. git stash pop повертає їх назад.'},
      {q:'Що таке git cherry-pick?',o:['Застосовує конкретний commit з іншої гілки','Вибирає файли для коміту','Видаляє вибрані commits','Фільтрує git log'],c:0,e:'git cherry-pick <hash> застосовує зміни конкретного коміту на поточну гілку без злиття всієї гілки.'},
      {q:'Що таке .gitignore?',o:['Файл з патернами файлів які Git не відстежує','Список заблокованих користувачів','Файл налаштувань git','Список захищених гілок'],c:0,e:'.gitignore перелічує файли та папки (target/, .idea/, *.log) які Git ігнорує і не включає в commits.'},
      // ── CI/CD ──
      {q:'Що таке CI (Continuous Integration)?',o:['Автоматична збірка та тестування при кожному push','Ручне тестування перед релізом','Автоматичний деплой у production','Моніторинг після деплою'],c:0,e:'CI — практика частого злиття коду з автоматичною збіркою та запуском тестів для раннього виявлення проблем.'},
      {q:'Що таке CD (Continuous Delivery)?',o:['Автоматична підготовка до деплою, але деплой вручну','Автоматичний деплой без участі людини','Тільки збірка артефактів','Моніторинг production'],c:0,e:'Continuous Delivery — кожна зміна готова до деплою в production. Деплой запускається вручну (на відміну від Deployment).'},
      {q:'Що таке Continuous Deployment?',o:['Повністю автоматичний деплой у production без участі людини','Деплой з ручним підтвердженням','Деплой тільки у staging','Деплой по розкладу'],c:0,e:'Continuous Deployment — кожен push що пройшов тести автоматично деплоїться в production без ручного втручання.'},
      {q:'Який файл описує pipeline у GitHub Actions?',o:['.github/workflows/*.yml','Jenkinsfile','gitlab-ci.yml','.github/pipeline.json'],c:0,e:'GitHub Actions використовує YAML файли в .github/workflows/ для опису CI/CD pipeline.'},
      {q:'Як називається конфіг-файл Jenkins pipeline?',o:['Jenkinsfile','jenkins.yml','pipeline.groovy','jenkins.config'],c:0,e:'Jenkinsfile (Groovy DSL) — декларативний або скриптовий опис Jenkins pipeline, зазвичай в корені репозиторію.'},
      {q:'Що таке Docker у контексті тестування?',o:['Контейнеризація для ізольованого та відтворюваного середовища тестів','Система контролю версій','CI/CD платформа','Інструмент для моніторингу'],c:0,e:'Docker дозволяє запускати тести в ізольованих контейнерах — однакове середовище локально і на CI сервері.'},
      {q:'Що таке Dockerfile?',o:['Інструкція для збірки Docker образу','Список залежностей контейнера','Конфіг мережі','Файл змінних середовища'],c:0,e:'Dockerfile — текстовий файл з командами FROM, RUN, COPY, CMD тощо для побудови власного Docker образу.'},
      {q:'Що таке docker-compose?',o:['Інструмент для запуску кількох Docker контейнерів разом','Альтернатива Docker','Система оркестрації як Kubernetes','Менеджер Docker образів'],c:0,e:'docker-compose.yml описує multi-container додатки: наприклад тести + база даних + mock сервер разом.'},
      // ── Page Object / Патерни ──
      {q:'Що таке Page Object Model (POM)?',o:['Патерн де кожна сторінка — окремий клас з локаторами та методами','Схема бази даних тестів','XML опис сторінок','Модель для API тестів'],c:0,e:'POM відокремлює логіку взаємодії з UI від тест-логіки. Кожна сторінка — клас з локаторами та методами дій.'},
      {q:'Яка головна перевага Page Object?',o:['Централізовані локатори — при зміні UI правиш тільки в одному місці','Тести запускаються швидше','Менше залежностей','Автоматична генерація тестів'],c:0,e:'Якщо локатор змінився — правиш тільки в Page Object класі, а не у всіх тестах де він використовується.'},
      {q:'Що таке Page Factory у Selenium?',o:['Механізм ініціалізації WebElement полів через @FindBy анотації','Factory для створення WebDriver','Генератор Page Object класів','Шаблон для тест-класів'],c:0,e:'PageFactory.initElements(driver, this) ініціалізує @FindBy поля ледачим чином через Java Proxy.'},
      {q:'Що таке Fluent Page Object?',o:['Методи сторінки повертають this або інший Page Object для chain calls','Page Object без локаторів','Сторінка з динамічним контентом','Page Object з асинхронними методами'],c:0,e:'Fluent POM: методи повертають Page Object для fluent API: loginPage.enterEmail(e).enterPassword(p).clickLogin().'},
      {q:'Що таке Singleton патерн у контексті WebDriver?',o:['Один екземпляр WebDriver на весь тест-ран або тред','WebDriver що запускає один тест','Driver без можливості закриття','Driver з єдиним вікном'],c:0,e:'WebDriver Singleton забезпечує один екземпляр driver на потік. З паралельними тестами використовують ThreadLocal.'},
      {q:'Що таке ThreadLocal WebDriver?',o:['Кожен тред має свій екземпляр WebDriver — для паралельного запуску','Shared WebDriver між тредами','WebDriver з thread safety','WebDriver для async тестів'],c:0,e:'ThreadLocal<WebDriver> гарантує ізоляцію: кожен паралельний тест отримує свій власний WebDriver екземпляр.'},
      {q:'Що таке Builder патерн у тестових даних?',o:['Покроковий fluent API для створення складних об\'єктів тестових даних','Патерн для побудови локаторів','Генератор звітів','Клас для збірки Maven'],c:0,e:'User.builder().name("John").email("j@t.com").role(ADMIN).build() — читабельне створення об\'єктів без великих конструкторів.'},
      {q:'Що таке Factory патерн у тестах?',o:['Фабричний метод для створення об\'єктів без прив\'язки до конкретного класу','Список тест-даних','Клас для WebDriver','Генератор тест-кейсів'],c:0,e:'Factory приховує деталі створення об\'єктів: WebDriverFactory.getDriver("chrome") повертає потрібний driver.'},
      {q:'Що таке Strategy патерн у тестах?',o:['Інтерфейс для взаємозамінних алгоритмів/поведінок','Стратегія тест-планування','Порядок виконання тестів','Шаблон для assertions'],c:0,e:'Strategy дозволяє підміняти поведінку: LoginStrategy може бути UILogin або APILogin — тести не знають різниці.'},
      // ── Allure ──
      {q:'Яка анотація Allure додає крок до звіту?',o:['@Step','@AllureStep','@ReportStep','@TestStep'],c:0,e:'@Step("Опис кроку") над методом — Allure автоматично додає його як крок у звіті з параметрами.'},
      {q:'Яка анотація Allure додає опис до тесту?',o:['@Description("текст")','@TestDescription("текст")','@Details("текст")','@Info("текст")'],c:0,e:'@Description("Детальний опис тесту") додає опис тест-кейсу у Allure звіт.'},
      {q:'Яка анотація Allure прив\'язує тест до issue?',o:['@Issue("BUG-123")','@Link(type=ISSUE)','@Bug("BUG-123")','A та B'],c:3,e:'@Issue("BUG-123") та @Link(url, type=LinkType.ISSUE) — обидва додають посилання на issue tracker.'},
      {q:'Як прикріпити скріншот до Allure звіту вручну?',o:['Allure.addAttachment("name", file)','Allure.screenshot("name")','Allure.attach("name", bytes)','A та C'],c:3,e:'Allure.addAttachment() та Allure.attach() — обидва дозволяють прикріпити файли, скріншоти, логи до звіту.'},
      {q:'Яка анотація Allure задає severity тесту?',o:['@Severity(SeverityLevel.CRITICAL)','@Priority(CRITICAL)','@Level(CRITICAL)','@Importance(CRITICAL)'],c:0,e:'@Severity(SeverityLevel.BLOCKER/CRITICAL/NORMAL/MINOR/TRIVIAL) задає рівень критичності тесту у звіті.'},
      {q:'Яка анотація Allure додає story?',o:['@Story("User login")','@UserStory("User login")','@Feature("User login")','@Epic("User login")'],c:0,e:'@Epic → @Feature → @Story — ієрархія групування тестів у Allure: Epic > Feature > Story.'},
      // ── Selenium ──
      {q:'Яка різниця між findElement та findElements у Selenium?',o:['findElement — перший або NoSuchElementException, findElements — список або порожній список','findElement швидший','findElements ігнорує невидимі','Немає різниці'],c:0,e:'findElement кидає NoSuchElementException якщо не знайдено. findElements повертає порожній List без помилок.'},
      {q:'Що таке явне очікування (Explicit Wait) у Selenium?',o:['WebDriverWait що чекає конкретну умову до таймауту','Thread.sleep на фіксований час','Неявне очікування для всіх елементів','Очікування завантаження сторінки'],c:0,e:'WebDriverWait + ExpectedConditions чекає конкретну умову (visibilityOf, clickable) до заданого таймауту.'},
      {q:'Що таке неявне очікування (Implicit Wait)?',o:['Глобальний таймаут пошуку елементів для всього WebDriver','Очікування для конкретного елемента','Thread.sleep','Очікування AJAX'],c:0,e:'driver.manage().timeouts().implicitlyWait() задає час пошуку елемента глобально для всіх findElement викликів.'},
      {q:'Чому не рекомендують змішувати Implicit та Explicit Wait?',o:['Непередбачувана поведінка — таймаути можуть складатись','Різна продуктивність','Тільки один може бути активним','Вони несумісні класово'],c:0,e:'При змішуванні загальний таймаут може бути сумою implicit + explicit, що призводить до непередбачуваних затримок.'},
      {q:'Що таке Actions клас у Selenium?',o:['Клас для складних взаємодій: drag&drop, hover, клавіші','Клас для JavaScript виконання','Клас для роботи з вікнами','Клас для cookies'],c:0,e:'Actions API дозволяє виконувати низькорівневі дії: moveToElement, clickAndHold, dragAndDrop, sendKeys тощо.'},
      {q:'Як виконати JavaScript у Selenium?',o:['((JavascriptExecutor)driver).executeScript("script")','driver.js("script")','driver.runScript("script")','Actions.js(driver, "script")'],c:0,e:'JavascriptExecutor.executeScript() дозволяє виконати довільний JS, наприклад для скролу або кліку поза viewport.'},
      {q:'Що таке WebDriverManager?',o:['Бібліотека що автоматично завантажує потрібний driver (chromedriver тощо)','Менеджер WebDriver сесій','Пул WebDriver екземплярів','Інструмент для grid налаштування'],c:0,e:'io.github.bonigarcia:webdrivermanager автоматично визначає версію браузера та завантажує відповідний драйвер.'},
      // ── Якість коду тестів ──
      {q:'Що таке DRY принцип у тестах?',o:['Don\'t Repeat Yourself — виноси дублюючий код у хелпери/методи','Debug Run Yield — запуск дебагу','Daily Run Yesterday — запуск вчорашніх тестів','Defer Retry Yield'],c:0,e:'DRY: не дублюй код — виноси повторювані дії у методи Page Object, хелпери, base класи.'},
      {q:'Що таке принцип єдиної відповідальності (SRP) у тестах?',o:['Кожен тест перевіряє одну конкретну поведінку','Тест має один assertion','Один тест-клас на модуль','Один тест-метод у класі'],c:0,e:'SRP у тестах: один тест — одна поведінка що перевіряється. Легше знайти причину падіння.'},
      {q:'Що таке test isolation?',o:['Тести не залежать один від одного і можуть виконуватись у будь-якому порядку','Тести запускаються ізольовано від мережі','Тести без зовнішніх залежностей','Тести в окремому процесі'],c:0,e:'Ізольований тест не залишає стан що впливає на інші тести, не залежить від порядку виконання.'},
      {q:'Що таке test doubles?',o:['Загальна назва для mock, stub, spy, fake, dummy','Тести що дублюють функціонал','Копії тестових класів','Паралельні тести'],c:0,e:'Test doubles: Dummy (заповнювач), Stub (фіксована відповідь), Spy (обгортка), Mock (верифікація викликів), Fake (спрощена реалізація).'},
      {q:'Що таке Mock у тестуванні?',o:['Об\'єкт що перевіряє чи методи викликались з правильними параметрами','Об\'єкт з фіксованою відповіддю','Справжній об\'єкт що логує виклики','Копія бази даних'],c:0,e:'Mock верифікує поведінку: перевіряє що метод був викликаний, скільки разів і з якими аргументами.'},
      {q:'Що таке Stub у тестуванні?',o:['Повертає заздалегідь задану відповідь без верифікації викликів','Перевіряє виклики методів','Спрощена реалізація інтерфейсу','Wrapper над реальним об\'єктом'],c:0,e:'Stub повертає фіксовані дані (наприклад заглушку HTTP відповіді) без перевірки як він викликався.'},
      {q:'Що таке WireMock?',o:['Інструмент для mock HTTP сервера при тестуванні API','Мок-фреймворк для Java об\'єктів','Плагін для Selenium','Інструмент для навантажувального тестування'],c:0,e:'WireMock запускає локальний HTTP сервер що відповідає за заданими правилами — для ізольованого тестування API клієнтів.'},
      {q:'Що таке Mockito?',o:['Java фреймворк для створення mock об\'єктів','HTTP mock сервер','Плагін TestNG','Інструмент для тест-даних'],c:0,e:'Mockito — найпопулярніший Java фреймворк для mocking: @Mock, when().thenReturn(), verify() тощо.'},
      // ── REST API концепції ──
      {q:'Що таке HTTP метод GET?',o:['Отримання ресурсу, ідемпотентний, без тіла запиту','Створення ресурсу','Оновлення ресурсу','Видалення ресурсу'],c:0,e:'GET отримує ресурс. Ідемпотентний і безпечний — не змінює стан сервера. Не має тіла запиту.'},
      {q:'Який HTTP статус означає "Created"?',o:['200','201','204','301'],c:1,e:'201 Created — ресурс успішно створено (зазвичай у відповідь на POST). Часто містить Location заголовок.'},
      {q:'Який HTTP статус означає "No Content"?',o:['200','201','204','404'],c:2,e:'204 No Content — запит успішний але відповідь не містить тіла. Типово для DELETE або PUT.'},
      {q:'Який HTTP статус означає "Unauthorized"?',o:['400','401','403','404'],c:1,e:'401 Unauthorized — потрібна автентифікація. 403 Forbidden — автентифікований але немає прав доступу.'},
      {q:'Що таке ідемпотентність HTTP методів?',o:['Повторний виклик дає той самий результат що і одноразовий','Метод не змінює стан','Метод повертає однаковий response','Метод кешується'],c:0,e:'Ідемпотентні методи: GET, PUT, DELETE, HEAD. Не ідемпотентний: POST (кожен виклик може створити новий ресурс).'},
      {q:'Що таке REST (Representational State Transfer)?',o:['Архітектурний стиль для розподілених систем через HTTP','Протокол передачі даних','Формат даних','Бібліотека для API тестів'],c:0,e:'REST — архітектурний стиль (не протокол): stateless, client-server, uniform interface, cacheable, layered system.'},
      {q:'Що таке JSON Schema?',o:['Специфікація для опису структури та валідації JSON документів','Формат для API відповідей','Альтернатива JSON','Схема бази даних'],c:0,e:'JSON Schema описує очікувану структуру JSON: типи полів, обов\'язкові поля, формати — для автоматичної валідації.'},
      // ── Загальні QA практики ──
      {q:'Що таке shift-left тестування?',o:['Залучення тестування раніше в циклі розробки','Тестування тільки на production','Перенесення тестів на наступний спринт','Тестування після релізу'],c:0,e:'Shift-left: тестувальники залучаються на етапі requirements та дизайну, а не тільки після розробки.'},
      {q:'Що таке coverage у тестуванні?',o:['Відсоток коду/вимог покритих тестами','Кількість запущених тестів','Час виконання тестів','Кількість знайдених багів'],c:0,e:'Coverage: code coverage (рядки/гілки коду покриті тестами), requirements coverage (вимоги покриті тест-кейсами).'},
      {q:'Що таке code coverage 100% і чому це не завжди мета?',o:['Всі рядки коду виконані, але не гарантує правильність логіки','Всі баги знайдені','Всі вимоги перевірені','Повна якість продукту'],c:0,e:'100% code coverage означає що кожен рядок виконаний, але не що перевірено всі комбінації вхідних даних і edge cases.'},
      {q:'Що таке Boundary Value Analysis (BVA)?',o:['Тестування граничних значень діапазону вхідних даних','Тестування null значень','Тестування performance меж','Перевірка крайніх UI елементів'],c:0,e:'BVA: для поля 1-100 тестуємо 0, 1, 2, 99, 100, 101 — помилки частіше на межах діапазону.'},
      {q:'Що таке Equivalence Partitioning?',o:['Розділення вхідних даних на класи де поведінка однакова','Розділення тестів на групи','Партиціонування бази даних','Розділення по тред-пулам'],c:0,e:'EP: якщо поле приймає 1-100, тестуємо по одному значенню з кожного класу: негативні, 1-100, >100 — замість перебору всіх.'},
      {q:'Що таке Decision Table тестування?',o:['Таблиця умов та відповідних дій для перевірки всіх комбінацій','Таблиця тест-кейсів','Матриця трасування вимог','Таблиця результатів тестів'],c:0,e:'Decision Table перераховує всі комбінації умов і очікуваних дій — корисно для складної бізнес-логіки.'},
      {q:'Що таке State Transition тестування?',o:['Тестування переходів між станами системи','Тестування анімацій','Перевірка CSS станів','Тестування після перезапуску'],c:0,e:'State Transition: будуємо діаграму станів і перевіряємо всі валідні та невалідні переходи між ними.'},
      {q:'Що таке трасування вимог (Requirements Traceability)?',o:['Зв\'язок між вимогами та тест-кейсами що їх перевіряють','Відстеження часу розробки','Логування API запитів','Трасування помилок'],c:0,e:'Traceability Matrix показує які тест-кейси покривають які вимоги — для оцінки coverage та impact analysis.'},
      {q:'Що таке bug report?',o:['Структурований опис дефекту: кроки відтворення, очікуваний/фактичний результат, середовище','Автоматичний звіт CI з логами запуску тестів, coverage, duration і списком failed assertions','Коротке повідомлення розробнику без expected result, environment і точних кроків відтворення','Документ з бізнес-вимогою, acceptance criteria і roadmap для майбутньої фічі'],c:0,e:'Хороший bug report: Title, Steps to Reproduce, Expected Result, Actual Result, Environment, Severity, Priority, Attachments.'},
      {q:'Яка різниця між Severity та Priority багу?',o:['Severity — вплив на систему, Priority — важливість виправлення для бізнесу','Вони однакові','Severity для QA, Priority для PM','Priority — технічна оцінка'],c:0,e:'Severity: наскільки баг критичний технічно (blocker/critical/major/minor). Priority: наскільки терміново треба виправити (business).'},
      {q:'Що таке performance тестування?',o:['Перевірка швидкодії, стабільності та масштабованості під навантаженням','Перевірка функціональності','Тестування безпеки','Тестування UI'],c:0,e:'Performance testing включає: Load (нормальне навантаження), Stress (пікове), Endurance (тривале), Spike (різкий ріст).'},
      {q:'Який інструмент використовують для навантажувального тестування?',o:['JMeter, Gatling, k6','Selenium, Selenide','Postman, Rest Assured','SonarQube, Checkstyle'],c:0,e:'JMeter (Apache), Gatling (Scala DSL), k6 (JavaScript) — популярні інструменти для навантажувального тестування.'},
      {q:'Що таке FIRST принципи для unit тестів?',o:['Fast, Independent, Repeatable, Self-validating, Timely','Functional, Integrated, Robust, Secure, Tested','Flexible, Isolated, Readable, Scalable, Tested','Fast, Integrated, Reliable, Simple, Thorough'],c:0,e:'FIRST: Fast (швидкі), Independent (незалежні), Repeatable (відтворювані), Self-validating (самоперевіряючі), Timely (вчасно написані).'},
      {q:'Що таке WireMock stubbing?',o:['Налаштування WireMock щоб повертати задану відповідь на запит','Заглушка Java методу','Підміна WebDriver','Мок бази даних'],c:0,e:'stubFor(get(urlEqualTo("/api")).willReturn(aResponse().withStatus(200).withBody(json))) — WireMock stub.'},
      {q:'Що таке Postman Collection?',o:['Набір HTTP запитів, тестів та змінних для документації та автоматизації API','Список API ендпоінтів','Бібліотека для API тестів','CI/CD конфіг для API'],c:0,e:'Postman Collection — організована група запитів з pre-request scripts, тестами (pm.test), змінними та environments.'},
      {q:'Що таке TestContainers?',o:['Java бібліотека для запуску Docker контейнерів у тестах (БД, Kafka тощо)','Контейнер для зберігання тест-даних','Docker образ для тестів','Kubernetes для тестового середовища'],c:0,e:'Testcontainers запускає реальні Docker контейнери (PostgreSQL, Redis, Kafka) прямо у тестах — без моків.'},
      {q:'Що таке SonarQube?',o:['Платформа для аналізу якості коду: баги, вразливості, code smells','CI/CD платформа','Інструмент для тестів','Система моніторингу'],c:0,e:'SonarQube аналізує статично Java/JS/etc код: знаходить баги, security vulnerabilities, duplications, code coverage.'},
      {q:'Що таке code review у контексті тестів?',o:['Перегляд тест-коду колегами перед мерджем','Перегляд результатів тестів','Автоматична перевірка коду','Ревью вимог'],c:0,e:'Code review тестового коду важливий так само як production коду: перевіряє логіку, читабельність, покриття edge cases.'},
      {q:'Що таке тест-план?',o:['Документ що описує scope, підхід, ресурси та розклад тестування','Список тест-кейсів','Звіт про результати','Конфігурація CI/CD'],c:0,e:'Test Plan (IEEE 829): scope тестування, підходи, ризики, ресурси, критерії входу/виходу, розклад та відповідальність.'},
      {q:'Що таке критерії виходу (Exit Criteria) у тестуванні?',o:['Умови за яких тестування вважається завершеним','Умови початку тестування','Список завершених тестів','Кінець спринту'],c:0,e:'Exit Criteria: наприклад 95% тест-кейсів пройдено, 0 критичних багів відкрито, coverage > 80%. Визначають коли можна релізити.'},
    ]
  },
  javacore: {
    label: 'Java Core',
    badge: '100 запитань · Основи мови',
    desc: 'ООП, типи даних, колекції, Stream API, виключення, багатопоточність, generics, Java 8+ та інші основи мови.',
    code: [
      'List<String> list =',
      '  new ArrayList<>();',
      'list.stream()',
      '  .filter(s -> s',
      '    .startsWith("A"))',
      '  .forEach(',
      '    System.out::println);'
    ],
    bank: [
      // ── ООП ──
      {q:'Які чотири основні принципи ООП?',o:['Encapsulation, Inheritance, Polymorphism, Abstraction','Encapsulation, Interface, Polymorphism, Annotation','Inheritance, Iteration, Polymorphism, Abstraction','Encapsulation, Inheritance, Procedure, Abstraction'],c:0,e:'4 принципи ООП: Інкапсуляція, Спадкування, Поліморфізм, Абстракція — основа об\'єктно-орієнтованого програмування.'},
      {q:'Що таке інкапсуляція?',o:['Приховування внутрішнього стану об\'єкта та надання доступу через методи','Спадкування від батьківського класу','Одне ім\'я методу — різна поведінка','Відокремлення інтерфейсу від реалізації'],c:0,e:'Інкапсуляція: private поля + public getter/setter. Захищає стан об\'єкта від некоректної зміни ззовні.'},
      {q:'Що таке поліморфізм?',o:['Один інтерфейс — різні реалізації; метод поводиться по-різному залежно від об\'єкта','Клас має лише одну форму','Методи мають однаковий код','Об\'єкт може бути лише одного типу'],c:0,e:'Поліморфізм: один метод — різна поведінка. Compile-time (overloading) та runtime (overriding через спадкування).'},
      {q:'Яка різниця між abstract class та interface?',o:['Abstract class може мати стан/конструктор, клас може успадкувати тільки один; interface — множинне успадкування','Abstract class підтримує множинне успадкування, а interface завжди має тільки одну реалізацію','Abstract class не може мати реалізації методів, а interface завжди має обов\'язковий конструктор','Interface зберігає стан об\'єкта і private поля, abstract class використовується лише як marker type'],c:0,e:'Abstract class: стан, конструктор, одиночне успадкування. Interface: множинна реалізація, з Java 8 — default/static методи.'},
      {q:'Що таке overriding (перевизначення)?',o:['Підклас надає власну реалізацію методу батьківського класу з тим самим підписом','Клас визначає кілька методів з однаковим іменем але різними параметрами','Приховування поля батьківського класу','Виклик методу батька'],c:0,e:'Overriding: підклас перевизначає метод батька з тим же підписом. Анотація @Override допомагає уникнути помилок.'},
      {q:'Що таке overloading (перевантаження)?',o:['Кілька методів з однаковим іменем але різними параметрами в одному класі','Перевизначення методу в підкласі','Виклик super методу','Приховування методу'],c:0,e:'Overloading: методи з однаковою назвою але різною кількістю/типами параметрів. Вирішується на compile-time.'},
      {q:'Що робить ключове слово final?',o:['Клас — не можна успадкувати; метод — не можна перевизначити; змінна — константа','Тільки для змінних-констант','Тільки для класів','Позначає абстрактні елементи'],c:0,e:'final клас (не успадковується), final метод (не перевизначається), final змінна (присвоюється один раз).'},
      {q:'Що таке static в Java?',o:['Член класу що належить класу а не екземпляру; спільний для всіх об\'єктів','Незмінний член класу','Приватний член класу','Абстрактний член класу'],c:0,e:'static поля та методи належать класу, а не об\'єкту. Доступні через ім\'я класу без створення екземпляра.'},
      {q:'Що таке конструктор?',o:['Спеціальний метод для ініціалізації об\'єкта, викликається при new','Метод що викликається при знищенні об\'єкта','Статичний метод ініціалізації','Метод для копіювання об\'єкта'],c:0,e:'Конструктор: назва = назва класу, без return типу. Якщо не задати — компілятор генерує default (без параметрів).'},
      {q:'Що таке super в Java?',o:['Посилання на батьківський клас для виклику його конструктора чи методів','Посилання на поточний об\'єкт','Виклик static методу батька','Позначення Override методу'],c:0,e:'super() — виклик конструктора батька (першим рядком). super.method() — виклик перевизначеного методу батьківського класу.'},
      // ── Типи даних ──
      {q:'Які примітивні типи є в Java?',o:['byte, short, int, long, float, double, char, boolean','int, long, float, double, String, boolean','byte, int, long, double, char, boolean, String','int, float, double, String, char, boolean, null'],c:0,e:'8 примітивних типів: byte(1), short(2), int(4), long(8), float(4), double(8), char(2), boolean. String — об\'єкт.'},
      {q:'Яка різниця між int та Integer?',o:['int — примітив, Integer — обгортка (wrapper), підтримує null і колекції','int більший за Integer','Integer швидший','Немає різниці'],c:0,e:'int — примітивний тип. Integer — клас-обгортка з методами. Autoboxing/unboxing — автоматична конвертація між ними.'},
      {q:'Що таке autoboxing?',o:['Автоматична конвертація примітиву в його клас-обгортку','Автоматичне приведення типів','Автоматична ініціалізація змінних','Автоматичне виділення пам\'яті'],c:0,e:'Autoboxing: int → Integer, double → Double автоматично. Unboxing — зворотно. Може кинути NullPointerException якщо null.'},
      {q:'Яке значення за замовчуванням у int поля класу?',o:['0','null','-1','undefined'],c:0,e:'Поля класу: int/long/short/byte = 0, float/double = 0.0, boolean = false, char = \'\\0\', Object = null.'},
      {q:'Що таке String pool?',o:['Область пам\'яті heap де зберігаються String літерали для повторного використання','Список всіх рядків програми','Пул потоків для обробки рядків','Кеш конвертацій рядків'],c:0,e:'String pool (intern pool): "hello" == "hello" → true (один об\'єкт). new String("hello") == "hello" → false (новий об\'єкт у heap).'},
      {q:'Чому String є immutable (незмінним) в Java?',o:['Безпека (паролі, ключі), потокобезпечність, String pool оптимізація','Тільки для продуктивності','Тільки через String pool','Для простоти реалізації'],c:0,e:'String immutable: безпека (не можна змінити пароль після передачі), thread-safe, String pool можливий, hashCode кешується.'},
      {q:'Яка різниця між String, StringBuilder та StringBuffer?',o:['String — immutable; StringBuilder — mutable, не thread-safe; StringBuffer — mutable, thread-safe','Вони однакові','String — для чисел, StringBuilder — для тексту','StringBuffer застарілий'],c:0,e:'String незмінний. StringBuilder — мутабельний, швидший (не synchronized). StringBuffer — мутабельний, thread-safe (synchronized методи).'},
      {q:'Що таке String.equals() vs ==?',o:['equals() порівнює вміст рядка, == порівнює посилання (чи той самий об\'єкт)','Немає різниці','== порівнює вміст, equals порівнює тип','equals() завжди повертає true для рядків'],c:0,e:'== для об\'єктів порівнює адреси в пам\'яті. equals() порівнює вміст. Для String завжди використовуй equals().'},
      {q:'Що повертає String.charAt(i)?',o:['char — символ на позиції i','String — підрядок','int — ASCII код символу','byte — байт символу'],c:0,e:'charAt(i) повертає char на позиції i (0-based). Кидає StringIndexOutOfBoundsException якщо i виходить за межі.'},
      {q:'Що робить String.split(regex)?',o:['Розбиває рядок на масив підрядків за роздільником','Видаляє символи','Замінює підрядок','Шукає збіги regex'],c:0,e:'split(regex) повертає String[] — масив підрядків. "a,b,c".split(",") → ["a","b","c"].'},
      // ── Колекції ──
      {q:'Яка різниця між ArrayList та LinkedList?',o:['ArrayList — масив (швидкий get, повільний insert/delete в середині); LinkedList — двозв\'язний список (повільний get, швидкий insert/delete)','ArrayList — linked nodes, швидкий insert будь-де; LinkedList — масив, швидкий random access і менше overhead','ArrayList і LinkedList мають однакову структуру, різниця лише у синхронізації та thread-safety','LinkedList завжди швидший і займає менше пам\'яті, тому ArrayList майже не використовують'],c:0,e:'ArrayList: O(1) get, O(n) insert/delete в середині. LinkedList: O(n) get, O(1) insert/delete при наявності вузла.'},
      {q:'Яка різниця між HashMap та TreeMap?',o:['HashMap — O(1) get/put, не відсортований; TreeMap — O(log n), відсортований за ключем','TreeMap швидший','HashMap відсортований за insertion order','Немає різниці'],c:0,e:'HashMap: O(1) операції, порядок не гарантований. TreeMap: O(log n), ключі відсортовані природно або через Comparator.'},
      {q:'Яка різниця між HashMap та LinkedHashMap?',o:['LinkedHashMap зберігає порядок вставки елементів, HashMap — ні','LinkedHashMap швидший','HashMap зберігає порядок','LinkedHashMap не дозволяє null'],c:0,e:'LinkedHashMap = HashMap + doubly-linked list. Зберігає порядок вставки або порядок доступу (accessOrder=true).'},
      {q:'Що таке HashSet?',o:['Колекція унікальних елементів без порядку, реалізована через HashMap','Відсортований Set','Set з порядком вставки','Thread-safe Set'],c:0,e:'HashSet реалізований через HashMap (елемент = ключ, PRESENT = значення). Унікальність через equals() + hashCode().'},
      {q:'Контракт equals() та hashCode()?',o:['Якщо equals() → true, то hashCode() повинні бути рівними; але не навпаки','equals() і hashCode() незалежні','hashCode() рівні гарантує equals() → true','Контракту немає'],c:0,e:'Контракт: рівні об\'єкти (equals=true) ОБОВ\'ЯЗКОВО мають рівний hashCode. Порушення ламає HashMap, HashSet.'},
      {q:'Що таке Iterator?',o:['Інтерфейс для послідовного обходу колекції з методами hasNext() та next()','Клас для сортування','Інтерфейс для порівняння','Генератор послідовностей'],c:0,e:'Iterator: hasNext() перевіряє наявність, next() повертає наступний елемент, remove() видаляє поточний.'},
      {q:'Що таке ConcurrentModificationException?',o:['Виникає при модифікації колекції під час ітерації через неї','Виникає при concurrent доступі з різних тредів','Виникає при null значенні','Виникає при порожній колекції'],c:0,e:'CME: якщо змінити ArrayList під час for-each — кидає виняток. Рішення: Iterator.remove() або CopyOnWriteArrayList.'},
      {q:'Яка різниця між Comparable та Comparator?',o:['Comparable — клас сам визначає "природний" порядок (compareTo); Comparator — зовнішній об\'єкт для кастомного сортування','Comparable задає зовнішній порядок у сервісі; Comparator завжди змінює клас і його compareTo()','Comparable працює тільки для чисел і рядків; Comparator потрібен лише для колекцій з null','Comparable та Comparator однакові за роллю, різниця лише у назві методу сортування'],c:0,e:'Comparable: клас реалізує compareTo() — один "природний" порядок. Comparator: окремий об\'єкт, кілька різних порядків.'},
      {q:'Що таке Collections.unmodifiableList()?',o:['Повертає обгортку списку що кидає UnsupportedOperationException при модифікації','Повертає порожній список','Сортує та заморожує список','Копіює список'],c:0,e:'unmodifiableList() — view що забороняє зміни. List.of() (Java 9+) — справжній immutable список.'},
      {q:'Яка різниця між Queue та Deque?',o:['Queue — FIFO з одного кінця; Deque — Double Ended Queue, додавати/видаляти з обох кінців','Queue дозволяє додавати з обох кінців; Deque завжди працює тільки як FIFO черга','Deque — synchronized Queue для багатопоточності, а Queue — immutable структура даних','Queue і Deque однакові за API, різниця лише у швидкості реалізацій LinkedList та ArrayDeque'],c:0,e:'Queue: offer/poll/peek (FIFO). Deque: offerFirst/offerLast/pollFirst/pollLast — може бути і черга і стек.'},
      // ── Stream API ──
      {q:'Що таке Stream у Java 8?',o:['Послідовність елементів що підтримує ланцюжок функціональних операцій','Потік введення/виводу','Черга задач','Паралельний список'],c:0,e:'Stream — абстракція для декларативної обробки колекцій: filter, map, reduce. Lazy evaluation, використовується один раз.'},
      {q:'Яка різниця між intermediate та terminal операціями Stream?',o:['Intermediate — ледачі, повертають Stream; terminal — запускають обробку, повертають результат','Intermediate одразу запускають pipeline і повертають колекцію; terminal лише додають новий крок у Stream','Terminal операції завжди повертають Stream, а intermediate повертають конкретний результат або void','Intermediate і terminal однакові, різниця тільки в тому, чи метод викликаний до або після filter()'],c:0,e:'Intermediate (filter, map, sorted) — lazy, не виконуються без термінальної. Terminal (collect, forEach, count) — запускають pipeline.'},
      {q:'Що робить Stream.filter()?',o:['Повертає Stream з елементами що відповідають предикату','Видаляє елементи з оригінальної колекції','Замінює елементи','Сортує елементи'],c:0,e:'filter(Predicate) залишає тільки елементи для яких predicate.test() == true. Не змінює оригінальну колекцію.'},
      {q:'Що робить Stream.map()?',o:['Перетворює кожен елемент через функцію, повертаючи новий Stream','Фільтрує елементи','Збирає елементи','Групує елементи'],c:0,e:'map(Function) перетворює кожен елемент: stream.map(String::toUpperCase) → Stream усіх рядків у верхньому регістрі.'},
      {q:'Що робить Stream.flatMap()?',o:['Перетворює елемент у Stream і з\'єднує всі вкладені Stream в один','Те саме що map()','Фільтрує вкладені Stream','Розгортає тільки перший рівень'],c:0,e:'flatMap: List<List<T>> → Stream<T>. Кожен елемент перетворюється у Stream, всі об\'єднуються в один плоский Stream.'},
      {q:'Що робить Stream.collect(Collectors.toList())?',o:['Збирає елементи Stream у List','Повертає перший елемент','Рахує елементи','Конвертує у масив'],c:0,e:'collect() — термінальна операція. Collectors.toList(), toSet(), toMap(), joining(), groupingBy() — популярні колектори.'},
      {q:'Що робить Collectors.groupingBy()?',o:['Групує елементи за ключем у Map<K, List<V>>','Сортує за групами','Фільтрує по групах','Підраховує групи'],c:0,e:'groupingBy(classifier) → Map. stream.collect(groupingBy(Person::getDept)) → Map<String, List<Person>>.'},
      {q:'Що робить Stream.reduce()?',o:['Зводить елементи до одного значення через бінарну операцію','Видаляє дублікати','Сортує елементи','Розбиває на підгрупи'],c:0,e:'reduce(identity, BinaryOperator): stream.reduce(0, Integer::sum) підсумовує всі елементи. Повертає Optional якщо без identity.'},
      {q:'Що таке Optional у Java 8?',o:['Контейнер що може містити або значення або бути порожнім — замість null','Обов\'язкове значення','Аналог nullable типу','Тільки для колекцій'],c:0,e:'Optional уникає NullPointerException: Optional.of(), ofNullable(), empty(). Методи: isPresent(), get(), orElse(), map().'},
      {q:'Що робить Stream.distinct()?',o:['Видаляє дублікати використовуючи equals()/hashCode()','Сортує елементи','Фільтрує null','Залишає тільки перший елемент'],c:0,e:'distinct() повертає Stream з унікальними елементами. Порядок зберігається для ordered streams.'},
      // ── Виключення ──
      {q:'Яка ієрархія виключень у Java?',o:['Throwable → Error / Exception → RuntimeException / checked exceptions','Exception → Error → Throwable','RuntimeException → Exception → Throwable','Error → Exception → Throwable'],c:0,e:'Throwable: Error (JVM помилки, не ловимо) та Exception. Exception: checked (IOException) та unchecked (RuntimeException).'},
      {q:'Яка різниця між checked та unchecked виключеннями?',o:['Checked — компілятор вимагає обробки (try-catch або throws); unchecked (RuntimeException) — не вимагає','Checked виникають тільки у runtime і не перевіряються компілятором; unchecked завжди треба ловити','Unchecked потрібно оголошувати в throws, а checked можна ігнорувати без try-catch у сигнатурі','Checked та unchecked однакові для компілятора, різниця лише у severity помилки в логах'],c:0,e:'Checked: IOException, SQLException — треба try-catch або throws у сигнатурі. Unchecked (RuntimeException): NullPointerException, IndexOutOfBoundsException.'},
      {q:'Що робить finally блок?',o:['Виконується завжди — і при успіху і при виключенні — для звільнення ресурсів','Виконується тільки при виключенні','Виконується тільки при успіху','Виконується асинхронно'],c:0,e:'finally завжди виконується (крім System.exit()). Використовується для закриття ресурсів. Замінений try-with-resources.'},
      {q:'Що таке try-with-resources?',o:['try(Resource r = new Resource()) — автоматично закриває AutoCloseable ресурс після блоку','Виловлює тільки IOException','Повторна спроба після виключення','Альтернативна назва finally'],c:0,e:'try-with-resources: компілятор автоматично викликає close() після блоку. Клас повинен реалізовувати AutoCloseable.'},
      {q:'Як створити власне виключення?',o:['Успадкувати від Exception або RuntimeException і додати конструктори','Реалізувати інтерфейс Exception','Анотувати клас @Exception','Зареєструвати в JVM'],c:0,e:'class MyException extends RuntimeException { MyException(String msg) { super(msg); } } — простий кастомний unchecked виняток.'},
      {q:'Що таке multi-catch у Java 7+?',o:['catch (IOException | SQLException e) — один блок для кількох типів виключень','Вкладені try-catch блоки','Кілька finally блоків','Catch із кількома параметрами'],c:0,e:'catch (IOException | SQLException e) — лаконічний синтаксис для однакової обробки різних виключень.'},
      // ── Generics ──
      {q:'Що таке Generics у Java?',o:['Параметризовані типи для type-safe колекцій та методів без приведення типів','Загальні методи','Абстрактні класи','Шаблони проектування'],c:0,e:'Generics: List<String> замість List — помилки типів виявляються на compile-time, не потрібен explicit cast.'},
      {q:'Що таке upper bounded wildcard <? extends T>?',o:['Приймає T або будь-який підтип T (ковариантність) — тільки читання','Приймає T або будь-який батьківський тип','Будь-який тип','Тільки T'],c:0,e:'<? extends Number> приймає Number, Integer, Double тощо. Можна читати як Number, але не додавати (Producer Extends).'},
      {q:'Що таке lower bounded wildcard <? super T>?',o:['Приймає T або будь-який батьківський тип — можна додавати T (контраваріантність)','Приймає T або підтип','Будь-який тип','Тільки батьківські типи'],c:0,e:'<? super Integer> приймає Integer, Number, Object. Можна додавати Integer, але читати тільки як Object (Consumer Super).'},
      {q:'Що таке type erasure?',o:['Під час компіляції generic типи стираються — у runtime List<String> і List<Integer> однакові','Generic типи зберігаються у runtime','Erasure тільки для wildcards','Erasure застосовується лише до методів'],c:0,e:'Type erasure: List<String> → List після компіляції. Не можна instanceof List<String> або new T[] у runtime.'},
      // ── Багатопоточність ──
      {q:'Як створити потік у Java?',o:['Реалізувати Runnable або Callable і передати в Thread/ExecutorService','Тільки успадкувати від Thread','Тільки через ExecutorService','Тільки через Future'],c:0,e:'1) new Thread(runnable).start() 2) ExecutorService.submit(runnable/callable) 3) CompletableFuture. Runnable кращий за extend Thread.'},
      {q:'Яка різниця між Runnable та Callable?',o:['Runnable.run() — void без виключень; Callable.call() — повертає результат, може кидати checked виключення','Runnable.call() повертає Future напряму; Callable.run() використовується лише для fire-and-forget задач','Runnable і Callable однакові, але Callable доступний тільки у synchronized блоках ExecutorService','Runnable кидає checked exception напряму; Callable завжди повертає void і не має результату'],c:0,e:'Runnable: void run(). Callable<V>: V call() throws Exception — повертає Future<V> при submit в ExecutorService.'},
      {q:'Що таке synchronized у Java?',o:['Блокує доступ до методу/блоку для одного треду одночасно','Асинхронне виконання','Оптимізація компілятора','Маркер для volatile'],c:0,e:'synchronized метод або блок — тільки один тред може виконувати цей код одночасно. Використовує monitor об\'єкта/класу.'},
      {q:'Що таке volatile?',o:['Гарантує видимість змін змінної між тредами — читає завжди з main memory','Робить змінну незмінною','Аналог synchronized','Позначає thread-local змінну'],c:0,e:'volatile забезпечує visibility: зміна в одному треді одразу видима іншим. Але не забезпечує atomicity (не замінює synchronized).'},
      {q:'Що таке deadlock?',o:['Два треди блокують ресурси і чекають один на одного нескінченно','Тред зависає без причини','OutOfMemory помилка','Race condition'],c:0,e:'Deadlock: Thread-1 тримає A, чекає B; Thread-2 тримає B, чекає A — взаємне блокування. Рішення: завжди захоплювати locks в одному порядку.'},
      {q:'Що таке ExecutorService?',o:['Пул тредів для виконання задач без створення нового Thread щоразу','Менеджер процесів ОС','Планувальник задач','Аналог Timer'],c:0,e:'ExecutorService (ThreadPoolExecutor): submit(Callable), execute(Runnable), shutdown(). Ефективніше ніж new Thread().'},
      {q:'Що таке Future?',o:['Результат асинхронної операції, можна отримати через get() — блокуючий виклик','Планувальник майбутніх задач','Аналог Promise','Тільки для Callable'],c:0,e:'Future<V>: isDone(), cancel(), get() — блокує до отримання результату. get(timeout, unit) — з таймаутом.'},
      {q:'Що таке AtomicInteger?',o:['Thread-safe Integer для атомарних операцій без synchronized','Обгортка над int для Stream','Immutable Integer','Великий цілочисельний тип'],c:0,e:'AtomicInteger: incrementAndGet(), compareAndSet() — атомарні операції через CAS (Compare-And-Swap) без synchronized блоків.'},
      {q:'Що таке ThreadLocal?',o:['Змінна що має окреме значення для кожного треду','Глобальна змінна','Thread-safe список','Локальна змінна методу'],c:0,e:'ThreadLocal<T>: кожен тред має своє значення. threadLocal.set(val), threadLocal.get(). Важливо викликати remove() щоб уникнути memory leak.'},
      // ── Java 8+ ──
      {q:'Що таке lambda вирази у Java 8?',o:['Анонімні функції: (params) -> body — реалізація функціонального інтерфейсу','Нові ключові слова мови','Анонімні класи','Новий тип даних'],c:0,e:'Lambda: (a, b) -> a + b — коротка реалізація @FunctionalInterface. Компілятор виводить тип із контексту.'},
      {q:'Що таке functional interface?',o:['Інтерфейс рівно з одним абстрактним методом, може мати default/static','Інтерфейс без методів','Інтерфейс тільки зі static методами','Інтерфейс з двома методами'],c:0,e:'@FunctionalInterface: один abstract метод. Стандартні: Function, Predicate, Consumer, Supplier, BiFunction тощо.'},
      {q:'Що таке method reference (::)?',o:['Коротший синтаксис для lambda що просто викликає існуючий метод','Посилання на поле класу','Виклик static методу','Посилання на конструктор тільки'],c:0,e:'String::toUpperCase замість s -> s.toUpperCase(). Типи: статичний (Class::method), instance (obj::method), конструктор (Class::new).'},
      {q:'Що таке default метод в інтерфейсі (Java 8)?',o:['Метод з реалізацією в інтерфейсі — можна не перевизначати в класі','Метод за замовчуванням для null','Приватний метод інтерфейсу','Метод що замінює abstract'],c:0,e:'default void method() {} в інтерфейсі — реалізація за замовчуванням. Дозволяє розширювати інтерфейси без зламу існуючих класів.'},
      {q:'Що таке LocalDate у Java 8?',o:['Immutable клас для роботи з датою (рік-місяць-день) без часу та часового поясу','Замінює java.util.Date повністю','Клас для дати і часу разом','Клас з часовим поясом'],c:0,e:'LocalDate: now(), of(2024,1,15), plusDays(n), isBefore(). Нове Date/Time API (java.time) безпечніше за Date/Calendar.'},
      {q:'Що таке Stream.parallelStream()?',o:['Паралельна обробка елементів у ForkJoinPool для прискорення на великих даних','Завжди швидший за sequential','Thread-safe версія stream','Асинхронний stream'],c:0,e:'parallelStream() розбиває обробку між тредами ForkJoinPool. Корисно для CPU-intensive операцій на великих колекціях. Не завжди швидший.'},
      // ── JVM / Пам\'ять ──
      {q:'Що таке JVM (Java Virtual Machine)?',o:['Середовище виконання Java байт-коду — забезпечує платформонезалежність','Компілятор Java','IDE для Java','Система збірки'],c:0,e:'JVM виконує .class файли (байт-код) на будь-якій платформі. Включає ClassLoader, JIT компілятор, Garbage Collector.'},
      {q:'Що таке Garbage Collector?',o:['Автоматичне управління пам\'яттю — звільняє об\'єкти без посилань','Ручне видалення об\'єктів','Очищення змінних','Дефрагментація диску'],c:0,e:'GC автоматично знаходить і видаляє об\'єкти без посилань. Алгоритми: G1, ZGC, Shenandoah, Serial, Parallel.'},
      {q:'Яка різниця між Stack та Heap у Java?',o:['Stack — примітиви та посилання методу (LIFO); Heap — всі об\'єкти та масиви','Stack — для рядків, Heap — для чисел','Heap — швидший','Stack — для статичних полів'],c:0,e:'Stack: локальні змінні та параметри методів, автоматично очищується. Heap: всі new об\'єкти, керується GC.'},
      {q:'Що таке StackOverflowError?',o:['Переповнення стеку викликів — зазвичай через нескінченну рекурсію','Переповнення heap пам\'яті','Завелика змінна','Нескінченний цикл'],c:0,e:'StackOverflowError: рекурсія без умови виходу заповнює Stack. Це Error (не Exception) — не слід ловити.'},
      {q:'Що таке OutOfMemoryError?',o:['JVM не може виділити пам\'ять для нового об\'єкта — heap заповнений','Завеликий стек','Витік пам\'яті в Stack','Недостатньо PermGen'],c:0,e:'OOM: "Java heap space" — heap заповнений. "GC overhead limit exceeded" — GC займає >98% часу без ефекту. Memory leak часто причина.'},
      {q:'Що таке memory leak у Java?',o:['Об\'єкти що більше не потрібні але на них є посилання — GC не може видалити','Виток пам\'яті тільки в C/C++','Автоматично виправляється GC','Переповнення стеку'],c:0,e:'Memory leak: статичні колекції зі зростаючими даними, незакриті ресурси, listeners що не видаляються — GC не збирає бо є посилання.'},
      // ── Інтерфейси та паттерни ──
      {q:'Що таке Iterable інтерфейс?',o:['Дозволяє використовувати об\'єкт у for-each циклі через метод iterator()','Інтерфейс для сортування','Інтерфейс для порівняння','Маркерний інтерфейс'],c:0,e:'Iterable<T>: один метод iterator(). Реалізація дозволяє використовувати клас у for-each: for (T item : myIterable).'},
      {q:'Що таке маркерний інтерфейс (marker interface)?',o:['Порожній інтерфейс що позначає клас певною характеристикою (Serializable, Cloneable)','Інтерфейс з одним методом','Deprecated інтерфейс','Інтерфейс для Stream'],c:0,e:'Serializable, Cloneable, RandomAccess — маркерні інтерфейси без методів. Позначають можливість для JVM або бібліотек.'},
      {q:'Що таке Serializable?',o:['Маркерний інтерфейс що дозволяє серіалізацію об\'єкту в байти (файл, мережа)','Інтерфейс для сортування','Дозволяє клонування','Робить клас immutable'],c:0,e:'Serializable: ObjectOutputStream.writeObject() серіалізує об\'єкт. serialVersionUID рекомендовано оголошувати явно.'},
      {q:'Що таке instanceof оператор?',o:['Перевіряє чи об\'єкт є екземпляром класу або реалізує інтерфейс','Порівнює два об\'єкти','Перевіряє тип примітиву','Перевіряє null'],c:0,e:'obj instanceof String повертає true якщо obj є String або підкласом. null instanceof X завжди false.'},
      {q:'Що таке pattern matching для instanceof (Java 16+)?',o:['if (obj instanceof String s) — автоматично приводить тип без явного cast','Новий оператор порівняння','Regex у instanceof','Тільки для sealed класів'],c:0,e:'if (obj instanceof String s) { s.toUpperCase(); } — замість if (obj instanceof String) { String s = (String) obj; }.'},
      // ── Ще Stream/Functional ──
      {q:'Що таке Predicate<T> functional interface?',o:['T -> boolean — функція що приймає T і повертає boolean','T -> T перетворення','T -> void споживач','() -> T постачальник'],c:0,e:'Predicate<T>: test(T t) → boolean. Методи: and(), or(), negate(). Використовується в Stream.filter().'},
      {q:'Що таке Function<T,R> functional interface?',o:['T -> R — приймає T, повертає R','T -> T без зміни','T -> boolean','() -> R без параметрів'],c:0,e:'Function<T,R>: apply(T t) → R. andThen(), compose() для ланцюжка. Використовується в Stream.map().'},
      {q:'Що таке Consumer<T> functional interface?',o:['T -> void — приймає T, нічого не повертає (side effect)','T -> T','T -> boolean','() -> T'],c:0,e:'Consumer<T>: accept(T t) → void. Використовується в Stream.forEach(). andThen() для ланцюжка.'},
      {q:'Що таке Supplier<T> functional interface?',o:['() -> T — не приймає параметрів, повертає T','T -> void','T -> boolean','T -> T'],c:0,e:'Supplier<T>: get() → T. Корисний для ледачої ініціалізації: Optional.orElseGet(supplier).'},
      {q:'Що робить Stream.sorted()?',o:['Сортує елементи природно або за Comparator','Видаляє дублікати','Фільтрує null','Обертає порядок'],c:0,e:'sorted() — природний порядок (Comparable). sorted(Comparator) — кастомний. Stateful intermediate операція.'},
      {q:'Що робить Stream.limit(n)?',o:['Повертає Stream з першими n елементами','Встановлює максимальний розмір колекції','Пропускає перші n елементів','Фільтрує за індексом'],c:0,e:'limit(n) — short-circuit операція, зупиняє обробку після n елементів. Корисно з нескінченними Stream.'},
      {q:'Що робить Stream.skip(n)?',o:['Пропускає перші n елементів і повертає решту','Повертає перші n','Видаляє кожен n-й','Пропускає null елементи'],c:0,e:'skip(n) пропускає перші n елементів. Часто разом з limit(n) для пагінації: stream.skip(page*size).limit(size).'},
      {q:'Що таке Stream.count()?',o:['Термінальна операція що повертає кількість елементів як long','Повертає int','Проміжна операція','Повертає розмір оригінальної колекції'],c:0,e:'count() — термінальна операція, повертає long. stream.filter(pred).count() — кількість елементів що відповідають умові.'},
      {q:'Що таке Collectors.joining()?',o:['Об\'єднує рядки Stream у один рядок з роздільником','Об\'єднує будь-які об\'єкти','Аналог String.concat','Тільки для char'],c:0,e:'Collectors.joining(", ", "[", "]") → "[a, b, c]". Об\'єднує String елементи Stream з роздільником, префіксом, суфіксом.'},
      {q:'Що таке Map.getOrDefault()?',o:['Повертає значення за ключем або default якщо ключ відсутній','Додає default значення в Map','Аналог containsKey','Замінює null значення'],c:0,e:'map.getOrDefault(key, defaultValue) — уникає null перевірки. map.get(key) повертає null якщо ключа немає.'},
      {q:'Що таке Map.computeIfAbsent()?',o:['Обчислює і додає значення для ключа тільки якщо він відсутній','Завжди обчислює нове значення','Видаляє ключ якщо відсутній','Перевіряє наявність ключа'],c:0,e:'computeIfAbsent(key, k -> new ArrayList<>()) — атомарно додає значення якщо ключа немає. Корисно для Map<K, List<V>>.'},
      {q:'Що таке record у Java 16+?',o:['Незмінний клас-носій даних з автоматичними equals, hashCode, toString, getters','Звичайний клас з final полями','Аналог enum','Спеціальний інтерфейс'],c:0,e:'record Point(int x, int y) {} — компілятор генерує конструктор, x(), y(), equals(), hashCode(), toString(). Immutable.'},
      {q:'Що таке sealed класи (Java 17+)?',o:['Клас що явно обмежує список підкласів через permits','Клас без підкласів (final)','Клас з private конструктором','Абстрактний клас'],c:0,e:'sealed class Shape permits Circle, Rectangle {} — тільки Circle та Rectangle можуть успадкувати Shape. Для ADT та exhaustive pattern matching.'},
      {q:'Що таке var (Java 10+)?',o:['Локальний вивід типу — компілятор виводить тип з правої частини','Dynamic typing','Аналог JavaScript var','Тільки для примітивів'],c:0,e:'var list = new ArrayList<String>() — тип виводиться компілятором. Тільки для локальних змінних. Код залишається статично типізованим.'},
      {q:'Що таке switch expression (Java 14+)?',o:['switch що повертає значення, з -> синтаксисом без fall-through','Тільки новий синтаксис','switch з кількома return','Патерн матчинг'],c:0,e:'String result = switch(day) { case MONDAY -> "start"; case FRIDAY -> "end"; default -> "mid"; }; — без break і fall-through.'},
      {q:'Що таке text blocks (Java 15+)?',o:['Багаторядковий рядок в потрійних лапках """ без escape символів','Шаблон рядка','Рядок без обмежень довжини','Рядок для JSON тільки'],c:0,e:'String json = """ { "name": "John" } """; — зручно для JSON, HTML, SQL у тестах без зайвих \\n та \\.'},
    ]
  },
  playwright: {
    label: 'Playwright + TS',
    badge: '100 запитань · E2E автоматизація',
    desc: 'Playwright API, локатори, assertions, fixtures, Page Object, мережа, мобільні пристрої, TypeScript та конфігурація.',
    code: [
      'test("login", async',
      '  ({ page }) => {',
      '  await page.goto("/");',
      '  await page.fill(',
      '    "#email", "u@t.com");',
      '  await expect(page)',
      '    .toHaveURL("/home");',
      '});'
    ],
    bank: [
      // ── Основи ──
      {q:'Яка команда встановлює Playwright?',o:['npm init playwright@latest','npm install playwright','npx playwright install','npm install @playwright/test'],c:0,e:'npm init playwright@latest — ініціалізує проект, встановлює @playwright/test та браузери через майстер налаштування.'},
      {q:'Яка команда запускає всі тести Playwright?',o:['npx playwright test','npm test','npx playwright run','playwright execute'],c:0,e:'npx playwright test — запускає всі тести у проекті. З опціями: --headed, --debug, --ui, --project=chromium.'},
      {q:'Яка команда відкриває Playwright UI Mode?',o:['npx playwright test --ui','npx playwright open','npx playwright studio','npx playwright debug'],c:0,e:'npx playwright test --ui — відкриває інтерактивний UI для запуску, відладки та перегляду trace тестів.'},
      {q:'Яка команда встановлює браузери Playwright?',o:['npx playwright install','npm install browsers','playwright setup browsers','npx playwright browsers'],c:0,e:'npx playwright install — завантажує Chromium, Firefox, WebKit. npx playwright install chromium — тільки один браузер.'},
      {q:'Який файл є точкою входу конфігурації Playwright?',o:['playwright.config.ts','playwright.config.js','playwright.json','playwright.setup.ts'],c:0,e:'playwright.config.ts (або .js) — основний конфіг: timeout, baseURL, projects, reporter, use тощо.'},
      {q:'Як виглядає базова структура тесту у Playwright?',o:['test("назва", async ({ page }) => { ... })','describe("назва", () => { it("...", () => {}) })','@Test void назва() {}','it("назва", () => {})'],c:0,e:'test("name", async ({ page }) => {}) — базова одиниця. page — вбудована fixture. async/await — обов\'язкові.'},
      {q:'Що таке test fixtures у Playwright?',o:['Об\'єкти що автоматично надаються тестам через деструктуризацію параметрів','Файли з тестовими даними','Хелпери для assertions','Конфігурація браузера'],c:0,e:'Fixtures ({ page, context, browser, request }) — автоматично створюються та знищуються. Можна створювати власні через test.extend().'},
      {q:'Яка різниця між test.describe та test?',o:['describe — групує тести; test — окремий тест-кейс','describe запускає тест','test — група, describe — один тест','Вони ідентичні'],c:0,e:'test.describe("Group", () => { test("case1", ...) }) — логічна група. Можна вкладати. Впливає на назву в звітах.'},
      {q:'Що таке test.beforeEach та test.afterEach?',o:['Хуки що виконуються до/після кожного тесту у describe блоці','Хуки тільки для setup','afterEach тільки для cleanup','Вони виконуються один раз'],c:0,e:'beforeEach/afterEach виконуються перед/після кожного test у поточному describe. beforeAll/afterAll — один раз для всієї групи.'},
      {q:'Як запустити тільки один тест у Playwright?',o:['test.only(...)','test.focus(...)','test.single(...)','test.run(...)'],c:0,e:'test.only("name", ...) — запускає тільки цей тест. describe.only() — тільки цю групу. Альтернатива: npx playwright test -g "назва".'},
      // ── Навігація та взаємодія ──
      {q:'Як перейти на URL у Playwright?',o:['await page.goto(url)','await page.navigate(url)','await page.open(url)','await page.visit(url)'],c:0,e:'await page.goto(url) — навігація. Повертає Response. goto("/path") + baseURL з конфігу = повний URL.'},
      {q:'Як клікнути на елемент у Playwright?',o:['await page.click(selector)','await page.locator(selector).click()','await element.click()','A та B'],c:3,e:'page.click(selector) та page.locator(selector).click() — обидва коректні. Локатор-стиль рекомендований як сучасніший.'},
      {q:'Як ввести текст у поле у Playwright?',o:['await page.fill(selector, text)','await page.type(selector, text)','await page.input(selector, text)','A та B'],c:3,e:'fill() — очищує і вводить текст одразу (рекомендований). type() — імітує натискання клавіш по одній (для спецефектів).'},
      {q:'Яка різниця між page.fill() та page.type()?',o:['fill() вставляє текст одразу; type() симулює набір по символу з затримками','fill() повільніший','type() очищує поле','Немає різниці'],c:0,e:'fill() — швидкий прямий ввід. type() — симулює реальний набір з keyboard events. fill() кращий для більшості тестів.'},
      {q:'Як натиснути клавішу на клавіатурі?',o:['await page.keyboard.press("Enter")','await page.press(selector, "Enter")','await page.keyPress("Enter")','A та B'],c:3,e:'page.keyboard.press("Enter") — глобальний. page.press(selector, "Enter") — фокусує елемент і натискає клавішу.'},
      {q:'Як зробити hover на елемент?',o:['await page.hover(selector)','await page.locator(selector).hover()','await page.mouseOver(selector)','A та B'],c:3,e:'page.hover() та locator.hover() — обидва переміщують мишу на елемент. Корисно для dropdown меню.'},
      {q:'Як вибрати опцію у <select>?',o:['await page.selectOption(selector, value)','await page.locator(selector).selectOption(value)','await page.choose(selector, value)','A та B'],c:3,e:'selectOption(selector, {value: "v"}) або {label: "l"} або {index: 0} — гнучкий вибір опції у select.'},
      {q:'Як завантажити файл через input?',o:['await page.setInputFiles(selector, filePath)','await page.upload(selector, filePath)','await page.locator(selector).setInputFiles(filePath)','A та C'],c:3,e:'setInputFiles(selector, path) та locator.setInputFiles(path) — завантажують файл через input[type=file].'},
      {q:'Як перетягнути елемент (drag and drop)?',o:['await page.dragAndDrop(source, target)','await page.locator(source).dragTo(page.locator(target))','await page.drag(source, target)','A та B'],c:3,e:'page.dragAndDrop(source, target) та locator.dragTo(targetLocator) — обидва способи drag and drop.'},
      {q:'Як скролити до елемента?',o:['await page.locator(selector).scrollIntoViewIfNeeded()','await page.scroll(selector)','await page.scrollTo(selector)','await page.locator(selector).scroll()'],c:0,e:'locator.scrollIntoViewIfNeeded() — скролить тільки якщо елемент поза viewport. scrollIntoViewIfNeeded краще ніж page.evaluate scrollIntoView.'},
      // ── Локатори ──
      {q:'Який локатор Playwright рекомендований для пошуку за роллю?',o:['page.getByRole("button", { name: "Submit" })','page.locator("button:has-text(\\"Submit\\")")','page.locator("[role=button]")','page.findByRole("button")'],c:0,e:'getByRole() — пріоритетний локатор. Стійкий до змін верстки, відповідає accessibility дереву.'},
      {q:'Як знайти елемент за текстом?',o:['page.getByText("Welcome")','page.locator("text=Welcome")','page.findByText("Welcome")','A та B'],c:3,e:'getByText("Welcome") та locator("text=Welcome") — обидва знаходять елемент за видимим текстом.'},
      {q:'Як знайти елемент за placeholder?',o:['page.getByPlaceholder("Email")','page.locator("[placeholder=Email]")','page.getByAttr("placeholder","Email")','A та B'],c:3,e:'getByPlaceholder("Email") — семантичний локатор для полів з placeholder атрибутом.'},
      {q:'Як знайти елемент за label?',o:['page.getByLabel("Password")','page.locator("label:has-text(\\"Password\\")")','page.findByLabel("Password")','A та B'],c:3,e:'getByLabel("Password") — знаходить input асоційований з label. Правильний підхід для форм.'},
      {q:'Як знайти елемент за test-id атрибутом?',o:['page.getByTestId("submit-btn")','page.locator("[data-testid=submit-btn]")','page.getByAttr("data-testid","submit-btn")','A та B'],c:3,e:'getByTestId() за замовчуванням шукає data-testid. Можна змінити в конфігу: testIdAttribute: "data-cy".'},
      {q:'Як знайти елемент всередині іншого елемента?',o:['page.locator(".parent").locator(".child")','page.locator(".parent .child")','page.locator(".parent").filter(".child")','A та B'],c:3,e:'Chaining: locator(".parent").locator(".child") та CSS selector ".parent .child" — обидва шукають вкладений елемент.'},
      {q:'Що таке locator.filter()?',o:['Фільтрує колекцію локаторів за умовою (текст, вкладений елемент)','Фільтрує CSS класи','Перевіряє видимість','Вибирає перший збіг'],c:0,e:'locator.filter({ hasText: "Admin" }) або filter({ has: page.getByRole("checkbox") }) — уточнює локатор серед збігів.'},
      {q:'Як отримати перший/останній елемент з колекції?',o:['locator.first() / locator.last()','locator.get(0) / locator.getLast()','locator[0] / locator[-1]','locator.nth(0) / locator.nth(-1)'],c:0,e:'locator.first(), locator.last(), locator.nth(n) — вибір елемента з колекції. nth(-1) — останній елемент.'},
      {q:'Як дочекатись появи елемента?',o:['await page.locator(selector).waitFor()','await page.wait(selector)','await page.waitForElement(selector)','await page.locator(selector).isVisible()'],c:0,e:'locator.waitFor({ state: "visible" }) — чекає появи елемента. За замовчуванням state="visible". Також: attached, hidden, detached.'},
      {q:'Як отримати кількість елементів у колекції?',o:['await page.locator(selector).count()','await page.locator(selector).length','await page.count(selector)','page.locator(selector).size()'],c:0,e:'await locator.count() — повертає Promise<number>. Для assertion: await expect(locator).toHaveCount(3).'},
      // ── Assertions ──
      {q:'Яка бібліотека assertions вбудована у Playwright?',o:['expect() з @playwright/test — web-first assertions з авто-очікуванням','Jest expect','Chai assert','JUnit assertions'],c:0,e:'expect() — вбудовані web-first assertions що автоматично чекають виконання умови до timeout. Не потребує окремого waitFor.'},
      {q:'Як перевірити що елемент видимий?',o:['await expect(locator).toBeVisible()','await expect(locator).isVisible()','await expect(locator).toHaveState("visible")','await expect(page).elementVisible(selector)'],c:0,e:'expect(locator).toBeVisible() — чекає та перевіряє видимість. Авто-retry до actionTimeout.'},
      {q:'Як перевірити текст елемента?',o:['await expect(locator).toHaveText("text")','await expect(locator).textEquals("text")','await expect(locator).containsText("text")','await expect(locator).toContainText("text")'],c:3,e:'toHaveText() — точний збіг (або regex). toContainText() — перевіряє входження підрядка. Обидва з авто-очікуванням.'},
      {q:'Як перевірити значення атрибута?',o:['await expect(locator).toHaveAttribute("href", "/home")','await expect(locator).attributeEquals("href", "/home")','await expect(locator).hasAttribute("href", "/home")','await expect(locator).attribute("href").toBe("/home")'],c:0,e:'expect(locator).toHaveAttribute(name, value) — перевіряє атрибут з авто-очікуванням.'},
      {q:'Як перевірити URL сторінки?',o:['await expect(page).toHaveURL("/dashboard")','await expect(page.url()).toBe("/dashboard")','await expect(page).urlEquals("/dashboard")','await page.assertURL("/dashboard")'],c:0,e:'expect(page).toHaveURL(url|regex) — web-first перевірка URL з авто-очікуванням навігації.'},
      {q:'Як перевірити заголовок сторінки?',o:['await expect(page).toHaveTitle("My App")','await expect(page).titleEquals("My App")','await expect(page.title()).toBe("My App")','await page.assertTitle("My App")'],c:0,e:'expect(page).toHaveTitle(title|regex) — перевіряє <title> сторінки з авто-очікуванням.'},
      {q:'Як перевірити що checkbox відмічений?',o:['await expect(locator).toBeChecked()','await expect(locator).isChecked()','await expect(locator).toHaveState("checked")','await expect(locator).checked()'],c:0,e:'expect(locator).toBeChecked() — перевіряє checked стан checkbox/radio. toBeChecked({ checked: false }) — навпаки.'},
      {q:'Як перевірити що елемент вимкнений?',o:['await expect(locator).toBeDisabled()','await expect(locator).isDisabled()','await expect(locator).toHaveState("disabled")','await expect(locator).disabled()'],c:0,e:'expect(locator).toBeDisabled() — перевіряє disabled атрибут. toBeEnabled() — протилежне.'},
      {q:'Як перевірити значення input поля?',o:['await expect(locator).toHaveValue("text")','await expect(locator).valueEquals("text")','await expect(locator).toHaveText("text")','await expect(locator).inputValue("text")'],c:0,e:'expect(locator).toHaveValue(value|regex) — перевіряє value атрибут input/select/textarea.'},
      {q:'Як отримати значення input поля?',o:['await locator.inputValue()','await locator.getValue()','await locator.value()','await locator.getAttribute("value")'],c:0,e:'await locator.inputValue() — повертає поточне значення input/textarea/select. getAttribute("value") може повертати початкове значення.'},
      // ── Мережа ──
      {q:'Як перехопити і змінити мережевий запит?',o:['await page.route(url, handler)','await page.intercept(url, handler)','await page.mock(url, handler)','await page.stub(url, handler)'],c:0,e:'page.route("**/api/users", route => route.fulfill({ body: json })) — перехоплює запит і повертає mock відповідь.'},
      {q:'Як заблокувати мережевий запит?',o:['await page.route(url, route => route.abort())','await page.block(url)','await page.route(url, route => route.reject())','await page.intercept(url).block()'],c:0,e:'route.abort() — скасовує запит. Корисно для блокування реклами, аналітики або тестування offline поведінки.'},
      {q:'Як дочекатись мережевого запиту?',o:['await page.waitForRequest(urlOrPredicate)','await page.waitForResponse(urlOrPredicate)','await page.waitForNetwork(url)','A та B'],c:3,e:'waitForRequest() та waitForResponse() — чекають конкретний запит/відповідь. Зазвичай: const [response] = await Promise.all([page.waitForResponse(...), action]).'},
      {q:'Як отримати всі мережеві запити під час тесту?',o:['page.on("request", req => ...)','page.requests()','page.network.all()','page.getRequests()'],c:0,e:'page.on("request", handler) та page.on("response", handler) — слухачі мережевих подій для моніторингу трафіку.'},
      {q:'Що таке APIRequestContext у Playwright?',o:['HTTP клієнт для API тестів без браузера','Контекст для перехоплення запитів','Конфігурація мережі','Менеджер cookies'],c:0,e:'request fixture (APIRequestContext) — робить HTTP запити без UI: await request.get(url), post(), put(). Інтегрований з playwright.'},
      {q:'Як зробити API запит у Playwright тесті?',o:['const res = await request.get(url)','const res = await page.request.get(url)','const res = await fetch(url)','A та B'],c:3,e:'request.get/post/put/delete() — через request fixture або page.request для запитів у контексті браузерної сесії (з cookies).'},
      // ── Конфігурація ──
      {q:'Як налаштувати baseURL у Playwright?',o:['use: { baseURL: "https://example.com" } у конфігу','RestAssured.baseURI = url','page.setBaseURL(url)','config.baseURL = url'],c:0,e:'playwright.config.ts: use: { baseURL: "https://example.com" } — дозволяє goto("/path") замість повного URL.'},
      {q:'Як налаштувати кілька браузерів (projects)?',o:['projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"] } }]','browsers: ["chromium","firefox"]','use: { browsers: ["all"] }','test.projects(["chromium","firefox"])'],c:0,e:'projects у playwright.config.ts: кожен project — окремий браузер/девайс. Тести запускаються в кожному.'},
      {q:'Як налаштувати headless режим?',o:['use: { headless: true } у конфігу або --headed в CLI','use: { browser: "headless" }','HEADLESS=true npx playwright test','Configuration.headless = true'],c:0,e:'playwright.config.ts: use: { headless: false } для показу браузера. CLI: npx playwright test --headed. За замовчуванням headless: true.'},
      {q:'Як встановити глобальний timeout для тестів?',o:['timeout: 30000 у playwright.config.ts','use: { timeout: 30000 }','test.setTimeout(30000) глобально','RestAssured.timeout = 30000'],c:0,e:'timeout у playwright.config.ts — timeout для одного тесту (ms). expect.timeout — для assertions. navigationTimeout — для навігації.'},
      {q:'Що таке globalSetup у Playwright?',o:['Файл що виконується один раз перед всіма тестами (логін, seed DB)','Setup для кожного тесту','Конфігурація глобальних змінних','Ініціалізація браузера'],c:0,e:'globalSetup: "./global-setup.ts" у конфігу — виконується один раз. Корисно для авторизації: зберегти state у файл.'},
      {q:'Що таке storageState у Playwright?',o:['Збережений стан браузера (cookies, localStorage) для повторного використання','Стан тесту','Стан мережі','Збережені скріншоти'],c:0,e:'storageState зберігає cookies та localStorage після логіну. Передається в context: { storageState: "auth.json" } — не логінитись у кожному тесті.'},
      {q:'Як налаштувати відео запис тестів?',o:['use: { video: "on" } або "retain-on-failure"','use: { record: true }','use: { capture: "video" }','npx playwright test --video'],c:0,e:'use: { video: "on" | "off" | "retain-on-failure" | "on-first-retry" } у конфігу або project.'},
      {q:'Як налаштувати скріншоти?',o:['use: { screenshot: "only-on-failure" }','use: { screenshot: true }','use: { captureScreenshot: "always" }','npx playwright test --screenshot'],c:0,e:'use: { screenshot: "on" | "off" | "only-on-failure" } — автоматичні скріншоти. Також: await page.screenshot({ path: "shot.png" }).'},
      // ── Trace та Debug ──
      {q:'Що таке Playwright Trace?',o:['Детальний запис виконання тесту: дії, screenshots, мережа, консоль','Лог помилок','Звіт про тести','Відео запис'],c:0,e:'Trace — ZIP файл з кожним кроком тесту, screenshots, мережею. Відкривається: npx playwright show-trace trace.zip або trace.playwright.dev.'},
      {q:'Як увімкнути trace запис?',o:['use: { trace: "on-first-retry" } у конфігу','npx playwright test --trace','use: { record: true }','test.trace()'],c:0,e:'use: { trace: "on" | "off" | "on-first-retry" | "retain-on-failure" } — рекомендовано on-first-retry для CI.'},
      {q:'Як відкрити Playwright Trace Viewer?',o:['npx playwright show-trace trace.zip','npx playwright open-trace','npx playwright trace open','playwright viewer trace.zip'],c:0,e:'npx playwright show-trace trace.zip або онлайн на trace.playwright.dev — детальний інтерактивний огляд кожного кроку.'},
      {q:'Як запустити тест у режимі debug?',o:['PWDEBUG=1 npx playwright test або npx playwright test --debug','npx playwright test --breakpoint','npx playwright debug test','npx playwright test --pause'],c:0,e:'--debug або PWDEBUG=1 відкриває Playwright Inspector — покрокове виконання з підсвіткою локаторів та логами.'},
      {q:'Що робить await page.pause()?',o:['Зупиняє виконання і відкриває Playwright Inspector для відладки','Чекає 1 секунду','Ставить breakpoint у браузері','Зупиняє всі мережеві запити'],c:0,e:'page.pause() — точка зупинки у тесті. Відкриває Inspector де можна вивчати стан сторінки та продовжити виконання.'},
      {q:'Як записати тест за допомогою Playwright Codegen?',o:['npx playwright codegen url','npx playwright record url','npx playwright generate url','npx playwright capture url'],c:0,e:'npx playwright codegen https://example.com — відкриває браузер та генерує код тесту з твоїх дій у реальному часі.'},
      // ── Контекст та сторінки ──
      {q:'Що таке BrowserContext у Playwright?',o:['Ізольована сесія браузера зі своїми cookies/localStorage — аналог профілю','Окреме вікно браузера','Набір налаштувань браузера','Контейнер для тестів'],c:0,e:'BrowserContext — ізольована сесія. Кожен тест отримує чистий context. Один context може мати кілька сторінок (tabs).'},
      {q:'Як відкрити нову вкладку (tab)?',o:['const page2 = await context.newPage()','await page.newTab()','await browser.newPage()','await context.openTab()'],c:0,e:'context.newPage() — відкриває нову вкладку в тому ж context (зі спільними cookies). browser.newPage() — новий context.'},
      {q:'Як обробити popup вікно?',o:['const [popup] = await Promise.all([page.waitForEvent("popup"), action()])','await page.waitForPopup()','page.on("popup", handler)','page.popup()'],c:0,e:'Promise.all([waitForEvent("popup"), triggerAction()]) — очікує popup одночасно з дією що його відкриває.'},
      {q:'Як обробити діалог (alert/confirm)?',o:['page.on("dialog", async dialog => { await dialog.accept() })','await page.acceptDialog()','await page.dismissAlert()','page.dialog().accept()'],c:0,e:'page.on("dialog", dialog => dialog.accept()) — підписка на dialog подію. Потрібно зареєструвати ДО дії що відкриває діалог.'},
      {q:'Як переключитись між вкладками?',o:['Отримати page через context.pages() і працювати з ним','page.switchTab(index)','browser.switchWindow()','context.activatePage(page)'],c:0,e:'context.pages() повертає всі відкриті сторінки. Просто використовуй потрібний page об\'єкт — немає методу "switchTo".'},
      // ── Page Object у Playwright ──
      {q:'Як реалізувати Page Object у Playwright?',o:['Клас з readonly page: Page у конструкторі та методами дій','Клас що extends Page','Декоратор @PageObject','Тільки через fixtures'],c:0,e:'class LoginPage { constructor(private page: Page) {} async login(u,p) { await this.page.fill(...) } } — стандартний POM.'},
      {q:'Як підключити Page Object через fixture?',o:['test.extend<{ loginPage: LoginPage }>({ loginPage: async ({ page }, use) => { await use(new LoginPage(page)) } })','test.use({ loginPage: new LoginPage(page) }) у конфігу, щоб Playwright сам створив page object','import LoginPage у кожному тесті та викликати loginPage.use(page) перед describe блоком','page.extend(LoginPage).fixture("loginPage") і передати клас напряму у test.describe()'],c:0,e:'test.extend() дозволяє передавати Page Object як fixture — автоматично ін\'єктується у тест без ручного new.'},
      {q:'Як типізувати локатори у TypeScript Page Object?',o:['private readonly submitBtn: Locator','private submitBtn: WebElement','readonly submitBtn = string','private submitBtn: By'],c:0,e:'private readonly submitBtn: Locator = this.page.getByRole("button", { name: "Submit" }) — типізований Locator у полі класу.'},
      // ── TypeScript специфіка ──
      {q:'Що таке async/await у контексті Playwright?',o:['Синтаксис для роботи з Promise — await чекає виконання перед наступним кроком','Тільки синтаксичний цукор','Паралельне виконання','Callback стиль'],c:0,e:'Майже всі Playwright методи повертають Promise. await гарантує послідовне виконання. Без await — дія не виконається перед наступним рядком.'},
      {q:'Що таке interface у TypeScript?',o:['Опис структури об\'єкта без реалізації — для type checking','Аналог abstract class','Реалізація контракту','Тільки для класів'],c:0,e:'interface User { name: string; age: number } — описує форму об\'єкта. Немає runtime існування, тільки compile-time перевірка.'},
      {q:'Що таке type vs interface у TypeScript?',o:['type — ширший (union, intersection, primitives); interface — тільки об\'єкти, підтримує declaration merging','interface підтримує union та primitive aliases; type працює лише з class-like об\'єктами без merging','type і interface повністю ідентичні, але interface компілюється швидше у JavaScript runtime','type потрібен тільки для enum значень; interface використовується лише для React компонентів'],c:0,e:'type може: union (A|B), intersection (A&B), mapped types. interface: declaration merging (автодоповнення), краще для OOP.'},
      {q:'Що таке enum у TypeScript?',o:['Набір іменованих констант','Масив рядків','Тип для null/undefined','Клас-утиліта'],c:0,e:'enum Direction { Up, Down } — компілюється у JS об\'єкт. const enum — inlined (немає JS коду). Корисно для стану, ролей, статусів.'},
      {q:'Що таке generics у TypeScript?',o:['Параметризовані типи для type-safe функцій та класів','Загальні методи','Будь-який тип','Аналог any'],c:0,e:'function wrap<T>(val: T): T[] { return [val] } — T виводиться з аргументу. Безпечніше за any, гнучкіше за конкретний тип.'},
      {q:'Що таке union types у TypeScript?',o:['Тип що може бути одним з кількох: string | number','Об\'єднання двох інтерфейсів','Масив різних типів','Тип з кількома полями'],c:0,e:'string | number | null — змінна може бути будь-яким з типів. Narrowing (if typeof x === "string") звужує тип у блоці.'},
      {q:'Що таке optional chaining (?.) у TypeScript/JS?',o:['user?.address?.city — повертає undefined замість помилки якщо проміжне значення null/undefined','user ? address : city — скорочений ternary оператор для вибору між двома значеннями','user.address.city! — примусове приведення типу, яке гарантує що поле точно не null','user && address && city — синтаксис що автоматично створює вкладені об\'єкти якщо їх немає'],c:0,e:'obj?.prop?.method?.() — безпечна навігація по потенційно null/undefined ланцюжку. Замінює if (obj && obj.prop && ...).'},
      {q:'Що таке nullish coalescing (??) у TypeScript/JS?',o:['value ?? defaultValue — повертає default тільки якщо value є null або undefined','Аналог || але для null','Умовне присвоєння','Перевірка типу'],c:0,e:'null ?? "default" → "default". 0 ?? "default" → 0. Відрізняється від ||: 0 || "default" → "default" (бо 0 falsy).'},
      {q:'Що таке decorators у TypeScript?',o:['Анотації (@) що модифікують поведінку класів, методів, полів','Коментарі компілятора','Аналог Java annotations','Тільки для тестів'],c:0,e:'@Component, @Injectable, @Test — decorators модифікують клас/метод під час компіляції. Потребують experimentalDecorators в tsconfig.'},
      // ── Мобільні та розширені ──
      {q:'Як запустити тест на мобільному пристрої?',o:['use: { ...devices["iPhone 13"] } у project конфігу','use: { mobile: true }','use: { device: "iphone" }','test.mobile("iPhone 13", ...)'],c:0,e:'projects: [{ name: "mobile", use: { ...devices["iPhone 13"] } }] — емулює мобільний viewport, UA та touch.'},
      {q:'Що таке devices у Playwright?',o:['Набір пресетів для емуляції мобільних пристроїв (viewport, userAgent, touch)','Список підтримуваних браузерів','Конфігурація сенсорів','Список реальних девайсів'],c:0,e:'import { devices } from "@playwright/test" — devices["Pixel 5"], devices["iPhone 13 Pro"] тощо. Включають viewport, UA, hasTouch.'},
      {q:'Як емулювати геолокацію?',o:['use: { geolocation: { latitude: 50.45, longitude: 30.52 } }','page.setLocation(lat, lon)','use: { location: { lat, lon } }','browser.setGeolocation(lat, lon)'],c:0,e:'context або use: { geolocation: { latitude, longitude }, permissions: ["geolocation"] } — емуляція GPS позиції.'},
      {q:'Як емулювати dark mode?',o:['use: { colorScheme: "dark" }','page.setColorScheme("dark")','use: { theme: "dark" }','emulate: { colorScheme: "dark" }'],c:0,e:'use: { colorScheme: "dark" | "light" | "no-preference" } — емулює prefers-color-scheme медіа запит.'},
      {q:'Як зробити скріншот всієї сторінки?',o:['await page.screenshot({ path: "shot.png", fullPage: true })','await page.fullScreenshot("shot.png")','await page.capture({ fullPage: true })','await page.screenshot({ full: true })'],c:0,e:'page.screenshot({ fullPage: true }) — знімок всієї сторінки включно зі scroll. path — куди зберегти.'},
      {q:'Як зробити скріншот конкретного елемента?',o:['await page.locator(selector).screenshot({ path: "el.png" })','await page.screenshotElement(selector)','await page.capture(selector)','await element.screenshot()'],c:0,e:'locator.screenshot() — знімок тільки елемента. Корисно для visual comparison конкретного компонента.'},
      {q:'Що таке visual comparison у Playwright?',o:['expect(page).toHaveScreenshot() — порівнює з еталонним скріншотом','Ручне порівняння скріншотів','Аналіз кольорів','Порівняння HTML'],c:0,e:'expect(page).toHaveScreenshot("name.png") — pixel-perfect порівняння. Перший запуск створює snapshot. Різниця → тест падає.'},
      // ── Паралелізм та CI ──
      {q:'Як запустити тести паралельно у Playwright?',o:['workers: 4 або fullyParallel: true у конфігу','npx playwright test --parallel','test.parallel()','use: { parallel: true }'],c:0,e:'workers: N (кількість паралельних воркерів) та fullyParallel: true (паралелізм всередині файлу) у playwright.config.ts.'},
      {q:'Що таке test.describe.parallel?',o:['Запускає тести всередині describe паралельно','Позначає групу як незалежну','Вимикає serial режим','Аналог fullyParallel для блоку'],c:0,e:'test.describe.parallel("group", () => { test(...); test(...) }) — всі тести в групі запускаються паралельно.'},
      {q:'Що таке test.describe.serial?',o:['Запускає тести у групі послідовно, зупиняється при першій помилці','Позначає тести як залежні','Вимикає паралелізм глобально','Аналог @DependsOn'],c:0,e:'test.describe.serial() — тести виконуються послідовно. Якщо один впав — наступні пропускаються.'},
      {q:'Як запустити тести тільки для певного браузера?',o:['npx playwright test --project=chromium','npx playwright test --browser=chromium','npx playwright test --only-chromium','BROWSER=chromium npx playwright test'],c:0,e:'npx playwright test --project=chromium — запускає тільки project з іменем "chromium". Можна кілька: --project=chromium --project=firefox.'},
      {q:'Як налаштувати retry для тестів що падають?',o:['retries: 2 у playwright.config.ts','use: { retry: 2 }','test.retry(2)','npx playwright test --retry=2'],c:0,e:'retries: 2 у конфігу — перезапускає тест що впав ще 2 рази. npx playwright test --retries=2 — CLI варіант.'},
      {q:'Який reporter за замовчуванням у Playwright?',o:['list (у terminal) та html (якщо є --reporter=html)','junit','allure','dot'],c:0,e:'За замовчуванням: list у terminal. reporter: [["html"]] у конфігу генерує HTML звіт. npx playwright show-report відкриває його.'},
      {q:'Як підключити Allure до Playwright?',o:['npm install allure-playwright та reporter: [["allure-playwright"]]','npx playwright test --allure','use: { reporter: "allure" }','allure.configure()'],c:0,e:'npm install allure-playwright, потім у конфігу: reporter: [["allure-playwright", { outputFolder: "allure-results" }]].'},
      {q:'Як запустити Playwright тести у Docker?',o:['Використати офіційний образ mcr.microsoft.com/playwright з встановленими браузерами','Встановити браузери вручну','Docker не підтримується','Тільки headless mode'],c:0,e:'mcr.microsoft.com/playwright:v1.x.x — офіційний Docker образ з усіма браузерами та залежностями для CI.'},
      {q:'Що таке expect.soft() у Playwright?',o:['Soft assertion — тест продовжується після помилки, всі помилки показуються в кінці','Assertion з меншим timeout','Assertion тільки для рядків','Аналог try/catch'],c:0,e:'expect.soft(locator).toBeVisible() — не зупиняє тест при провалі. Всі soft assertion помилки збираються і показуються разом.'},
    ]
  }  ,

  // ─────────────────────────────────────────────────
  sysdesign: {
    label: 'Системний дизайн',
    badge: '100 запитань · Архітектура для QA',
    desc: 'Мікросервіси, API, бази даних, черги повідомлень, кешування, балансування навантаження та тестування розподілених систем.',
    code: ['Client → LB','  → Service A','    → Cache','    → DB (RW)','  → Service B','    → Queue','    → DB (RO)'],
    bank: [
      {q:'Що таке мікросервісна архітектура?',o:['Система з невеликих незалежних сервісів що спілкуються через API','Один великий застосунок','Набір бібліотек','Архітектура бази даних'],c:0,e:'Мікросервіси: кожен сервіс — окрема кодова база, деплой, масштабування. Спілкуються через HTTP/gRPC/черги.'},
      {q:'Яка різниця між монолітом та мікросервісами?',o:['Моноліт — один процес, легший у розробці; мікросервіси — розподілені, складніші але масштабованіші','Моноліт завжди розподілений на багато сервісів, а мікросервіси запускаються тільки як один процес','Мікросервіси завжди простіші за моноліт, бо не мають мережі, контрактів і окремих деплоїв','Моноліт і мікросервіси однакові архітектурно, різниця лише у назвах репозиторіїв'],c:0,e:'Моноліт: просто розробляти, важко масштабувати частково. Мікросервіси: незалежний деплой, але складніші тестування і debugging.'},
      {q:'Що таке API Gateway?',o:['Єдина точка входу для всіх клієнтів що маршрутизує запити до мікросервісів','Шлюз до бази даних','Балансувальник навантаження','Черга повідомлень'],c:0,e:'API Gateway: аутентифікація, rate limiting, routing, SSL termination, logging — у одному місці перед всіма сервісами.'},
      {q:'Що таке load balancer?',o:['Розподіляє вхідні запити між кількома серверами для рівномірного навантаження','Балансує навантаження на БД','Черга задач','Кеш сервер'],c:0,e:'Load Balancer: Round Robin, Least Connections, IP Hash — алгоритми. Nginx, HAProxy, AWS ALB — приклади. Горизонтальне масштабування.'},
      {q:'Що таке CDN (Content Delivery Network)?',o:['Мережа розподілених серверів що доставляє статичний контент з найближчого до користувача вузла','Черга для доставки повідомлень між сервісами з гарантією порядку та повторними спробами','Розподілена база даних, яка приймає writes на edge вузлах і замінює origin server','Мережа мікросервісів, де кожен сервіс деплоїться ближче до користувача для бізнес-логіки'],c:0,e:'CDN кешує статику (JS, CSS, images) на edge серверах по всьому світу. Зменшує latency та навантаження на origin сервер.'},
      {q:'Що таке горизонтальне vs вертикальне масштабування?',o:['Горизонтальне — більше екземплярів; вертикальне — більше ресурсів на одному сервері','Горизонтальне — більше CPU','Вертикальне — більше серверів','Вони ідентичні'],c:0,e:'Scale out (horizontal): додаємо сервери — безмежно але складніше. Scale up (vertical): більше CPU/RAM — просто але є межа.'},
      {q:'Що таке REST vs gRPC?',o:['REST — HTTP/JSON, зрозумілий людині; gRPC — бінарний протокол (Protobuf), швидший, типізований','REST — бінарний Protobuf протокол зі streaming; gRPC — тільки text JSON поверх HTTP/1.1','REST і gRPC однакові, обидва не мають контрактів і завжди використовують лише JSON body','gRPC призначений тільки для браузерних форм, REST — тільки для internal service-to-service викликів'],c:0,e:'REST: text-based, легко debug, широка підтримка. gRPC: ефективніший (binary), streaming, code generation, типізація через Protobuf.'},
      {q:'Що таке GraphQL?',o:['Мова запитів де клієнт сам вказує які поля потрібні — уникає over/under-fetching','Новий SQL діалект','Розширення REST','Черга повідомлень'],c:0,e:'GraphQL: один endpoint, клієнт запитує тільки потрібні поля. Вирішує over-fetching (зайві дані) та under-fetching (кілька запитів).'},
      {q:'Що таке idempotency у API?',o:['Повторні запити з тим самим ID дають той самий результат без side effects','Запит виконується один раз','Запит без відповіді','Кешований запит'],c:0,e:'Idempotent: GET, PUT, DELETE — безпечно повторювати. POST — не idempotent. Ключ ідемпотентності (Idempotency-Key) для POST.'},
      {q:'Що таке rate limiting?',o:['Обмеження кількості запитів від клієнта за одиницю часу','Обмеження розміру відповіді','Тайм-аут зєднання','Максимальна кількість зєднань'],c:0,e:'Rate limiting: 100 req/min per user. Алгоритми: Token Bucket, Leaky Bucket, Fixed Window, Sliding Window. 429 Too Many Requests.'},
      {q:'Що таке circuit breaker патерн?',o:['Автоматично зупиняє запити до недоступного сервісу щоб уникнути каскадних збоїв','Переривач ланцюга в мережі','Патерн відновлення після помилки','Обмеження трафіку'],c:0,e:'Circuit Breaker: Closed (норма) → Open (сервіс недоступний, відразу повертає помилку) → Half-Open (перевірка). Hystrix, Resilience4j.'},
      {q:'Що таке retry з exponential backoff?',o:['Повторні спроби з експоненційно зростаючою затримкою між ними','Фіксована затримка між retry','Безкінечні retry','Retry тільки для GET'],c:0,e:'Exponential backoff: 1s → 2s → 4s → 8s + jitter. Уникає thundering herd проблеми при масових збоях.'},
      {q:'Що таке eventual consistency?',o:['Система досягне консистентного стану з часом, але не гарантує миттєвої узгодженості','Дані завжди консистентні','Транзакційна гарантія','Тільки для NoSQL'],c:0,e:'Eventual consistency: після запису різні репліки можуть тимчасово відрізнятись. Прийнятно для DNS, Amazon cart. Не для банків.'},
      {q:'Що таке CAP теорема?',o:['Розподілена система може гарантувати лише 2 з 3: Consistency, Availability, Partition tolerance','Будь-яка база даних завжди гарантує Consistency, Availability і Partition tolerance одночасно','Правило REST API, яке вимагає cacheable, atomic і persistent відповіді для кожного endpoint','Набір властивостей мікросервісів: containerization, authentication і performance під навантаженням'],c:0,e:'CAP: під час network partition треба вибирати між C (всі вузли бачать однакові дані) та A (система відповідає).'},
      {q:'Що таке ACID властивості?',o:['Atomicity, Consistency, Isolation, Durability — гарантії транзакцій у реляційних БД','Принципи API дизайну','Властивості мікросервісів','Алгоритми кешування'],c:0,e:'ACID: Atomicity (все або нічого), Consistency (дані валідні), Isolation (транзакції незалежні), Durability (збережено після commit).'},
      {q:'Що таке індекс у базі даних?',o:['Структура даних що прискорює пошук за рахунок додаткового місця та повільніших writes','Обмеження на дані, яке гарантує унікальність рядків і замінює всі foreign key звязки','Окрема схема таблиці для зберігання історії міграцій і rollback скриптів у production','Кеш результатів SELECT запитів, який автоматично invalidates після кожного commit транзакції'],c:0,e:'Індекс (B-tree, Hash): SELECT швидший, але INSERT/UPDATE/DELETE — повільніші. Надмірні індекси шкодять write performance.'},
      {q:'Яка різниця між SQL та NoSQL?',o:['SQL — реляційні, ACID, схема; NoSQL — різні моделі, гнучкіші, горизонтальне масштабування','SQL завжди краще','NoSQL — тільки для великих даних','Немає різниці'],c:0,e:'SQL (PostgreSQL, MySQL): joins, transactions. NoSQL: MongoDB (document), Redis (key-value), Cassandra (wide-column), Neo4j (graph).'},
      {q:'Що таке шардинг бази даних?',o:['Горизонтальне партиціонування — розбиття даних між кількома БД серверами за ключем','Вертикальне розбиття таблиць','Реплікація даних','Архівування старих даних'],c:0,e:'Sharding: user_id % 4 → 4 різних сервери. Масштабує writes. Ускладнює cross-shard joins та транзакції.'},
      {q:'Що таке реплікація бази даних?',o:['Копіювання даних між Primary та Replica вузлами для read scaling та відмовостійкості','Шардинг даних','Бекап бази даних','Міграція даних'],c:0,e:'Master-Replica: writes → Primary, reads → Replicas. Failover при збої Primary. Асинхронна реплікація → eventual consistency.'},
      {q:'Що таке кешування і для чого воно?',o:['Зберігання часто запитуваних даних у швидкому сховищі (RAM) для зменшення навантаження на БД','Збереження всіх логів у повільному сховищі для аудиту і подальшого пошуку інцидентів','Черга запитів між сервісами, яка гарантує порядок обробки і повторні спроби доставки','Повна копія бази даних для writes, яка завжди синхронна і замінює primary database'],c:0,e:'Cache (Redis, Memcached): latency мкс замість мс. Cache-aside, Write-through, Write-behind — стратегії.'},
      {q:'Що таке cache invalidation?',o:['Видалення або оновлення застарілих даних у кеші','Очищення кешу при рестарті','Алгоритм витіснення LRU','Розмір кешу'],c:0,e:'"There are only two hard things in CS: cache invalidation and naming things." TTL, event-driven invalidation — підходи.'},
      {q:'Що таке message queue (черга повідомлень)?',o:['Асинхронна комунікація між сервісами через проміжний буфер','Черга HTTP запитів','Список задач для виконання','Лог подій'],c:0,e:'Message Queue (RabbitMQ, Kafka, SQS): producer → queue → consumer. Decoupling, async, буферизація при spike навантаженні.'},
      {q:'Яка різниця між RabbitMQ та Kafka?',o:['RabbitMQ — традиційна черга (push, видаляє після споживання); Kafka — лог подій (pull, зберігає, replay)','RabbitMQ — immutable event log з replay; Kafka — черга що видаляє повідомлення одразу після ack','RabbitMQ і Kafka мають однакову модель, різниця лише у протоколі підключення клієнтів','Kafka використовується тільки для RPC викликів, RabbitMQ — тільки для зберігання історії подій'],c:0,e:'RabbitMQ: message broker, routing, Dead Letter Queue. Kafka: event streaming, high throughput, retention, consumer groups, replay.'},
      {q:'Що таке pub/sub патерн?',o:['Publisher відправляє події, Subscribers отримують без прямого звязку між ними','Point-to-point черга','Синхронний виклик','RPC патерн'],c:0,e:'Pub/Sub: publisher не знає про subscribers. Topic-based routing. Google Pub/Sub, Kafka, SNS — приклади.'},
      {q:'Що таке service mesh?',o:['Інфраструктурний шар для управління сервіс-до-сервіс комунікацією (mTLS, tracing, retries)','Єдиний gateway для зовнішніх клієнтів, який замінює всі internal service-to-service виклики','Load balancer рівня L4, який тільки розподіляє TCP трафік між однаковими інстансами','Бібліотека у коді кожного сервісу, де вручну реалізують retry, tracing і TLS логіку'],c:0,e:'Service mesh (Istio, Linkerd): sidecar proxy для кожного сервісу. Обробляє: mTLS, circuit breaking, retries, observability без змін коду.'},
      {q:'Що таке containerization?',o:['Пакування застосунку з залежностями в ізольований контейнер для відтворюваного середовища','Серверна віртуалізація','Мікросервісна архітектура','Хмарний деплой'],c:0,e:'Docker контейнери: ізольовані, легші за VM, однакові на dev/staging/prod. Dockerfile → Image → Container.'},
      {q:'Що таке Kubernetes?',o:['Оркестратор контейнерів — автоматизує деплой, масштабування та управління контейнерами','Альтернатива Docker','CI/CD платформа','Моніторинг система'],c:0,e:'K8s: Pod (контейнер), Deployment (бажаний стан), Service (networking), Ingress (external traffic). Auto-scaling, self-healing.'},
      {q:'Що таке health check у мікросервісах?',o:['Endpoint /health що повертає стан сервісу для load balancer та оркестратора','Перевірка безпеки','Тест продуктивності','Моніторинг логів'],c:0,e:'/health: liveness (чи живий процес) та readiness (чи готовий приймати трафік). K8s та LB виключають нездорові інстанси.'},
      {q:'Що таке distributed tracing?',o:['Відстеження запиту через всі мікросервіси за допомогою trace ID та span','Логування помилок','Моніторинг метрик','Профілювання коду'],c:0,e:'Distributed tracing (Jaeger, Zipkin, OpenTelemetry): trace_id через всі сервіси → бачимо де затримка та де помилка у ланцюжку.'},
      {q:'Що таке observability?',o:['Здатність зрозуміти внутрішній стан системи через: Logs, Metrics, Traces','Моніторинг тільки метрик','Логування помилок','Алертинг система'],c:0,e:'3 стовпи observability: Logs (що сталось), Metrics (числові показники), Traces (шлях запиту). Prometheus, Grafana, ELK Stack, Jaeger.'},
      {q:'Що таке SLA, SLO, SLI?',o:['SLI — метрика (uptime 99.9%); SLO — ціль; SLA — контракт із штрафами','Вони ідентичні','SLA — технічна метрика','SLO — юридичний документ'],c:0,e:'SLI: виміряна метрика (error rate). SLO: ціль (error rate < 0.1%). SLA: договір з клієнтом із наслідками при порушенні SLO.'},
      {q:'Що таке chaos engineering?',o:['Навмисне внесення збоїв у production для перевірки стійкості системи','Тестування безпеки','Навантажувальне тестування','Random тестування'],c:0,e:'Chaos Engineering (Netflix Chaos Monkey): вимикаємо сервіси, вводимо latency, вбиваємо ноди — перевіряємо чи система деградує gracefully.'},
      {q:'Що таке blue-green deployment?',o:['Два однакових середовища (blue/green) — трафік переключається миттєво без downtime','Поступове розгортання','Canary deployment','Feature flags'],c:0,e:'Blue-Green: production = blue, new version = green. LB переключає трафік миттєво. Rollback = переключити назад.'},
      {q:'Що таке canary deployment?',o:['Поступове розгортання нової версії — спочатку 1-5% трафіку, потім більше','Миттєве переключення','Deployment з feature flags','Тільки для мікросервісів'],c:0,e:'Canary: 5% трафіку на нову версію → моніторинг → 25% → 100%. Або rollback. Зменшує ризик порівняно з повним деплоєм.'},
      {q:'Що таке feature flags (feature toggles)?',o:['Вмикання/вимикання функціоналу без деплою через конфігурацію','Умовна компіляція','Feature branch у git','A/B тестування тільки'],c:0,e:'Feature flags: if (featureEnabled("new-ui")) { ... } — деплоюємо код, вмикаємо пізніше. LaunchDarkly, Unleash.'},
      {q:'Що таке contract testing?',o:['Тестування що producer та consumer API дотримуються узгодженого контракту','Тестування API документації','Тестування SLA','Перевірка SSL сертифікатів'],c:0,e:'Contract testing (Pact): consumer генерує очікування → provider верифікує. Замінює важкі E2E тести для мікросервісів.'},
      {q:'Що таке Pact у контексті тестування?',o:['Фреймворк для consumer-driven contract testing між мікросервісами','HTTP mock сервер','API документація інструмент','Навантажувальний тест'],c:0,e:'Pact: consumer пише тест з очікуваннями → pact файл → provider верифікує. Broker зберігає контракти. Виявляє breaking changes.'},
      {q:'Що тестувати у мікросервісах специфічно?',o:['Contract testing, service isolation, network failures, eventual consistency, idempotency','Тільки unit тести всередині кожного сервісу без перевірки контрактів, мережі та залежностей','Тільки E2E тести через UI, бо вони повністю покривають service-to-service інтеграції','Тільки performance одного сервісу без перевірки retry, timeouts, data consistency і failure modes'],c:0,e:'Мікросервіси: contracts між сервісами, поведінка при недоступності залежностей, retry логіка, idempotency, eventual consistency state.'},
      {q:'Що таке database migration?',o:['Керовані зміни схеми бази даних через версіоновані скрипти (Flyway, Liquibase)','Переміщення БД між серверами','Бекап та відновлення','Копіювання даних'],c:0,e:'Flyway/Liquibase: V1__create_users.sql, V2__add_email_index.sql — версіоновані міграції. Виконуються автоматично при старті.'},
      {q:'Що таке connection pool?',o:['Набір переднастановлених зєднань з БД для повторного використання','Пул серверів БД','Черга запитів до БД','Кеш результатів запитів'],c:0,e:'Connection pool (HikariCP): зєднання з БД дороге. Pool тримає N готових зєднань. maxPoolSize, connectionTimeout — ключові параметри.'},
      {q:'Що таке N+1 query проблема?',o:['1 запит для списку + N запитів для кожного елемента — замість одного JOIN запиту','N паралельних запитів','Повторний запит','Кешований запит'],c:0,e:'N+1: getUsers() → 1 query, потім для кожного user → getOrders() → N queries. Рішення: eager loading (JOIN FETCH), batch loading.'},
      {q:'Що таке CQRS патерн?',o:['Command Query Responsibility Segregation — окремі моделі для reads та writes','Патерн для черг','Архітектура мікросервісів','Кешування патерн'],c:0,e:'CQRS: Write model (Commands) → Event Store → Read model (Queries/Views). Оптимізувати reads та writes незалежно.'},
      {q:'Що таке Event Sourcing?',o:['Зберігання всіх змін стану як послідовність подій замість поточного стану','Pub/sub патерн','Аудит лог','Event Driven Architecture'],c:0,e:'Event Sourcing: AccountCreated → MoneyDeposited → MoneyWithdrawn — повна історія. Replay подій = відновлення стану.'},
      {q:'Що тестувати у Event-Driven системах?',o:['Публікацію та споживання подій, їх структуру, ordering, idempotency обробки, replay','Тільки HTTP endpoints','Тільки unit тести handlers','Тільки продуктивність черги'],c:0,e:'Event-driven testing: contract подій (schema), що publish відбувся, consumer обробив, idempotency, ordering guarantees.'},
      {q:'Що таке API versioning і навіщо?',o:['Версіонування API для backward compatibility при breaking changes','Версія документації','Git версіонування коду','Версія бази даних'],c:0,e:'API versioning: /v1/users → /v2/users або Accept header. Дозволяє змінювати API не ламаючи старих клієнтів.'},
      {q:'Що таке graceful degradation?',o:['Система продовжує частково працювати при збої деяких компонентів','Повна зупинка при помилці','Автоматичне відновлення','Fallback на попередню версію'],c:0,e:'Graceful degradation: платіжний сервіс недоступний → показуємо повідомлення і дозволяємо переглядати каталог.'},
      {q:'Що таке bulkhead патерн?',o:['Ізоляція ресурсів між компонентами — збій одного не поглинає ресурси інших','Патерн для шардингу','Rate limiting','Circuit breaker'],c:0,e:'Bulkhead: окремі thread pools для різних сервісів. Якщо сервіс A зависає — не блокує сервіс B. Resilience4j.'},
      {q:'Що таке timeout у розподілених системах?',o:['Максимальний час очікування відповіді від залежного сервісу','Час між retry','Час виконання тесту','Час кешування'],c:0,e:'Connection timeout, read timeout — різні рівні. Відсутність timeout = нескінченне очікування = зависання всієї системи.'},
      {q:'Що таке Saga патерн?',o:['Розподілені транзакції через послідовність локальних транзакцій з компенсаційними діями при помилці','Центральна ACID транзакція що блокує всі сервіси до завершення повного бізнес-процесу','Патерн кешування відповідей сервісів з TTL і автоматичним invalidation при зміні даних','Механізм retry без компенсацій, який просто повторює failed запит до успішного виконання'],c:0,e:'Saga: Order → Reserve Inventory → Charge Payment → Ship. При помилці — compensating transactions. Choreography або Orchestration.'},
      {q:'Що таке idempotency key?',o:['Унікальний ключ у запиті що дозволяє безпечно повторювати POST без дублювання','Ключ кешування','API ключ','Ключ шифрування'],c:0,e:'Idempotency-Key: POST /payments + UUID — сервер кешує результат. Повторний запит → та сама відповідь без повторної обробки.'},
      {q:'Що таке schema registry?',o:['Централізований репозиторій для схем повідомлень (Avro, Protobuf) у Kafka','Реєстр API схем','Документація API','Validator схем'],c:0,e:'Confluent Schema Registry: producer реєструє схему, consumer валідує. Backward/forward compatibility перевіряється автоматично.'},
      {q:'Що таке service discovery?',o:['Механізм динамічного знаходження адрес сервісів без жорсткого кодування','DNS для мікросервісів','API Gateway функція','Load balancer функція'],c:0,e:'Service discovery (Consul, Eureka, K8s DNS): сервіси реєструються → клієнти знаходять адреси динамічно.'},
      {q:'Що таке security testing у контексті API?',o:['OWASP Top 10: injection, broken auth, IDOR, rate limiting, excessive data exposure','Тільки SSL перевірка','Тільки авторизація','Тільки тести паролів'],c:0,e:'API security: SQL injection, IDOR, broken auth, missing rate limiting, verbose error messages, JWT validation.'},
      {q:'Що таке OWASP Top 10?',o:['Список 10 найкритичніших ризиків безпеки веб-застосунків','Список тест-кейсів','Методологія тестування','Набір security tools'],c:0,e:'OWASP Top 10: Injection, Broken Auth, Sensitive Data Exposure, XXE, Broken Access Control, XSS, Insecure Deserialization тощо.'},
      {q:'Що таке SQL injection?',o:['Вставка SQL коду через вхідні дані для маніпуляції БД','XSS атака','CSRF атака','Brute force'],c:0,e:'SQL injection: " OR 1=1-- у поле логіну. Захист: prepared statements, ORM, parameterized queries.'},
      {q:'Що таке XSS (Cross-Site Scripting)?',o:['Вставка шкідливого JS коду на сторінку що виконується у браузері жертви','SQL атака','CSRF атака','Injection у заголовки'],c:0,e:'XSS: <script>stealCookies()</script> у коментарі. Stored, Reflected, DOM-based. Захист: escaping, CSP, sanitization.'},
      {q:'Що таке CSRF (Cross-Site Request Forgery)?',o:['Змушення браузера жертви зробити запит від її імені на інший сайт','XSS атака','SQL injection','Brute force'],c:0,e:'CSRF: шкідливий сайт → form POST на bank.com. Захист: CSRF token, SameSite cookies, перевірка Origin/Referer.'},
      {q:'Що тестувати у мікросервісній архітектурі як QA?',o:['Integration між сервісами, contract testing, failure scenarios, data consistency, tracing','Тільки кожен сервіс окремо','Тільки E2E тести','Тільки performance'],c:0,e:'QA для мікросервісів: contract testing, consumer-driven contracts, chaos testing, distributed tracing, data consistency між сервісами.'},
      {q:'Що таке OpenAPI/Swagger?',o:['Machine-readable специфікація REST API — єдина точка правди для структури API','README файл','Postman колекція тільки','Коментарі в коді'],c:0,e:'OpenAPI (Swagger): автогенерація SDK, mock servers, тест-кейсів. Contract testing від spec. Завжди актуальна документація.'},
    ]
  },

  // ─────────────────────────────────────────────────
  aiqa: {
    label: 'AI у тестуванні',
    badge: '100 запитань · AI/ML для QA',
    desc: 'Використання AI інструментів у тестуванні: генерація тестів, LLM, prompt engineering, AI-assisted QA та тестування AI систем.',
    code:['// AI-generated test','test("checkout", () => {','  // Copilot suggested','  // based on context','  expect(total)','.toBe(99.99);','});'],
    bank: [
      {q:'Що таке LLM (Large Language Model)?',o:['Велика нейронна мережа навчена на текстових даних для генерації та розуміння тексту','База знань','Пошуковий движок','Компілятор коду'],c:0,e:'LLM (GPT-4, Claude, Gemini): трансформерна архітектура, мільярди параметрів, навчена на величезних корпусах. Генерує текст статистично.'},
      {q:'Що таке prompt engineering?',o:['Мистецтво створення ефективних запитів до LLM для отримання якісних результатів','Програмування AI','Налаштування моделі','Фільтрація відповідей'],c:0,e:'Prompt engineering: чіткий контекст, приклади (few-shot), chain-of-thought, роль ("Ти — senior QA..."), формат відповіді — впливають на якість результату.'},
      {q:'Що таке few-shot prompting?',o:['Надання кількох прикладів вхід→вихід у prompt для навчання моделі на конкретний формат','Навчання моделі на малих даних','Тестування з малою кількістю кейсів','Оптимізація запиту'],c:0,e:'Few-shot: "Вхід: login page → Вихід: [test cases]. Вхід: checkout page → Вихід:" — модель слідує шаблону прикладів.'},
      {q:'Що таке hallucination у LLM?',o:['Генерація правдоподібного але неправдивого або вигаданого контенту','Повільна відповідь моделі','Помилка парсингу','Перегрів GPU'],c:0,e:'Hallucination: LLM впевнено генерує неіснуючі API методи, бібліотеки, факти. QA має верифікувати AI-генерований код та тест-кейси.'},
      {q:'Що таке GitHub Copilot у контексті тестування?',o:['AI асистент що пропонує автодоповнення коду тестів на основі контексту','Система для запуску тестів','CI/CD платформа','Генератор тест-даних'],c:0,e:'Copilot: аналізує контекст файлу → пропонує тест-методи, assertions, mock налаштування. Прискорює написання boilerplate тестів.'},
      {q:'Які обмеження AI при генерації тестів?',o:['Не розуміє бізнес-логіку, може генерувати неправильні assertions, hallucinate API, не знає домен','AI завжди правильно знає бізнес-правила продукту, навіть якщо вони не описані у prompt або коді','AI не може генерувати тести взагалі, бо здатний лише форматувати готові test cases вручну','AI повільніший за ручне написання і тому не підходить навіть для boilerplate або draft сценаріїв'],c:0,e:'AI обмеження: незнання бізнес-правил, hallucination методів, поверхові тести без edge cases, потреба в review та валідації QA.'},
      {q:'Що таке context window у LLM?',o:['Максимальна кількість токенів (тексту) яку модель може обробити за один раз','Розмір монітора','Память моделі між сесіями','Розмір training data'],c:0,e:'Context window (8K, 32K, 128K+ tokens): обмежує скільки коду/тексту можна передати. Великий контекст = більше можливостей для аналізу коду.'},
      {q:'Що таке RAG (Retrieval Augmented Generation)?',o:['Доповнення LLM актуальними даними через пошук у базі знань перед генерацією','Тип нейронної мережі','Метод навчання','Архітектура трансформера'],c:0,e:'RAG: query → search relevant docs → LLM отримує docs + query → відповідь базується на актуальних даних. Зменшує hallucination.'},
      {q:'Як AI може допомогти з тест-кейсами?',o:['Генерація з вимог/User Stories, edge cases, негативні сценарії, матриця покриття','Автоматичний запуск тестів','Заміна QA інженера','Виправлення багів'],c:0,e:'AI для тест-кейсів: "На основі US-123 згенеруй тест-кейси включно з негативними та граничними значеннями" → базовий набір для review.'},
      {q:'Що таке AI-assisted code review для тестів?',o:['Аналіз тестового коду AI для знаходження проблем: відсутні assertions, погані назви, missing edge cases','Автоматичний merge тестового pull request без перевірки логіки, ризиків і coverage змін','Повна заміна code review, де AI сам затверджує тести та відповідає за якість релізу','Перевірка тільки форматування, назв файлів і стилю імпортів без аналізу тестових сценаріїв'],c:0,e:'AI code review: знаходить відсутні assertions, погану ізоляцію тестів, відсутні edge cases, naming issues. Доповнює але не замінює людський review.'},
      {q:'Що таке visual AI тестування?',o:['AI порівнює скріншоти виявляючи візуальні регресії розумніше за pixel-perfect порівняння','Тестування UI елементів','Accessibility тестування','Performance тестування'],c:0,e:'Applitools, Percy: AI розуміє зміни верстки vs реальні баги. Ігнорує антиаліасинг, динамічний контент. Розумніший за pixel diff.'},
      {q:'Що таке Applitools Eyes?',o:['AI-powered visual testing платформа з smart visual assertions','Playwright репортер','Accessibility checker','Performance monitor'],c:0,e:'Applitools: eyes.checkWindow() → AI порівнює з baseline → знаходить тільки реальні регресії. Інтегрується з Selenium/Playwright/Cypress.'},
      {q:'Що таке self-healing locators?',o:['AI автоматично знаходить новий локатор якщо оригінальний більше не працює після змін UI','Локатори що не ламаються','Динамічні локатори','XPath оптимізація'],c:0,e:'Self-healing (Healenium, Testim): при failure → AI шукає схожий елемент → тест не падає → QA отримує пропозицію оновлення.'},
      {q:'Що таке Testim?',o:['AI-powered test automation платформа з self-healing та ML-based локаторами','Тест фреймворк','CI/CD інструмент','Навантажувальний тест'],c:0,e:'Testim: ML локатори стійкі до змін UI, self-healing, record & replay з AI. Зменшує maintenance overhead автоматизованих тестів.'},
      {q:'Як тестувати AI/ML системи?',o:['Перевірка accuracy, bias, edge cases вхідних даних, деградація моделі, adversarial inputs','Тільки unit тести','Тільки API тести','Стандартне функціональне тестування'],c:0,e:'AI тестування: accuracy/precision/recall metrics, bias testing, data drift detection, adversarial examples, model degradation over time.'},
      {q:'Що таке bias у ML моделях?',o:['Систематична похибка моделі через нерепрезентативні тренувальні дані','Технічна помилка коду','Мала точність','Переобучення'],c:0,e:'Bias: модель систематично дискримінує за захищеними ознаками. Fairness metrics: demographic parity, equalized odds.'},
      {q:'Що таке data drift у ML?',o:['Зміна розподілу вхідних даних у production порівняно з тренуванням — знижує точність моделі','Витік тренувальних даних у тестовий датасет, через який метрики offline виглядають завищеними','Планове оновлення моделі новою версією без зміни production traffic і monitoring метрик','Зміна схеми БД у продукті, яка потребує міграції таблиць перед запуском inference'],c:0,e:'Data drift: модель навчена на даних 2022, production 2024 — розподіл змінився → accuracy падає. Моніторинг: PSI, KS test.'},
      {q:'Що таке adversarial testing для AI?',o:['Спеціально сконструйовані вхідні дані що ошукують модель — виявляє вразливості','Конкурентне тестування','Penetration testing','Stress testing'],c:0,e:'Adversarial inputs: незначна зміна зображення → модель класифікує неправильно. Важливо для критичних систем: медицина, autonomous driving.'},
      {q:'Що таке prompt injection?',o:['Вставка шкідливих інструкцій у prompt щоб змусити LLM ігнорувати системні обмеження','SQL injection у базу даних через форму логіну, який змінює query до relational database','XSS атака через HTML у відповіді моделі, яка виконується в браузері без sanitization','CSRF атака, коли користувача змушують виконати authenticated request без його наміру'],c:0,e:'Prompt injection: "Ignore previous instructions and..." — тестувати на ігнорування system prompt, витік системних інструкцій, небажані дії.'},
      {q:'Що таке A/B тестування у контексті AI?',o:['Порівняння двох версій моделі або UI на реальних користувачах для вибору кращої','Unit тест для AI','Тестування двох браузерів','Blue-green deployment'],c:0,e:'A/B тест: 50% users → model v1, 50% → model v2. Метрики: conversion, engagement, accuracy. Статистична значимість перед висновком.'},
      {q:'Що таке shadow mode deployment для AI?',o:['Нова модель працює паралельно без впливу на результат — порівнюємо output зі старою','Тихий деплой','Canary deployment','Blue-green deployment'],c:0,e:'Shadow mode: production трафік → стара модель (реальна відповідь) + нова модель (shadow, тільки логуємо). Безпечне порівняння перед перемиканням.'},
      {q:'Що таке model card?',o:['Документ що описує модель: призначення, обмеження, метрики, bias, intended use','Картка памяті GPU','Конфігурація моделі','Ліцензія'],c:0,e:'Model card (Google): training data, performance по групах, known limitations, intended use cases. Transparency для відповідального AI.'},
      {q:'Як AI допомагає у performance тестуванні?',o:['Генерація realistic навантаження, аналіз результатів, передбачення bottlenecks','Запускає JMeter автоматично','Пише loadtest скрипти','Не допомагає'],c:0,e:'AI для performance: генерує реалістичні user scenarios на основі prod логів, аналізує результати, виявляє аномалії.'},
      {q:'Що таке test generation з User Story через AI?',o:['LLM аналізує AC та генерує позитивні, негативні та edge case тести','Автоматичне виконання тестів','Генерація тест-даних','Автоматичний баг-репорт'],c:0,e:'"User story: As a user I can login. AC: email+password..." → LLM генерує: happy path, wrong password, empty fields, SQL injection, locked account.'},
      {q:'Що таке AI для root cause analysis?',o:['Аналіз логів, stack traces та патернів помилок для швидкого знаходження причини бага','Автоматичне виправлення бага','Пошук у StackOverflow','Генерація bug report'],c:0,e:'AI RCA: "Ось stack trace та логи — що пішло не так?" → AI ідентифікує патерн, пропонує причину та місце у коді.'},
      {q:'Що таке accessibility тестування з AI?',o:['AI сканує UI та знаходить WCAG порушення: контраст, alt тексти, ARIA, keyboard navigation','Тільки ручна перевірка','Тільки screen reader тест','Тільки кольори'],c:0,e:'Axe AI, AccessScan: автоматичне виявлення a11y проблем. Але AI покриває ~30-40% — решта потребує ручного тестування.'},
      {q:'Що таке AI test maintenance?',o:['AI автоматично оновлює тести при змінах UI/API зменшуючи manual effort','Запуск тестів по розкладу','Збереження тест-результатів','Версіонування тестів'],c:0,e:'AI-assisted maintenance: аналізує diff змін коду → знаходить тести що потребують оновлення → пропонує зміни. Зменшує test debt.'},
      {q:'Що таке token у контексті LLM?',o:['Одиниця тексту (~4 символи або слово) що обробляється моделлю','Аутентифікаційний токен','JWT токен','API ключ'],c:0,e:'Токен ≈ 4 символи. "Hello world" = 2 токени. Вартість API = за токени. Важливо для AI бюджету тестування.'},
      {q:'Що таке zero-shot prompting?',o:['Запит до моделі без прикладів — тільки інструкція та завдання','Перший запит до моделі','Тестування без даних','Промпт без контексту'],c:0,e:'Zero-shot: "Напиши тест для login" без прикладів. Zero-shot для простих задач. Few-shot краще для специфічного формату.'},
      {q:'Що таке chain-of-thought prompting?',o:['Інструкція моделі "думати вголос" — крок за кроком перед відповіддю підвищує якість','Ланцюжок promptів','Послідовний аналіз','Multi-step тестування'],c:0,e:'"Думай покроково: 1) проаналізуй вимоги 2) визнач edge cases 3) напиши тести" → краща якість ніж прямий запит.'},
      {q:'Які AI інструменти для QA найбільш поширені у 2024-2025?',o:['GitHub Copilot, ChatGPT/Claude, Applitools, Testim, Healenium, Cursor','Тільки ChatGPT','Тільки Selenium AI','Тільки ML фреймворки'],c:0,e:'Copilot/Claude для генерації тестів, Applitools для visual AI, Testim/mabl для self-healing automation, Cursor IDE для AI-assisted coding.'},
      {q:'Що таке AI для security тестування?',o:['Автоматичне знаходження вразливостей: fuzzing, payload generation, OWASP перевірки','Тільки ручний пентест','Брутфорс паролів','Сканування портів'],c:0,e:'AI security testing: intelligent fuzzing (генерує payloads на основі контексту), автоматичний OWASP Top 10 scan, аномальна поведінка detection.'},
      {q:'Що таке test oracle problem у AI тестуванні?',o:['Складність визначення "правильної" відповіді для AI системи — немає однозначного expected result','Ситуація коли тестові дані не завантажились у CI, тому модель повертає порожній response','Проблема нестабільних локаторів у UI тестах, які AI не може автоматично self-heal','Помилка середовища, коли GPU недоступний і inference запускається повільніше на CPU'],c:0,e:'Test oracle problem: для "опиши це зображення" правильних відповідей багато. Потрібні метрики (BLEU, ROUGE) або human evaluation.'},
      {q:'Що таке metamorphic testing для AI?',o:['Перевірка відносин між вхідними даними: якщо трохи змінити input — output повинен змінитись передбачувано','Перевірка тільки метаданих датасету без запуску моделі та без аналізу зміни результатів','Тестування API контракту моделі за схемою response body, статусами і заголовками відповіді','Порівняння двох моделей лише за швидкістю inference без перевірки очікуваної поведінки'],c:0,e:'Metamorphic: "якщо rotate зображення кішки на 5°, класифікація повинна залишатись кішкою". Вирішує test oracle problem.'},
      {q:'Що таке explainability тестування?',o:['Перевірка що AI пояснює свої рішення зрозуміло та правильно (SHAP, LIME, attention maps)','Перевірка документації моделі на наявність changelog, owner, version і посилання на репозиторій','Тестування бізнес-логіки backend сервісу без аналізу причин, чому модель дала саме такий output','Аудит коду inference pipeline на style guide, lint warnings і відсутність dead code у проєкті'],c:0,e:'XAI testing: чи пояснення відповідають реальній логіці моделі? SHAP values, LIME — перевіряємо чи feature importance правдоподібна.'},
      {q:'Яка роль QA при впровадженні AI у продукт?',o:['Тестування AI функцій, визначення метрик якості, bias testing, A/B тести, моніторинг у production','Тільки функціональне тестування UI, без оцінки якості моделі, bias, drift і production monitoring','Тільки unit тести моделі, без перевірки user impact, edge cases, fallback flow і метрик якості','AI повністю тестує себе, тому QA лише запускає готовий pipeline і не аналізує ризики продукту'],c:0,e:'QA для AI: define quality metrics (accuracy, fairness), edge cases dataset, regression при оновленні моделі, production monitoring.'},
      {q:'Що таке model regression testing?',o:['Перевірка що нова версія моделі не погіршила метрики порівняно з попередньою','Регресія у коді моделі','Стандартний regression test','Тестування відкату'],c:0,e:'Model regression: при кожному оновленні порівнюємо accuracy, precision, recall, latency нової версії з baseline. CI/CD для ML (MLOps).'},
      {q:'Що таке AI-powered test prioritization?',o:['AI аналізує ризики та зміни коду щоб запустити найважливіші тести першими','Сортування тестів за назвою','Запуск нових тестів першими','Prioritization за часом виконання'],c:0,e:'AI test prioritization: аналіз git diff, historical failure data, code coverage → запускає спочатку тести з найвищим ризиком.'},
      {q:'Що таке LLM як judge (оцінювач)?',o:['Використання LLM для оцінки якості відповідей іншого LLM або AI системи','AI моніторинг','Автоматичний code review','Unit тест для AI'],c:0,e:'LLM-as-Judge: "Оціни цю відповідь чат-бота за критеріями: правдивість, корисність, безпека (1-5)". Автоматизує human evaluation.'},
      {q:'Що таке continuous testing з AI?',o:['AI аналізує зміни коду та автоматично запускає релевантні тести та генерує нові при потребі','Постійний запуск всіх тестів без аналізу змін, ризиків, affected areas і пріоритизації сценаріїв','CI/CD pipeline, який тільки збирає застосунок і деплоїть його без AI аналізу тестового покриття','Моніторинг production метрик після релізу без генерації тестів і вибору релевантного regression набору'],c:0,e:'AI continuous testing: зміна коду → AI виявляє affected areas → запускає targeted тести → при нових функціях пропонує нові тест-кейси.'},
      {q:'Що таке synthetic test data generation з AI?',o:['AI генерує реалістичні тестові дані що відповідають схемі та бізнес-правилам','Копія production даних','Random генерація','Faker бібліотека тільки'],c:0,e:'AI synthetic data: "Згенеруй 100 реалістичних user profiles для e-commerce з валідними email, адресами, credit cards (masked)".'},
      {q:'Що таке responsible AI testing?',o:['Перевірка AI систем на відповідність етичним принципам: fairness, transparency, privacy, safety','Тестування тільки security vulnerabilities без перевірки bias, fairness, privacy і safety поведінки','Compliance тестування документів без запуску моделі, аналізу output і перевірки впливу на користувачів','Перевірка ліцензій залежностей у проєкті без оцінки етичних ризиків AI функціональності'],c:0,e:'Responsible AI testing: fairness metrics, bias detection, privacy (PII exposure), safety (harmful output), transparency (explainability).'},
      {q:'Яка різниця між AI-assisted та AI-driven тестуванням?',o:['AI-assisted — допомагає QA; AI-driven — AI автономно створює та виконує тести','Немає різниці','AI-driven краще завжди','AI-assisted застарілий'],c:0,e:'AI-assisted: Copilot допомагає писати тести (QA контролює). AI-driven: AI автономно аналізує, генерує, виконує та аналізує результати.'},
      {q:'Що таке mutation testing і як AI його покращує?',o:['Автоматичне внесення малих змін у код для перевірки чи тести їх виловлюють','Тестування копій даних','Тестування змін коду','Regression тестування'],c:0,e:'Mutation testing (PIT, Stryker): if (x > 0) → if (x >= 0) — чи впав тест? AI пріоритизує мутації та генерує тести для мутантів що вижили.'},
      {q:'Як AI змінює роль QA інженера?',o:['Від ручного написання тестів до визначення стратегії, review AI output, тестування AI систем','Повністю замінює QA інженера, тому стратегія якості, ризики і exploratory testing більше не потрібні','Майже не змінює роль QA: AI можна використовувати лише для форматування назв тест-кейсів','Робить QA непотрібним у продукті, бо AI сам гарантує correctness, security і відсутність regressions'],c:0,e:'QA еволюція: менше boilerplate написання → більше стратегія, exploratory testing, AI output review, тестування AI продуктів, quality advocacy.'},
    ]
  },

  // ─────────────────────────────────────────────────
  qabasics: {
    label: 'Основи тестування',
    badge: '100 запитань · Теорія QA',
    desc: 'ISTQB концепції, рівні та типи тестування, техніки тест-дизайну, баг lifecycle, документація та процеси якості.',
    code:['// Test Design','Given: preconditions','When:  action','Then:  expected result','','// BVA: field 1-100','// → test: 0,1,2,99,100,101'],
    bank: [
      {q:'Що таке тестування програмного забезпечення?',o:['Процес перевірки що ПЗ відповідає вимогам та знаходження дефектів','Написання коду','Деплой застосунку','Збір вимог'],c:0,e:'Тестування: verification (чи правильно побудовано) + validation (чи побудовано правильне). Виявлення дефектів до production.'},
      {q:'Яка різниця між верифікацією та валідацією?',o:['Верифікація — чи відповідає специфікації; валідація — чи вирішує потреби користувача','Вони однакові','Верифікація — ручна, валідація — автоматична','Верифікація — після релізу'],c:0,e:'Verification: "Will building the product right?" — відповідність специфікації. Validation: "Will building the right product?" — відповідність потребам.'},
      {q:'Що таке дефект, помилка та збій (defect, error, failure)?',o:['Error — помилка людини; Defect — помилка в коді; Failure — неправильна поведінка у runtime','Вони синоніми','Error — у продакшені тільки','Failure — у тестах тільки'],c:0,e:'Error (людина) → Defect/Bug (код) → Failure (неправильна поведінка). Одна error може породити кілька defects, дефект → кілька failures.'},
      {q:'Які сім принципів тестування (ISTQB)?',o:['Тестування виявляє наявність дефектів; вичерпне тестування неможливе; раннє тестування; кластеризація; парадокс пестицидів; залежить від контексту; помилкова відсутність дефектів','Тестування гарантує відсутність дефектів; повне тестування завжди можливе; QA починається після розробки; дефекти рівномірні; автоматизація вирішує все','Тестування доводить якість продукту; всі сценарії треба виконати; пізнє тестування дешевше; дефекти випадкові; контекст не впливає на підхід','Тестування замінює review вимог; більше тестів завжди краще; один набір тестів працює вічно; успішні тести означають готовність релізу'],c:0,e:'7 ISTQB принципів: 1.Тестування показує наявність багів 2.Вичерпне неможливе 3.Раннє тестування 4.Кластеризація дефектів 5.Парадокс пестицидів 6.Залежить від контексту 7.Помилка відсутності помилок.'},
      {q:'Що таке парадокс пестицидів у тестуванні?',o:['Якщо ті самі тести повторюються — вони перестають знаходити нові дефекти','Тести з пестицидами небезпечні','Надто багато тестів','Тести що падають без причини'],c:0,e:'Парадокс пестицидів: система "імунізується" до тест-кейсів. Потрібно регулярно переглядати, оновлювати та додавати нові тести.'},
      {q:'Що таке кластеризація дефектів (defect clustering)?',o:['80% дефектів знаходяться у 20% модулів — Принцип Парето у тестуванні','Дефекти у кластерах даних','Групування дефектів у репорті','Дефекти у мікросервісах'],c:0,e:'Принцип Парето: невелика кількість модулів містить більшість дефектів. QA фокусується на ризикованих зонах у першу чергу.'},
      {q:'Які рівні тестування існують?',o:['Unit → Integration → System → Acceptance','Unit → Regression → Performance → Security','Smoke → Sanity → Regression → Exploratory','Manual → Automated → CI → Production'],c:0,e:'Рівні: Unit (компоненти), Integration (взаємодія), System (вся система), Acceptance (UAT — відповідність вимогам бізнесу).'},
      {q:'Що таке Unit тестування?',o:['Тестування найменших одиниць коду (методів/класів) ізольовано від залежностей','Тестування UI','Тестування одного сервісу','Тестування одного requirement'],c:0,e:'Unit tests: fast, isolated, no DB/network. Developer writes. JUnit, TestNG, pytest. Основа піраміди тестування.'},
      {q:'Що таке Integration тестування?',o:['Тестування взаємодії між компонентами або сервісами','Тестування всієї системи','Тестування після деплою','Перевірка вимог'],c:0,e:'Integration testing: DB + DAO, Service + Queue, Frontend + Backend. Виявляє проблеми на стиках компонентів що unit тести не покривають.'},
      {q:'Що таке System тестування?',o:['Тестування всієї інтегрованої системи як єдиного цілого щодо вимог','Тестування окремих компонентів','Тестування у production','Тестування безпеки тільки'],c:0,e:'System testing: end-to-end функціональність, нефункціональні вимоги (performance, security). Виконується QA на test environment.'},
      {q:'Що таке UAT (User Acceptance Testing)?',o:['Тестування бізнес-користувачами що система відповідає їхнім реальним потребам','Тестування QA команди','Автоматизоване acceptance тестування','Тестування після релізу'],c:0,e:'UAT: замовник або кінцеві користувачі перевіряють відповідність бізнес-вимогам. Фінальна брама перед production деплоєм.'},
      {q:'Що таке alpha та beta тестування?',o:['Alpha — в організації розробника; Beta — обраними кінцевими користувачами перед релізом','Alpha — автоматизоване; Beta — ручне','Alpha — перший sprint; Beta — другий','Вони ідентичні'],c:0,e:'Alpha: внутрішнє тестування командою. Beta: реальні користувачі в реальному середовищі. Обидва — до офіційного релізу.'},
      {q:'Які типи тестування за цілями існують?',o:['Functional, Performance, Security, Usability, Compatibility, Accessibility','Тільки functional та non-functional','Manual та automated','Unit та E2E'],c:0,e:'Functional: що система робить. Non-functional: як вона це робить (performance, security, usability, reliability, scalability).'},
      {q:'Що таке regression тестування?',o:['Перевірка що нові зміни не зламали існуючу функціональність','Тестування нових функцій','Тестування після production incident','Тестування вимог'],c:0,e:'Regression: після кожної зміни (bugfix, new feature, refactoring). Автоматизація критична — ручний regression занадто повільний та дорогий.'},
      {q:'Що таке re-testing?',o:['Повторне виконання тест-кейсу що раніше провалився після виправлення дефекту','Повторний запуск всіх тестів','Regression тестування','Smoke тестування'],c:0,e:'Re-testing: після fix developer → QA виконує саме той test case що знайшов баг. Відрізняється від regression (ширший скоуп).'},
      {q:'Що таке Boundary Value Analysis (BVA)?',o:['Тестування граничних значень: мінімум, максимум та значення поряд з ними','Тестування null значень','Тестування відємних чисел','Тестування рядків'],c:0,e:'BVA для поля 1-100: тестуємо 0, 1, 2, 99, 100, 101. Помилки частіше на межах. Min, Min+1, Nominal, Max-1, Max — стандартний набір.'},
      {q:'Що таке Equivalence Partitioning (EP)?',o:['Розбиття вхідних даних на класи рівнозначної поведінки — тестуємо по одному з кожного класу','Тестування всіх значень','Розбиття на групи за алфавітом','Тестування boundary values'],c:0,e:'EP: 1-100 → класи: <1 (invalid), 1-100 (valid), >100 (invalid). Достатньо одного тесту з кожного класу.'},
      {q:'Що таке Decision Table тестування?',o:['Таблиця всіх комбінацій умов та відповідних дій системи','Таблиця тест-кейсів','Матриця відповідальності','Таблиця ризиків'],c:0,e:'Decision table: рядки = умови та дії, колонки = правила. Гарантує покриття всіх комбінацій. Корисно для складних if/else бізнес-правил.'},
      {q:'Що таке State Transition тестування?',o:['Тестування переходів між станами системи та реакції на події','Тестування анімацій','Тестування CSS станів','Тестування модальних вікон'],c:0,e:'State Transition: Order (pending → paid → shipped → delivered → cancelled). Тестуємо валідні переходи та невалідні.'},
      {q:'Що таке Use Case тестування?',o:['Тестування сценаріїв взаємодії користувача з системою від початку до кінця','Тестування use case діаграм','Тестування API endpoints','Unit тестування'],c:0,e:'Use Case testing: основний потік + альтернативні потоки + виключення. Гарантує покриття реальних user journeys.'},
      {q:'Що таке Error Guessing?',o:['Техніка де досвідчений тестувальник передбачає де можуть бути помилки на основі досвіду','Тестування помилок','Тестування виключень','Негативне тестування'],c:0,e:'Error guessing: досвід + інтуїція → список потенційних дефектів. Порожні поля, null, від\'ємні числа, спецсимволи, великі дані.'},
      {q:'Що таке Test Case?',o:['Документований набір вхідних даних, передумов, кроків, очікуваних результатів для однієї перевірки','Опис дефекту з actual result, severity, priority, attachment і кроками для відтворення проблеми','Високорівнева бізнес-вимога без конкретних кроків виконання та expected result для перевірки','Автоматичний скрипт без передумов і очікуваного результату, який просто запускається у CI'],c:0,e:'Test Case: Test ID, Title, Preconditions, Steps, Expected Result, Actual Result, Status, Priority. Мінімальна одиниця тестування.'},
      {q:'Що таке Test Suite?',o:['Набір тест-кейсів згрупованих за функціональністю або метою','Один тест-кейс','Тест-план','Результати тестування'],c:0,e:'Test Suite: Login Suite, Checkout Suite, Admin Suite — логічне групування тест-кейсів для зручного управління та запуску.'},
      {q:'Що таке Test Plan?',o:['Документ що описує scope, підхід, ресурси, розклад та ризики тестування','Список тест-кейсів','Звіт тестування','Конфігурація CI'],c:0,e:'Test Plan (IEEE 829): мета, scope, features to test/not test, підхід, критерії входу/виходу, ресурси, ризики, deliverables.'},
      {q:'Що таке критерії входу (Entry Criteria)?',o:['Умови що повинні виконатись щоб розпочати тестування','Критерії завершення','Список тестів','Умови деплою'],c:0,e:'Entry Criteria: build deployed, smoke tests pass, test environment ready, test data prepared. Якщо не виконано — тестування не починаємо.'},
      {q:'Що таке критерії виходу (Exit Criteria)?',o:['Умови що визначають коли тестування завершено та можна релізити','Критерії входу','Критерії якості','Критерії деплою'],c:0,e:'Exit Criteria: 95% test cases passed, 0 critical/blocker bugs open, coverage > 80%, performance benchmarks met, UAT sign-off.'},
      {q:'Що таке lifecycle дефекту?',o:['New → Assigned → Open → Fixed → Retest → Closed (або Reopened)','Created → Deleted','Found → Fixed','New → Closed'],c:0,e:'Bug lifecycle: New → Assigned → In Progress → Fixed → Ready for Retest → Verified → Closed. Або Rejected/Duplicate/Deferred/Not a Bug.'},
      {q:'Яка різниця між Severity та Priority?',o:['Severity — технічний вплив (blocker/critical/major/minor); Priority — бізнес-важливість (P1/P2/P3)','Severity визначає терміновість для бізнесу; Priority описує технічний вплив дефекту на систему','Severity та Priority завжди однакові, бо критичний дефект автоматично має найвищий бізнес-пріоритет','Priority ставить QA за стек-трейсом, а Severity ставить PM за датою найближчого релізу'],c:0,e:'Critical severity + Low priority: crash у рідко використовуваній функції. Low severity + High priority: опечатка у назві компанії на головній.'},
      {q:'Що таке Root Cause Analysis (RCA)?',o:['Знаходження першопричини дефекту для запобігання повторному виникненню','Аналіз логів','Bug report','Тест-аналіз'],c:0,e:'RCA: 5 Whys, Fishbone diagram. Не просто "де" баг але "чому" він виник і як запобігти класу таких проблем у майбутньому.'},
      {q:'Що таке Exploratory тестування?',o:['Одночасне навчання, проектування та виконання тестів без заздалегідь написаних кейсів','Тестування без документації','Хаотичне тестування','Random testing'],c:0,e:'Exploratory: тестувальник вільно досліджує систему використовуючи досвід та інтуїцію. Session-based ET: charters (30-90 хв сесії).'},
      {q:'Що таке Risk-Based тестування?',o:['Пріоритизація тестування на основі ймовірності та наслідків ризиків','Тестування security ризиків','Тестування критичних функцій тільки','Тестування з резервним планом'],c:0,e:'Risk-Based: likelihood × impact → priority. Критичний функціонал + новий код + складна логіка = найвищий ризик → тестуємо першим.'},
      {q:'Що таке тест-оракул?',o:['Джерело визначення очікуваного результату для порівняння з фактичним','Інструмент тестування','Тест-менеджер','Автоматичний тест'],c:0,e:'Test oracle: специфікація, досвід користувача, попередня версія, документація, доменний експерт — звідки знаємо очікуваний результат.'},
      {q:'Що таке тестовність (Testability)?',o:['Ступінь у якому система та її компоненти можуть бути ефективно протестовані','Наявність тестів','Автоматизованість','Швидкість тестів'],c:0,e:'Testability: observability (бачимо результат), controllability (контролюємо стан), decomposability (ізолюємо компоненти).'},
      {q:'Що таке нефункціональне тестування?',o:['Тестування як система виконує вимоги: performance, security, usability, reliability, scalability','Тестування не існуючого функціоналу','Тестування без специфікації','Automated тестування'],c:0,e:'Non-functional: Performance (швидкість), Load (навантаження), Stress (пікові), Security (вразливості), Usability, Accessibility.'},
      {q:'Що таке Agile тестування?',o:['Тестування інтегроване у весь Agile процес — QA залучений з початку спринту, whole team approach','Тестування у кінці спринту','Тільки автоматизоване тестування','Тестування без документації'],c:0,e:'Agile QA: three amigos (DEV+QA+BA), TDD/BDD, continuous testing, whole team quality, refinement участь, in-sprint testing.'},
      {q:'Що таке three amigos у Agile?',o:['BA + Developer + QA обговорюють user story разом перед розробкою для спільного розуміння','Три тестувальники виконують regression окремо після завершення sprint review і демо фічі','Три рівні тестів: unit, integration і UI, які обовязково запускаються перед кожним commit','Три критерії якості: швидкість, дизайн і документація, які PM перевіряє після релізу'],c:0,e:'Three amigos: BA пояснює що потрібно, DEV пропонує як реалізувати, QA виявляє edge cases та ризики. Запобігає непорозумінням.'},
      {q:'Що таке Definition of Done (DoD) у Agile?',o:['Чіткий список критеріїв що user story вважається завершеною включно з тестуванням','Кінець спринту','Список завдань','Критерії прийнятності'],c:0,e:'DoD: code review done, unit tests pass, integration tests pass, QA verified, documentation updated, deployed to staging.'},
      {q:'Що таке Acceptance Criteria (AC)?',o:['Конкретні умови які User Story повинна задовольняти для прийнятності — основа тест-кейсів','Критерії завершення всього тестування release candidate після regression і UAT sign-off','Технічні вимоги до внутрішньої реалізації, назв класів, схем БД і build pipeline','NFR вимоги до performance, security і observability, які не повязані з user story поведінкою'],c:0,e:'AC формат Given/When/Then або чекліст: "Given user is logged in, When clicks logout, Then redirected to login page and session cleared".'},
      {q:'Що таке BDD (Behavior-Driven Development)?',o:['Підхід де специфікація у форматі Given/When/Then служить і документацією і автоматизованими тестами','Тестування тільки поведінки UI без участі бізнесу, розробників і прикладів acceptance criteria','Branch-Driven Development, де кожна user story має окрему git branch і auto-generated tests','Business Data Design, підхід до моделювання таблиць БД перед написанням API контрактів'],c:0,e:'BDD (Cucumber, SpecFlow): Given/When/Then сценарії розуміють всі stakeholders + автоматично виконуються. Living documentation.'},
      {q:'Що таке TDD (Test-Driven Development)?',o:['Red → Green → Refactor: спочатку пишемо тест що падає, потім мінімальний код, потім рефакторинг','Test After Development: спочатку реалізуємо всю фічу, потім додаємо тести для підтвердження','Тестування в окремій QA команді після code freeze, коли розробники вже завершили реалізацію','Тестування всіх вимог через UI перед релізом, незалежно від unit tests і дизайну коду'],c:0,e:'TDD: тест → fail (Red) → мінімальний код → pass (Green) → refactor. Покращує дизайн коду, 100% coverage за замовчуванням.'},
      {q:'Що таке Continuous Testing?',o:['Тестування на кожному етапі pipeline — від commit до production','Тестування 24/7','Безперервний ручний тест','Тестування без зупинки'],c:0,e:'Continuous Testing: unit при commit → integration при merge → E2E при деплої → smoke у production. Fast feedback loop.'},
      {q:'Що таке shift-left тестування?',o:['Залучення QA та тестування якомога раніше в SDLC — вже при написанні вимог','Переміщення тестів у ліво у таблиці','Тестування тільки нових функцій','Скорочення тест-кейсів'],c:0,e:'Shift-left: requirements review, definition of ready, three amigos, TDD. Дефект на стадії вимог коштує в 100x дешевше ніж у production.'},
      {q:'Що таке smoke test vs sanity test?',o:['Smoke — поверхова перевірка основних функцій після деплою; Sanity — глибока перевірка конкретної фічі після fix','Smoke — детальна перевірка одного bugfix; Sanity — широкий прогін критичних flow після кожного деплою','Smoke і Sanity повністю однакові, обидва означають повний regression перед релізом у production','Smoke запускають тільки вручну перед релізом; Sanity запускають лише автоматично після кожного commit'],c:0,e:'Smoke: "чи запустилось?" — login, home page, main navigation. Sanity: "чи цей fix працює?" — вузька перевірка конкретного виправлення.'},
      {q:'Що таке usability тестування?',o:['Оцінка зручності використання продукту реальними користувачами','Тестування UI','Функціональне тестування','Тестування дизайну'],c:0,e:'Usability testing: чи може користувач виконати задачу? Learnability, efficiency, memorability, errors, satisfaction (SUS score).'},
      {q:'Що таке accessibility тестування?',o:['Перевірка доступності продукту для людей з обмеженими можливостями (WCAG 2.1)','Тестування прав доступу','Security тестування','Тестування ролей'],c:0,e:'A11y testing: screen readers, keyboard navigation, color contrast (4.5:1), ARIA labels, alt text. WCAG 2.1 A/AA/AAA. Axe, NVDA, VoiceOver.'},
      {q:'Що таке compatibility тестування?',o:['Перевірка роботи у різних браузерах, OS, пристроях, роздільностях','Тестування API сумісності','Тестування версій БД','Тестування міграцій'],c:0,e:'Compatibility: cross-browser (Chrome/Firefox/Safari/Edge), cross-OS (Win/Mac/Linux), cross-device (mobile/tablet/desktop).'},
      {q:'Що таке localization та internationalization тестування?',o:['i18n — готовність до локалізації (дати, валюти, кодування); l10n — переклади, культурні особливості','i18n — перевірка перекладів у конкретній країні; l10n — тільки технічна готовність коду до мов','i18n і l10n однакові, обидва означають перевірку grammar spelling у текстах інтерфейсу','i18n — тестування часових зон; l10n — перевірка лише форматів дат без культурного контексту'],c:0,e:'i18n (internationalization): UTF-8, date formats, RTL підтримка. l10n (localization): правильні переклади, валюти, телефони.'},
      {q:'Що таке Recovery тестування?',o:['Перевірка відновлення системи після збоїв: відключення живлення, мережеві помилки, DB crash','Тестування backup файлів без перевірки поведінки системи під час crash і після відновлення','Тестування rollback deployment, де перевіряють тільки повернення попередньої версії застосунку','Disaster recovery план як документ без практичного запуску сценаріїв відмови та перевірки RTO/RPO'],c:0,e:'Recovery testing: як система реагує на crash? Чи відновлює стан? Чи показує правильні повідомлення? RTO/RPO відповідність.'},
      {q:'Що таке mutation тестування?',o:['Автоматичне внесення дрібних змін у код (мутантів) та перевірка чи тести їх виявляють','Тестування після змін коду','Regression тестування','Тестування різних версій'],c:0,e:'Mutation testing (PIT, Stryker): killed mutants / total mutants = mutation score. Виявляє слабкі тести з недостатніми assertions.'},
      {q:'Що таке tester mindset (мислення тестувальника)?',o:['Критичне мислення, сумніви, пошук проблем, захист якості на відміну від developer mindset','Оптимізм щодо будь-якої реалізації, фокус на happy path і підтвердження що фіча працює','Написання тестів за готовим списком без аналізу ризиків, edge cases і прихованих припущень','Управління проектом, планування roadmap і контроль дедлайнів замість дослідження якості продукту'],c:0,e:'Tester mindset: "як це може зламатись?" Curiosity, skepticism, systematism, attention to detail, advocate for quality.'},
      {q:'Що таке test coverage report?',o:['Документ що показує відсоток коду або вимог покритих тестами','Список виконаних тестів','Звіт про помилки','Метрики продуктивності'],c:0,e:'Coverage report: statement/branch/path coverage для коду (JaCoCo, Istanbul), requirements coverage для функціональності.'},
      {q:'Що таке pair testing?',o:['Два тестувальники або тестувальник і розробник тестують разом одночасно','Два незалежних тести','Тестування в парі браузерів','Parallel testing'],c:0,e:'Pair testing: два учасники — один керує, інший спостерігає та пропонує ідеї. Ділиться знаннями, знаходить більше багів, менш стомлює.'},
      {q:'Що таке flaky test та як з ним боротись?',o:['Нестабільний тест — то проходить то падає. Рішення: ізоляція, детермінізм, видалення race conditions','Тест що стабільно падає на кожному запуску через реальний дефект у функціональності або неправильний expected result','Тест без assertions, який завжди проходить і не перевіряє поведінку системи після виконання дій','Тест з mock обєктами, який ізолює залежності і тому не може мати проблем з race conditions'],c:0,e:'Flaky tests: race conditions, time dependencies, shared state, network unreliability. Quarantine → analyse → fix → reintegrate.'},
      {q:'Що таке test data management?',o:['Стратегія підготовки, ізоляції та очищення тестових даних','Зберігання результатів тестів','Управління тест-кейсами','Версіонування тестів'],c:0,e:'Test data: factories, builders, fixtures, seed scripts. Ізоляція — кожен тест з чистими даними. Synthetic data для privacy.'},
      {q:'Що таке зворотнє сумісність (backward compatibility) тестування?',o:['Перевірка що нова версія системи працює з даними та клієнтами попередніх версій','Тестування застарілого коду','Тестування старих браузерів','Тестування попередніх версій'],c:0,e:'Backward compatibility: нова версія API приймає запити старих клієнтів. Нова схема БД читає старі дані. Важливо для API та мобільних додатків.'},
    ]
  }
};

// ─── State ───────────────────────────────────────
let currentTopic = null;
let questions = [];
let current = 0;
let correctCount = 0;
let wrongCount = 0;
let answered = false;
let selectedOptionBtn = null;
const SPEC_NAMES = {
  selenide: 'selenide.spec',
  restassured: 'rest-assured.spec',
  qaautomation: 'qa-automation.spec',
  javacore: 'java-core.spec',
  playwright: 'playwright-ts.spec',
  sysdesign: 'system-design.spec',
  aiqa: 'ai-in-testing.spec',
  qabasics: 'testing-basics.spec',
};

// ─── Utils ───────────────────────────────────────
function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const OPTION_LABELS = ['A', 'B', 'C', 'D'];

function formatOptionMarker(box, checked) {
  box.textContent = `${checked ? '[x]' : '[ ]'} ${box.dataset.label}`;
}

function formatOptionText(text, originalToDisplayLabel) {
  return text.replace(/\b([A-D])\s+(або|та)\s+([A-D])\b/g, (_, first, joiner, second) => {
    return `${originalToDisplayLabel[first]} ${joiner} ${originalToDisplayLabel[second]}`;
  });
}

function trackEvent(name) {
  const payload = {
    path: `pwa/${name}`,
    title: `PWA: ${name}`,
    event: true
  };

  if (window.goatcounter && typeof window.goatcounter.count === 'function') {
    window.goatcounter.count(payload);
    return;
  }

  let attempts = 0;
  const timer = setInterval(() => {
    attempts += 1;
    if (window.goatcounter && typeof window.goatcounter.count === 'function') {
      clearInterval(timer);
      window.goatcounter.count(payload);
    } else if (attempts >= 50) {
      clearInterval(timer);
    }
  }, 100);
}

function isStandalonePwa() {
  return window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
}

function trackStandaloneOpen() {
  if (!isStandalonePwa()) return;

  const today = new Date().toISOString().slice(0, 10);
  const storageKey = 'qa_quiz_pwa_open_tracked_at';
  if (localStorage.getItem(storageKey) === today) return;

  localStorage.setItem(storageKey, today);
  trackEvent('opened_standalone');
}

window.addEventListener('beforeinstallprompt', event => {
  trackEvent('install_prompt_shown');
  event.userChoice.then(choice => {
    trackEvent(choice.outcome === 'accepted' ? 'install_prompt_accepted' : 'install_prompt_dismissed');
  });
});

window.addEventListener('appinstalled', () => {
  localStorage.setItem('qa_quiz_pwa_installed', '1');
  trackEvent('installed');
});

let wrongQuestions = [];

function initQuiz(topicKey, count) {
  currentTopic = topicKey;
  wrongQuestions = [];
  if (topicKey === 'mock') {
    const allQuestions = [];
    Object.entries(TOPICS).forEach(([key, topic]) => {
      topic.bank.forEach((q, idx) => {
        allQuestions.push({ ...q, _topic: topic.label, _topicKey: key, _idx: idx });
      });
    });
    questions = shuffle(allQuestions).slice(0, count || 100);
  } else if (topicKey === 'mistakes') {
    const mistakes = getMistakes();
    const allQuestions = [];
    Object.entries(mistakes).forEach(([key, idxMap]) => {
      const topic = TOPICS[key];
      if (!topic) return;
      Object.keys(idxMap).forEach(idxStr => {
        const idx = parseInt(idxStr, 10);
        const q = topic.bank[idx];
        if (q) allQuestions.push({ ...q, _topic: topic.label, _topicKey: key, _idx: idx });
      });
    });
    questions = shuffle(allQuestions);
  } else {
    const bankWithIdx = TOPICS[topicKey].bank.map((q, idx) => ({ ...q, _topicKey: topicKey, _idx: idx }));
    const bank = shuffle(bankWithIdx);
    questions = count ? bank.slice(0, Math.min(count, bank.length)) : bank;
  }
  current = 0; correctCount = 0; wrongCount = 0; answered = false;
}

function updateHeader() {
  document.getElementById('metaCounter').textContent = (current + 1) + ' / ' + questions.length;
  document.getElementById('metaCorrect').textContent = correctCount;
  document.getElementById('metaWrong').textContent = wrongCount;
}

// ─── Topic Picker ─────────────────────────────────
function renderTopicPicker() {
  const startContent = document.querySelector('.start-content');
  const startDeco = document.querySelector('.start-deco');

  // hide default start content
  startContent.style.display = 'none';
  startDeco.style.display = 'none';

  const picker = document.getElementById('topicPicker');
  picker.style.display = 'flex';
}

function getStats() {
  try {
    return JSON.parse(localStorage.getItem('qa_quiz_stats') || '{}');
  } catch { return {}; }
}

function saveStats(topicKey, pct) {
  const stats = getStats();
  if (!stats[topicKey]) stats[topicKey] = { best: 0, last: null, count: 0 };
  stats[topicKey].count = (stats[topicKey].count || 0) + 1;
  stats[topicKey].last = pct;
  if (pct > (stats[topicKey].best || 0)) stats[topicKey].best = pct;
  localStorage.setItem('qa_quiz_stats', JSON.stringify(stats));
}

// ─── Mistake bank (spaced repetition) ──────────────
function getMistakes() {
  try {
    return JSON.parse(localStorage.getItem('qa_quiz_mistakes') || '{}');
  } catch { return {}; }
}

function saveMistakes(mistakes) {
  localStorage.setItem('qa_quiz_mistakes', JSON.stringify(mistakes));
}

function getMistakeCount(mistakes) {
  return Object.values(mistakes || getMistakes()).reduce((sum, idxMap) => sum + Object.keys(idxMap).length, 0);
}

function updateMistakeBank(topicKey, idx, isCorrect) {
  if (topicKey == null || idx == null) return;
  const mistakes = getMistakes();
  if (!isCorrect) {
    if (!mistakes[topicKey]) mistakes[topicKey] = {};
    mistakes[topicKey][idx] = { correctStreak: 0 };
  } else if (mistakes[topicKey] && mistakes[topicKey][idx] !== undefined) {
    const entry = mistakes[topicKey][idx];
    entry.correctStreak = (entry.correctStreak || 0) + 1;
    if (entry.correctStreak >= 2) {
      delete mistakes[topicKey][idx];
      if (Object.keys(mistakes[topicKey]).length === 0) delete mistakes[topicKey];
    }
  } else {
    return;
  }
  saveMistakes(mistakes);
}

function buildTopicCards() {
  const picker = document.getElementById('topicPicker');
  picker.innerHTML = '';

  const stats = getStats();
  const totalSessions = Object.values(stats).reduce((s, v) => s + (v.count || 0), 0);
  const allBests = Object.values(stats).map(v => v.best || 0).filter(v => v > 0);
  const overallBest = allBests.length ? Math.max(...allBests) : null;
  const playedTopics = Object.keys(TOPICS).filter(k => stats[k] && stats[k].count > 0).length;
  const totalTopics = Object.keys(TOPICS).length;
  const mistakeCount = getMistakeCount();

  const wrapper = document.createElement('div');
  wrapper.className = 'dash-wrapper';

  // ─── Stats top bar ───
  const topBar = document.createElement('div');
  topBar.className = 'dash-topbar';
  topBar.innerHTML = `
    <div class="dash-topbar-stats">
      <div class="dash-topbar-stat">
        <span class="dash-topbar-n">${overallBest !== null ? overallBest + '%' : '—'}</span>
        <span class="dash-topbar-l">найкращий результат</span>
      </div>
      <div class="dash-topbar-divider"></div>
      <div class="dash-topbar-stat">
        <span class="dash-topbar-n">${totalSessions}</span>
        <span class="dash-topbar-l">сесій зіграно</span>
      </div>
      <div class="dash-topbar-divider"></div>
      <div class="dash-topbar-stat">
        <span class="dash-topbar-n">${playedTopics}/${totalTopics}</span>
        <span class="dash-topbar-l">тем пройдено</span>
      </div>
    </div>
  `;
  wrapper.appendChild(topBar);

  // ─── Main content ───
  const main = document.createElement('div');
  main.className = 'dash-main';

  // ▸ run --mock full-suite
  const totalQuestions = Object.values(TOPICS).reduce((sum, t) => sum + t.bank.length, 0);
  const mockAction = document.createElement('button');
  mockAction.className = 'ci-action';
  mockAction.innerHTML = `
    <div class="cmd">
      <div><span class="cmd-prompt">▸</span> run <span class="flag">--mock</span> full-suite</div>
      <div class="cmd-sub">${totalQuestions}+ питань з усіх ${totalTopics} тем</div>
    </div>
    <div class="go">RUN →</div>
  `;
  mockAction.addEventListener('click', () => openCountModal('mock'));
  main.appendChild(mockAction);

  // ▸ rerun --failed (mistake bank)
  if (mistakeCount > 0) {
    const rerunAction = document.createElement('button');
    rerunAction.className = 'ci-action secondary';
    rerunAction.innerHTML = `
      <div class="cmd">
        <div><span class="cmd-prompt">▸</span> rerun <span class="flag">--failed</span></div>
        <div class="cmd-sub">${mistakeCount} ${mistakeCount === 1 ? 'питання' : 'питань'}, де ти помилявся</div>
      </div>
      <div class="go">RUN →</div>
    `;
    rerunAction.addEventListener('click', () => startQuiz('mistakes'));
    main.appendChild(rerunAction);
  }

  const listHead = document.createElement('div');
  listHead.className = 'dash-main-subtitle';
  listHead.textContent = `// specs — ${totalTopics} файлів`;
  main.appendChild(listHead);

  // Topic spec-list
  const list = document.createElement('div');
  list.className = 'spec-list';

  Object.entries(TOPICS).forEach(([key, topic]) => {
    const s = stats[key];
    const count = s ? (s.count || 0) : 0;
    const best = count && s && s.best != null ? s.best : null;
    const status = best === null ? 'skip' : best >= 75 ? 'pass' : 'fail';
    const statusLabel = best === null ? '····' : status === 'pass' ? 'PASS' : 'FAIL';
    const row = document.createElement('button');
    row.className = 'spec-row';
    row.innerHTML = `
      <span class="spec-status ${status}">${statusLabel}</span>
      <span class="spec-topic-name">${SPEC_NAMES[key] || key}</span>
      <span class="spec-progress"><i style="width:${best !== null ? best : 0}%"></i></span>
      <span class="spec-pct">${best !== null ? best + '%' : '—'}</span>
    `;
    row.addEventListener('click', () => openCountModal(key));
    list.appendChild(row);
  });

  main.appendChild(list);
  wrapper.appendChild(main);
  picker.appendChild(wrapper);
}

// ─── Start Quiz ───────────────────────────────────
function startQuiz(topicKey, count) {
  initQuiz(topicKey, count);
  document.getElementById('startScreen').style.display = 'none';
  document.getElementById('quizScreen').style.display = 'block';
  document.getElementById('headerMeta').style.display = 'flex';

  const cmd = topicKey === 'mock' ? 'run --mock'
    : topicKey === 'mistakes' ? 'rerun --failed'
    : `run --topic ${topicKey}`;
  document.getElementById('logoTopic').textContent = cmd;

  renderQuestion();
}

// ─── Count Picker Modal ───────────────────────────
let _pendingTopic = null;

function openCountModal(topicKey) {
  _pendingTopic = topicKey;
  const title = topicKey === 'mock' ? 'Mock Interview' : TOPICS[topicKey].label;
  document.getElementById('countModalTitle').textContent = title + ' — кількість питань';
  document.getElementById('countModal').style.display = 'flex';
}

document.getElementById('countModalClose').addEventListener('click', () => {
  document.getElementById('countModal').style.display = 'none';
});
document.getElementById('countModal').addEventListener('click', e => {
  if (e.target === document.getElementById('countModal'))
    document.getElementById('countModal').style.display = 'none';
});
document.querySelectorAll('.count-opt').forEach(btn => {
  btn.addEventListener('click', () => {
    const n = parseInt(btn.dataset.n);
    document.getElementById('countModal').style.display = 'none';
    startQuiz(_pendingTopic, n);
  });
});

// ─── Render Question ──────────────────────────────
function renderQuestion() {
  answered = false;
  selectedOptionBtn = null;
  const q = questions[current];
  const total = questions.length;

  document.getElementById('progressFill').style.width = ((current / total) * 100) + '%';
  document.getElementById('questionNum').textContent = current + 1;
  document.getElementById('specFileName').textContent = SPEC_NAMES[q._topicKey] || (q._topicKey + '.spec');
  document.getElementById('specDescribe').textContent = TOPICS[q._topicKey].label;

  document.getElementById('questionText').textContent = q.q;
  document.getElementById('feedbackBox').style.display = 'none';
  document.getElementById('nextBtn').style.display = 'none';

  updateHeader();

  const container = document.getElementById('optionsContainer');
  container.innerHTML = '';

  const shuffledIdx = shuffle([0, 1, 2, 3]);
  const originalToDisplayLabel = {};
  shuffledIdx.forEach((origIdx, displayIdx) => {
    originalToDisplayLabel[OPTION_LABELS[origIdx]] = OPTION_LABELS[displayIdx];
  });

  shuffledIdx.forEach((origIdx, displayIdx) => {
    const btn = document.createElement('button');
    const box = document.createElement('span');
    const text = document.createElement('span');
    const label = OPTION_LABELS[displayIdx];

    btn.className = 'option';
    btn.dataset.isCorrect = (origIdx === q.c) ? '1' : '0';
    box.className = 'option-box';
    box.dataset.label = label;
    formatOptionMarker(box, false);
    text.textContent = formatOptionText(q.o[origIdx], originalToDisplayLabel);
    btn.appendChild(box);
    btn.appendChild(text);
    btn.addEventListener('click', () => selectAnswer(btn));
    container.appendChild(btn);
  });
}

// ─── Select Answer ────────────────────────────────
function selectAnswer(clickedBtn) {
  if (answered) return;

  if (selectedOptionBtn) {
    selectedOptionBtn.classList.remove('selected');
    const previousBox = selectedOptionBtn.querySelector('.option-box');
    if (previousBox) formatOptionMarker(previousBox, false);
  }

  selectedOptionBtn = clickedBtn;
  clickedBtn.classList.add('selected');
  const clickedBox = clickedBtn.querySelector('.option-box');
  if (clickedBox) formatOptionMarker(clickedBox, true);

  const nextBtn = document.getElementById('nextBtn');
  nextBtn.style.display = 'flex';
  nextBtn.innerHTML = '$ відповісти <span>→</span>';
}

function submitAnswer() {
  if (answered || !selectedOptionBtn) return;
  answered = true;

  document.querySelectorAll('.option').forEach(b => b.disabled = true);

  const q = questions[current];
  const fb = document.getElementById('feedbackBox');
  const isCorrect = selectedOptionBtn.dataset.isCorrect === '1';
  if (isCorrect) {
    correctCount++;
    selectedOptionBtn.classList.add('correct');
    fb.className = 'feedback correct';
    fb.textContent = q.e;
  } else {
    wrongCount++;
    wrongQuestions.push(q);
    selectedOptionBtn.classList.add('wrong');
    document.querySelectorAll('.option').forEach(b => {
      if (b.dataset.isCorrect === '1') {
        b.classList.add('show-answer');
        const box = b.querySelector('.option-box');
        if (box) formatOptionMarker(box, true);
      }
    });
    fb.className = 'feedback wrong';
    fb.textContent = q.e;
  }
  updateMistakeBank(q._topicKey, q._idx, isCorrect);
  fb.style.display = 'block';
  updateHeader();

  const nextBtn = document.getElementById('nextBtn');
  nextBtn.style.display = 'flex';
  nextBtn.innerHTML = current < questions.length - 1
    ? '$ наступне <span>→</span>'
    : '$ переглянути результат <span>→</span>';
}

// ─── Result Badge (shields.io-style CI badge) ─────
function getResultBadge(pct) {
  let grade, pass;
  if (pct === 100) { grade = 'A+'; pass = true; }
  else if (pct >= 90) { grade = 'A'; pass = true; }
  else if (pct >= 80) { grade = 'B'; pass = true; }
  else if (pct >= 75) { grade = 'C'; pass = true; }
  else if (pct >= 60) { grade = 'D'; pass = false; }
  else { grade = 'F'; pass = false; }
  const status = pass ? 'PASSED' : 'FAILED';
  return `<span class="b-label">qa-quiz</span><span class="b-value ${pass ? 'pass' : 'fail'}">${status} · ${grade}</span>`;
}

function goHome() {
  document.getElementById('resultsScreen').style.display = 'none';
  document.getElementById('quizScreen').style.display = 'none';
  document.getElementById('headerMeta').style.display = 'none';
  document.getElementById('logoTopic').textContent = 'study --menu';
  const finishBtn = document.getElementById('finishBtn');
  finishBtn.textContent = 'Фініш';
  finishBtn.onclick = null;
  buildTopicCards();
  renderTopicPicker();
  document.getElementById('startScreen').style.display = 'flex';
}

// ─── Show Results ─────────────────────────────────
function showResults(finishedEarly) {
  document.getElementById('quizScreen').style.display = 'none';
  document.getElementById('resultsScreen').style.display = 'flex';

  const finishBtn = document.getElementById('finishBtn');
  finishBtn.textContent = '← Головна';
  finishBtn.onclick = goHome;

  const done = finishedEarly ? current : current + 1;
  const pct = done > 0 ? Math.round(correctCount / done * 100) : 0;

  const resultPercentEl = document.getElementById('resultPercent');
  resultPercentEl.textContent = pct + '%';
  resultPercentEl.style.color = pct >= 75 ? 'var(--correct)' : 'var(--danger)';

  document.getElementById('resultBadge').innerHTML = getResultBadge(pct);

  document.getElementById('resCorrect').textContent = correctCount;
  document.getElementById('resWrong').textContent = wrongCount;
  document.getElementById('resTotal').textContent = done;
  document.getElementById('resSkipped').textContent = questions.length - done;
  document.getElementById('progressFill').style.width = '100%';

  const topicLabel = currentTopic === 'mock' ? 'Mock Interview'
    : currentTopic === 'mistakes' ? 'Банк помилок'
    : TOPICS[currentTopic].label;
  let msg = '';
  if (pct === 100) msg = 'Ідеальний результат — ' + topicLabel + ' від зубів відлітає!';
  else if (pct >= 80) msg = 'Відмінно, тема добре засвоєна.';
  else if (pct >= 60) msg = 'Непогано, але є що повторити.';
  else if (pct >= 40) msg = 'Варто переглянути документацію.';
  else msg = 'Рекомендуємо детально вивчити тему.';
  document.getElementById('resultMsg').textContent = msg;
  saveStats(currentTopic, pct);

  const reviewEl = document.getElementById('wrongReview');
  const listEl = document.getElementById('wrongList');
  listEl.innerHTML = '';

  if (wrongQuestions.length > 0) {
    wrongQuestions.forEach((q, i) => {
      const correctAnswer = q.o[q.c];
      const item = document.createElement('div');
      item.className = 'wrong-item';
      item.innerHTML = `
        <div class="wrong-item-num">FAIL #${i + 1}</div>
        <div class="wrong-item-body">
          <div class="wrong-item-q">${q.q}</div>
          <div class="wrong-item-answer">
            <span class="wrong-item-answer-label">Правильна відповідь:</span>
            <span class="wrong-item-answer-text">${correctAnswer}</span>
          </div>
          <div class="wrong-item-exp">${q.e}</div>
        </div>
      `;
      listEl.appendChild(item);
    });
    reviewEl.style.display = 'block';
  } else {
    reviewEl.style.display = 'none';
  }
}

// ─── Event Listeners ──────────────────────────────
document.getElementById('nextBtn').addEventListener('click', () => {
  if (!answered) {
    submitAnswer();
    return;
  }

  if (current < questions.length - 1) { current++; renderQuestion(); }
  else showResults(false);
});

document.getElementById('finishBtn').addEventListener('click', () => {
  showResults(!answered);
});

document.getElementById('restartBtn').addEventListener('click', goHome);

// ─── Feedback Modal ───────────────────────────────
(function () {
  const modal   = document.getElementById('feedbackModal');
  const openBtn = document.getElementById('feedbackOpenBtn');
  const closeBtn= document.getElementById('feedbackCloseBtn');
  const stars   = document.querySelectorAll('#starsContainer .star');
  const textarea= document.getElementById('feedbackText');
  const submit  = document.getElementById('feedbackSubmitBtn');
  let rating = 0;

  function openModal() { modal.style.display = 'flex'; }
  function closeModal() { modal.style.display = 'none'; }

  openBtn.addEventListener('click', openModal);
  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });

  function setStars(n) {
    stars.forEach(s => {
      s.classList.toggle('active', parseInt(s.dataset.v) <= n);
    });
    rating = n;
  }

  stars.forEach(s => {
    s.addEventListener('mouseenter', () => setStars(parseInt(s.dataset.v)));
    s.addEventListener('click',      () => setStars(parseInt(s.dataset.v)));
  });
  document.getElementById('starsContainer').addEventListener('mouseleave', () => setStars(rating));

  submit.addEventListener('click', () => {
    const stars_label = rating ? `${rating}/5 зірок` : 'без оцінки';
    const comment = textarea.value.trim();
    const body = encodeURIComponent(`Оцінка: ${stars_label}\n\n${comment || '(без коментаря)'}`);
    window.location.href = `mailto:y.myzuka@gmail.com?subject=${encodeURIComponent('QA Quiz — відгук')}&body=${body}`;
    closeModal();
  });
})();

// ─── Init ─────────────────────────────────────────
buildTopicCards();
renderTopicPicker();
trackStandaloneOpen();
