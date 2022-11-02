const supabase = require('../supabaseClient');

exports.createUser = (user) => {
return supabase.auth.signUp(user);
}