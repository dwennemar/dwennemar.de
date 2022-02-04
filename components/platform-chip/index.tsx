import Link from 'next/link';
import {Text, Link as NextLink} from '@nextui-org/react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {IconProp} from '@fortawesome/fontawesome-svg-core';


export default function PlatformChip(props: { platform: string, icon: IconProp, link: string}) {
  return (
    <Text
      css={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "flex-start",
        alignItems: "center",
        color: '#dcdcdc',
        backgroundColor: 'none',
        padding: '.25rem .5rem',
        borderRadius: '.75rem',
        cursor: "pointer",
        '&:hover': {
          backgroundColor: "$blue500",
        }
      }}
      span
      size={15}
    >
      <FontAwesomeIcon icon={props.icon}/>
      <span>&nbsp;</span>
      <Link href={props.link} passHref>
        <NextLink css={{color: '#dcdcdc'}}>
          {props.platform}
        </NextLink>
      </Link>
    </Text>
  )
}
