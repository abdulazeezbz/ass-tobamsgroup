import React, { ReactNode } from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import Button from './button';

export interface ListItemType {
  label: string;
  icon?: ReactNode;
}

export interface WebCardProps {
  title: string;
  titleColor?: string;
  mobileTitleSize?: string;
  tagText?: string;
  tagColor?: string;
  headerPosition?: 'side' | 'top';
  description: string | ReactNode;
  descriptionColor?: string;
  imageSrc: string;
  imageAlt?: string;
  imageShape?:
    | 'circle'
    | 'rounded'
    | 'square'
    | 'diagonal'
    | 'diagonal-right'
    | 'top-left'
    | string;
  imagePosition?: 'left' | 'right';
  imageClassName?: string;
  
  // Section and Card Wrapper Backgrounds
  sectionBg?: string;
  cardBg?: string; 
  cardPadding?: string;
  cardRounded?: string;
  cardBorder?: string;
  
  // Inner content box background
  contentBg?: string;
  contentPadding?: string;
  
  // List settings
  listHeading?: string;
  listHeadingColor?: string;
  listItems?: (string | ListItemType)[];
  listIcon?: ReactNode;
  listDirection?: 'vertical' | 'horizontal' | 'grid';
  listColumns?: 1 | 2 | 3;
  listItemBg?: string; 
  listItemTextColor?: string; 
  listItemClassName?: string;

  // CTA button
  ctaText?: string;
  ctaHref?: string;
  ctaOnClick?: () => void;
  ctaClassName?: string;
  ctaIcon?: ReactNode;
  ctaPosition?: 'below' | 'inside';
}

const WebCard: React.FC<WebCardProps> = ({
  title,
  titleColor = 'text-primary',
  mobileTitleSize = 'text-[20px]',
  tagText,
  tagColor = 'text-blue-600',
  headerPosition = 'side',
  description,
  descriptionColor = 'text-gray-700',
  imageSrc,
  imageAlt = 'Card Image',
  imageShape = 'circle',
  imagePosition = 'left',
  imageClassName = '',
  sectionBg = '',
  cardBg = '',
  cardPadding = 'p-6 sm:p-8 lg:p-12',
  cardRounded = 'rounded-2xl sm:rounded-3xl',
  cardBorder = '',
  contentBg = '',
  contentPadding = 'p-6 md:p-8',
  listHeading,
  listHeadingColor = 'text-primary',
  listItems = [],
  listIcon,
  listDirection = 'vertical',
  listColumns = 3,
  listItemBg = '',
  listItemTextColor = '',
  listItemClassName = '',
  ctaText,
  ctaHref,
  ctaOnClick,
  ctaClassName = 'bg-primary text-white hover:bg-primary/90',
  ctaIcon = <ArrowUpRight size={18} />,
  ctaPosition = 'below',
}) => {
  const getImageShapeClass = () => {
    switch (imageShape) {
      case 'circle':
        return 'rounded-full aspect-square object-cover';
      case 'rounded':
        return 'rounded-2xl md:rounded-3xl object-cover';
      case 'square':
        return 'rounded-none aspect-square object-cover';
      case 'diagonal':
        return 'rounded-tl-[40px] rounded-br-[40px] md:rounded-tl-[80px] md:rounded-br-[80px] object-cover';
      case 'diagonal-right':
        return 'rounded-tr-[40px] rounded-bl-[40px] md:rounded-tr-[80px] md:rounded-bl-[80px] object-cover';
      case 'top-left':
        return 'rounded-tl-[50px] md:rounded-tl-[90px] object-cover';
      default:
        return `${imageShape} object-cover`;
    }
  };

  const getListLayoutClass = () => {
    if (listDirection === 'horizontal') {
      return 'flex flex-wrap items-center gap-x-6 gap-y-2.5';
    }
    if (listDirection === 'grid') {
      if (listColumns === 2) return 'grid grid-cols-1 sm:grid-cols-2 gap-3.5';
      return 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2.5';
    }
    return 'flex flex-col gap-3';
  };

  const renderCTA = () => {
    if (!ctaText) return null;
    return (
      <div className="pt-2">
        <Button
          text={ctaText}
          rightIcon={ctaIcon}
          onClick={ctaOnClick}
          className={`h-[45px] px-6 rounded-md font-semibold text-sm shadow-sm ${ctaClassName}`}
        />
      </div>
    );
  };

  const renderList = () => {
    if (listItems.length === 0) return null;
    return (
      <div className="flex flex-col gap-3 pt-1 w-full">
        {listHeading && (
          <h3 className={`font-semibold text-sm sm:text-base ${listHeadingColor}`}>
            {listHeading}
          </h3>
        )}

        <ul className={`${getListLayoutClass()} ${listItemBg ? 'ml-0' : 'ml-0 md:ml-4'}`}>
          {listItems.map((item, index) => {
            const itemLabel = typeof item === 'string' ? item : item.label;
            const itemIcon =
              typeof item === 'object' && item.icon ? item.icon : listIcon;

            return (
              <li
                key={index}
                className={`flex items-center gap-2.5 text-xs sm:text-sm font-medium whitespace-nowrap transition-colors ${
                  listItemBg
                    ? `${listItemBg} ${listItemTextColor || 'text-gray-800'} px-4 py-3 rounded-lg shadow-sm border border-black/5`
                    : listItemTextColor || 'text-gray-800'
                } ${listItemClassName}`}
              >
                {itemIcon ? (
                  <span className="shrink-0 flex items-center justify-center">
                    {itemIcon}
                  </span>
                ) : (
                  <span className="w-1.5 h-1.5 rounded-full bg-current shrink-0" />
                )}
                <span className="whitespace-nowrap">{itemLabel}</span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

  return (
    <section className={`w-full py-8 md:py-14 ${sectionBg}`}>
      <div className="w-full mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
        <div
          className={`w-full ${
            cardBg ? `${cardBg} ${cardRounded} ${cardPadding} ${cardBorder}` : ''
          }`}
        >
          {/* Header Layout: Top Variant (Full width header) */}
          {headerPosition === 'top' ? (
            <div className="flex flex-col gap-8 w-full">
              {/* Top Header & Description */}
              <div className="flex flex-col gap-2.5 w-full">
                {tagText && (
                  <span className={`text-xs sm:text-sm italic font-semibold tracking-wide ${tagColor}`}>
                    {tagText}
                  </span>
                )}
                <h2
                  className={`${mobileTitleSize || 'text-[20px]'} sm:text-2xl lg:text-3xl font-bold font-nunito leading-tight ${titleColor}`}
                >
                  {title}
                </h2>
                <div className={`text-xs sm:text-sm md:text-base leading-relaxed mt-1 ${descriptionColor}`}>
                  {typeof description === 'string' ? <p>{description}</p> : description}
                </div>
              </div>

              {/* Bottom 2 Columns: Image & List/CTA */}
              <div
                className={`flex flex-col lg:items-stretch items-center gap-8 lg:gap-12 ${
                  imagePosition === 'right' ? 'lg:flex-row-reverse' : 'lg:flex-row'
                }`}
              >
                {/* Image Column */}
                <div className="w-full lg:w-[45%] flex justify-center lg:items-stretch items-center">
                  <div
                    className={`relative overflow-hidden isolate w-full shadow-sm ${
                      imageShape === 'circle'
                        ? 'aspect-square max-w-[280px] sm:max-w-[360px] lg:max-w-none my-auto'
                        : 'h-[240px] sm:h-[300px] lg:h-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto'
                    } ${getImageShapeClass()} ${imageClassName}`}
                  >
                    <Image
                      src={imageSrc}
                      alt={imageAlt}
                      width={700}
                      height={750}
                      className="w-full h-full object-cover rounded-[inherit] transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </div>

                {/* List & CTA Column */}
                <div
                  className={`w-full lg:w-[55%] flex flex-col items-start justify-center gap-6 ${
                    contentBg ? `${contentBg} rounded-2xl ${contentPadding}` : ''
                  }`}
                >
                  {renderList()}
                  {renderCTA()}
                </div>
              </div>
            </div>
          ) : (
            /* Default Side-by-Side Variant */
            <>
              {/* Mobile Title */}
              <h2
                className={`lg:hidden block ${mobileTitleSize || 'text-[20px]'} font-bold font-nunito leading-tight mb-4 text-left ${titleColor}`}
              >
                {title}
              </h2>

              <div
                className={`flex flex-col lg:items-stretch items-center gap-8 lg:gap-14 ${
                  imagePosition === 'right' ? 'lg:flex-row-reverse' : 'lg:flex-row'
                }`}
              >
                {/* Image Column */}
                <div className="w-full lg:w-[40%] flex justify-center lg:items-stretch items-center">
                  <div
                    className={`relative overflow-hidden isolate w-full shadow-sm ${
                      imageShape === 'circle'
                        ? 'aspect-square max-w-[280px] sm:max-w-[360px] lg:max-w-none my-auto'
                        : 'h-[250px] sm:h-[320px] lg:h-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto'
                    } ${getImageShapeClass()} ${imageClassName}`}
                  >
                    <Image
                      src={imageSrc}
                      alt={imageAlt}
                      width={700}
                      height={750}
                      className="w-full h-full object-cover rounded-[inherit] transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </div>

                {/* Content Column */}
                <div className="w-full lg:w-[60%] flex flex-col items-start justify-center gap-5">
                  <h2
                    className={`hidden lg:block text-2xl sm:text-3xl lg:text-4xl font-bold font-nunito leading-tight ${titleColor}`}
                  >
                    {title}
                  </h2>

                  <div
                    className={`w-full flex flex-col gap-5 ${
                      contentBg ? `${contentBg} rounded-2xl ${contentPadding}` : ''
                    }`}
                  >
                    <div className={`text-sm sm:text-base leading-relaxed ${descriptionColor}`}>
                      {typeof description === 'string' ? (
                        <p>{description}</p>
                      ) : (
                        description
                      )}
                    </div>

                    {renderList()}
                    {ctaPosition === 'inside' && renderCTA()}
                  </div>

                  {ctaPosition === 'below' && renderCTA()}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default WebCard;