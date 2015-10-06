/* global using */

using.modules["WSB.Builder"] = "src/Builder.js";

using("WSB.Builder").run(function (Builder) {
    
    var builder = new Builder();
    
    builder.start();
    
});
