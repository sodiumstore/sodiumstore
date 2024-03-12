import Link from 'next/link'
import Logo from '@/components/elements/Logo/Logo'
import { useLang } from '@/hooks/useLang'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import FooterLinks from './FooterLinks'
import FooterMobileLink from './FooterMobileLink'

const Footer = () => {
  const { lang, translations } = useLang()
  const isMedia950 = useMediaQuery(950)
  const isMedia640 = useMediaQuery(640)

  return (
    <footer className='footer'>
      <div className='footer__top'>
        <div className='container footer__top__container'>
          <div className='footer__logo'>
            <Logo />
          </div>
          <div className='footer__contacts'>
            <span>
              <a href='tel:+37300000000'>+37300000000</a>
            </span>
            <span>
              <a href='mailto:sodiumstore.md@gmail.com'>sodiumstore.md@gmail.com</a>
            </span>
            {isMedia950 && <FooterLinks />}
          </div>
          {!isMedia950 && <FooterLinks />}
          <ul className='list-reset footer__socials'>
            <li className='footer__socials__item'>
              <a
                href='https://t.me/sodiumstore'   
                className='footer__socials__item__link'
              />
            </li>
            <li className='footer__socials__item'>
              <a
                href='https://instagram.com/sodiumstore.md'
                className='footer__socials__item__link'
              />
            </li>
            <li className='footer__socials__item'>

            </li>
          </ul>
        </div>
      </div>
      <div className='footer__bottom'>
        <div className='container footer__bottom__container'>
          <div className='footer__copyright'>
            © 2024 {translations[lang].footer.copyright}
            <br />
            (16+)
          </div>
          <div className='footer__policy'>
            <div className='footer__policy__inner'>
              <Link href='/personal-data-policy'>
                {translations[lang].footer.policy}
              </Link>
              <Link href='/privacy-policy'>
                {translations[lang].footer.privacy}
              </Link>
            </div>
            {isMedia640 && (
              <FooterMobileLink text={translations[lang].footer.full_version} />
            )}
          </div>
          {!isMedia640 && (
            <FooterMobileLink text={translations[lang].footer.mobile_version} />
          )}
        </div>
      </div>
    </footer>
  )
}

export default Footer
