//------------------------------------------------------------------------------
// <auto-generated>
//    This code was generated from a template.
//
//    Manual changes to this file may cause unexpected behavior in your application.
//    Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace DataAccessLayer
{
    using System;
    using System.Collections.Generic;
    
    public partial class Token
    {
        public int id { get; set; }
        public int login_id { get; set; }
        public string AccessToken { get; set; }
        public System.DateTime CreatedAt { get; set; }
        public Nullable<System.DateTime> ExpiredAt { get; set; }
        public int userId { get; set; }
        public string type { get; set; }
    
        public virtual Login Login { get; set; }
    }
}
