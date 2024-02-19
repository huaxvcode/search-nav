let textInputEnable = function() {
    let elem = document.querySelector("div.text");

    // 允许 div 标签输入内容
    elem.setAttribute("contenteditable", "true");
    // 去掉输入边框
    elem.setAttribute("outline", "none");
}

let searchHead = "https://cn.bing.com/search?q=";

let search = function(s) {
    let qs = "";
    // 将所有的空格都用 %20 替换
    for (let i = 0; i < s.length; i ++) {
        if (s[i] == ' ')
            qs += "%20";
        else qs += s[i];
    }
    window.open(searchHead + qs);
}

let enterToSearch = function() {
    let elem = document.querySelector("div.text");
    // 获取键盘按下时的事件
    elem.addEventListener("keydown", (e) => {
        if (e.keyCode == 13) {
            // 阻止事件的默认行为
            search(elem.textContent);
            e.preventDefault(); // 阻止事件自动写入换行符这一行为
            elem.textContent = "";
        }
    });
    // 获取键盘松开后的事件
    // elem.addEventListener("keyup", (e) => {
    //     if (e.keyCode == 13) {
    //         e.preventDefault();
    //         elem.textContent = "";
    //     }
    // });
}

let clickToSearch = function() {
    let elem = document.querySelector("div.searchIcon");
    elem.addEventListener("click", (e) => {
        let textElem = document.querySelector("div.text");
        // 阻止事件的默认行为
        search(textElem.textContent);
        e.preventDefault(); // 阻止事件自动写入换行符这一行为
        textElem.textContent = "";
    });
}


let siteMainDisappear = () => {
    console.log("clickCnt = " + clickCnt);
    let elem = document.querySelector("div.main");
    if (clickCnt % 2 === 0) {
        elem.setAttribute("style", "height: 0px;");
    }
    else {
        elem.setAttribute("style", "height: 160px;");
    }
};

let bgcChange = function() {
    let elem = document.querySelector("div.text");
    // 判断元素是否处于聚焦状态
    elem.addEventListener("focus", () => {
        if (clickCnt % 2 == 1) {
            clickCnt ++;
            siteMainDisappear();
        }
        let elem = document.querySelector("div.bgc");
        elem.setAttribute("style", "background-color: rgba(0, 0, 0, 0.3); backdrop-filter: blur(10px);");
    });
    elem.addEventListener("click", (e) => {
        if (clickCnt % 2 == 1) {
            clickCnt ++;
            siteMainDisappear();
        }
        e.stopPropagation(); // 停止事件向下冒泡
        let elem = document.querySelector("div.bgc");
        elem.setAttribute("style", "background-color: rgba(0, 0, 0, 0.3); backdrop-filter: blur(10px);");
    });
    let bgc = document.querySelector("div.bgc");
    bgc.addEventListener("click", () => {
        let elem = document.querySelector("div.bgc");
        elem.setAttribute("style", "background-color: rgba(0, 0, 0, 0); backdrop-filter: none;");
    });
}

let clickCnt = 0;


let siteMain = function() {
    let elem = document.querySelector("div.siteIcon");
    elem.addEventListener("click", (e) => {
        clickCnt ++;
        siteMainDisappear();
    });
}

let google = function() {
    let qs = "https://www.google.com/search?q=";
    searchHead = qs;
    let elem = document.querySelector("div.siteIcon div.img");
    elem.style.backgroundImage = "url(./static/image/谷歌.png)";
}

let bing = function() {
    let qs = "https://cn.bing.com/search?q=";
    searchHead = qs;
    let elem = document.querySelector("div.siteIcon div.img");
    elem.style.backgroundImage = "url(./static/image/必应.png)";
}

let baidu = function() {
    let qs = "http://www.baidu.com/s?wd=";
    searchHead = qs;
    let elem = document.querySelector("div.siteIcon div.img");
    elem.style.backgroundImage = "url(./static/image/百度.png)";
}

let github = function() {
    let url = "https://github.com/huaxvcode/search-nav/tree/main";
    let qs = searchHead;
    searchHead = "";
    search(url);
    searchHead = qs;
}

let searchSiteChoice = function() {
    let gg = document.querySelector("div.mt1");
    let bn = document.querySelector("div.mt2");
    let bd = document.querySelector("div.mt3");
    let gh = document.querySelector("div.mt4");
    gg.addEventListener("click", (e) => {
        google();
        clickCnt ++;
        siteMainDisappear();
        console.log(searchHead);
    });
    bn.addEventListener("click", (e) => {
        bing();
        clickCnt ++;
        siteMainDisappear();
        console.log(searchHead);
    });
    bd.addEventListener("click", (e) => {
        baidu();
        clickCnt ++;
        siteMainDisappear();
        console.log(searchHead);
    });
    gh.addEventListener("click", (e) => {
        github();
        clickCnt ++;
        siteMainDisappear();
        console.log(searchHead);
    });

};

export {
    textInputEnable,
    enterToSearch,
    clickToSearch,
    bgcChange,
    siteMain,
    searchSiteChoice
}