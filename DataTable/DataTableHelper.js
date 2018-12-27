({
    getTempData : function(component, event, helper) {
        var data = [
            {
                name : "Marilyn C Toothaker",
                birthday : "11/6/1948",
                city : "Arnold, Missouri(MO)",
                street : "3208 Irving Place",
                email : "laurence.co@yahoo.com",
                telephone : "636-296-2940"
            },
            {
                name : "Henry B Roten",
                birthday : "3/30/1980",
                city : "Charlotte, North Carolina(NC)",
                street : "220 Red Dog Road",
                email : "kailyn.moscis@hotmail.com",
                telephone : "704-327-7747"
            },
            {
                name : "Loren B Ward",
                birthday : "1/31/1976",
                city : "Fort Collins, Colorado(CO)",
                street : "2344 Carolina Avenue",
                email : "teie.bode2002@hotmail.com",
                telephone : "970-207-5639"
            },
            {
                name : "Cheryl R McNulty",
                birthday : "9/27/1979",
                city : "Albertville, Alabama(AL)",
                street : "2814 New Creek Road",
                email : "sherwood_donnel@hotmail.com",
                telephone : "256-891-5116"
            },
            {
                name : "Harold D Young",
                birthday : "5/9/1976",
                city : "Kansas City, Kansas(KS)",
                street : "1255 Poe Lane",
                email : "berry1986@yahoo.com",
                telephone : "913-488-9339"
            },
            {
                name : "Lu J Ciotti",
                birthday : "6/26/1991",
                city : "Irvine, California(CA)",
                street : "11372 Brannon Street",
                email : "dell_conn1982@gmail.com",
                telephone : "213-330-6071"
            },
            {
                name : "Patrick R Hull",
                birthday : "1/9/1986",
                city : "Saginaw, Michigan(MI)",
                street : "3436 Hart Ridge Road",
                email : "ruell_goldn@yahoo.com",
                telephone : "989-237-7153"
            },
            {
                name : "Gussie J Hernandez",
                birthday : "4/20/1965",
                city : "Little Rock, Arkansas(AR)",
                street : "4913 Clinton Street",
                email : "evie2014@hotmail.com",
                telephone : "501-215-7993"
            },
            {
                name : "Maria J Cunningham",
                birthday : "8/25/1984",
                city : "Athens, Texas(TX)",
                street : "2759 Alpha Avenue",
                email : "oliver_dickins@yahoo.com",
                telephone : "903-992-4795"
            },
            {
                name : "Mana B Weaver",
                birthday : "5/21/1982",
                city : " Portland, Oregon(OR)",
                street : "2951 Gateway Road",
                email : "vickie_oreil@gmail.com",
                telephone : "503-258-3224"
            }
        ];

        component.set("v.tableData", data);
    },

    switchDataFilter : function(component, event, helper) {
        var filterStatus = event.getSource().getLocalId();
        var tableData = component.get("v.tableData");

        if (filterStatus === "filterOn") {
            tableData.splice(0, 5);
            component.set("v.tableData", tableData);
        } else if (filterStatus === "filterOff") {
            helper.getTempData(component, event, helper);
        }
    }
})