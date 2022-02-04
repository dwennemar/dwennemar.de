import type {NextPage} from 'next'
import Link from 'next/link';
import {Grid, Link as NextLink, Spacer, Text} from '@nextui-org/react';
import PlatformChip from '../components/platform-chip';
import {faDev, faGithub, faGitlab, faLinkedinIn, faMedium, faXing} from '@fortawesome/free-brands-svg-icons';

const Home: NextPage = () => {
  return (
    <>
      <Spacer y={2}/>
      <Grid.Container gap={1} justify={"center"} css={{height: "100vh"}}>
        <Grid>
          <Text
            size={64}
            css={{
              textGradient: '315deg, $blue400 -20%, $blue500 50%',
            }}
          >
            Hey there,
          </Text>
          <Text
            size={64}
            css={{
              textGradient: '315deg, $blue400 -20%, $blue500 50%'
            }}
          >
            I&apos;m Daniel!
          </Text>
        </Grid>
      </Grid.Container>
      <Grid.Container justify={"center"}>
        <Grid xs={6} sm={4} md={2} justify={"center"}>
          <PlatformChip
            platform={"GitHub"}
            icon={faGithub}
            link={"https://github.com/dwennemar"}
          />
        </Grid>
        <Grid xs={6} sm={4} md={2} justify={"center"}>
          <PlatformChip
            platform={"GitLab"}
            icon={faGitlab}
            link={"https://gitlab.com/dwennemar"}
          />
        </Grid>
        <Grid xs={6} sm={4} md={2} justify={"center"}>
          <PlatformChip
            platform={"LinkedIn"}
            icon={faLinkedinIn}
            link={"https://www.linkedin.com/in/dwennemar"}
          />
        </Grid>
        <Grid xs={6} sm={4} md={2} justify={"center"}>
          <PlatformChip
            platform={"Xing"}
            icon={faXing}
            link={"https://www.xing.com/profile/Daniel_Wennemar"}
          />
        </Grid>
        <Grid xs={6} sm={4} md={2} justify={"center"}>
          <PlatformChip
            platform={"DEV"}
            icon={faDev}
            link={"https://dev.to/dawed"}
          />
        </Grid>
        <Grid xs={6} sm={4} md={2} justify={"center"}>
          <PlatformChip
            platform={"medium"}
            icon={faMedium}
            link={"https://medium.com/@dawed"}
          />
        </Grid>
      </Grid.Container>
      <Text css={{
        display: 'flex',
        justifyContent: 'center',
        margin: '1rem 0',
      }}>
        <Link href={"/legal-notice"}>
          <NextLink>Legal Notice</NextLink>
        </Link>
      </Text>
    </>
  )
}

export default Home;
