window.addEventListener("DOMContentLoaded", function() {
    //获取元素
    let tabs=document.querySelectorAll("#course .tabs p")
    let tabs_items=document.querySelectorAll("#course .tabs div")
    let movetab=document.querySelectorAll("#college .tabs span")
    let moveblck=document.querySelectorAll("#college .cons div")

    // 获取页面主内容
    let banner=document.querySelector("#history")
    let college=document.querySelector("#college")
    let achievemen=document.querySelector("#achievement")
    let course=document.querySelector("#course")

    // 获取导航链接
    let linkBanner = document.querySelector("#link-banner");
    let linkCollege = document.querySelector("#link-college");
    let linkAchievement = document.querySelector("#link-achievement");
    let linkCourse = document.querySelector("#link-course");

    //返回顶部
    let top=document.getElementById("top")

    // 实现tab栏的切换
    tabs.forEach((item,i)=>{
        tabs[i].addEventListener("click", event=>{
            tabs_items[i].classList.toggle("item");
        })
    })

    // 实现鼠标移动切换tab栏
    movetab.forEach((item,i)=>{
        item.addEventListener("mousemove", ()=>{
            movetab.forEach(event=>event.classList.remove("item"));
            moveblck.forEach(event=>event.classList.remove("black"))
            item.classList.add("item");
            moveblck[i].classList.add("black");
        })
    })


    //实现返回顶部
    window.addEventListener("scroll", event=>{
        if (document.documentElement.scrollTop>=200||document.body.scrollTop>=200){
            top.style.display="block";
        }else{
            top.style.display="none";
        }
    })

    // 实现平滑滚动
    top.addEventListener("click", event=>{
        const time=()=>{
            const scoTop=document.documentElement.scrollTop||document.body.scrollTop;
            if (scoTop>0){
                window.scrollTo(0,scoTop-scoTop/8);
                requestAnimationFrame(time)
            }
        }
        time();
    })


// 添加点击事件，滚动到对应内容
    linkBanner.addEventListener("click", (event) => {
        event.preventDefault(); // 阻止默认跳转行为
        banner.scrollIntoView({ behavior: "smooth" }); // 平滑滚动到 Banner
    });

    linkCollege.addEventListener("click", (event) => {
        event.preventDefault();
        college.scrollIntoView({ behavior: "smooth" });
    });

    linkAchievement.addEventListener("click", (event) => {
        event.preventDefault();
        achievement.scrollIntoView({ behavior: "smooth" });
    });

    linkCourse.addEventListener("click", (event) => {
        event.preventDefault();
        course.scrollIntoView({ behavior: "smooth" });
    });
})