using System.Web;
using System.Web.Optimization;

namespace LeafLets
{
    public class BundleConfig
    {
        // 如需統合的詳細資訊，請瀏覽 https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js"));

            bundles.Add(new ScriptBundle("~/bundles/leaflet").Include(
                "~/node_modules/leaflet/dist/leaflet.js"));

            bundles.Add(new ScriptBundle("~/bundles/leafletgeosearch").Include(
                "~/node_modules/leaflet-geosearch/lib/providers/*.js"));


            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css",
                      "~/Content/font-awesome.min.css"));

            bundles.Add(new ScriptBundle("~/bundles/appscripts").Include(
                "~/appScriptsJS/*.js"));

        }
    }
}
