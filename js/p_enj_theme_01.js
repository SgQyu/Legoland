$(function(){
    $(".sel_loc_item").click(function(){
        $(".sel_loc a ").not($(this).find("a")).removeClass("aactive")
        $(this).find("a").addClass("aactive")
    })
    $(".sel_hei_item").click(function(){
        $(".sel_hei a ").not($(this).find("a")).removeClass("aactive")
        $(this).find("a").toggleClass("aactive")
    })
    
    $("#search").click(function(){
        $(".sel_loc_item>a").removeClass("aactive");
        $(".sel_loc_item>a:eq(0)").addClass("aactive");
        $(".sel_hei_item>a").removeClass("aactive");
    })
    $(".card_body>button").each(function(){
        $(this).click(function(){
            $(".pop_up").not($(this).find(".card_body>button")).hide();
            $(this).find(".pop_up").show();
        })
    })
    //팝업 열기
    $(".card_body:eq(0)>button").click(function(){
        $(".pop_up:eq(0)").show()
    })
    $(".card_body:eq(1)>button").click(function(){
        $(".pop_up:eq(1)").show()
    })
    $(".card_body:eq(2)>button").click(function(){
        $(".pop_up:eq(2)").show()
    })
    $(".card_body:eq(3)>button").click(function(){
        $(".pop_up:eq(3)").show()
    })
    $(".card_body:eq(4)>button").click(function(){
        $(".pop_up:eq(4)").show()
    })
    $(".card_body:eq(5)>button").click(function(){
        $(".pop_up:eq(5)").show()
    })
    $(".card_body:eq(6)>button").click(function(){
        $(".pop_up:eq(6)").show()
    })
    $(".card_body:eq(7)>button").click(function(){
        $(".pop_up:eq(7)").show()
    })
    $(".card_body:eq(8)>button").click(function(){
        $(".pop_up:eq(8)").show()
    })
    $(".card_body:eq(9)>button").click(function(){
        $(".pop_up:eq(9)").show()
    })
    $(".card_body:eq(10)>button").click(function(){
        $(".pop_up:eq(10)").show()
    })
    $(".card_body:eq(11)>button").click(function(){
        $(".pop_up:eq(11)").show()
    })
    $(".card_body:eq(12)>button").click(function(){
        $(".pop_up:eq(12)").show()
    })
    $(".card_body:eq(13)>button").click(function(){
        $(".pop_up:eq(13)").show()
    })
    $(".card_body:eq(14)>button").click(function(){
        $(".pop_up:eq(14)").show()
    })
    $(".card_body:eq(15)>button").click(function(){
        $(".pop_up:eq(15)").show()
    })
    $(".card_body:eq(16)>button").click(function(){
        $(".pop_up:eq(16)").show()
    })
    $(".card_body:eq(17)>button").click(function(){
        $(".pop_up:eq(17)").show()
    })
    $(".card_body:eq(18)>button").click(function(){
        $(".pop_up:eq(18)").show()
    })
    $(".card_body:eq(19)>button").click(function(){
        $(".pop_up:eq(19)").show()
    })
    $(".card_body:eq(20)>button").click(function(){
        $(".pop_up:eq(20)").show()
    })
    $(".card_body:eq(21)>button").click(function(){
        $(".pop_up:eq(21)").show()
    })
    $(".card_body:eq(22)>button").click(function(){
        $(".pop_up:eq(22)").show()
    })
    $(".card_body:eq(23)>button").click(function(){
        $(".pop_up:eq(23)").show()
    })
    $(".card_body:eq(24)>button").click(function(){
        $(".pop_up:eq(24)").show()
    })
    $(".card_body:eq(25)>button").click(function(){
        $(".pop_up:eq(25)").show()
    })
    $(".card_body:eq(26)>button").click(function(){
        $(".pop_up:eq(26)").show()
    })
    $(".card_body:eq(27)>button").click(function(){
        $(".pop_up:eq(27)").show()
    })
    $(".card_body:eq(28)>button").click(function(){
        $(".pop_up:eq(28)").show()
    })
    $(".card_body:eq(29)>button").click(function(){
        $(".pop_up:eq(29)").show()
    })
    $(".card_body:eq(30)>button").click(function(){
        $(".pop_up:eq(30)").show()
    })
    $(".card_body:eq(31)>button").click(function(){
        $(".pop_up:eq(31)").show()
    })
    $(".card_body:eq(32)>button").click(function(){
        $(".pop_up:eq(32)").show()
    })
    $(".card_body:eq(33)>button").click(function(){
        $(".pop_up:eq(33)").show()
    })
    $(".card_body:eq(34)>button").click(function(){
        $(".pop_up:eq(34)").show()
    })
    $(".card_body:eq(35)>button").click(function(){
        $(".pop_up:eq(35)").show()
    })
    $(".card_body:eq(36)>button").click(function(){
        $(".pop_up:eq(36)").show()
    })
    $(".card_body:eq(37)>button").click(function(){
        $(".pop_up:eq(37)").show()
    })
    $(".card_body:eq(38)>button").click(function(){
        $(".pop_up:eq(38)").show()
    })
    $(".card_body:eq(39)>button").click(function(){
        $(".pop_up:eq(39)").show()
    })
    $(".card_body:eq(40)>button").click(function(){
        $(".pop_up:eq(40)").show()
    })
    // 팝업 닫기
    $(".pop_up_can>a").click(function(){
        $(".pop_up").hide()
    })
    //  팝업 외부레이어 눌러서 닫기
    $(document).mouseup(function (e) {
        var container = $(".pop_up");
        if (!container.is(e.target) && container.has(e.target).length === 0){
        container.css("display","none");
        }	
        });


    $(".sel_loc_item:eq(0)").click(function(){
        $(".brickstreet").removeClass("ad");
        $(".bricktopia").removeClass("ad");
        $(".legocastle").removeClass("ad");
        $(".legocity").removeClass("ad");
        $(".legoninjagoworld").removeClass("ad");
        $(".pirateshores").removeClass("ad");
        $(".miniland").removeClass("ad");
    })

    $(".sel_loc_item:eq(1)").click(function(){
        $(".brickstreet").removeClass("ad");
        $(".bricktopia").addClass("ad");
        $(".legocastle").addClass("ad");
        $(".legocity").addClass("ad");
        $(".legoninjagoworld").addClass("ad");
        $(".pirateshores").addClass("ad");
        $(".miniland").addClass("ad");
    })
    $(".sel_loc_item:eq(2)").click(function(){
        $(".brickstreet").addClass("ad");
        $(".bricktopia").removeClass("ad");
        $(".legocastle").addClass("ad");
        $(".legocity").addClass("ad");
        $(".legoninjagoworld").addClass("ad");
        $(".pirateshores").addClass("ad");
        $(".miniland").addClass("ad");
    })

    $(".sel_loc_item:eq(3)").click(function(){
        $(".brickstreet").addClass("ad");
        $(".bricktopia").addClass("ad");
        $(".legocastle").removeClass("ad");
        $(".legocity").addClass("ad");
        $(".legoninjagoworld").addClass("ad");
        $(".pirateshores").addClass("ad");
        $(".miniland").addClass("ad");
    })
    $(".sel_loc_item:eq(4)").click(function(){
        $(".brickstreet").addClass("ad");
        $(".bricktopia").addClass("ad");
        $(".legocastle").addClass("ad");
        $(".legocity").removeClass("ad");
        $(".legoninjagoworld").addClass("ad");
        $(".pirateshores").addClass("ad");
        $(".miniland").addClass("ad");
    })
    $(".sel_loc_item:eq(5)").click(function(){
        $(".brickstreet").addClass("ad");
        $(".bricktopia").addClass("ad");
        $(".legocastle").addClass("ad");
        $(".legocity").addClass("ad");
        $(".legoninjagoworld").removeClass("ad");
        $(".pirateshores").addClass("ad");
        $(".miniland").addClass("ad");
    })
    $(".sel_loc_item:eq(6)").click(function(){
        $(".brickstreet").addClass("ad");
        $(".bricktopia").addClass("ad");
        $(".legocastle").addClass("ad");
        $(".legocity").addClass("ad");
        $(".legoninjagoworld").addClass("ad");
        $(".pirateshores").removeClass("ad");
        $(".miniland").addClass("ad");
    })

    $(".sel_loc_item:eq(7)").click(function(){
        $(".brickstreet").addClass("ad");
        $(".bricktopia").addClass("ad");
        $(".legocastle").addClass("ad");
        $(".legocity").addClass("ad");
        $(".legoninjagoworld").addClass("ad");
        $(".pirateshores").addClass("ad");
        $(".miniland").removeClass("ad");
    })

    $(".sel_hei_item:eq(0)").click(function(){
        $(".85ride").toggleClass("dd")
        $(".90ride").removeClass("dd")
        $(".95ride").removeClass("dd")
        $(".100ride").removeClass("dd")
        $(".105ride").removeClass("dd")
        $(".115ride").removeClass("dd")
    })
    $(".sel_hei_item:eq(1)").click(function(){
        $(".85ride").removeClass("dd")
        $(".90ride").toggleClass("dd")
        $(".95ride").removeClass("dd")
        $(".100ride").removeClass("dd")
        $(".105ride").removeClass("dd")
        $(".115ride").removeClass("dd")
    })
    $(".sel_hei_item:eq(2)").click(function(){
        $(".85ride").removeClass("dd")
        $(".90ride").removeClass("dd")
        $(".95ride").toggleClass("dd")
        $(".100ride").removeClass("dd")
        $(".105ride").removeClass("dd")
        $(".115ride").removeClass("dd")
    })
    $(".sel_hei_item:eq(3)").click(function(){
        $(".85ride").removeClass("dd")
        $(".90ride").removeClass("dd")
        $(".95ride").removeClass("dd")
        $(".100ride").toggleClass("dd")
        $(".105ride").removeClass("dd")
        $(".115ride").removeClass("dd")
    })
    $(".sel_hei_item:eq(4)").click(function(){
        $(".85ride").removeClass("dd")
        $(".90ride").removeClass("dd")
        $(".95ride").removeClass("dd")
        $(".100ride").removeClass("dd")
        $(".105ride").toggleClass("dd")
        $(".115ride").removeClass("dd")
    })
    $(".sel_hei_item:eq(5)").click(function(){
        $(".85ride").removeClass("dd")
        $(".90ride").removeClass("dd")
        $(".95ride").removeClass("dd")
        $(".100ride").removeClass("dd")
        $(".105ride").removeClass("dd")
        $(".115ride").toggleClass("dd")
    })
    
})
  
