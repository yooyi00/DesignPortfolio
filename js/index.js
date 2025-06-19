$(function () {
  Splitting();
  gsap.registerPlugin(ScrollTrigger);

  /*gsap 공통*/
  /*project*/
  gsap.utils.toArray(".project").forEach((project, i) => {
    gsap.timeline({
      scrollTrigger: {
        trigger: project,
        start: "top top",
        pin: true,
        pinSpacing: false,
        pinSpacing: i === 2,
        true: false,
        //markers: true,
      },
    });
  });

  /*기획서 바로가기 클릭 시 모달창 구현*/
  $(".project .inner .cloneWrap .right .buttons li:last-child").on(
    "click",
    function () {
      $(".project.seoul .view").css({ display: "block" });
    }
  );

  $(".project.seoul .view .close").on("click", function () {
    $(".project.seoul .view").css({ display: "none" });
  });

  /*design li클릭 시 이미지 재배치*/
  $(".design .inner .imgWrap").on("click", function () {
    $(this).addClass("on");
  });

  /*design hover 시 뜨는 목업 보러가기 클릭 시 모달창*/
  $(".design .inner .imgWrap .ds01 .ds_txt .button").on("click", function () {
    $(".design .inner .view .popup").css({ display: "flex" });
  });

  $(".design .inner .imgWrap .ds02 .ds_txt .button").on("click", function () {
    $(".design .inner .view .coupon").css({ display: "flex" });
  });

  $(".design .inner .imgWrap .ds03 .ds_txt .button").on("click", function () {
    $(".design .inner .view .spring").css({ display: "flex" });
  });

  $(".design .inner .imgWrap .ds04 .ds_txt .button").on("click", function () {
    $(".design .inner .view .bigsale").css({ display: "flex" });
  });

  $(".design .inner .imgWrap .ds05 .ds_txt .button").on("click", function () {
    $(".design .inner .view .flea").css({ display: "flex" });
  });

  $(".design .inner .imgWrap .ds06 .ds_txt .button").on("click", function () {
    $(".design .inner .view .sale").css({ display: "flex" });
  });

  $(".design .inner .view .close").on("click", function () {
    $(".design .inner .view li").css({ display: "none" });
  });

  /*bar 클릭 시 modal_menu 보이기*/
  $("header .menu_bar").on("click", function () {
    $("header .modal").css({ display: "block" });
  });

  /*close 클릭 시 modal_menu 숨기기*/
  $("header .modal .close").on("click", function () {
    $("header .modal").css({ display: "none" });
  });

  /*design_draft setinterval*/
  $(document).ready(function () {
    let current = 0;
    const slides = $(".draftWrap > ul");
    const total = slides.length;

    slides.hide().css("opacity", 0);
    slides.eq(current).css({ display: "flex" }).animate({ opacity: 1 }, 500);

    function goToSlide(index) {
      slides.eq(current).animate({ opacity: 0 }, 500, function () {
        $(this).css("display", "none");
      });

      slides.eq(index).css({ display: "flex" }).animate({ opacity: 1 }, 500);

      current = index;
    }

    let slideInterval = setInterval(function () {
      let next = (current + 1) % total;
      goToSlide(next);
    }, 5000);

    $(".arrows .prev").click(function () {
      clearInterval(slideInterval);
      let prev = (current - 1 + total) % total;
      goToSlide(prev);
    });

    $(".arrows .next").click(function () {
      clearInterval(slideInterval);
      let next = (current + 1) % total;
      goToSlide(next);
    });
  });

  /*design_draft 자동 스크롤*/
  $(window).on("scroll", function () {
    let scrollTop = $(window).scrollTop();
    let draftTop = $(".draft").offset().top;
    if (scrollTop >= draftTop) {
      $(".draft .inner .draftWrap .hybe .right .hybe_ds").addClass("active");
    } else {
      $(".draft .inner .draftWrap .hybe .right .hybe_ds").removeClass("active");
    }

    if (scrollTop >= draftTop) {
      $(".draft .inner .draftWrap .kfc .right .kfc_ds").addClass("active");
    } else {
      $(".draft .inner .draftWrap .kfc .right .kfc_ds").removeClass("active");
    }
  });

  /*contact*/
  (function () {
    emailjs.init("nWpyzcMr0rY_2zaiu");

    window.sendEmail = function () {
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();
      const responseEl = document.getElementById("response-message");

      if (!name || !email || !message) {
        responseEl.innerText = "모든 항목을 입력해주세요.";
        responseEl.className = "message error-message";
        return;
      }

      const templateParams = {
        from_name: name,
        from_email: email,
        message: message,
      };

      emailjs.send("yooyi00", "template_to84i7f", templateParams).then(
        function () {
          responseEl.innerText = "이메일이 성공적으로 전송되었습니다!";
          responseEl.className = "message success-message";
        },
        function (error) {
          responseEl.innerText = "이메일 전송 중 오류가 발생했습니다.";
          responseEl.className = "message error-message";
          console.error("EmailJS error:", error);
        }
      );
    };
  })();

  /*gsap 반응형*/
  ScrollTrigger.matchMedia({
    /*pc*/
    "(min-width:1220px)": function () {
      /*intro*/
      gsap.fromTo(
        ".intro .intro_inner .right .textBox",
        { y: -500 },
        { y: 0, duration: 0.5, ease: "power0" }
      );

      let t1 = gsap.timeline();
      t1.fromTo(
        ".intro .intro_inner .right .info li:first-child",
        { y: 500 },
        { y: 0, duration: 0.5, ease: "power0" },
        0.2
      );
      t1.fromTo(
        ".intro .intro_inner .right .info li:nth-child(2)",
        { y: 500 },
        { y: 0, duration: 0.5, ease: "power0" },
        0.4
      );
      t1.fromTo(
        ".intro .intro_inner .right .info li:nth-child(3)",
        { y: 500 },
        { y: 0, duration: 0.5, ease: "power0" },
        0.6
      );
      t1.fromTo(
        ".intro .intro_inner .right .info li:nth-child(4)",
        { y: 500 },
        { y: 0, duration: 0.5, ease: "power0" },
        0.8
      );
      t1.fromTo(
        ".intro .intro_inner .right .info li:last-child",
        { y: 500 },
        { y: 0, duration: 0.5, ease: "power0" },
        1
      );

      /*about*/
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".about",
            start: "top 70%",
            end: "60% 70%",
            scrub: 2,
            //markers: true,
          },
        })
        .fromTo(
          ".about .about_inner .con .left",
          { y: 500 },
          { y: 0, duration: 10 }
        )
        .fromTo(
          ".about .about_inner .con .center",
          { y: 500 },
          { y: 0, duration: 10 }
        )
        .fromTo(
          ".about .about_inner .con .right",
          { y: 500 },
          { y: 0, duration: 10 }
        );

      /*design*/
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".design",
            start: "30% 50%",
            end: "50% 60%",
            scrub: 2,
            //markers: true,
          },
        })
        .fromTo(".design li.ds01", { y: 400 }, { y: -50 }, 1)
        .fromTo(".design li.ds02", { y: 400 }, { y: -50 }, 1.2)
        .fromTo(".design li.ds03", { y: 400 }, { y: -50 }, 1.4)
        .fromTo(".design li.ds04", { y: 400 }, { y: -50 }, 1.6)
        .fromTo(".design li.ds05", { y: 400 }, { y: -50 }, 1.8)
        .fromTo(".design li.ds06", { y: 400 }, { y: -50 }, 2);

      /*contact*/
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".contact",
            start: "top 70%",
            end: "30% 70%",
            scrub: 2,
            //markers: true,
          },
        })
        .fromTo(".contact .inner .con h2", { y: 200 }, { y: 0 })
        .fromTo(".contact .inner .con .txtBox", { y: 200 }, { y: 0 })
        .fromTo(
          ".contact .inner .con .addressWrap .contact-form",
          { y: 200 },
          { y: 0 }
        )
        .fromTo(
          ".contact .inner .con .icons li:first-child",
          { y: 200 },
          { y: 0 },
          1
        )
        .fromTo(
          ".contact .inner .con .icons li:nth-child(2)",
          { y: 200 },
          { y: 0 },
          1.2
        )
        .fromTo(
          ".contact .inner .con .icons li:last-child",
          { y: 200 },
          { y: 0 },
          1.4
        );
    },

    /*태블릿*/
    "(max-width:1219px)": function () {
      /*intro*/
      gsap.fromTo(
        ".intro .intro_inner .right .textBox",
        { y: -500 },
        { y: 0, duration: 0.5, ease: "power0" }
      );

      let t1 = gsap.timeline();
      t1.fromTo(
        ".intro .intro_inner .right .info li:first-child",
        { y: 500 },
        { y: 0, duration: 0.5, ease: "power0" },
        0.2
      );
      t1.fromTo(
        ".intro .intro_inner .right .info li:nth-child(2)",
        { y: 500 },
        { y: 0, duration: 0.5, ease: "power0" },
        0.4
      );
      t1.fromTo(
        ".intro .intro_inner .right .info li:nth-child(3)",
        { y: 500 },
        { y: 0, duration: 0.5, ease: "power0" },
        0.6
      );
      t1.fromTo(
        ".intro .intro_inner .right .info li:nth-child(4)",
        { y: 500 },
        { y: 0, duration: 0.5, ease: "power0" },
        0.8
      );
      t1.fromTo(
        ".intro .intro_inner .right .info li:last-child",
        { y: 500 },
        { y: 0, duration: 0.5, ease: "power0" },
        1
      );

      /*about*/
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".about",
            start: "top 70%",
            end: "60% 70%",
            scrub: 2,
            //markers: true,
          },
        })
        .fromTo(
          ".about .about_inner .con .left",
          { y: 500 },
          { y: 0, duration: 10 }
        )
        .fromTo(
          ".about .about_inner .con .center",
          { y: 500 },
          { y: 0, duration: 10 }
        )
        .fromTo(
          ".about .about_inner .con .right",
          { y: 500 },
          { y: 0, duration: 10 }
        );

      /*design*/
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".design",
            start: "30% 50%",
            end: "50% 60%",
            scrub: 2,
            //markers: true,
          },
        })
        .fromTo(".design li.ds01", { y: 400 }, { y: -50 }, 1)
        .fromTo(".design li.ds02", { y: 400 }, { y: -50 }, 1.2)
        .fromTo(".design li.ds03", { y: 400 }, { y: -50 }, 1.4)
        .fromTo(".design li.ds04", { y: 400 }, { y: -50 }, 1.6)
        .fromTo(".design li.ds05", { y: 400 }, { y: -50 }, 1.8)
        .fromTo(".design li.ds06", { y: 400 }, { y: -50 }, 2);

      /*contact*/
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".contact",
            start: "top 70%",
            end: "30% 70%",
            scrub: 2,
            //markers: true,
          },
        })
        .fromTo(".contact .inner .con h2", { y: 200 }, { y: 0 })
        .fromTo(".contact .inner .con .txtBox", { y: 200 }, { y: 0 })
        .fromTo(
          ".contact .inner .con .addressWrap .contact-form",
          { y: 200 },
          { y: 0 }
        )
        .fromTo(
          ".contact .inner .con .icons li:first-child",
          { y: 200 },
          { y: 0 },
          1
        )
        .fromTo(
          ".contact .inner .con .icons li:nth-child(2)",
          { y: 200 },
          { y: 0 },
          1.2
        )
        .fromTo(
          ".contact .inner .con .icons li:last-child",
          { y: 200 },
          { y: 0 },
          1.4
        );
    },

    /*모바일*/
    "(max-width:599px)": function () {
      /*intro*/
      gsap.fromTo(
        ".intro .intro_inner .right .textBox",
        { y: 500 },
        { y: 0, duration: 0.5, ease: "power0" }
      );

      let t1 = gsap.timeline();
      t1.fromTo(
        ".intro .intro_inner .right .info li:first-child",
        { y: 500 },
        { y: 0, duration: 0.5, ease: "power0" },
        0.2
      );
      t1.fromTo(
        ".intro .intro_inner .right .info li:nth-child(2)",
        { y: 500 },
        { y: 0, duration: 0.5, ease: "power0" },
        0.4
      );
      t1.fromTo(
        ".intro .intro_inner .right .info li:nth-child(3)",
        { y: 500 },
        { y: 0, duration: 0.5, ease: "power0" },
        0.6
      );
      t1.fromTo(
        ".intro .intro_inner .right .info li:nth-child(4)",
        { y: 500 },
        { y: 0, duration: 0.5, ease: "power0" },
        0.8
      );
      t1.fromTo(
        ".intro .intro_inner .right .info li:last-child",
        { y: 500 },
        { y: 0, duration: 0.5, ease: "power0" },
        1
      );

      /*about*/
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".about",
            start: "top 70%",
            end: "60% 70%",
            scrub: 2,
            //markers: true,
          },
        })
        .fromTo(
          ".about .about_inner .con .left",
          { y: 500 },
          { y: 0, duration: 10 }
        )
        .fromTo(
          ".about .about_inner .con .center",
          { y: 500 },
          { y: 0, duration: 10 }
        )
        .fromTo(
          ".about .about_inner .con .right",
          { y: 500 },
          { y: 0, duration: 10 }
        );

      /*design*/
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".design",
            start: "30% 50%",
            end: "50% 60%",
            scrub: 2,
            //markers: true,
          },
        })
        .fromTo(".design li.ds01", { y: 400 }, { y: -50 }, 1)
        .fromTo(".design li.ds02", { y: 400 }, { y: -50 }, 1.2)
        .fromTo(".design li.ds03", { y: 400 }, { y: -50 }, 1.4)
        .fromTo(".design li.ds04", { y: 400 }, { y: -50 }, 1.6)
        .fromTo(".design li.ds05", { y: 400 }, { y: -50 }, 1.8)
        .fromTo(".design li.ds06", { y: 400 }, { y: -50 }, 2);

      /*contact*/
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".contact",
            start: "top 70%",
            end: "30% 70%",
            scrub: 2,
            //markers: true,
          },
        })
        .fromTo(".contact .inner .con h2", { y: 200 }, { y: 0 })
        .fromTo(".contact .inner .con .txtBox", { y: 200 }, { y: 0 })
        .fromTo(
          ".contact .inner .con .addressWrap .contact-form",
          { y: 200 },
          { y: 0 }
        )
        .fromTo(
          ".contact .inner .con .icons li:first-child",
          { y: 200 },
          { y: 0 },
          1
        )
        .fromTo(
          ".contact .inner .con .icons li:nth-child(2)",
          { y: 200 },
          { y: 0 },
          1.2
        )
        .fromTo(
          ".contact .inner .con .icons li:last-child",
          { y: 200 },
          { y: 0 },
          1.4
        );
    },
  });
});
