const Sender = require('./Sender');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const $ = require('jquery');


describe('Sender', () => {
  let sender;
  const URL_API_SERVER = 'http://127.0.0.1:8000';

  beforeEach(() => {
    // Create a new instance of Sender
    sender = new Sender();

    // Create a JSDOM instance with jQuery
    const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>');
    global.document = dom.window.document;
    global.window = dom.window;
    global.$ = require('jquery')(global.window);
});

  afterEach(() => {
    // Clean up the JSDOM instance
    delete global.document;
    delete global.window;
    delete global.$;
  });

  it('A short phrase should be positive', async () => {
    const paragraph = 'The Apple stock value just increased of 5% in the last two hours.';

    // Call the sendPostRequest method
    var result = sender.sendPostRequest(paragraph)
    .then((response) => {
            res = response[0];
            label = res["label"];
            score = res["score"];

            expect(label).toBe("Positive");
            expect(score).toBeGreaterThanOrEqual(0);
            expect(score).toBeLessThanOrEqual(1);
            });
    });

    it('A short phrase should be neutral', async () => {
      const paragraph = 'Nothing new happened to the stock market in the last hours.';
  
      // Call the sendPostRequest method
      var result = sender.sendPostRequest(paragraph)
      .then((response) => {
              res = response[0];
              label = res["label"];
              score = res["score"];
  
              expect(label).toBe("Neutral");
              expect(score).toBeGreaterThanOrEqual(0);
              expect(score).toBeLessThanOrEqual(1);
              });
      });

      it('A short phrase should be negative', async () => {
        const paragraph = 'The whole stock market is fell of 20% today, a crisis similar to the Black Monday.';
    
        // Call the sendPostRequest method
        var result = sender.sendPostRequest(paragraph)
        .then((response) => {
                res = response[0];
                label = res["label"];
                score = res["score"];
    
                expect(label).toBe("Negative");
                expect(score).toBeGreaterThanOrEqual(0);
                expect(score).toBeLessThanOrEqual(1);
                });
        });

        it('A full paragraph from an article that should be positive', async () => {
          const paragraph = "Nike's fiscal fourth-quarter earnings were 66 cents per share, versus the 67 cents consensus estimate, per Refinitiv. However, revenue topped expectations. Apple — Apple shares rose 0.8%, putting the tech giant on track to reach a $3 trillion market cap. The move came after Citi set a new price target on shares at a Street-high price of $240. Carnival — Shares of the cruise line rose 3% in premarket trading after Jefferies upgraded Carnival to buy from hold. Jefferies cited changes during the first year of new CEO Josh Weinstein's tenure and improving leverage as reasons to be optimistic about the stock. Savers Value Village — Shares slipped 2% in the premarket after jumping 27% during its first day of trading Thursday.";
      
          // Call the sendPostRequest method
          var result = sender.sendPostRequest(paragraph)
          .then((response) => {
                  res = response[0];
                  label = res["label"];
                  score = res["score"];
      
                  expect(label).toBe("Positive");
                  expect(score).toBeGreaterThanOrEqual(0);
                  expect(score).toBeLessThanOrEqual(1);
                  });
          });

          it('A full paragraph from an article that should be neutral', async () => {
            const paragraph = "There are two broad categories of life insurance, and data suggests many households aren't buying the most cost-effective one. Americans bought 4.1 million term insurance policies in 2021, accounting for 40% of all individual policies purchased that year, according to the most recent data from the American Council of Life Insurers. About 6.3 million policies, or 60%, were permanent life insurance. But this doesn't seem to jibe with financial advisors' general recommendation. 'Most people just need term insurance,' said Carolyn McClanahan, a certified financial planner based in Jacksonville, Florida, and a member of CNBC's Advisor Council. More from Personal Finance:How many credit cards should you have?";
        
            // Call the sendPostRequest method
            var result = sender.sendPostRequest(paragraph)
            .then((response) => {
                    res = response[0];
                    label = res["label"];
                    score = res["score"];
        
                    expect(label).toBe("Neutral");
                    expect(score).toBeGreaterThanOrEqual(0);
                    expect(score).toBeLessThanOrEqual(1);
                    });
            });

            it('A full paragraph from an article that should be negative', async () => {
              const paragraph = "European Central Bank Chief Economist Philip Lane on Tuesday warned markets against pricing in cuts to interest rates within the next two years. Earlier this month, the ECB hiked its main rate by 25 basis points to 3.5%, making the latest in a series of increases since July 2022, as policymakers strive to reel in record-high inflation in the euro zone. Headline inflation across the bloc came in at an annual 6.1% in May, down from 7% the previous month. Core inflation, which excludes volatile food and energy prices, was 5.3% year on year. Both remained well above the ECB's 2% target.";
          
              // Call the sendPostRequest method
              var result = sender.sendPostRequest(paragraph)
              .then((response) => {
                      res = response[0];
                      label = res["label"];
                      score = res["score"];
          
                      expect(label).toBe("Negative");
                      expect(score).toBeGreaterThanOrEqual(0);
                      expect(score).toBeLessThanOrEqual(1);
                      });
              });

              it('A empty paragraph that should be neutral', async () => {
                const paragraph = " ";
            
                // Call the sendPostRequest method
                var result = sender.sendPostRequest(paragraph)
                .then((response) => {
                        res = response[0];
                        label = res["label"];
                        score = res["score"];
            
                        expect(label).toBe("Neutral");
                        expect(score).toBeGreaterThanOrEqual(0);
                        expect(score).toBeLessThanOrEqual(1);
                        });
                });

  });
