// `/custom` export is deprecated.
// Use `/core` sub-package instead.

import {
  MetadataJson,
  Examples,
  PhoneNumber,
  E164Number,
  CountryCallingCode,
  CountryCode,
  CarrierCode,
  NationalNumber,
  Extension,
  ParseError,
  NumberFoundLegacy,
  NumberFound,
  NumberType,
  NumberFormat,
  NumberingPlan
} from './types';

import {
  ParsedNumber,
  FormatNumberOptions,
  ParseNumberOptions
} from './index';

export {
  MetadataJson,
  Examples,
  PhoneNumber,
  E164Number,
  CountryCallingCode,
  CountryCode,
  CarrierCode,
  NationalNumber,
  Extension,
  FormatNumberOptions,
  ParsedNumber,
  ParseNumberOptions,
  ParseError,
  NumberFoundLegacy,
  NumberFound,
  NumberFormat,
  NumberType,
  NumberingPlan
};

// `parsePhoneNumber()` named export has been renamed to `parsePhoneNumberWithError()`.
export function parsePhoneNumber(text: string, metadata: MetadataJson): PhoneNumber;
export function parsePhoneNumber(text: string, defaultCountry: CountryCode, metadata: MetadataJson): PhoneNumber;

export function parsePhoneNumberWithError(text: string, metadata: MetadataJson): PhoneNumber;
export function parsePhoneNumberWithError(text: string, defaultCountry: CountryCode, metadata: MetadataJson): PhoneNumber;

// `parsePhoneNumberFromString()` named export is now considered legacy:
// it has been promoted to a default export due to being too verbose.
export function parsePhoneNumberFromString(text: string, metadata: MetadataJson): PhoneNumber;
export function parsePhoneNumberFromString(text: string, defaultCountry: CountryCode | { defaultCountry?: CountryCode, defaultCallingCode?: string, extract?: boolean }, metadata: MetadataJson): PhoneNumber;

export default parsePhoneNumberFromString;

export function parse(text: string, metadata: MetadataJson): ParsedNumber;
export function parse(text: string, options: CountryCode | ParseNumberOptions, metadata: MetadataJson): ParsedNumber;

export function parseNumber(text: string, metadata: MetadataJson): ParsedNumber | {};
export function parseNumber(text: string, options: CountryCode | ParseNumberOptions, metadata: MetadataJson): ParsedNumber | {};

// `format()` and `formatCustom` are deprecated.
// Use `formatNumber()` and `formatNumberCustom()` instead.
export function format(parsedNumber: ParsedNumber, format: NumberFormat, metadata: MetadataJson): string;
export function format(phone: NationalNumber, format: NumberFormat, metadata: MetadataJson): string;
export function format(phone: NationalNumber, country: CountryCode, format: NumberFormat, metadata: MetadataJson): string;

export function formatNumber(parsedNumber: ParsedNumber, format: NumberFormat, metadata: MetadataJson): string;
export function formatNumber(parsedNumber: ParsedNumber, format: NumberFormat, options: FormatNumberOptions, metadata: MetadataJson): string;

export function formatNumber(phone: NationalNumber, format: NumberFormat, metadata: MetadataJson): string;
export function formatNumber(phone: NationalNumber, format: NumberFormat, options: FormatNumberOptions, metadata: MetadataJson): string;

export function formatNumber(phone: NationalNumber, country: CountryCode, format: NumberFormat, metadata: MetadataJson): string;
export function formatNumber(phone: NationalNumber, country: CountryCode, format: NumberFormat, options: FormatNumberOptions, metadata: MetadataJson): string;

export function getNumberType(parsedNumber: ParsedNumber, metadata: MetadataJson): NumberType;
export function getNumberType(phone: NationalNumber, metadata: MetadataJson): NumberType;
export function getNumberType(phone: NationalNumber, country: CountryCode, metadata: MetadataJson): NumberType;

export function getExampleNumber(country: CountryCode, examples: Examples, metadata: MetadataJson): PhoneNumber | undefined;

export function isPossibleNumber(parsedNumber: ParsedNumber, metadata: MetadataJson): boolean;
export function isPossibleNumber(phone: NationalNumber, metadata: MetadataJson): boolean;
export function isPossibleNumber(phone: NationalNumber, country: CountryCode, metadata: MetadataJson): boolean;

export function isValidNumber(parsedNumber: ParsedNumber, metadata: MetadataJson): boolean;
export function isValidNumber(phone: NationalNumber, metadata: MetadataJson): boolean;
export function isValidNumber(phone: NationalNumber, country: CountryCode, metadata: MetadataJson): boolean;

export function isValidNumberForRegion(phone: NationalNumber, country: CountryCode, metadata: MetadataJson): boolean;

// Deprecated.
export function findParsedNumbers(text: string, metadata: MetadataJson): NumberFoundLegacy[];
export function findParsedNumbers(text: string, options: CountryCode | { defaultCountry?: CountryCode }, metadata: MetadataJson): NumberFoundLegacy[];

// Deprecated.
export function searchParsedNumbers(text: string, metadata: MetadataJson): IterableIterator<NumberFoundLegacy>;
export function searchParsedNumbers(text: string, options: CountryCode | { defaultCountry?: CountryCode }, metadata: MetadataJson): IterableIterator<NumberFoundLegacy>;

// Deprecated.
export class ParsedNumberSearch {
  constructor(text: string, metadata: MetadataJson);
  constructor(text: string, options: { defaultCountry?: CountryCode }, metadata: MetadataJson);
  hasNext(): boolean;
  next(): NumberFoundLegacy | undefined;
}

export function findNumbers(text: string, metadata: MetadataJson): NumberFoundLegacy[];
export function findNumbers(text: string, options: CountryCode | { defaultCountry?: CountryCode, v2: true }, metadata: MetadataJson): NumberFound[];

export function searchNumbers(text: string, metadata: MetadataJson): IterableIterator<NumberFoundLegacy>;
export function searchNumbers(text: string, options: CountryCode | { defaultCountry?: CountryCode, v2: true }, metadata: MetadataJson): IterableIterator<NumberFound>;

export function findPhoneNumbersInText(text: string, metadata: MetadataJson): NumberFound[];
export function findPhoneNumbersInText(text: string, options: CountryCode | { defaultCountry?: CountryCode, defaultCallingCode?: string }, metadata: MetadataJson): NumberFound[];

export function searchPhoneNumbersInText(text: string, metadata: MetadataJson): IterableIterator<NumberFound>;
export function searchPhoneNumbersInText(text: string, options: CountryCode | { defaultCountry?: CountryCode, defaultCallingCode?: string }, metadata: MetadataJson): IterableIterator<NumberFound>;

export class PhoneNumberMatcher {
  constructor(text: string, metadata: MetadataJson);
  constructor(text: string, options: { defaultCountry?: CountryCode, v2: true }, metadata: MetadataJson);
  hasNext(): boolean;
  next(): NumberFound | undefined;
}

export function getCountries(metadata: MetadataJson): CountryCode[];
export function getCountryCallingCode(countryCode: CountryCode, metadata: MetadataJson): CountryCallingCode;
// Deprecated
export function getPhoneCode(countryCode: CountryCode, metadata: MetadataJson): CountryCallingCode;
export function getExtPrefix(countryCode: CountryCode, metadata: MetadataJson): string;
export function isSupportedCountry(countryCode: CountryCode, metadata: MetadataJson): boolean;

export function formatIncompletePhoneNumber(number: string, metadata: MetadataJson): string;
export function formatIncompletePhoneNumber(number: string, countryCode: CountryCode, metadata: MetadataJson): string;
export function parseIncompletePhoneNumber(text: string): string;
export function parsePhoneNumberCharacter(character: string): string;
export function parseDigits(character: string): string;

export class AsYouType {
  constructor(defaultCountryCode: CountryCode | { defaultCountry?: CountryCode, defaultCallingCode?: string } | undefined, metadata: MetadataJson);
  input(text: string): string;
  reset(): void;
  country: CountryCode | undefined;
  getNumber(): PhoneNumber | undefined;
  getNumberValue(): E164Number | undefined;
  getNationalNumber(): string;
  getChars(): string;
  getTemplate(): string;
  getCallingCode(): string | undefined;
  getCountry(): CountryCode | undefined;
  isInternational(): boolean;
  isPossible(): boolean;
  isValid(): boolean;
}

export class Metadata {
  constructor(metadata: MetadataJson);
  selectNumberingPlan(country: CountryCode): void;
  numberingPlan?: NumberingPlan;
}