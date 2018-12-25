using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(LeafLets.Startup))]
namespace LeafLets
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
