require(['dojo/_base/declare'],
    function(declare){
        declare("bf.Mapping",null, { });

        /**
         * This file contains all mappings from XForms controls to concrete widget used in the browser.
         *
         * XForms control types and their properties are represented by CSS classes that are present on the
         * output of the XSLT transform (defaults to xhtml.xsl) that is applied once when initing an XForms session.
         *
         * The mapping is hold in an array and each entry consists of a triple:
         * [1] CSS 3 matcher used to identify a specific control in the rendered DOM. Please note that all CSS 3 matchers
         *     can be used as far as they are supported by Dojo query (ver. 1.7 or above). Though most of the matchers
         *     are supported there are some exceptions. If in doubt please consult the official Dojo documentation at
         *     http://dojotoolkit.org.
         * [2] the module name of a JavaScript class. This can be either a factory class that creates the control by using
         *     the third argument or a class that is used directly to provide the widgets' implementation. In the latter
         *     case the third entry in the array may be omitted.
         * [3] a descriptive string (name) that is unique in the context of the given factory.
         *
         * Note: the order of the entries in this array is significant. That means that rules that come first are also
         * applied first to the rendered DOM.
         */
        bf.Mapping.data = [
            // CONTAINER
            ['.xfGroup',            "bf/factory/FactoryContainer", "group"],
            ['.xfRepeat',           "bf/factory/FactoryContainer", "repeat"],
            ['.xfSwitch.aDefault',  "bf/factory/FactoryContainer", "switch"],
            ['.xfSwitch.bfTabContainer',"bf/factory/FactoryContainer", "tabswitch"],


            // INPUTS
            ['.xfControl',                                                "bf/XFControl"],
            ['.xfInput.xsdString .xfValue, .xfInput.xsdDefault .xfValue', "bf/factory/FactoryInput", "plain"],
            ['.xfInput.xsdBoolean > * >  .xfValue',                       "bf/factory/FactoryInput", "boolean"],
            ['.uaDesktop .xfInput.xsdDate .widgetContainer',              "bf/factory/FactoryInput", "date"],
            ['.xfInput.xsdDateTime > * > .xfValue',                       "bf/factory/FactoryInput", "tbd"],
            ['.uaMobile .xfInput.xsdDate > * >  .xfValue, .uaTablet .xfInput.xsdDate > * >  .xfValue', "bf/factory/FactoryInput", "mobileDate"],

            // SECRET
            ['.xfSecret .xfValue', "bf/factory/FactorySecret", "plain"],

            // SELECT1
            ['.xfSelect1.aMinimal .xfValue, .xfSelect1.aDefault .xfValue', "bf/factory/FactorySelect1", "minimal"],
            ['.xfSelect1.aCompact .xfValue',                               "bf/factory/FactorySelect1", "compact"],
            ['.xfSelect1.aFull .xfValue',                                  "bf/factory/FactorySelect1", "full"],

            // SELECT1
            ['.xfSelect.aMinimal .xfValue, .xfSelect.aDefault .xfValue, .xfSelect.aCompact .xfValue',   "bf/factory/FactorySelect", "minimal"],
            ['.xfSelect.aFull .xfValue',                                                                "bf/factory/FactorySelect", "full"],


            // OUTPUT
            ['.xfOutput.mediatypeText .xfValue',    "bf/factory/FactoryOutput", "text"],
            ['.xfOutput.mediatypeImage .xfValue',   "bf/factory/FactoryOutput", "image"],
            ['.xfOutput.xsdAnyURI .xfValue',        "bf/factory/FactoryOutput", "anyURI"],
            ['.xfOutput.mediatypeHtml .xfValue',    "bf/factory/FactoryOutput", "html"],

            // RANGE
            ['.xfRange .xfValue',    "bf/factory/FactoryRange", "plain"],

            // TEXTAREA
            ['.xfTextarea.mediatypeHtml .xfValue',    "bf/factory/FactoryTextarea", "html"],

            // TRIGGER
            ['.xfTrigger .xfValue',   "bf/factory/FactoryTrigger", "plain"],

            // UPLOAD
            ['.xfUpload .xfValue',    "bf/factory/FactoryUpload", "anyURI"],

            // COMMON CHILDS
            ['body.ToolTipAlert',     "bf/common/AlertToolTip"],
            ['body.InlineAlert',      "bf/common/AlertInline"]


        ];
    }
);