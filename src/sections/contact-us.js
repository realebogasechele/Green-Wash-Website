/** @jsx jsx */
import { jsx } from "theme-ui";
import { Alert, Box, Button, Grid, Input, Text, Textarea } from "@theme-ui/components";
import SectionHeader from "components/section-header";
import { validCellNum, validEmail, validName, validRating } from "utility/Regex";

export default function ContactUs() {
  const queryHandler = (e) => {
    e.preventDefault();
    var name = document.getElementById("name").value;
    var surname = document.getElementById("surname").value;
    var email = document.getElementById("email").value;
    var cellNo = document.getElementById("cellNo").value;
    var query = document.getElementById("query").value;

    if(name === '' || surname === '' || email === '' || cellNo === '' || query === ''){
      alert('Fields must not be empty.');
    }else if(!validName.test(name)){
      alert('Invalid Name.');
    }else if(!validName.test(surname)){
      alert('Invalid Surname.');
    }else if(!validEmail.test(email)){
      alert('Invalid Email.');
    }else if(!validCellNum.test(cellNo)){
      alert('Invalid Cell Number');
    }else{
      alert('Valid');
    }
  };
  const testimonialHandler = (e) => {
    e.preventDefault();
    var name = document.getElementById("name2").value;
    var surname = document.getElementById("surname2").value;
    var rating = document.getElementById("rating").value;
    var handle = document.getElementById("handle").value;
    var title = document.getElementById("title").value;
    var description = document.getElementById("description").value;

    if (name === '' || surname === '' || cellNo === '' || title === '' || description === ''){
      alert('Fields must not be empty.');
    }else if(!validName.test(name)){
      alert('Invalid Name.');
    }else if(!validName.test(surname)){
      alert('Invalid Surname.');
    }else if(!validRating.test(rating)){
      alert('Invalid Rating only numbers between 1 - 5 allowed.')
    }else if(!validName.test(title)){
      alert('Invalid Title.');
    }else if(!validName.test(description)){
      alert('Invalid Description.')
    }
    else{
      alert('Valid');
    }
  };

  return (
    <section id="contactUs" sx={{ variant: "section.contactUs" }}>
      <SectionHeader
        slogan="Contact Us"
        title="Having Trouble With Anything ?"
      />
      <Text as="p" sx={styles.text}>
        Please fill in the following fields if you have any queries or issues
      </Text>
      <Box as="form" sx={styles.form} onSubmit={(e) => e.preventDefault()}>
        <Grid sx={styles.grid}>
          <Input name="name" id="name" placeholder="Name" />
          <Input name="surname" id="surname" placeholder="Surname" />
          <Input name="email" id="email" placeholder="Email" />
          <Input name="cellNo" id="cellNo" placeholder="Cell Number" />
        </Grid>
        <Textarea name="query" id='query' placeholder="Query" sx={styles.area} />
        <Button variant="primary" className={styles.button} onClick={(e) => e.preventDefault(), queryHandler}>
          Submit
        </Button>
      </Box>
      <Box sx={styles.box}>
        <SectionHeader
          slogan="Leave A Review"
          title="Do You Enjoy Using Our Products ?"
          sx={{ variant: "sectionHeader" }}
        />
        <Box as="form" sx={styles.form} onSubmit={(e) => e.preventDefault()}>
          <Grid sx={styles.grid}>
            <Input name="name" id="name2" placeholder="Name" />
            <Input name="surnname" id="surname2" placeholder="Surname" />
            <Input
              name="handle"
              id="handle"
              placeholder="Social Media Handle (eg. @johndoe)"
            />
            <Input name="cellNo" id="rating" placeholder="Rating" />
          </Grid>
          <Input name="title" id="title" placeholder="Title" sx={styles.area} />
          <Textarea
            name="description"
            id="description"
            placeholder="Description"
            sx={styles.area}
          />
          <Button variant="primary" type="submit" onClick={(e) => e.preventDefault(), testimonialHandler}>
            Submit
          </Button>
        </Box>
      </Box>
    </section>
  );
}

const styles = {
  form: {
    ml: [6, null, 6, 6],
    pl: [null, 1, null, 2],
    pr: [null, 3, null, 2],
    mr: [5, null, 5, 5],
  },
  text: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontSize: ["16px", null, "18px", "20px"],
    color: "grey",
    mt: [-5, null, 0, -5],
    ml: ["30px", null, 6, 8],
    mr: [5, null, 6, 8],
    pb: [5, null, null, 4],
  },
  input: {
    ml: [6, null, 6, 6],
    pl: [null, 1, null, 2],
    pr: [null, 3, null, 2],
    mr: [5, null, 5, 5],
    color: "#28A5FF",
    "&:focus": {
      bg: "red",
    },
  },
  grid: {
    mt: [0, null, 3, null, 3],
    mb: [0, null, 3, null, 3],
    gridGap: [2, null, 2, null, null, "30px 35px"],
    gridTemplateColumns: [
      "repeat(2,1fr)",
      null,
      "repeat(2,1fr)",
      null,
      "repeat(2,1fr)",
    ],
  },

  area: {
    mt: [3, null, 3, null, 5],
    mb: [3, null, 3, null, 5],
    borderRadius: 8,
    borderColor: "border_color",
    height: 60,
    fontFamily: "inherit",
    "&:focus": {
      borderColor: "primary",
      boxShadow: (t) => `0 0 0 2px ${t.colors.primary}`,
      outline: "none",
    },
  },
  box:{
      pt:[7, 5, 6, null, 7],
      pb:[7, 5, -6, null, -7]
  }
};
