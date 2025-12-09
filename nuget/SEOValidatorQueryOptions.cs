using System;
using System.Collections.Generic;
using System.Text;
using Newtonsoft.Json;

namespace APIVerve.API.SEOValidator
{
    /// <summary>
    /// Query options for the SEO Validator API
    /// </summary>
    public class SEOValidatorQueryOptions
    {
        /// <summary>
        /// The URL of the web page to validate the SEO metrics of
        /// </summary>
        [JsonProperty("url")]
        public string Url { get; set; }
    }
}
