$(document).ready(function() {

    /**
     * Build sidebar menu dynamically from sections and divs
     */
    $('section[id]').each(function() {
        var sectionId = $(this).attr('id');
        var sectionTitle = sectionId[0].toUpperCase() + sectionId.slice(1).replace(/-/g, ' ');
        var navItem = $('<li class="nav-item"></li>');
        var navLink = $('<a class="nav-link"></a>').attr('href', '#' + sectionId).text(sectionTitle);
        
        // find nested div elements within the section
        var nestedDivs = $(this).find('div[id]');

        if (nestedDivs.length > 0) {
            var subNav = $('<ul class="nav flex-column border-start ps-3"></ul>');

            // create sub-navigation links for nested divs
            nestedDivs.each(function() {
                var divId = $(this).attr('id');
                var divTitle = divId[0].toUpperCase() + divId.slice(1).replace(/-/g, ' ');
                var subNavItem = $('<li class="nav-item"></li>');
                var subNavLink = $('<a class="nav-link"></a>').attr('href', '#' + divId).text(divTitle);
                subNavItem.append(subNavLink);
                subNav.append(subNavItem);
            });

            navItem.append(navLink);
            navItem.append(subNav);

        } else {

            // if no nested divs found, create a regular navigation link
            navItem.append(navLink);
        }

        // append the built output
        $('#docsMenu > ul.nav').append(navItem);
    });

});