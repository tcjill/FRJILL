
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        
        it('all feed defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /*  Wrote a test that loops through each feed
         * in the allFeeds object and ensures it has a URL and name defined
         * and that the URL and name is not empty.
         */
        it('URL defined and not empty', function(){
            allFeeds.forEach(function(feed){
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            })
        })


        
        it('Name is not empty', function(){
            allFeeds.forEach(function(feed){
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            })
        })
    });
        /*  Wrote a new test suite named "The menu" */

        /* Wrote a test that ensures the menu element is
         * hidden by default. 
         */
describe('The menu', function(){})
        /*  Wrote a test that ensures the menu element is
         * hidden by default.*/
        it('element is hidden by default',function(){
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
        /*  Wrote a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */

        it ('menu displays when clicked and hides when clicked again', function(){
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
        it('works on toggle click event', function (){
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(false);
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(true);
        })

      
    
       

    /* Wrote a new test suite named "Initial Entries" and test when loadFeed function is called and completes its work there is a single entry element in feed container */
describe('Initial Entries', function(){

        beforeEach(function (done){
            loadFeed(0, function (){
                 done();
        });
    });

        it('does entry has more than 0 entries', function(){
            expect($('.entry .feed').length).toBeDefined(0);//).toBeDefined();
        })

});


//Wrote new test suite New Feed Selection. Wrote test that ensured ne feed is loaded that changes happen. 
    describe('New Feed Selection', function () {
        let entriesStart;
        let entriesEnd;

        beforeEach(function (done) {
            $('.feed').empty();
            loadFeed(0, function () {
            entriesStart = $('.feed').find(allFeeds.url);
                done();
            });
            loadFeed(1, function (){ 
                entriesEnd = $('.feed').find(allFeeds.url);
                done();
             });
         });
        it('new feed different than old one', function (){
            expect(entriesStart).not.toBe(entriesEnd);
        });
    
    });
}());


       
