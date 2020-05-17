# Fog
Repository for FOG TEAM

---

## RB "Kids" menu item hidden

### For desktop

We need to change the position of the navigation.

Steps to achieve this:
- Select the element
- Add CSS with jQuery

Example code

    $("nav_item").css("order", "-1");

### For Mobile

- We need to change the position of the navigation.
- We need to set the style of "kids" and "polarized" menu items

Steps to achieve this:
- Select the element
- Add CSS with jQuery
- Add and Reove CSS classes with jQuery
- Fix the borders and make it responsive

Example code

    $("nav_item").css("order", "-1");
    $("nav_item").css("margin", "20px");
    $("nav_item").addClass("BigButton");
    $("nav_item").removeClass("SmallButton");
    $( window ).resize( function() {
        $("nav_item").css("margin", "10px");}


https://spd-master-web.github.io/Fog/RB-Kids_menu_item/RB-Kids_menu_item.js

---
