import React ,{useState} from 'react'
import Typography from '@material-ui/core/Typography';
//const [output , setOutput]=
//const [searchData, setSearchData] = useState(null);
function Dedication() {
    var elasticlunr = require('elasticlunr');
    var index = elasticlunr(function () {
        this.addField('title');
        this.addField('body');
        this.setRef('id');
    });
   

   function getSearchData(val)
   {
       console.log(index.search(val));
       index.search("Expected profit report");
   }
    var doc1 = {
        "id": 10,
        "title": "Oracle released its latest database Oracle 12g",
        "body": "Michele was special. Once you met her, you couldn't imagine a time without her. She had that unique ability to make you feel better about yourself. You liked who you were when you were with her. You missed her when she wasn't around.Her husband Joe posted an entry on face book for her birthday, October 23. When I read it I didn't think that I could do better at describing how Michele affected everyone who came in contact with her and how she approached life. With his permission I am going to share some of what was posted.When confronted with metastatic breast cancer she persevered, choosing to go out on her terms and leaving it all on the field. Rather than be weighed down by sadness, anger, or self-pity, her thoughts and actions remained selfless and positive. She was far less concerned about herself than of how her illness and premature passing would impact everyone else."
    }
    var doc2 = {
        "id": 20,
        "title": "Oracle released its profit report of 2015",
        "body": "As expected, Oracle released its profit report of 2015, during the good sales of database and hardware, Oracle's profit of 2015 reached 12.5 Billion."
    }
    index.addDoc(doc1);
    index.addDoc(doc2);
    // var output = index.search("Expected profit report");
   //console.log(output[0].ref);   
    return (
        <div >
         <div>
            <h6>
            A Deon to Michele Lombardo
            </h6>
           
            <Typography paragraph>
            Michele was special. Once you met her, you couldn't imagine a time without her. She had that unique ability to make you feel better about yourself. You liked who you were when you were with her. You missed her when she wasn't around.
            <br></br>
            </Typography>
            <Typography paragraph>
            Her husband Joe posted an entry on face book for her birthday, October 23. When I read it I didn't think that I could do better at describing how Michele affected everyone who came in contact with her and how she approached life. With his permission I am going to share some of what was posted.
            </Typography>
            <Typography paragraph>
            "When confronted with metastatic breast cancer she persevered, choosing to go out on her terms and leaving it all on the field. Rather than be weighed down by sadness, anger, or self-pity, her thoughts and actions remained selfless and positive. She was far less concerned about herself than of how her illness and premature passing would impact everyone else."
            
            </Typography>
            <Typography paragraph>
            "Not one to brag Michele rarely 'talked the talk' although she most definitely 'walked the walk' in every facet of her life. The 'Four Foot Surgeon' raised the bar higher than many of us can reach, but that doesn't mean we should not aspire to do the same. Her compassion, love, ingenuity, strength, humility and humor will forever be a part of each of us."
            </Typography>
            <Typography paragraph>
            "Akin to how she met everyone with a smile and how she always demurred any deference by refusing to drop the 'doctor card' (or for that matter, the 'cancer card') to garner any sort of accommodation, I challenge us all to live by Michele's ideals and example." Joe went on to implore us to not mourn for the loss of Michele but to celebrate her life. Enjoy music, laughter, food and good friends. For those of us who know Michele well, she had eclectic taste in music, an impeccable sense of humor, gourmet sensibilities, and anybody who knew her could call her friend.
            </Typography>
            <Typography paragraph>
            "Please, on October 23 and every day, make it count. Be sure to lend a hand to someone in need, give to a favorite charity, share your favorite Michele-related story and celebrate who she was, all that she did, and all that she continues to represent." To my very good friend Michele - I miss you every day and without your help this manual would not exist.
            </Typography>
            <Typography paragraph>
            ~ Dr. Ann Kuhn
            </Typography>
            
            
        </div>
       
        </div>

    )
}

export default Dedication
