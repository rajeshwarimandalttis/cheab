$(document).ready(function(){

    //On Change of First Ingredient
    $('#first_radio input[type=radio]').change(function(){
        $('.result').html('');
        let radio_val = $(this).val();
        let desc = $('.first_desc');
        switch (radio_val) {
            case "01": desc.html("Sodium is a chemical element with the symbol Na and atomic number 11. It is a soft, silvery-white, highly reactive metal.");break;
            case "02": desc.html("Potassium is a chemical element with the symbol K and atomic number 19. Potassium is a silvery-white metal that is soft enough to be cut with a knife with little force.");break;
            case "03": desc.html("Magnesium is a chemical element with the symbol Mg and atomic number 12. It is a shiny gray solid which bears a close physical resemblance to the other five elements in the second column.");break;
        }
    })

    //On Change of First Ingredient
    $('#second_radio input[type=radio]').change(function(){
        $('.result').html('');
        let radio_val = $(this).val();
        let desc = $('.second_desc');
        switch (radio_val) {
            case "01": desc.html("Hydroxide is a diatomic anion with chemical formula OH⁻. It consists of an oxygen and hydrogen atom held together by a single covalent bond, and carries a negative electric charge.");break;
            case "02": desc.html("Chlorine is a chemical element with the symbol Cl and atomic number 17. The second-lightest of the halogens, it appears between fluorine and bromine in the periodic table and its properties are mostly intermediate between them.");break;
            case "03": desc.html("A carbonate is a salt of carbonic acid, characterized by the presence of the carbonate ion, a polyatomic ion with the formula of CO²⁻₃");break;
        }
    })

    $("#submit-btn").click(function(){
        let ing1 = $('input[name=first_in]:checked').val();
        let ing2 = $('input[name=second_in]:checked').val();

        if(!ing1 || !ing2) {
            alert("Please select both the Ingredients to start the reaction...")
        }
        else {
            let img_src = "./images/"+ing1+ing2+".jpg";
            let title = "";
            let desc = "";
            switch(ing1) {
                case "01":
                    switch (ing2) {
                        case "01":
                            title = "Sodium hydroxide - NaOH";
                            desc = "Sodium hydroxide, also known as lye and caustic soda, is an inorganic compound with the formula NaOH. It is a white solid ionic compound consisting of sodium cations Na⁺ and hydroxide anions OH⁻";
                            break;
                        case "02":
                            title = "Sodium chloride - NaCl";
                            desc = "Sodium chloride, commonly known as salt, is an ionic compound with the chemical formula NaCl, representing a 1:1 ratio of sodium and chloride ions.";
                            break;
                        case "03":
                            title = "Sodium carbonate - Na₂CO₃·10H₂O";
                            desc = "Sodium carbonate, Na₂CO₃·10H₂O, is the inorganic compound with the formula Na₂CO₃ and its various hydrates. All forms are white, odourless, water-soluble salts that yield moderately alkaline solutions in water. Historically, it was extracted from the ashes of plants growing in sodium-rich soils.";
                            break;
                    }
                    break;
                case "02":
                    switch (ing2) {
                        case "01":
                            title = "Potassium hydroxide - KOH";
                            desc = "Potassium hydroxide is an inorganic compound with the formula KOH, and is commonly called caustic potash. Along with sodium hydroxide, KOH is a prototypical strong base. It has many industrial and niche applications, most of which exploit its caustic nature and its reactivity toward acids.";
                            break;
                        case "02":
                            title = "Potassium chloride - KCl";
                            desc = "Potassium chloride is a metal halide salt composed of potassium and chlorine. It is odorless and has a white or colorless vitreous crystal appearance. The solid dissolves readily in water, and its solutions have a salt-like taste. Potassium chloride can be obtained from ancient dried lake deposits.";
                            break;
                        case "03":
                            title = "Potassium carbonate - K₂CO₃";
                            desc = "Potassium carbonate is the inorganic compound with the formula K₂CO₃. It is a white salt, which is soluble in water. It is deliquescent, often appearing as a damp or wet solid. Potassium carbonate is mainly used in the production of soap and glass.";
                            break;
                    }
                    break;
                case "03":
                    switch (ing2) {
                        case "01":
                            title = "Magnesium hydroxide - Mg(OH)₂";
                            desc = "Magnesium hydroxide is the inorganic compound with the chemical formula Mg(OH)₂. It occurs in nature as the mineral brucite. It is a white solid with low solubility in water. Magnesium hydroxide is a common component of antacids, such as milk of magnesia.";
                            break;
                        case "02":
                            title = "Magnesium chloride - MgCl₂";
                            desc = "Magnesium chloride is the name for the chemical compound with the formula MgCl₂ and its various hydrates MgCl₂ₓ. Anhydrous MgCl₂ contains 25.5% elemental magnesium by mass. These salts are typical ionic halides, being highly soluble in water. The hydrated magnesium chloride can be extracted from brine or sea water.";
                            break;
                        case "03":
                            title = "Magnesium carbonate - MgCO₃";
                            desc = "Magnesium carbonate, Mg CO₃, is an inorganic salt that is a white solid. Several hydrated and basic forms of magnesium carbonate also exist as minerals.";
                            break;
                    }
                    break;
            }
            $('.result').html(`<div class="card"> <img class="card-img-top" src="${img_src}" alt="Card image"> <div class="card-body"> <h4 class="card-title">${title}</h4> <p class="card-text">${desc}</p> </div> </div>`);
            $("html, body").animate({ scrollTop: $(document).height() }, 50);
        }

    });
});