import {neon} from "@neondatabase/serverless";

import "dotenv/config";

//create a SQL connection using our DB URL  basic // basic sql connection using  our db url 

export const sql = neon(process.env.DATABASE_URL);
