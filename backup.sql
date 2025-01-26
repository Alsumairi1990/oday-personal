--
-- PostgreSQL database dump
--

-- Dumped from database version 15.10
-- Dumped by pg_dump version 15.10 (Ubuntu 15.10-1.pgdg20.04+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: public; Type: SCHEMA; Schema: -; Owner: default
--

-- *not* creating schema, since initdb creates it


ALTER SCHEMA public OWNER TO "default";

--
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: default
--

COMMENT ON SCHEMA public IS '';


--
-- Name: BillingInterval; Type: TYPE; Schema: public; Owner: default
--

CREATE TYPE public."BillingInterval" AS ENUM (
    'MONTHLY',
    'SEMI_ANNUAL',
    'YEARLY'
);


ALTER TYPE public."BillingInterval" OWNER TO "default";

--
-- Name: MediaType; Type: TYPE; Schema: public; Owner: default
--

CREATE TYPE public."MediaType" AS ENUM (
    'IMAGE',
    'FILE',
    'VIDEO'
);


ALTER TYPE public."MediaType" OWNER TO "default";

--
-- Name: OrderStatus; Type: TYPE; Schema: public; Owner: default
--

CREATE TYPE public."OrderStatus" AS ENUM (
    'PENDING',
    'IN_PROGRESS',
    'COMPLETED',
    'ON_HOLD',
    'CANCELLED'
);


ALTER TYPE public."OrderStatus" OWNER TO "default";

--
-- Name: OrderType; Type: TYPE; Schema: public; Owner: default
--

CREATE TYPE public."OrderType" AS ENUM (
    'Product',
    'Service'
);


ALTER TYPE public."OrderType" OWNER TO "default";

--
-- Name: PaymentStatus; Type: TYPE; Schema: public; Owner: default
--

CREATE TYPE public."PaymentStatus" AS ENUM (
    'PENDING',
    'IN_PROGRESS',
    'COMPLETED',
    'ON_HOLD',
    'CANCELLED'
);


ALTER TYPE public."PaymentStatus" OWNER TO "default";

--
-- Name: ProjectStatus; Type: TYPE; Schema: public; Owner: default
--

CREATE TYPE public."ProjectStatus" AS ENUM (
    'PLANNED',
    'IN_PROGRESS',
    'COMPLETED',
    'ON_HOLD',
    'CANCELLED'
);


ALTER TYPE public."ProjectStatus" OWNER TO "default";

--
-- Name: SubscriptionStatus; Type: TYPE; Schema: public; Owner: default
--

CREATE TYPE public."SubscriptionStatus" AS ENUM (
    'ACTIVE',
    'CANCELED',
    'EXPIRED'
);


ALTER TYPE public."SubscriptionStatus" OWNER TO "default";

--
-- Name: TaskStatus; Type: TYPE; Schema: public; Owner: default
--

CREATE TYPE public."TaskStatus" AS ENUM (
    'PLANNED',
    'IN_PROGRESS',
    'COMPLETED',
    'ON_HOLD',
    'CANCELLED'
);


ALTER TYPE public."TaskStatus" OWNER TO "default";

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: AboutUsSection; Type: TABLE; Schema: public; Owner: default
--

CREATE TABLE public."AboutUsSection" (
    id integer NOT NULL,
    name text NOT NULL,
    title text,
    "titleAr" text,
    "desc" text,
    "descAr" text,
    more text,
    "moreAr" text,
    url text,
    "isActive" boolean DEFAULT true NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL,
    "userId" text NOT NULL,
    image text,
    "topTitlAr" text,
    "topTitle" text
);


ALTER TABLE public."AboutUsSection" OWNER TO "default";

--
-- Name: AboutUsSection_id_seq; Type: SEQUENCE; Schema: public; Owner: default
--

CREATE SEQUENCE public."AboutUsSection_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."AboutUsSection_id_seq" OWNER TO "default";

--
-- Name: AboutUsSection_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: default
--

ALTER SEQUENCE public."AboutUsSection_id_seq" OWNED BY public."AboutUsSection".id;


--
-- Name: Account; Type: TABLE; Schema: public; Owner: default
--

CREATE TABLE public."Account" (
    id text NOT NULL,
    "userId" text NOT NULL,
    type text NOT NULL,
    provider text NOT NULL,
    "providerAccountId" text NOT NULL,
    refresh_token text,
    access_token text,
    expires_at integer,
    token_type text,
    scope text,
    id_token text,
    session_state text
);


ALTER TABLE public."Account" OWNER TO "default";

--
-- Name: AdminMenu; Type: TABLE; Schema: public; Owner: default
--

CREATE TABLE public."AdminMenu" (
    id integer NOT NULL,
    title text NOT NULL,
    description text,
    icon text,
    "userId" text NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL,
    "menuParentId" integer,
    "descriptionAr" text,
    "titleAr" text,
    "menuType" text
);


ALTER TABLE public."AdminMenu" OWNER TO "default";

--
-- Name: AdminMenu_id_seq; Type: SEQUENCE; Schema: public; Owner: default
--

CREATE SEQUENCE public."AdminMenu_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."AdminMenu_id_seq" OWNER TO "default";

--
-- Name: AdminMenu_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: default
--

ALTER SEQUENCE public."AdminMenu_id_seq" OWNED BY public."AdminMenu".id;


--
-- Name: BillingInfo; Type: TABLE; Schema: public; Owner: default
--

CREATE TABLE public."BillingInfo" (
    id text NOT NULL,
    address text NOT NULL,
    city text NOT NULL,
    country text NOT NULL,
    "postalCode" text NOT NULL,
    "orderId" text NOT NULL
);


ALTER TABLE public."BillingInfo" OWNER TO "default";

--
-- Name: Category; Type: TABLE; Schema: public; Owner: default
--

CREATE TABLE public."Category" (
    id integer NOT NULL,
    name text NOT NULL,
    image text,
    icon text,
    description text,
    slug text NOT NULL,
    "userId" text NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "descriptionAr" text,
    "nameAr" text,
    "SubTitle" text,
    "SubTitleAr" text,
    "TitleAr" text,
    title text
);


ALTER TABLE public."Category" OWNER TO "default";

--
-- Name: Category_id_seq; Type: SEQUENCE; Schema: public; Owner: default
--

CREATE SEQUENCE public."Category_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Category_id_seq" OWNER TO "default";

--
-- Name: Category_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: default
--

ALTER SEQUENCE public."Category_id_seq" OWNED BY public."Category".id;


--
-- Name: Client; Type: TABLE; Schema: public; Owner: default
--

CREATE TABLE public."Client" (
    id text NOT NULL,
    name text,
    "contactPerson" text,
    email text NOT NULL,
    phone text,
    address text,
    "companyName" text,
    website text,
    industry text,
    notes text,
    "billingAddress" text,
    "billingEmail" text,
    "taxId" text,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL,
    image text,
    "createdById" text NOT NULL,
    "addressAr" text,
    "billingAddressAr" text,
    "companyNameAr" text,
    "industryAr" text,
    "nameAr" text,
    "notesAr" text
);


ALTER TABLE public."Client" OWNER TO "default";

--
-- Name: CompanyMenu; Type: TABLE; Schema: public; Owner: default
--

CREATE TABLE public."CompanyMenu" (
    id integer NOT NULL,
    name text,
    "nameAr" text,
    url text NOT NULL,
    slug text,
    title text,
    "titleAr" text,
    image text,
    icon text,
    description text,
    "descriptionAr" text,
    "userId" text NOT NULL
);


ALTER TABLE public."CompanyMenu" OWNER TO "default";

--
-- Name: CompanyMenu_id_seq; Type: SEQUENCE; Schema: public; Owner: default
--

CREATE SEQUENCE public."CompanyMenu_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."CompanyMenu_id_seq" OWNER TO "default";

--
-- Name: CompanyMenu_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: default
--

ALTER SEQUENCE public."CompanyMenu_id_seq" OWNED BY public."CompanyMenu".id;


--
-- Name: Customer; Type: TABLE; Schema: public; Owner: default
--

CREATE TABLE public."Customer" (
    id text NOT NULL,
    name text NOT NULL,
    slug text NOT NULL,
    email text,
    image text,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL
);


ALTER TABLE public."Customer" OWNER TO "default";

--
-- Name: Department; Type: TABLE; Schema: public; Owner: default
--

CREATE TABLE public."Department" (
    id integer NOT NULL,
    name text NOT NULL,
    description text,
    image text,
    icon text,
    "departmentHeadId" integer,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL
);


ALTER TABLE public."Department" OWNER TO "default";

--
-- Name: Department_id_seq; Type: SEQUENCE; Schema: public; Owner: default
--

CREATE SEQUENCE public."Department_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Department_id_seq" OWNER TO "default";

--
-- Name: Department_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: default
--

ALTER SEQUENCE public."Department_id_seq" OWNED BY public."Department".id;


--
-- Name: Element; Type: TABLE; Schema: public; Owner: default
--

CREATE TABLE public."Element" (
    id integer NOT NULL,
    title text NOT NULL,
    description text,
    icon text,
    "menuId" integer NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL,
    link text,
    "parentId" integer,
    "descriptionAr" text,
    "titleAr" text
);


ALTER TABLE public."Element" OWNER TO "default";

--
-- Name: Element_id_seq; Type: SEQUENCE; Schema: public; Owner: default
--

CREATE SEQUENCE public."Element_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Element_id_seq" OWNER TO "default";

--
-- Name: Element_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: default
--

ALTER SEQUENCE public."Element_id_seq" OWNED BY public."Element".id;


--
-- Name: EmployeeProfile; Type: TABLE; Schema: public; Owner: default
--

CREATE TABLE public."EmployeeProfile" (
    id integer NOT NULL,
    "firstName" text NOT NULL,
    "firstNameSlug" text,
    "lastName" text,
    mobile text,
    "dateOfBirth" timestamp(3) without time zone,
    bio text,
    sex text,
    image text,
    avatar text,
    "jobTitle" text,
    "dateOfJoining" text,
    "employmentType" text,
    "reportsTo" text,
    salary numeric(65,30),
    address text,
    country text,
    city text,
    "postalCode" text,
    degree text,
    institution text,
    "yearOfPassing" text,
    specialization text,
    "yearsOfExperience" integer,
    nationality text,
    languages text[],
    "maritalStatus" text,
    "socialNetworkId" integer,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL,
    "userId" text NOT NULL,
    "teamId" integer
);


ALTER TABLE public."EmployeeProfile" OWNER TO "default";

--
-- Name: EmployeeProfile_id_seq; Type: SEQUENCE; Schema: public; Owner: default
--

CREATE SEQUENCE public."EmployeeProfile_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."EmployeeProfile_id_seq" OWNER TO "default";

--
-- Name: EmployeeProfile_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: default
--

ALTER SEQUENCE public."EmployeeProfile_id_seq" OWNED BY public."EmployeeProfile".id;


--
-- Name: EmployeeSkill; Type: TABLE; Schema: public; Owner: default
--

CREATE TABLE public."EmployeeSkill" (
    "employeeProfileId" integer NOT NULL,
    "skillId" integer NOT NULL
);


ALTER TABLE public."EmployeeSkill" OWNER TO "default";

--
-- Name: Explore; Type: TABLE; Schema: public; Owner: default
--

CREATE TABLE public."Explore" (
    id integer NOT NULL,
    name text,
    "nameAr" text,
    url text NOT NULL,
    slug text,
    title text,
    "titleAr" text,
    image text,
    icon text,
    description text,
    "descriptionAr" text,
    "userId" text NOT NULL
);


ALTER TABLE public."Explore" OWNER TO "default";

--
-- Name: Explore_id_seq; Type: SEQUENCE; Schema: public; Owner: default
--

CREATE SEQUENCE public."Explore_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Explore_id_seq" OWNER TO "default";

--
-- Name: Explore_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: default
--

ALTER SEQUENCE public."Explore_id_seq" OWNED BY public."Explore".id;


--
-- Name: Feature; Type: TABLE; Schema: public; Owner: default
--

CREATE TABLE public."Feature" (
    id integer NOT NULL,
    name text,
    title text,
    "titleAr" text,
    "desc" text,
    "descAr" text,
    more text,
    image text,
    "moreAr" text,
    "isActive" text,
    url text,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL,
    "toolId" integer NOT NULL
);


ALTER TABLE public."Feature" OWNER TO "default";

--
-- Name: Feature_id_seq; Type: SEQUENCE; Schema: public; Owner: default
--

CREATE SEQUENCE public."Feature_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Feature_id_seq" OWNER TO "default";

--
-- Name: Feature_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: default
--

ALTER SEQUENCE public."Feature_id_seq" OWNED BY public."Feature".id;


--
-- Name: HeroSection; Type: TABLE; Schema: public; Owner: default
--

CREATE TABLE public."HeroSection" (
    id integer NOT NULL,
    title text NOT NULL,
    "titleAr" text NOT NULL,
    "subTitl" text NOT NULL,
    "subTitlAr" text NOT NULL,
    more text NOT NULL,
    "moreAr" text NOT NULL,
    "isActive" text NOT NULL,
    url text NOT NULL,
    "pageName" text NOT NULL,
    "footerTitle" text NOT NULL,
    "footerTitleAr" text NOT NULL,
    image text NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL,
    "userId" text NOT NULL
);


ALTER TABLE public."HeroSection" OWNER TO "default";

--
-- Name: HeroSection_id_seq; Type: SEQUENCE; Schema: public; Owner: default
--

CREATE SEQUENCE public."HeroSection_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."HeroSection_id_seq" OWNER TO "default";

--
-- Name: HeroSection_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: default
--

ALTER SEQUENCE public."HeroSection_id_seq" OWNED BY public."HeroSection".id;


--
-- Name: Industry; Type: TABLE; Schema: public; Owner: default
--

CREATE TABLE public."Industry" (
    id integer NOT NULL,
    name text,
    "nameAr" text,
    slug text,
    title text,
    "titleAr" text,
    image text,
    description text,
    "descriptionAr" text,
    "userId" text NOT NULL,
    icon text
);


ALTER TABLE public."Industry" OWNER TO "default";

--
-- Name: Industry_id_seq; Type: SEQUENCE; Schema: public; Owner: default
--

CREATE SEQUENCE public."Industry_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Industry_id_seq" OWNER TO "default";

--
-- Name: Industry_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: default
--

ALTER SEQUENCE public."Industry_id_seq" OWNED BY public."Industry".id;


--
-- Name: Invoice; Type: TABLE; Schema: public; Owner: default
--

CREATE TABLE public."Invoice" (
    id text NOT NULL,
    "invoiceNumber" text NOT NULL,
    "issueDate" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "dueDate" timestamp(3) without time zone,
    "invoiceType" text,
    "initialPayment" double precision,
    "paymentStatus" text DEFAULT 'pedning'::text NOT NULL,
    "clientId" text NOT NULL,
    "clientName" text,
    "clientAddress" text,
    "clientContact" text,
    "clientEmail" text,
    "clientPhone" text,
    "serviceId" integer NOT NULL,
    "serviceDescription" text NOT NULL,
    quantity integer,
    "unitPrice" double precision,
    discount double precision,
    "taxRate" double precision,
    subtotal double precision,
    "taxAmount" double precision,
    "discountAmount" double precision,
    "totalAmount" double precision NOT NULL,
    currency text NOT NULL,
    "paymentTerms" text,
    "paidAt" timestamp(3) without time zone,
    "paymentMethod" text,
    notes text,
    "referenceNumber" text,
    "termsAndConditions" text,
    attachments text[],
    "companyName" text,
    "companyAddress" text,
    "companyEmail" text,
    "companyPhone" text,
    "taxId" text,
    "taxDetails" text,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL
);


ALTER TABLE public."Invoice" OWNER TO "default";

--
-- Name: Location; Type: TABLE; Schema: public; Owner: default
--

CREATE TABLE public."Location" (
    id integer NOT NULL,
    country text NOT NULL,
    city text,
    image text,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL,
    slug text DEFAULT 'default-slug'::text NOT NULL,
    "cityAr" text,
    "countryAr" text
);


ALTER TABLE public."Location" OWNER TO "default";

--
-- Name: Location_id_seq; Type: SEQUENCE; Schema: public; Owner: default
--

CREATE SEQUENCE public."Location_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Location_id_seq" OWNER TO "default";

--
-- Name: Location_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: default
--

ALTER SEQUENCE public."Location_id_seq" OWNED BY public."Location".id;


--
-- Name: Market; Type: TABLE; Schema: public; Owner: default
--

CREATE TABLE public."Market" (
    id integer NOT NULL,
    name text NOT NULL,
    "nameAr" text NOT NULL,
    description text NOT NULL,
    "descriptionAr" text NOT NULL,
    image text NOT NULL,
    icon text NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL,
    location text NOT NULL,
    title text NOT NULL,
    "titleAr" text NOT NULL,
    "topTitlAr" text NOT NULL,
    "topTitle" text NOT NULL,
    "userId" text NOT NULL
);


ALTER TABLE public."Market" OWNER TO "default";

--
-- Name: MarketPage; Type: TABLE; Schema: public; Owner: default
--

CREATE TABLE public."MarketPage" (
    "marketId" integer NOT NULL,
    "pageId" integer NOT NULL,
    url text
);


ALTER TABLE public."MarketPage" OWNER TO "default";

--
-- Name: Market_id_seq; Type: SEQUENCE; Schema: public; Owner: default
--

CREATE SEQUENCE public."Market_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Market_id_seq" OWNER TO "default";

--
-- Name: Market_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: default
--

ALTER SEQUENCE public."Market_id_seq" OWNED BY public."Market".id;


--
-- Name: Media; Type: TABLE; Schema: public; Owner: default
--

CREATE TABLE public."Media" (
    id text NOT NULL,
    url text NOT NULL,
    type public."MediaType",
    "projectId" text,
    "tasktId" integer,
    "productId" text,
    "altText" text,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    description text,
    "externalUrl" text,
    "mimeType" text,
    size integer,
    "updatedAt" timestamp(3) without time zone NOT NULL,
    media_order integer,
    "orderId" text,
    "clientId" text
);


ALTER TABLE public."Media" OWNER TO "default";

--
-- Name: MenuParent; Type: TABLE; Schema: public; Owner: default
--

CREATE TABLE public."MenuParent" (
    id integer NOT NULL,
    title text NOT NULL,
    description text,
    icon text,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL,
    priority integer DEFAULT 0 NOT NULL,
    "userId" text NOT NULL,
    "descriptionAr" text,
    "titleAr" text
);


ALTER TABLE public."MenuParent" OWNER TO "default";

--
-- Name: MenuParent_id_seq; Type: SEQUENCE; Schema: public; Owner: default
--

CREATE SEQUENCE public."MenuParent_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."MenuParent_id_seq" OWNER TO "default";

--
-- Name: MenuParent_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: default
--

ALTER SEQUENCE public."MenuParent_id_seq" OWNED BY public."MenuParent".id;


--
-- Name: Offer; Type: TABLE; Schema: public; Owner: default
--

CREATE TABLE public."Offer" (
    id text NOT NULL,
    title text NOT NULL,
    "titleAr" text NOT NULL,
    description text,
    "descriptionAr" text,
    discount double precision,
    "startDate" timestamp(3) without time zone,
    "endDate" timestamp(3) without time zone,
    "isActive" boolean DEFAULT true NOT NULL,
    image text,
    icon text,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL,
    "userId" text NOT NULL
);


ALTER TABLE public."Offer" OWNER TO "default";

--
-- Name: Order; Type: TABLE; Schema: public; Owner: default
--

CREATE TABLE public."Order" (
    id text NOT NULL,
    "orderNumber" text NOT NULL,
    "orderDate" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    description text,
    "clientId" text,
    "clientName" text,
    "clientAddress" text,
    "clientContact" text,
    "clientEmail" text,
    "clientPhone" text,
    "serviceId" integer,
    quantity integer,
    "unitPrice" double precision,
    "estimatedCost" double precision,
    subtotal double precision,
    discount double precision,
    "taxRate" double precision,
    "taxAmount" double precision,
    "totalAmount" double precision NOT NULL,
    currency text DEFAULT 'USD'::text NOT NULL,
    "paymentTerms" text,
    "paidAt" timestamp(3) without time zone,
    "paymentMethod" text,
    "startDate" timestamp(3) without time zone,
    "completionDate" timestamp(3) without time zone,
    notes text,
    "referenceNumber" text,
    "termsAndConditions" text,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL,
    "orderType" public."OrderType",
    status public."OrderStatus",
    "orderManagerId" text,
    image text
);


ALTER TABLE public."Order" OWNER TO "default";

--
-- Name: Package; Type: TABLE; Schema: public; Owner: default
--

CREATE TABLE public."Package" (
    id integer NOT NULL,
    name text NOT NULL,
    "nameAr" text NOT NULL,
    description text,
    "descriptionAr" text,
    price double precision NOT NULL,
    "isPopular" boolean DEFAULT false NOT NULL,
    image text,
    icon text,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL,
    "userId" text NOT NULL,
    slug text NOT NULL
);


ALTER TABLE public."Package" OWNER TO "default";

--
-- Name: PackageFeature; Type: TABLE; Schema: public; Owner: default
--

CREATE TABLE public."PackageFeature" (
    id integer NOT NULL,
    name text NOT NULL,
    "nameAr" text NOT NULL,
    value text,
    "valueAr" text,
    description text,
    "descriptionAr" text
);


ALTER TABLE public."PackageFeature" OWNER TO "default";

--
-- Name: PackageFeatureLink; Type: TABLE; Schema: public; Owner: default
--

CREATE TABLE public."PackageFeatureLink" (
    id integer NOT NULL,
    included boolean DEFAULT true NOT NULL,
    "packageId" integer NOT NULL,
    "featureId" integer NOT NULL
);


ALTER TABLE public."PackageFeatureLink" OWNER TO "default";

--
-- Name: PackageFeatureLink_id_seq; Type: SEQUENCE; Schema: public; Owner: default
--

CREATE SEQUENCE public."PackageFeatureLink_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."PackageFeatureLink_id_seq" OWNER TO "default";

--
-- Name: PackageFeatureLink_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: default
--

ALTER SEQUENCE public."PackageFeatureLink_id_seq" OWNED BY public."PackageFeatureLink".id;


--
-- Name: PackageFeature_id_seq; Type: SEQUENCE; Schema: public; Owner: default
--

CREATE SEQUENCE public."PackageFeature_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."PackageFeature_id_seq" OWNER TO "default";

--
-- Name: PackageFeature_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: default
--

ALTER SEQUENCE public."PackageFeature_id_seq" OWNED BY public."PackageFeature".id;


--
-- Name: Package_id_seq; Type: SEQUENCE; Schema: public; Owner: default
--

CREATE SEQUENCE public."Package_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Package_id_seq" OWNER TO "default";

--
-- Name: Package_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: default
--

ALTER SEQUENCE public."Package_id_seq" OWNED BY public."Package".id;


--
-- Name: Page; Type: TABLE; Schema: public; Owner: default
--

CREATE TABLE public."Page" (
    id integer NOT NULL,
    name text NOT NULL,
    "nameAr" text NOT NULL,
    description text,
    "descriptionAr" text,
    title text,
    "titleAr" text,
    image text,
    icon text,
    "userId" text NOT NULL
);


ALTER TABLE public."Page" OWNER TO "default";

--
-- Name: PageSection; Type: TABLE; Schema: public; Owner: default
--

CREATE TABLE public."PageSection" (
    id integer NOT NULL,
    title text NOT NULL,
    "titleAr" text NOT NULL,
    "desc" text NOT NULL,
    "descAr" text NOT NULL,
    more text NOT NULL,
    "moreAr" text NOT NULL,
    "isActive" text NOT NULL,
    url text NOT NULL,
    "itemsNo" integer NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL,
    name text NOT NULL,
    "userId" text NOT NULL
);


ALTER TABLE public."PageSection" OWNER TO "default";

--
-- Name: PageSection_id_seq; Type: SEQUENCE; Schema: public; Owner: default
--

CREATE SEQUENCE public."PageSection_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."PageSection_id_seq" OWNER TO "default";

--
-- Name: PageSection_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: default
--

ALTER SEQUENCE public."PageSection_id_seq" OWNED BY public."PageSection".id;


--
-- Name: Page_id_seq; Type: SEQUENCE; Schema: public; Owner: default
--

CREATE SEQUENCE public."Page_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Page_id_seq" OWNER TO "default";

--
-- Name: Page_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: default
--

ALTER SEQUENCE public."Page_id_seq" OWNED BY public."Page".id;


--
-- Name: Partner; Type: TABLE; Schema: public; Owner: default
--

CREATE TABLE public."Partner" (
    id integer NOT NULL,
    name text NOT NULL,
    slug text NOT NULL,
    type text,
    image text,
    icon text,
    "contactPerson" text,
    email text,
    phone text,
    address text,
    city text,
    country text,
    website text,
    notes text,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL,
    "userId" text NOT NULL
);


ALTER TABLE public."Partner" OWNER TO "default";

--
-- Name: Partner_id_seq; Type: SEQUENCE; Schema: public; Owner: default
--

CREATE SEQUENCE public."Partner_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Partner_id_seq" OWNER TO "default";

--
-- Name: Partner_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: default
--

ALTER SEQUENCE public."Partner_id_seq" OWNED BY public."Partner".id;


--
-- Name: Permission; Type: TABLE; Schema: public; Owner: default
--

CREATE TABLE public."Permission" (
    id integer NOT NULL,
    name text NOT NULL,
    slug text NOT NULL,
    image text,
    description text,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL
);


ALTER TABLE public."Permission" OWNER TO "default";

--
-- Name: Permission_id_seq; Type: SEQUENCE; Schema: public; Owner: default
--

CREATE SEQUENCE public."Permission_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Permission_id_seq" OWNER TO "default";

--
-- Name: Permission_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: default
--

ALTER SEQUENCE public."Permission_id_seq" OWNED BY public."Permission".id;


--
-- Name: Phase; Type: TABLE; Schema: public; Owner: default
--

CREATE TABLE public."Phase" (
    id integer NOT NULL,
    name text NOT NULL,
    description text,
    image text,
    icon text,
    sequence integer NOT NULL,
    "serviceId" integer,
    "userId" text NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL,
    "projectId" text,
    "descriptionAr" text,
    "nameAr" text,
    "phaseType" text
);


ALTER TABLE public."Phase" OWNER TO "default";

--
-- Name: Phase_id_seq; Type: SEQUENCE; Schema: public; Owner: default
--

CREATE SEQUENCE public."Phase_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Phase_id_seq" OWNER TO "default";

--
-- Name: Phase_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: default
--

ALTER SEQUENCE public."Phase_id_seq" OWNED BY public."Phase".id;


--
-- Name: Plan; Type: TABLE; Schema: public; Owner: default
--

CREATE TABLE public."Plan" (
    id integer NOT NULL,
    name text NOT NULL,
    "nameAr" text NOT NULL,
    slug text NOT NULL,
    description text,
    "descriptionAr" text,
    "monthlyPrice" numeric(65,30) DEFAULT 100.0 NOT NULL,
    "semiAnnualPrice" numeric(65,30) DEFAULT 500.0 NOT NULL,
    "yearlyPrice" numeric(65,30) DEFAULT 900.0 NOT NULL,
    features text,
    "featuresAr" text,
    limits text,
    "limitsAr" text,
    support text,
    "supportAr" text,
    purpose text,
    image text,
    icon text,
    "interval" public."BillingInterval" DEFAULT 'MONTHLY'::public."BillingInterval" NOT NULL,
    duration integer DEFAULT 1 NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL,
    "purposeAr" text,
    "userId" text NOT NULL
);


ALTER TABLE public."Plan" OWNER TO "default";

--
-- Name: PlanCategory; Type: TABLE; Schema: public; Owner: default
--

CREATE TABLE public."PlanCategory" (
    id integer NOT NULL,
    name text NOT NULL,
    "nameAr" text,
    slug text NOT NULL,
    image text,
    title text,
    icon text,
    description text,
    "descriptionAr" text,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL,
    "subTitle" text,
    "subTitleAr" text,
    "titleAr" text,
    "userId" text NOT NULL,
    priority integer DEFAULT 0 NOT NULL
);


ALTER TABLE public."PlanCategory" OWNER TO "default";

--
-- Name: PlanCategory_id_seq; Type: SEQUENCE; Schema: public; Owner: default
--

CREATE SEQUENCE public."PlanCategory_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."PlanCategory_id_seq" OWNER TO "default";

--
-- Name: PlanCategory_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: default
--

ALTER SEQUENCE public."PlanCategory_id_seq" OWNED BY public."PlanCategory".id;


--
-- Name: Plan_id_seq; Type: SEQUENCE; Schema: public; Owner: default
--

CREATE SEQUENCE public."Plan_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Plan_id_seq" OWNER TO "default";

--
-- Name: Plan_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: default
--

ALTER SEQUENCE public."Plan_id_seq" OWNED BY public."Plan".id;


--
-- Name: Post; Type: TABLE; Schema: public; Owner: default
--

CREATE TABLE public."Post" (
    id text NOT NULL,
    title text NOT NULL,
    content text,
    published boolean DEFAULT true NOT NULL,
    "authorId" text,
    slug text NOT NULL,
    "contentAr" text,
    excerpt text,
    "excerptAr" text,
    image text,
    "isFeatured" boolean DEFAULT false NOT NULL,
    language text,
    "metaDescription" text,
    "metaTitle" text,
    "publishedAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP,
    "readingTime" integer,
    "titleAr" text NOT NULL,
    "viewCount" integer DEFAULT 0 NOT NULL
);


ALTER TABLE public."Post" OWNER TO "default";

--
-- Name: PostCategory; Type: TABLE; Schema: public; Owner: default
--

CREATE TABLE public."PostCategory" (
    id integer NOT NULL,
    name text NOT NULL,
    "nameAr" text,
    slug text NOT NULL,
    image text,
    icon text,
    description text,
    "descriptionAr" text,
    "userId" text NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public."PostCategory" OWNER TO "default";

--
-- Name: PostCategory_id_seq; Type: SEQUENCE; Schema: public; Owner: default
--

CREATE SEQUENCE public."PostCategory_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."PostCategory_id_seq" OWNER TO "default";

--
-- Name: PostCategory_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: default
--

ALTER SEQUENCE public."PostCategory_id_seq" OWNED BY public."PostCategory".id;


--
-- Name: Price; Type: TABLE; Schema: public; Owner: default
--

CREATE TABLE public."Price" (
    id text NOT NULL,
    amount numeric(65,30) NOT NULL,
    "startPrice" numeric(65,30),
    median numeric(65,30),
    currency text,
    discount numeric(65,30),
    "effectiveDate" timestamp(3) without time zone,
    "expiryDate" timestamp(3) without time zone,
    description text,
    image text,
    "serviceId" integer NOT NULL,
    "locationId" integer NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL,
    "productId" text
);


ALTER TABLE public."Price" OWNER TO "default";

--
-- Name: Product; Type: TABLE; Schema: public; Owner: default
--

CREATE TABLE public."Product" (
    id text NOT NULL,
    name text NOT NULL,
    slug text NOT NULL,
    description text,
    "stockQuantity" integer DEFAULT 0 NOT NULL,
    "isActive" boolean DEFAULT true NOT NULL,
    "isPublished" boolean DEFAULT false NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL,
    "vendorId" text,
    rating numeric(65,30),
    sku text,
    dimensions text,
    weight numeric(65,30),
    image text,
    "userId" text NOT NULL,
    "descriptionAr" text,
    "nameAr" text
);


ALTER TABLE public."Product" OWNER TO "default";

--
-- Name: Project; Type: TABLE; Schema: public; Owner: default
--

CREATE TABLE public."Project" (
    id text NOT NULL,
    name text NOT NULL,
    description text,
    "startDate" timestamp(3) without time zone,
    "endDate" timestamp(3) without time zone,
    budget numeric(65,30),
    priority text,
    progress integer,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL,
    "userId" text NOT NULL,
    "teamId" integer,
    "clientId" text,
    status public."ProjectStatus",
    icon text,
    image text
);


ALTER TABLE public."Project" OWNER TO "default";

--
-- Name: Role; Type: TABLE; Schema: public; Owner: default
--

CREATE TABLE public."Role" (
    id integer NOT NULL,
    name text NOT NULL,
    slug text NOT NULL,
    image text,
    description text,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL
);


ALTER TABLE public."Role" OWNER TO "default";

--
-- Name: Role_id_seq; Type: SEQUENCE; Schema: public; Owner: default
--

CREATE SEQUENCE public."Role_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Role_id_seq" OWNER TO "default";

--
-- Name: Role_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: default
--

ALTER SEQUENCE public."Role_id_seq" OWNED BY public."Role".id;


--
-- Name: Service; Type: TABLE; Schema: public; Owner: default
--

CREATE TABLE public."Service" (
    id integer NOT NULL,
    name text NOT NULL,
    name_slug text,
    title text,
    price double precision,
    description text,
    discount double precision,
    image text,
    icon text,
    "userId" text NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL,
    "codeId" integer,
    location text,
    "descriptionAr" text,
    "nameAr" text,
    "titleAr" text
);


ALTER TABLE public."Service" OWNER TO "default";

--
-- Name: ServiceCategory; Type: TABLE; Schema: public; Owner: default
--

CREATE TABLE public."ServiceCategory" (
    "serviceId" integer NOT NULL,
    "categoryId" integer NOT NULL
);


ALTER TABLE public."ServiceCategory" OWNER TO "default";

--
-- Name: ServiceCode; Type: TABLE; Schema: public; Owner: default
--

CREATE TABLE public."ServiceCode" (
    id integer NOT NULL,
    code text NOT NULL,
    description text,
    icon text,
    image text,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL
);


ALTER TABLE public."ServiceCode" OWNER TO "default";

--
-- Name: ServiceCode_id_seq; Type: SEQUENCE; Schema: public; Owner: default
--

CREATE SEQUENCE public."ServiceCode_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."ServiceCode_id_seq" OWNER TO "default";

--
-- Name: ServiceCode_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: default
--

ALTER SEQUENCE public."ServiceCode_id_seq" OWNED BY public."ServiceCode".id;


--
-- Name: ServiceFeature; Type: TABLE; Schema: public; Owner: default
--

CREATE TABLE public."ServiceFeature" (
    id integer NOT NULL,
    name text,
    title text,
    "titleAr" text,
    "desc" text,
    "descAr" text,
    more text,
    image text,
    "moreAr" text,
    "isActive" text,
    url text,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL,
    "userId" text NOT NULL
);


ALTER TABLE public."ServiceFeature" OWNER TO "default";

--
-- Name: ServiceFeature_id_seq; Type: SEQUENCE; Schema: public; Owner: default
--

CREATE SEQUENCE public."ServiceFeature_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."ServiceFeature_id_seq" OWNER TO "default";

--
-- Name: ServiceFeature_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: default
--

ALTER SEQUENCE public."ServiceFeature_id_seq" OWNED BY public."ServiceFeature".id;


--
-- Name: ServiceTag; Type: TABLE; Schema: public; Owner: default
--

CREATE TABLE public."ServiceTag" (
    "serviceId" integer NOT NULL,
    "tagId" integer NOT NULL
);


ALTER TABLE public."ServiceTag" OWNER TO "default";

--
-- Name: ServiceTool; Type: TABLE; Schema: public; Owner: default
--

CREATE TABLE public."ServiceTool" (
    "serviceId" integer NOT NULL,
    "toolId" integer NOT NULL
);


ALTER TABLE public."ServiceTool" OWNER TO "default";

--
-- Name: Service_id_seq; Type: SEQUENCE; Schema: public; Owner: default
--

CREATE SEQUENCE public."Service_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Service_id_seq" OWNER TO "default";

--
-- Name: Service_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: default
--

ALTER SEQUENCE public."Service_id_seq" OWNED BY public."Service".id;


--
-- Name: Session; Type: TABLE; Schema: public; Owner: default
--

CREATE TABLE public."Session" (
    id text NOT NULL,
    "sessionToken" text NOT NULL,
    "userId" text NOT NULL,
    expires timestamp(3) without time zone NOT NULL
);


ALTER TABLE public."Session" OWNER TO "default";

--
-- Name: Skill; Type: TABLE; Schema: public; Owner: default
--

CREATE TABLE public."Skill" (
    id integer NOT NULL,
    name text NOT NULL,
    slug text NOT NULL,
    description text,
    image text,
    icon text
);


ALTER TABLE public."Skill" OWNER TO "default";

--
-- Name: Skill_id_seq; Type: SEQUENCE; Schema: public; Owner: default
--

CREATE SEQUENCE public."Skill_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Skill_id_seq" OWNER TO "default";

--
-- Name: Skill_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: default
--

ALTER SEQUENCE public."Skill_id_seq" OWNED BY public."Skill".id;


--
-- Name: SocialNetwork; Type: TABLE; Schema: public; Owner: default
--

CREATE TABLE public."SocialNetwork" (
    id integer NOT NULL,
    linkedin text,
    github text,
    x text,
    facebook text,
    youtube text,
    website text,
    instgram text,
    pinterest text,
    reddit text,
    "tikTok" text,
    snapchat text,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL
);


ALTER TABLE public."SocialNetwork" OWNER TO "default";

--
-- Name: SocialNetwork_id_seq; Type: SEQUENCE; Schema: public; Owner: default
--

CREATE SEQUENCE public."SocialNetwork_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."SocialNetwork_id_seq" OWNER TO "default";

--
-- Name: SocialNetwork_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: default
--

ALTER SEQUENCE public."SocialNetwork_id_seq" OWNED BY public."SocialNetwork".id;


--
-- Name: Step; Type: TABLE; Schema: public; Owner: default
--

CREATE TABLE public."Step" (
    id integer NOT NULL,
    name text NOT NULL,
    description text,
    sequence integer,
    image text,
    icon text,
    "phaseId" integer NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL,
    "descriptionAr" text,
    "nameAr" text
);


ALTER TABLE public."Step" OWNER TO "default";

--
-- Name: Step_id_seq; Type: SEQUENCE; Schema: public; Owner: default
--

CREATE SEQUENCE public."Step_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Step_id_seq" OWNER TO "default";

--
-- Name: Step_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: default
--

ALTER SEQUENCE public."Step_id_seq" OWNED BY public."Step".id;


--
-- Name: Subscription; Type: TABLE; Schema: public; Owner: default
--

CREATE TABLE public."Subscription" (
    id integer NOT NULL,
    "userId" text NOT NULL,
    "planId" integer NOT NULL,
    "startDate" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "endDate" timestamp(3) without time zone,
    status public."SubscriptionStatus" DEFAULT 'ACTIVE'::public."SubscriptionStatus" NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL
);


ALTER TABLE public."Subscription" OWNER TO "default";

--
-- Name: Subscription_id_seq; Type: SEQUENCE; Schema: public; Owner: default
--

CREATE SEQUENCE public."Subscription_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Subscription_id_seq" OWNER TO "default";

--
-- Name: Subscription_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: default
--

ALTER SEQUENCE public."Subscription_id_seq" OWNED BY public."Subscription".id;


--
-- Name: Tag; Type: TABLE; Schema: public; Owner: default
--

CREATE TABLE public."Tag" (
    id integer NOT NULL,
    name text NOT NULL,
    slug text NOT NULL,
    image text,
    icon text,
    description text,
    "userId" text NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "descriptionAr" text,
    "nameAr" text,
    "SubTitle" text,
    "SubTitleAr" text,
    "TitleAr" text,
    title text
);


ALTER TABLE public."Tag" OWNER TO "default";

--
-- Name: Tag_id_seq; Type: SEQUENCE; Schema: public; Owner: default
--

CREATE SEQUENCE public."Tag_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Tag_id_seq" OWNER TO "default";

--
-- Name: Tag_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: default
--

ALTER SEQUENCE public."Tag_id_seq" OWNED BY public."Tag".id;


--
-- Name: Task; Type: TABLE; Schema: public; Owner: default
--

CREATE TABLE public."Task" (
    id integer NOT NULL,
    name text NOT NULL,
    description text,
    priority text,
    "dueDate" timestamp(3) without time zone,
    "estimatedHours" double precision,
    "actualHours" double precision,
    "startDate" timestamp(3) without time zone,
    "endDate" timestamp(3) without time zone,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL,
    "completedAt" timestamp(3) without time zone,
    "projectId" text NOT NULL,
    icon text,
    image text,
    progress integer,
    status public."TaskStatus"
);


ALTER TABLE public."Task" OWNER TO "default";

--
-- Name: Task_id_seq; Type: SEQUENCE; Schema: public; Owner: default
--

CREATE SEQUENCE public."Task_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Task_id_seq" OWNER TO "default";

--
-- Name: Task_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: default
--

ALTER SEQUENCE public."Task_id_seq" OWNED BY public."Task".id;


--
-- Name: Team; Type: TABLE; Schema: public; Owner: default
--

CREATE TABLE public."Team" (
    id integer NOT NULL,
    name text NOT NULL,
    icon text,
    image text,
    description text,
    status text,
    "departmentId" integer,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL,
    "locationId" integer
);


ALTER TABLE public."Team" OWNER TO "default";

--
-- Name: TeamEmployee; Type: TABLE; Schema: public; Owner: default
--

CREATE TABLE public."TeamEmployee" (
    "employeeId" integer NOT NULL,
    "teamId" integer NOT NULL
);


ALTER TABLE public."TeamEmployee" OWNER TO "default";

--
-- Name: Team_id_seq; Type: SEQUENCE; Schema: public; Owner: default
--

CREATE SEQUENCE public."Team_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Team_id_seq" OWNER TO "default";

--
-- Name: Team_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: default
--

ALTER SEQUENCE public."Team_id_seq" OWNED BY public."Team".id;


--
-- Name: Testimonial; Type: TABLE; Schema: public; Owner: default
--

CREATE TABLE public."Testimonial" (
    id integer NOT NULL,
    content text,
    rating double precision DEFAULT 0,
    "videoContent" text,
    "customerId" text,
    "serviceId" integer,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL,
    image text,
    published boolean DEFAULT false,
    response text,
    title text,
    "userId" text,
    verified boolean DEFAULT false,
    "contentAr" text,
    "titleAr" text
);


ALTER TABLE public."Testimonial" OWNER TO "default";

--
-- Name: TestimonialCategory; Type: TABLE; Schema: public; Owner: default
--

CREATE TABLE public."TestimonialCategory" (
    "testimonialId" integer NOT NULL,
    "categoryId" integer NOT NULL
);


ALTER TABLE public."TestimonialCategory" OWNER TO "default";

--
-- Name: TestimonialTag; Type: TABLE; Schema: public; Owner: default
--

CREATE TABLE public."TestimonialTag" (
    "testimonialId" integer NOT NULL,
    "tagId" integer NOT NULL
);


ALTER TABLE public."TestimonialTag" OWNER TO "default";

--
-- Name: Testimonial_id_seq; Type: SEQUENCE; Schema: public; Owner: default
--

CREATE SEQUENCE public."Testimonial_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Testimonial_id_seq" OWNER TO "default";

--
-- Name: Testimonial_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: default
--

ALTER SEQUENCE public."Testimonial_id_seq" OWNED BY public."Testimonial".id;


--
-- Name: Tool; Type: TABLE; Schema: public; Owner: default
--

CREATE TABLE public."Tool" (
    id integer NOT NULL,
    name text NOT NULL,
    slug text NOT NULL,
    description text,
    image text,
    icon text,
    "userId" text NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL,
    "descriptionAr" text,
    "nameAr" text
);


ALTER TABLE public."Tool" OWNER TO "default";

--
-- Name: Tool_id_seq; Type: SEQUENCE; Schema: public; Owner: default
--

CREATE SEQUENCE public."Tool_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Tool_id_seq" OWNER TO "default";

--
-- Name: Tool_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: default
--

ALTER SEQUENCE public."Tool_id_seq" OWNED BY public."Tool".id;


--
-- Name: Vendor; Type: TABLE; Schema: public; Owner: default
--

CREATE TABLE public."Vendor" (
    id text NOT NULL,
    name text NOT NULL,
    slug text NOT NULL,
    description text,
    logo text,
    website text,
    email text,
    phone text,
    address text,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL
);


ALTER TABLE public."Vendor" OWNER TO "default";

--
-- Name: VerificationToken; Type: TABLE; Schema: public; Owner: default
--

CREATE TABLE public."VerificationToken" (
    identifier text NOT NULL,
    token text NOT NULL,
    expires timestamp(3) without time zone NOT NULL
);


ALTER TABLE public."VerificationToken" OWNER TO "default";

--
-- Name: Work; Type: TABLE; Schema: public; Owner: default
--

CREATE TABLE public."Work" (
    id integer NOT NULL,
    title text NOT NULL,
    description text,
    "imageUrls" text[] DEFAULT ARRAY[]::text[],
    "serviceId" integer,
    "locationId" integer,
    client text,
    highlights text,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL,
    "userId" text NOT NULL,
    icon text,
    image text,
    "workUrl" text,
    "clientAr" text,
    "descriptionAr" text,
    "highlightsAr" text,
    "titleAr" text
);


ALTER TABLE public."Work" OWNER TO "default";

--
-- Name: WorkCategory; Type: TABLE; Schema: public; Owner: default
--

CREATE TABLE public."WorkCategory" (
    "workId" integer NOT NULL,
    "categoryId" integer NOT NULL
);


ALTER TABLE public."WorkCategory" OWNER TO "default";

--
-- Name: WorkTag; Type: TABLE; Schema: public; Owner: default
--

CREATE TABLE public."WorkTag" (
    "workId" integer NOT NULL,
    "tagId" integer NOT NULL
);


ALTER TABLE public."WorkTag" OWNER TO "default";

--
-- Name: WorkTool; Type: TABLE; Schema: public; Owner: default
--

CREATE TABLE public."WorkTool" (
    "workId" integer NOT NULL,
    "toolId" integer NOT NULL
);


ALTER TABLE public."WorkTool" OWNER TO "default";

--
-- Name: Work_id_seq; Type: SEQUENCE; Schema: public; Owner: default
--

CREATE SEQUENCE public."Work_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Work_id_seq" OWNER TO "default";

--
-- Name: Work_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: default
--

ALTER SEQUENCE public."Work_id_seq" OWNED BY public."Work".id;


--
-- Name: _CategoryToClient; Type: TABLE; Schema: public; Owner: default
--

CREATE TABLE public."_CategoryToClient" (
    "A" integer NOT NULL,
    "B" text NOT NULL
);


ALTER TABLE public."_CategoryToClient" OWNER TO "default";

--
-- Name: _CategoryToIndustry; Type: TABLE; Schema: public; Owner: default
--

CREATE TABLE public."_CategoryToIndustry" (
    "A" integer NOT NULL,
    "B" integer NOT NULL
);


ALTER TABLE public."_CategoryToIndustry" OWNER TO "default";

--
-- Name: _CategoryToOrder; Type: TABLE; Schema: public; Owner: default
--

CREATE TABLE public."_CategoryToOrder" (
    "A" integer NOT NULL,
    "B" text NOT NULL
);


ALTER TABLE public."_CategoryToOrder" OWNER TO "default";

--
-- Name: _CategoryToPhase; Type: TABLE; Schema: public; Owner: default
--

CREATE TABLE public."_CategoryToPhase" (
    "A" integer NOT NULL,
    "B" integer NOT NULL
);


ALTER TABLE public."_CategoryToPhase" OWNER TO "default";

--
-- Name: _CategoryToProduct; Type: TABLE; Schema: public; Owner: default
--

CREATE TABLE public."_CategoryToProduct" (
    "A" integer NOT NULL,
    "B" text NOT NULL
);


ALTER TABLE public."_CategoryToProduct" OWNER TO "default";

--
-- Name: _CategoryToProject; Type: TABLE; Schema: public; Owner: default
--

CREATE TABLE public."_CategoryToProject" (
    "A" integer NOT NULL,
    "B" text NOT NULL
);


ALTER TABLE public."_CategoryToProject" OWNER TO "default";

--
-- Name: _CategoryToTool; Type: TABLE; Schema: public; Owner: default
--

CREATE TABLE public."_CategoryToTool" (
    "A" integer NOT NULL,
    "B" integer NOT NULL
);


ALTER TABLE public."_CategoryToTool" OWNER TO "default";

--
-- Name: _ClientToService; Type: TABLE; Schema: public; Owner: default
--

CREATE TABLE public."_ClientToService" (
    "A" text NOT NULL,
    "B" integer NOT NULL
);


ALTER TABLE public."_ClientToService" OWNER TO "default";

--
-- Name: _ClientToWork; Type: TABLE; Schema: public; Owner: default
--

CREATE TABLE public."_ClientToWork" (
    "A" text NOT NULL,
    "B" integer NOT NULL
);


ALTER TABLE public."_ClientToWork" OWNER TO "default";

--
-- Name: _IndustryToPost; Type: TABLE; Schema: public; Owner: default
--

CREATE TABLE public."_IndustryToPost" (
    "A" integer NOT NULL,
    "B" text NOT NULL
);


ALTER TABLE public."_IndustryToPost" OWNER TO "default";

--
-- Name: _IndustryToService; Type: TABLE; Schema: public; Owner: default
--

CREATE TABLE public."_IndustryToService" (
    "A" integer NOT NULL,
    "B" integer NOT NULL
);


ALTER TABLE public."_IndustryToService" OWNER TO "default";

--
-- Name: _IndustryToWork; Type: TABLE; Schema: public; Owner: default
--

CREATE TABLE public."_IndustryToWork" (
    "A" integer NOT NULL,
    "B" integer NOT NULL
);


ALTER TABLE public."_IndustryToWork" OWNER TO "default";

--
-- Name: _LocationToOffer; Type: TABLE; Schema: public; Owner: default
--

CREATE TABLE public."_LocationToOffer" (
    "A" integer NOT NULL,
    "B" text NOT NULL
);


ALTER TABLE public."_LocationToOffer" OWNER TO "default";

--
-- Name: _LocationToProduct; Type: TABLE; Schema: public; Owner: default
--

CREATE TABLE public."_LocationToProduct" (
    "A" integer NOT NULL,
    "B" text NOT NULL
);


ALTER TABLE public."_LocationToProduct" OWNER TO "default";

--
-- Name: _LocationToService; Type: TABLE; Schema: public; Owner: default
--

CREATE TABLE public."_LocationToService" (
    "A" integer NOT NULL,
    "B" integer NOT NULL
);


ALTER TABLE public."_LocationToService" OWNER TO "default";

--
-- Name: _OfferToService; Type: TABLE; Schema: public; Owner: default
--

CREATE TABLE public."_OfferToService" (
    "A" text NOT NULL,
    "B" integer NOT NULL
);


ALTER TABLE public."_OfferToService" OWNER TO "default";

--
-- Name: _PackageToPlanCategory; Type: TABLE; Schema: public; Owner: default
--

CREATE TABLE public."_PackageToPlanCategory" (
    "A" integer NOT NULL,
    "B" integer NOT NULL
);


ALTER TABLE public."_PackageToPlanCategory" OWNER TO "default";

--
-- Name: _PackageToService; Type: TABLE; Schema: public; Owner: default
--

CREATE TABLE public."_PackageToService" (
    "A" integer NOT NULL,
    "B" integer NOT NULL
);


ALTER TABLE public."_PackageToService" OWNER TO "default";

--
-- Name: _PermissionToRole; Type: TABLE; Schema: public; Owner: default
--

CREATE TABLE public."_PermissionToRole" (
    "A" integer NOT NULL,
    "B" integer NOT NULL
);


ALTER TABLE public."_PermissionToRole" OWNER TO "default";

--
-- Name: _PhaseToService; Type: TABLE; Schema: public; Owner: default
--

CREATE TABLE public."_PhaseToService" (
    "A" integer NOT NULL,
    "B" integer NOT NULL
);


ALTER TABLE public."_PhaseToService" OWNER TO "default";

--
-- Name: _PlanToPlanCategory; Type: TABLE; Schema: public; Owner: default
--

CREATE TABLE public."_PlanToPlanCategory" (
    "A" integer NOT NULL,
    "B" integer NOT NULL
);


ALTER TABLE public."_PlanToPlanCategory" OWNER TO "default";

--
-- Name: _PlanToService; Type: TABLE; Schema: public; Owner: default
--

CREATE TABLE public."_PlanToService" (
    "A" integer NOT NULL,
    "B" integer NOT NULL
);


ALTER TABLE public."_PlanToService" OWNER TO "default";

--
-- Name: _PostToPostCategory; Type: TABLE; Schema: public; Owner: default
--

CREATE TABLE public."_PostToPostCategory" (
    "A" text NOT NULL,
    "B" integer NOT NULL
);


ALTER TABLE public."_PostToPostCategory" OWNER TO "default";

--
-- Name: _PostToTool; Type: TABLE; Schema: public; Owner: default
--

CREATE TABLE public."_PostToTool" (
    "A" text NOT NULL,
    "B" integer NOT NULL
);


ALTER TABLE public."_PostToTool" OWNER TO "default";

--
-- Name: _ProductToService; Type: TABLE; Schema: public; Owner: default
--

CREATE TABLE public."_ProductToService" (
    "A" text NOT NULL,
    "B" integer NOT NULL
);


ALTER TABLE public."_ProductToService" OWNER TO "default";

--
-- Name: _ProductToTag; Type: TABLE; Schema: public; Owner: default
--

CREATE TABLE public."_ProductToTag" (
    "A" text NOT NULL,
    "B" integer NOT NULL
);


ALTER TABLE public."_ProductToTag" OWNER TO "default";

--
-- Name: _ProjectToTool; Type: TABLE; Schema: public; Owner: default
--

CREATE TABLE public."_ProjectToTool" (
    "A" text NOT NULL,
    "B" integer NOT NULL
);


ALTER TABLE public."_ProjectToTool" OWNER TO "default";

--
-- Name: _RoleToUser; Type: TABLE; Schema: public; Owner: default
--

CREATE TABLE public."_RoleToUser" (
    "A" integer NOT NULL,
    "B" text NOT NULL
);


ALTER TABLE public."_RoleToUser" OWNER TO "default";

--
-- Name: _ServiceToServiceFeature; Type: TABLE; Schema: public; Owner: default
--

CREATE TABLE public."_ServiceToServiceFeature" (
    "A" integer NOT NULL,
    "B" integer NOT NULL
);


ALTER TABLE public."_ServiceToServiceFeature" OWNER TO "default";

--
-- Name: _TaskToUser; Type: TABLE; Schema: public; Owner: default
--

CREATE TABLE public."_TaskToUser" (
    "A" integer NOT NULL,
    "B" text NOT NULL
);


ALTER TABLE public."_TaskToUser" OWNER TO "default";

--
-- Name: _prisma_migrations; Type: TABLE; Schema: public; Owner: default
--

CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);


ALTER TABLE public._prisma_migrations OWNER TO "default";

--
-- Name: users; Type: TABLE; Schema: public; Owner: default
--

CREATE TABLE public.users (
    id text NOT NULL,
    user_name text,
    email text,
    password text NOT NULL,
    phone text NOT NULL,
    confirmed_password text NOT NULL,
    created_at timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at timestamp(3) without time zone NOT NULL,
    "emailVerified" timestamp(3) without time zone,
    image text,
    role text,
    "clientId" text
);


ALTER TABLE public.users OWNER TO "default";

--
-- Name: AboutUsSection id; Type: DEFAULT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."AboutUsSection" ALTER COLUMN id SET DEFAULT nextval('public."AboutUsSection_id_seq"'::regclass);


--
-- Name: AdminMenu id; Type: DEFAULT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."AdminMenu" ALTER COLUMN id SET DEFAULT nextval('public."AdminMenu_id_seq"'::regclass);


--
-- Name: Category id; Type: DEFAULT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."Category" ALTER COLUMN id SET DEFAULT nextval('public."Category_id_seq"'::regclass);


--
-- Name: CompanyMenu id; Type: DEFAULT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."CompanyMenu" ALTER COLUMN id SET DEFAULT nextval('public."CompanyMenu_id_seq"'::regclass);


--
-- Name: Department id; Type: DEFAULT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."Department" ALTER COLUMN id SET DEFAULT nextval('public."Department_id_seq"'::regclass);


--
-- Name: Element id; Type: DEFAULT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."Element" ALTER COLUMN id SET DEFAULT nextval('public."Element_id_seq"'::regclass);


--
-- Name: EmployeeProfile id; Type: DEFAULT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."EmployeeProfile" ALTER COLUMN id SET DEFAULT nextval('public."EmployeeProfile_id_seq"'::regclass);


--
-- Name: Explore id; Type: DEFAULT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."Explore" ALTER COLUMN id SET DEFAULT nextval('public."Explore_id_seq"'::regclass);


--
-- Name: Feature id; Type: DEFAULT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."Feature" ALTER COLUMN id SET DEFAULT nextval('public."Feature_id_seq"'::regclass);


--
-- Name: HeroSection id; Type: DEFAULT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."HeroSection" ALTER COLUMN id SET DEFAULT nextval('public."HeroSection_id_seq"'::regclass);


--
-- Name: Industry id; Type: DEFAULT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."Industry" ALTER COLUMN id SET DEFAULT nextval('public."Industry_id_seq"'::regclass);


--
-- Name: Location id; Type: DEFAULT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."Location" ALTER COLUMN id SET DEFAULT nextval('public."Location_id_seq"'::regclass);


--
-- Name: Market id; Type: DEFAULT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."Market" ALTER COLUMN id SET DEFAULT nextval('public."Market_id_seq"'::regclass);


--
-- Name: MenuParent id; Type: DEFAULT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."MenuParent" ALTER COLUMN id SET DEFAULT nextval('public."MenuParent_id_seq"'::regclass);


--
-- Name: Package id; Type: DEFAULT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."Package" ALTER COLUMN id SET DEFAULT nextval('public."Package_id_seq"'::regclass);


--
-- Name: PackageFeature id; Type: DEFAULT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."PackageFeature" ALTER COLUMN id SET DEFAULT nextval('public."PackageFeature_id_seq"'::regclass);


--
-- Name: PackageFeatureLink id; Type: DEFAULT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."PackageFeatureLink" ALTER COLUMN id SET DEFAULT nextval('public."PackageFeatureLink_id_seq"'::regclass);


--
-- Name: Page id; Type: DEFAULT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."Page" ALTER COLUMN id SET DEFAULT nextval('public."Page_id_seq"'::regclass);


--
-- Name: PageSection id; Type: DEFAULT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."PageSection" ALTER COLUMN id SET DEFAULT nextval('public."PageSection_id_seq"'::regclass);


--
-- Name: Partner id; Type: DEFAULT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."Partner" ALTER COLUMN id SET DEFAULT nextval('public."Partner_id_seq"'::regclass);


--
-- Name: Permission id; Type: DEFAULT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."Permission" ALTER COLUMN id SET DEFAULT nextval('public."Permission_id_seq"'::regclass);


--
-- Name: Phase id; Type: DEFAULT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."Phase" ALTER COLUMN id SET DEFAULT nextval('public."Phase_id_seq"'::regclass);


--
-- Name: Plan id; Type: DEFAULT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."Plan" ALTER COLUMN id SET DEFAULT nextval('public."Plan_id_seq"'::regclass);


--
-- Name: PlanCategory id; Type: DEFAULT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."PlanCategory" ALTER COLUMN id SET DEFAULT nextval('public."PlanCategory_id_seq"'::regclass);


--
-- Name: PostCategory id; Type: DEFAULT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."PostCategory" ALTER COLUMN id SET DEFAULT nextval('public."PostCategory_id_seq"'::regclass);


--
-- Name: Role id; Type: DEFAULT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."Role" ALTER COLUMN id SET DEFAULT nextval('public."Role_id_seq"'::regclass);


--
-- Name: Service id; Type: DEFAULT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."Service" ALTER COLUMN id SET DEFAULT nextval('public."Service_id_seq"'::regclass);


--
-- Name: ServiceCode id; Type: DEFAULT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."ServiceCode" ALTER COLUMN id SET DEFAULT nextval('public."ServiceCode_id_seq"'::regclass);


--
-- Name: ServiceFeature id; Type: DEFAULT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."ServiceFeature" ALTER COLUMN id SET DEFAULT nextval('public."ServiceFeature_id_seq"'::regclass);


--
-- Name: Skill id; Type: DEFAULT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."Skill" ALTER COLUMN id SET DEFAULT nextval('public."Skill_id_seq"'::regclass);


--
-- Name: SocialNetwork id; Type: DEFAULT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."SocialNetwork" ALTER COLUMN id SET DEFAULT nextval('public."SocialNetwork_id_seq"'::regclass);


--
-- Name: Step id; Type: DEFAULT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."Step" ALTER COLUMN id SET DEFAULT nextval('public."Step_id_seq"'::regclass);


--
-- Name: Subscription id; Type: DEFAULT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."Subscription" ALTER COLUMN id SET DEFAULT nextval('public."Subscription_id_seq"'::regclass);


--
-- Name: Tag id; Type: DEFAULT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."Tag" ALTER COLUMN id SET DEFAULT nextval('public."Tag_id_seq"'::regclass);


--
-- Name: Task id; Type: DEFAULT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."Task" ALTER COLUMN id SET DEFAULT nextval('public."Task_id_seq"'::regclass);


--
-- Name: Team id; Type: DEFAULT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."Team" ALTER COLUMN id SET DEFAULT nextval('public."Team_id_seq"'::regclass);


--
-- Name: Testimonial id; Type: DEFAULT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."Testimonial" ALTER COLUMN id SET DEFAULT nextval('public."Testimonial_id_seq"'::regclass);


--
-- Name: Tool id; Type: DEFAULT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."Tool" ALTER COLUMN id SET DEFAULT nextval('public."Tool_id_seq"'::regclass);


--
-- Name: Work id; Type: DEFAULT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."Work" ALTER COLUMN id SET DEFAULT nextval('public."Work_id_seq"'::regclass);


--
-- Data for Name: AboutUsSection; Type: TABLE DATA; Schema: public; Owner: default
--

COPY public."AboutUsSection" (id, name, title, "titleAr", "desc", "descAr", more, "moreAr", url, "isActive", "createdAt", "updatedAt", "userId", image, "topTitlAr", "topTitle") FROM stdin;
2	homePage	Trunning Creativity Thinking into Information	تحويل التفكير الإبداعي إلى معلومات	Free Download Right Arrow 251 SVG vector file in monocolor and multicolor type for Sketch and Figma from Right Arrow 251 Vectors svg vector collection for Sketch and Figma from Right Arrow 251 Vectors svg vector for Sketch and Figma from Right Arrow 251"	تحميل مجاني لملف SVG السهم الأيمن 251 بتنسيق أحادي اللون ومتعدد الألوان لبرنامج Sketch و Figma من مجموعة السهم الأيمن 251 Vectors بتنسيق SVG لبرنامج Sketch و Figma من مجموعة السهم الأيمن 251 Vectors بتنسيق SVG لبرنامج Sketch و Figma من مجموعة السهم الأيمن 251	more	المزيد 	https://www.youtube.com/	t	2024-09-27 00:54:03.666	2024-09-27 00:54:03.666	clyhm29ou0000dnteppm9du5n	/front/about/images/c10bf5ec-4ec1-49a0-8a4b-8d4e0a7ef269-8.jpg	عن الشركة	About US
\.


--
-- Data for Name: Account; Type: TABLE DATA; Schema: public; Owner: default
--

COPY public."Account" (id, "userId", type, provider, "providerAccountId", refresh_token, access_token, expires_at, token_type, scope, id_token, session_state) FROM stdin;
\.


--
-- Data for Name: AdminMenu; Type: TABLE DATA; Schema: public; Owner: default
--

COPY public."AdminMenu" (id, title, description, icon, "userId", "createdAt", "updatedAt", "menuParentId", "descriptionAr", "titleAr", "menuType") FROM stdin;
13	Project Panel	\N	/codes/images/f5dfa2a9-a53e-4492-a7fd-21ca9a14a83d-20.svg	clyhm29ou0000dnteppm9du5n	2024-09-02 09:30:58.869	2024-09-02 09:30:58.869	4	\N	\N	\N
14	Blog Dashboard	\N	/codes/images/7cc146f5-aa5b-482a-bf7e-8450f380be6a-24.svg	clyhm29ou0000dnteppm9du5n	2024-09-02 09:42:31.141	2024-09-02 09:42:31.141	6	\N	\N	\N
16	Invoice Panel	\N	/codes/images/052c0bd9-dc59-46a3-826d-e0b6f1627d72-21.svg	clyhm29ou0000dnteppm9du5n	2024-09-02 09:55:30.149	2024-09-02 09:55:30.149	5	\N	\N	\N
17	Product dashboard	\N	/codes/images/0e2d3cb4-374a-4fd5-a333-c27690d57ce8-20.svg	clyhm29ou0000dnteppm9du5n	2024-09-02 10:10:29.175	2024-09-02 10:10:29.175	3	\N	\N	\N
18	Roles	\N	/codes/images/53e2e1c6-80de-43a8-b2ab-06ab63f57eb2-20.svg	clyhm29ou0000dnteppm9du5n	2024-09-02 10:27:03.789	2024-09-02 10:27:03.789	7	\N	\N	\N
23	Orders	\N	/codes/images/c51a6b7d-2bc0-4641-933f-86416fddea9e-42.svg	clyhm29ou0000dnteppm9du5n	2024-09-06 07:36:29.945	2024-09-06 07:36:29.945	4	\N	\N	\N
24	Mobile Services	\N	/codes/images/a77e97b0-8bd2-4042-aa73-c3d86fce793c-basic9.svg	clyhm29ou0000dnteppm9du5n	2024-09-24 00:41:09.918	2024-09-24 00:41:09.918	8	وصف	خدمات الموبايل	front
53	Design & Prototyping Tools 	\N	/menus-media/icons/logo30.svg	clyhm29ou0000dnteppm9du5n	2024-11-12 16:25:46.092	2024-11-12 16:26:21.51	12	\N	أدوات التصميم والنماذج الأولية	front
27	Cards Desing	\N	/codes/images/84af5b32-9350-47e6-a395-56134ee4e5b4-basic14.svg	clyhm29ou0000dnteppm9du5n	2024-09-24 21:00:43.781	2024-09-24 21:00:43.781	10	تصاميم الكروت	تصاميم الكروت	front
28	Digital Marketing 	\N	/codes/images/2df8b5f4-cda8-4eb3-b393-7d281d20dd52-basic13.svg	clyhm29ou0000dnteppm9du5n	2024-09-24 21:30:49.406	2024-09-24 21:30:49.406	11	التسويق الالكنروني	التسويق الالكنروني	front
58	Web Development Plans 	\N	/menus-media/icons/logo44.svg	clyhm29ou0000dnteppm9du5n	2024-11-13 16:40:37.38	2024-11-13 16:33:10.735	14	\N	اشنراكات  تطوير الويب	front
29	Java Tech	\N	/codes/images/248c9be6-57d6-4083-afcc-4699642ae2d8-basic8.svg	clyhm29ou0000dnteppm9du5n	2024-09-24 23:31:53.683	2024-11-12 17:08:38.817	12	Java Tech	تقنيات لغة جافا	front
25	Web Design works	\N	/codes/images/25e9d2d8-1785-4e61-be48-2254634833de-basic7.svg	clyhm29ou0000dnteppm9du5n	2024-09-24 19:37:39.976	2024-11-11 14:42:34.042	9	تصاميم الويب 	تصاميم الويب 	front
33	Industries	\N	/menus-media/icons/13.svg	clyhm29ou0000dnteppm9du5n	2024-10-26 23:35:33.416	2024-11-13 14:10:57.478	15	\N	مجالات  	front
32	gtrgtr	\N	/menus-media/icons/11.svg	clyhm29ou0000dnteppm9du5n	2024-10-07 06:48:47.501	2024-11-10 03:58:21.359	13	refrefre	خدمات الشركة	fr
41	Web Solutions	\N	/menus-media/icons/basic13.svg	clyhm29ou0000dnteppm9du5n	2024-11-12 03:32:53.185	2024-11-12 03:30:58.526	10	\N	منتجات حلول الويب	front
42	Design & Branding	\N	/menus-media/icons/basic11.svg	clyhm29ou0000dnteppm9du5n	2024-11-12 03:38:53.202	2024-11-12 03:37:42.318	10	\N	التصميم والعلامة التجارية	front
43	Digital Marketing Tools	\N	/menus-media/icons/basic7.svg	clyhm29ou0000dnteppm9du5n	2024-11-12 03:43:36.608	2024-11-12 03:41:58.597	10	\N	أدوات التسويق الرقمي	front
37	Content Creation	\N	/menus-media/icons/feature8.svg	clyhm29ou0000dnteppm9du5n	2024-11-11 08:20:35.273	2024-11-11 10:00:40.522	8	\N	أنشاء وادارة المحتوى	front
44	Web Application Products	\N	/menus-media/icons/feature8.svg	clyhm29ou0000dnteppm9du5n	2024-11-12 04:08:19.118	2024-11-12 04:07:03.22	10	\N	خدمات تطبيقات الويب	front
45	Digital Marketing Essentials	\N	/menus-media/icons/logo20.svg	clyhm29ou0000dnteppm9du5n	2024-11-12 06:02:22.086	2024-11-12 06:00:30.519	11	\N	أساسيات التسويق الرقمي	front
36	Graphic Design	\N	/menus-media/icons/feature17.svg	clyhm29ou0000dnteppm9du5n	2024-11-11 08:03:36.699	2024-11-11 10:04:50.456	8	\N	تصميم الجرافيكس	front
35	web development	\N	/menus-media/icons/feature13.svg	clyhm29ou0000dnteppm9du5n	2024-11-11 07:50:37.002	2024-11-11 10:04:50.456	8	\N	خدمات تطوير الويب	front
26	Video Production	\N	/codes/images/c67278a5-9f95-4aac-94f9-18bf4e8a1424-basic9.svg	clyhm29ou0000dnteppm9du5n	2024-09-24 20:02:56.329	2024-11-11 13:23:04.043	9	تطبيقات الموبايل	إنتاج الفيديو	front
46	Business & Productivity Skills 	\N	/menus-media/icons/logo21.svg	clyhm29ou0000dnteppm9du5n	2024-11-12 06:07:58.136	2024-11-12 06:10:49.692	11	\N	مهارات الأعمال والإنتاجية	front
38	UI/UX Design	\N	/menus-media/icons/basic7.svg	clyhm29ou0000dnteppm9du5n	2024-11-11 13:29:07.342	2024-11-11 14:09:46.213	9	\N	تصميم واجهة وتجربة المستخدم	front
39	Branding and Identity	\N	/menus-media/icons/basic11.svg	clyhm29ou0000dnteppm9du5n	2024-11-11 14:24:00.068	2024-11-11 14:28:21.168	9	\N	العلامة التجارية والهوية	front
40	Digital Marketing	\N	/menus-media/icons/basic13.svg	clyhm29ou0000dnteppm9du5n	2024-11-11 14:30:59.621	2024-11-11 14:35:27.815	9	\N	التسويق الرقمي	front
47	Personal & Professional Development 	\N	/menus-media/icons/logo22.svg	clyhm29ou0000dnteppm9du5n	2024-11-12 06:10:38.232	2024-11-12 06:11:02.484	11	\N	التطوير الشخصي والمهني	front
48	Software & Tools Essentials 	\N	/menus-media/icons/logo24.svg	clyhm29ou0000dnteppm9du5n	2024-11-12 06:14:21.916	2024-11-12 06:13:34.781	11	\N	أساسيات البرمجيات والأدوات	front
49	Remote Work & Digital Collaboration 	\N	/menus-media/icons/logo25.svg	clyhm29ou0000dnteppm9du5n	2024-11-12 06:40:40.905	2024-11-12 06:39:45.581	11	\N	العمل عن بعد والتعاون الرقمي	front
50	Web Development Frameworks 	\N	/menus-media/icons/logo26.svg	clyhm29ou0000dnteppm9du5n	2024-11-12 13:22:29.922	2024-11-12 13:21:27.795	12	\N	أطر تطوير الويب	front
51	Backend & Server-Side Technologies 	\N	/menus-media/icons/logo28.svg	clyhm29ou0000dnteppm9du5n	2024-11-12 13:36:22.962	2024-11-12 13:34:34.556	12	\N	 Backend تقنيات الخوادم	front
52	Backend Frameworks	\N	/menus-media/icons/logo29.svg	clyhm29ou0000dnteppm9du5n	2024-11-12 13:40:32.084	2024-11-12 13:39:23.191	12	\N	Backend Frameworks	front
54	Database Systems 	\N	/menus-media/icons/logo32.svg	clyhm29ou0000dnteppm9du5n	2024-11-12 17:13:47.886	2024-11-12 18:04:24.553	12	\N	نظم قواعد البيانات	front
56	Graphic Design Offers	\N	/menus-media/icons/logo39.svg	clyhm29ou0000dnteppm9du5n	2024-11-13 13:48:56.665	2024-11-13 13:47:13.1	13	\N	عروض التصميم الجرافيكي	front
55	Web Development Offers 	\N	/menus-media/icons/logo38.svg	clyhm29ou0000dnteppm9du5n	2024-11-13 13:44:52.703	2024-11-13 13:48:56.665	13	\N	عروض تطوير الويب	front
30	Our Offers	\N	/menus-media/icons/logo41.svg	clyhm29ou0000dnteppm9du5n	2024-10-07 06:30:32.156	2024-11-13 14:05:29.616	13	اليغثليفث	عروض مخصصة للمتاجر	front
57	Content Creation Offers 	\N	/menus-media/icons/logo41.svg	clyhm29ou0000dnteppm9du5n	2024-11-13 13:55:10.976	2024-11-13 15:16:15.172	13	\N	عروض إنشاء المحتوى	front
59	Digital Marketing Plans	\N	/menus-media/icons/logo45.svg	clyhm29ou0000dnteppm9du5n	2024-11-13 16:50:53.124	2024-11-13 16:49:25.604	14	\N	 إشتراكات التسويق الرقمي	front
61	Content Creation Plans 	\N	/menus-media/icons/logo47.svg	clyhm29ou0000dnteppm9du5n	2024-11-13 16:58:25.957	2024-11-13 16:57:22.851	14	\N	إشتراكات إنشاء المحتوى	front
60	Graphic Design Plans 	\N	/menus-media/icons/logo46.svg	clyhm29ou0000dnteppm9du5n	2024-11-13 16:54:30.356	2024-11-13 17:10:34.25	14	\N	إشتراكات التصميم الجرافيكي	front
\.


--
-- Data for Name: BillingInfo; Type: TABLE DATA; Schema: public; Owner: default
--

COPY public."BillingInfo" (id, address, city, country, "postalCode", "orderId") FROM stdin;
\.


--
-- Data for Name: Category; Type: TABLE DATA; Schema: public; Owner: default
--

COPY public."Category" (id, name, image, icon, description, slug, "userId", "createdAt", "updatedAt", "descriptionAr", "nameAr", "SubTitle", "SubTitleAr", "TitleAr", title) FROM stdin;
52	Graphic designing	/category-media/images/graphic.png	/categories/icons/58990624-7e0e-4e47-81f3-f3d614e1fc2a-basic8.svg	Graphic designing involves crafting visually appealing designs that communicate your brand's message effectively. Our team creates logos, marketing materials, and digital assets that enhance your visual identity. Whether it's for print or digital platforms, we deliver creative solutions that leave a lasting impression.	graphic-designing	clyhm29ou0000dnteppm9du5n	2024-09-23 17:43:29.072	2025-01-11 05:07:42.283	تصميم الجرافيك يشمل ابتكار تصاميم بصرية جذابة تنقل رسالة علامتك التجارية بفعالية. يقوم فريقنا بإنشاء الشعارات، والمواد التسويقية، والأصول الرقمية التي تعزز هويتك البصرية. سواء كان ذلك للطباعة أو المنصات الرقمية، نقدم حلولاً إبداعية تترك انطباعاً دائماً.	تصميم الجرافيك	Creating logos, marketing materials, and digital assets that enhance your visual identity. Whether for print or digital platforms, we offer creative solutions	إنشاء الشعارات، والمواد التسويقية، والأصول الرقمية التي تعزز هويتك البصرية. سواء كان ذلك للطباعة أو المنصات الرقمية، نقدم حلولاً إبداعية تترك انطباعاً دائماً.	تصميم الجرافيك يشمل ابتكار تصاميم بصرية جذابة تنقل رسالة علامتك التجارية بفعالية	Graphic design involves creating visually appealing designs that effectively convey your brand's message.
59	Marketing & Advertisement 	/categories/images/c1ca348f-e651-4375-b2d6-15bec3f517de-5.jpg	/categories/icons/ffe3b856-a736-4fbf-8833-27d48dea2a58-basic10.svg	Marketing and advertisement involve promoting your brand, products, or services to reach and engage your target audience. We create tailored strategies using digital and traditional media to maximize visibility and drive growth. From content creation to campaign management, we help your business stand out in a competitive market.	marketing-advertisement	clyhm29ou0000dnteppm9du5n	2024-09-23 19:32:42.852	2024-09-28 00:23:40.865	التسويق والإعلان يشملان الترويج لعلامتك التجارية أو منتجاتك أو خدماتك للوصول إلى جمهورك المستهدف وزيادة التفاعل. نقوم بإنشاء استراتيجيات مخصصة باستخدام الوسائط الرقمية والتقليدية لزيادة الظهور وتحفيز النمو. من إنشاء المحتوى إلى إدارة الحملات، نساعد عملك على التميز في سوق تنافسية.	التسويق والاعلان	From content creation to campaign management, we help your business stand out in a competitive market.	نقوم بإنشاء استراتيجيات مخصصة باستخدام الوسائط الرقمية والتقليدية لزيادة الظهور وتحفيز النمو. من إنشاء المحتوى إلى إدارة الحملات، نساعد عملك على التميز في سوق تنافسية.	 نقوم بإنشاء استراتيجيات مخصصة باستخدام الوسائط الرقمية والتقليدية لزيادة الظهور وتحفيز النمو	We create customized strategies using digital and traditional
57	Business Planning 	/category-media/images/planing.png	/categories/icons/1c3a8c33-613d-4a8d-a344-cf5af54e9cbe-basic14.svg	Business planning involves developing strategic plans that guide the growth and success of your business. We provide comprehensive solutions, from market analysis to financial forecasting, helping you create a clear roadmap for achieving your goals. Let us assist you in building a solid foundation for sustainable growth.	business-planning	clyhm29ou0000dnteppm9du5n	2024-09-23 19:24:49.106	2025-01-11 05:07:42.283	تخطيط الأعمال يشمل تطوير خطط استراتيجية توجه نمو ونجاح عملك. نقدم حلولاً شاملة بدءًا من تحليل السوق إلى التوقعات المالية، لمساعدتك في إنشاء خارطة طريق واضحة لتحقيق أهدافك. دعنا نساعدك في بناء أساس قوي لتحقيق نمو مستدام.	التخطيط الاستراتيجي	We provide comprehensive solutions ranging from market analysis to financial forecasting.	تخطيط الأعمال يشمل تطوير خطط استراتيجية توجه نمو ونجاح عملك. نقدم حلولاً شاملة بدءًا من تحليل السوق إلى التوقعات المالي	لمساعدتك في إنشاء خارطة طريق واضحة لتحقيق أهدافك. دعنا نساعدك في بناء أساس قوي لتحقيق نمو مستدام	Business planning involves developing strategic plans that guide the growth and success of your business.
58	Paper preparation	/categories/images/35fac126-eac7-4890-a899-9576e237f5c9-1.jpg	/categories/icons/95b6f134-f660-40e9-8f4b-ded37e2ad6b7-cardResult-4.png	Paper preparation involves organizing and formatting documents to ensure clarity, professionalism, and compliance with required standards. We provide expert services in editing, proofreading, and structuring, helping you present well-polished and accurate papers for academic, business, or personal use.	paper-preparation	clyhm29ou0000dnteppm9du5n	2024-09-23 19:28:55.682	2024-09-28 00:22:30.649	تحضير الأوراق يشمل تنظيم وتنسيق الوثائق لضمان الوضوح والاحترافية والامتثال للمعايير المطلوبة. نقدم خدمات متخصصة في التحرير والتدقيق اللغوي وإعادة الهيكلة، لمساعدتك في تقديم أوراق دقيقة ومُحكمة سواء للاستخدام الأكاديمي أو التجاري أو الشخصي.	الاعداد البحثي	We offer specialized editing, proofreading and restructuring services to help you produce accurate and well-crafted documents for academic, business or personal use.	نقدم خدمات متخصصة في التحرير والتدقيق اللغوي وإعادة الهيكلة، لمساعدتك في تقديم أوراق دقيقة ومُحكمة سواء للاستخدام الأكاديمي أو التجاري أو الشخصي.	تحضير الأوراق يشمل تنظيم وتنسيق الوثائق لضمان الوضوح والاحترافية والامتثال للمعايير المطلوبة	We offer specialized services in editing, proofreading, and restructuring 
49	Content Creation	/category-media/images/content.png	/categories/icons/503e7f05-8d92-4d83-a5d7-aba6a80f8777-basic10.svg	Content Creation involves developing engaging and relevant material tailored to your brand and audience. From blogs and articles to videos and social media posts, our creative services ensure your message is communicated effectively. Let us help you tell your story and build a strong online presence.	content-creation	clyhm29ou0000dnteppm9du5n	2024-09-23 15:35:54.095	2025-01-11 06:24:53.044	إنشاء المحتوى يتضمن تطوير مواد جذابة وملائمة تناسب علامتك التجارية وجمهورك. من المدونات والمقالات إلى الفيديوهات والمنشورات على وسائل التواصل الاجتماعي، تضمن خدماتنا الإبداعية إيصال رسالتك بفعالية. دعنا نساعدك في سرد قصتك وبناء حضور قوي على الإنترنت.	انشاء المحتوى	Our creative services ensure that your message is delivered effectively. Let us help you tell your story 	 تضمن خدماتنا الإبداعية إيصال رسالتك بفعالية. دعنا نساعدك في سرد قصتك وبناء حضور قوي على الإنترنت.	نشاء المحتوى يتضمن تطوير مواد جذابة وملائمة تناسب علامتك التجاري	Content creation involves developing engaging and relevant materials
61	Back End	\N	/categories/icons/backend.webp	We build powerful backend systems that drive the core functionality of your applications. Our solutions ensure reliability, scalability, and efficient data management.	back-end	clyhm29ou0000dnteppm9du5n	2024-12-08 01:03:10.618	2024-12-08 02:04:01.727	نقوم ببناء أنظمة خلفية قوية تدعم الوظائف الأساسية لتطبيقاتك. تضمن حلولنا الكفاءة والقابلية للتوسع وإدارة البيانات بشكل فعال.	Back End	\N	\N	\N	\N
60	Front End	\N	/categories/icons/frontend.webp	We craft engaging and interactive user interfaces that combine aesthetics with functionality. Our frontend solutions ensure seamless user experiences across all devices.	front-end	clyhm29ou0000dnteppm9du5n	2024-12-05 06:41:21.526	2024-12-08 02:24:41.857	نصمم واجهات مستخدم جذابة وتفاعلية تجمع بين الجمال والوظيفة. تضمن حلولنا للواجهة الأمامية تجربة مستخدم سلسة على جميع الأجهزة.	Front End	\N	\N	\N	\N
62	Graphic Design	\N	/categories/icons/graphicdesign.webp	We create visually compelling designs that communicate your brand's message effectively. From logos and branding to digital and print media, our designs are tailored to inspire and captivate.	graphic-design	clyhm29ou0000dnteppm9du5n	2024-12-08 07:52:40.51	2024-12-08 07:54:59.243	نصمم تصاميم جذابة بصريًا تنقل رسالة علامتك التجارية بفعالية. من الشعارات والعلامات التجارية إلى الوسائط الرقمية والمطبوعة، تصاميمنا مصممة لتلهم وتجذب الانتباه.	Graphic Design	\N	\N	\N	\N
50	Mobile Development	/category-media/images/mobileDevelopment.png	/categories/icons/926557d9-3b0c-46d2-9301-77fe7d140a9c-basic9.svg	Mobile development involves designing and building innovative applications for various smart devices. We provide custom solutions that ensure high performance and a seamless user experience. Whether you need an Android or iOS app, we are here to turn your ideas into successful applications.	mobile-development	clyhm29ou0000dnteppm9du5n	2024-09-23 17:22:33.847	2025-01-11 06:24:53.044	تطوير التطبيقات المحمولة يشمل تصميم وإنشاء تطبيقات مبتكرة تعمل على مختلف الأجهزة الذكية. نقدم حلولاً مخصصة تضمن أداءً عاليًا وتجربة مستخدم سلسة. سواء كنت بحاجة لتطبيق أندرويد أو iOS، نحن هنا لتحويل أفكارك إلى تطبيقات ناجحة.	تطبيقات الموبايل	Mobile app development involves designing and creating innovative applications that work across various smart devices.	تطوير التطبيقات المحمولة يشمل تصميم وإنشاء تطبيقات مبتكرة تعمل على مختلف الأجهزة الذكية. نقدم حلولاً مخصصة تضمن أداءً     إلى تطبيقات ناجحة.	 تصميم وإنشاء تطبيقات مبتكرة تعمل على مختلف الأجهزة الذكية. نقدم حلولاً مخصصة تضمن أداءً	Designing and developing innovative applications that work across various smart devices. We offer customized solutions.
51	Web Development 	/category-media/images/programming.png	/categories/icons/693e3fa0-45d4-454c-b449-e31e73b1fdb0-basic11.svg	Web development involves creating dynamic and responsive websites tailored to your business needs. We specialize in building scalable, user-friendly platforms that ensure seamless navigation and functionality. From front-end design to back-end development, we turn your vision into an engaging online experience.	web-development	clyhm29ou0000dnteppm9du5n	2024-09-23 17:28:01.077	2025-01-11 06:24:53.044	تطوير الويب يشمل إنشاء مواقع ديناميكية ومتجاوبة مخصصة لتلبية احتياجات عملك. نحن متخصصون في بناء منصات قابلة للتوسع وسهلة الاستخدام تضمن تجربة تنقل ووظائف سلسة. من تصميم الواجهة الأمامية إلى تطوير الخلفية، نحول رؤيتك إلى تجربة رقمية جذابة.	تطبيقات الويب	Specializing in building scalable and user-friendly platforms that ensure seamless navigation and functionality.	متخصصون في بناء منصات قابلة للتوسع وسهلة الاستخدام تضمن تجربة تنقل ووظائف سلسة. من تصميم الواجهة الأمامية إلى تطوير الخلفية، نحول رؤيتك إلى تجربة رقمية جذابة.	نحن متخصصون في بناء منصات قابلة للتوسع وسهلة الاستخدام تضمن تجربة تنقل ووظائف سلسة	We specialize in building scalable and user-friendly platforms that ensure seamless navigation and functionality.
56	Commerce development 	/category-media/images/web.png	/categories/icons/1438483d-0cdc-4a80-a16c-804e88ac5a2b-basic7.svg	Commerce development involves creating robust e-commerce platforms that drive online sales and enhance customer experiences. We specialize in building secure, scalable, and user-friendly solutions tailored to your business needs. From payment integration to inventory management, we help you streamline operations and grow your online store.	commerce-development	clyhm29ou0000dnteppm9du5n	2024-09-23 19:22:26.318	2025-01-11 11:29:54.945	تطوير التجارة يشمل إنشاء منصات تجارة إلكترونية قوية تعزز المبيعات عبر الإنترنت وتحسن تجربة العملاء. نحن متخصصون في بناء حلول آمنة وقابلة للتوسع وسهلة الاستخدام، مصممة خصيصاً لتلبية احتياجات عملك. من تكامل الدفع إلى إدارة المخزون، نساعدك على تبسيط العمليات وتنمية متجرك الإلكتروني.	تطوير المتاجر الالكترونية	We specialize in building secure, scalable, and user-friendly solutions, tailored specifically to meet your business needs	 نحن متخصصون في بناء حلول آمنة وقابلة للتوسع وسهلة الاستخدام، مصممة خصيصاً لتلبية احتياجات عملك	تطوير التجارة يشمل إنشاء منصات تجارة إلكترونية قوية تعزز المبيعات عبر الإنترنت وتحسن تجربة العملاء	Commerce development involves creating robust e-commerce platforms that boost online sales
\.


--
-- Data for Name: Client; Type: TABLE DATA; Schema: public; Owner: default
--

COPY public."Client" (id, name, "contactPerson", email, phone, address, "companyName", website, industry, notes, "billingAddress", "billingEmail", "taxId", "createdAt", "updatedAt", image, "createdById", "addressAr", "billingAddressAr", "companyNameAr", "industryAr", "nameAr", "notesAr") FROM stdin;
cm0xna63x0001xnj9iyxlgyky	Ahmed	sahhgd 	samnaddeen2000@gmail.com	32332323232	\N	\N	eerfrfr	wdewdewde	gtrgtrgt	tgrgtr	jh@gmail.com	ewdewdew	2024-09-11 09:14:59.483	2024-09-11 09:14:59.483	/clients/images/32ce0de5-6f27-4a39-9dcb-7b277f617a11-user-3.jpg	clyhm29ou0000dnteppm9du5n	\N	\N	\N	\N	\N	\N
cm0xnb0yi0003xnj987c7zjoy	saeed	eferfre	alsumairia39@gmail.com	32332333434	\N	\N	erfrefre	ferferfrefre	rgtrgtrg	gtrgtrgtrg	jh@gmail.com	efrefre	2024-09-11 09:15:39.48	2024-09-11 09:15:39.48	/clients/images/e6f627e3-a989-454a-be61-4e0b39797b28-user-5.jpg	clyhm29ou0000dnteppm9du5n	\N	\N	\N	\N	\N	\N
cm0xnc5kj0005xnj94x46pkvp	Wakeed	vrvtrgtr	ahmedalsumairi9440@gmail.com	3233233323232	\N	\N	frefrefre	frefrefre	frefrefre	ferfre	jhd@gmail.com	efrefre	2024-09-11 09:16:32.141	2024-09-11 09:16:32.141	/clients/images/09a5c1eb-ed3d-49d6-a516-fbc0225ddb62-user-8.jpg	clyhm29ou0000dnteppm9du5n	\N	\N	\N	\N	\N	\N
cm0xnd9bh0007xnj9ojn1s450	naddeen	dewdew	sam@gmail.com	3243453454	\N	\N	wedewdew	ewdewdew	trgtr	rgtg	jh@gmail.com	dedewde	2024-09-11 09:17:23.631	2024-09-11 09:17:23.631	/clients/images/4a3cf3fb-715d-40d1-af2e-d0e25702c6ec-user-6.jpg	clyhm29ou0000dnteppm9du5n	\N	\N	\N	\N	\N	\N
cm1pnbv6x0001j28ym07t2kpp	regfrgftr	frfrfr	fref@gmail.com	5454646456	regrgtr	frefref	\N	\N	\N	\N	\N	\N	2024-09-30 23:33:51.657	2024-09-30 23:32:10.414	/clients/images/comp3.svg	clyhm29ou0000dnteppm9du5n	قثابقث	\N	بقثبقث	\N	ببيي	\N
cm1pndpxf0002j28y65hlhlo2	whgedyegfyr	frefrefre	dhgew@gmail.com	3443434343	\N	efrefre	\N	freftr	\N	\N	\N	\N	2024-09-30 23:35:18.148	2024-09-30 23:34:01.224	/clients/images/comp6.svg	clyhm29ou0000dnteppm9du5n	\N	\N	\N	قفلفقالفغاغف	صتاثبقبق	فقالفالغف
cm1pneu1s0003j28ypfy56k5j	\N	\N	hyfyregfr@gmail.com	\N	\N	refrefre	\N	\N	\N	\N	\N	\N	2024-09-30 23:36:10.144	2024-09-30 23:36:42.472	/clients/images/comp7.svg	clyhm29ou0000dnteppm9du5n	\N	\N	\N	\N	\N	\N
cm1pnjrfv0004j28yn5ss6wq9	\N	\N	ghfrefej@gmail.com	\N	\N	Cisco	\N	\N	\N	\N	\N	\N	2024-09-30 23:40:00.044	2024-09-30 23:38:58.365	/clients/images/comp9.svg	clyhm29ou0000dnteppm9du5n	\N	\N	\N	\N	\N	\N
cm1pmklqk000031n0obs0yygk	Amazon	\N	amaxon@gmail.com	\N	\N	Amazon	\N	\N	\N	\N	\N	\N	2024-09-30 23:12:39.692	2024-09-30 23:41:26.883	/clients/images/comp2.svg	clyhm29ou0000dnteppm9du5n	\N	\N	امازون	\N	شركة امازون	\N
cm1pnl4ct0005j28ygv4is00y	\N	\N	freespace@gmail.com	\N	\N	Free Space	\N	\N	\N	\N	\N	\N	2024-09-30 23:41:03.437	2024-10-01 00:08:00.654	/clients/images/comp1.svg	clyhm29ou0000dnteppm9du5n	\N	\N	\N	\N	\N	\N
cm1pno8so0007j28yunxgxl1z	\N	\N	shine@gmail.com	\N	\N	ShineWait	\N	\N	\N	\N	\N	\N	2024-09-30 23:43:29.16	2024-10-01 00:09:46.752	/clients/images/comp5.svg	clyhm29ou0000dnteppm9du5n	\N	\N	\N	\N	\N	\N
cm1pnmt990006j28y9pnmdr0m	\N	\N	peral@gmail.com	\N	\N	Narriverl	\N	\N	\N	\N	\N	\N	2024-09-30 23:42:22.365	2024-10-01 00:28:40.563	/clients/images/comp8.svg	clyhm29ou0000dnteppm9du5n	\N	\N	\N	\N	\N	\N
\.


--
-- Data for Name: CompanyMenu; Type: TABLE DATA; Schema: public; Owner: default
--

COPY public."CompanyMenu" (id, name, "nameAr", url, slug, title, "titleAr", image, icon, description, "descriptionAr", "userId") FROM stdin;
2	sam profile	بروفايل سام	sam/profile	sam-profile	sam company profile 	\N	\N	\N	\N	\N	clyhm29ou0000dnteppm9du5n
1	sam team	فريق عمل الشركة	sam/team	sam-team	company team	company team			company team	company team	clyhm29ou0000dnteppm9du5n
3	about sam	عن سام	sam/about	sam-about	about sam in details	\N	\N	\N	\N	\N	clyhm29ou0000dnteppm9du5n
4	contact sam	تواصل مع سام	sam/contact	sam-contact	\N	\N	\N	\N	\N	\N	clyhm29ou0000dnteppm9du5n
5	Our process	منهجية العمل في سام	sam/process	sam-process	\N	\N	\N	\N	\N	\N	clyhm29ou0000dnteppm9du5n
6	privacy policy in sam	سياسة الامان في سام	sam/privacy	sam-privacy	\N	\N	\N	\N	\N	\N	clyhm29ou0000dnteppm9du5n
8	client reviews	مراجعات سام	sam/reviews	sam-reviews	\N	\N	\N	\N	\N	\N	clyhm29ou0000dnteppm9du5n
9	sam sitemap	خريطة موقع سام	sam/sitemap	sam-sitemap	\N	\N	\N	\N	\N	\N	clyhm29ou0000dnteppm9du5n
7	testimonial	 شهادات العملاء	sam/testimonials	sam-testimonials	\N	\N	\N	\N	\N	\N	clyhm29ou0000dnteppm9du5n
\.


--
-- Data for Name: Customer; Type: TABLE DATA; Schema: public; Owner: default
--

COPY public."Customer" (id, name, slug, email, image, "createdAt", "updatedAt") FROM stdin;
\.


--
-- Data for Name: Department; Type: TABLE DATA; Schema: public; Owner: default
--

COPY public."Department" (id, name, description, image, icon, "departmentHeadId", "createdAt", "updatedAt") FROM stdin;
\.


--
-- Data for Name: Element; Type: TABLE DATA; Schema: public; Owner: default
--

COPY public."Element" (id, title, description, icon, "menuId", "createdAt", "updatedAt", link, "parentId", "descriptionAr", "titleAr") FROM stdin;
27	create	\N	/codes/images/65044ed3-6ebc-4d7b-9e8e-1b676a419575-20.svg	13	2024-09-02 09:31:50.432	2024-09-02 09:31:50.432	admin/projects/create	\N	\N	\N
28	delete	\N	/codes/images/429fedcc-45c0-4e81-9599-897d0aa49520-20.svg	13	2024-09-02 09:34:15.966	2024-09-02 09:34:15.966	admin/projects/delete	\N	\N	\N
29	display	\N	/codes/images/f53fd4ab-7896-4ed2-86f1-2662d45aa254-20.svg	13	2024-09-02 09:36:12.193	2024-09-02 09:36:12.193	admin/projects/display	\N	\N	\N
30	create	\N	/codes/images/5554417a-3d1a-4b21-930a-60a172429739-24.svg	14	2024-09-02 09:43:06.233	2024-09-02 09:43:06.233	admin/blogs/create	\N	\N	\N
31	Delete	\N	/codes/images/22da1a29-b346-4087-afdc-2fc9dc01f0b4-24.svg	14	2024-09-02 09:43:45.558	2024-09-02 09:43:45.558	admin/blogs/delete	\N	\N	\N
32	Create Invoice	\N	/codes/images/64a8a772-5123-4ef7-bd8d-64537f04213d-21.svg	16	2024-09-02 09:56:06.873	2024-09-02 09:56:06.873	admin/invoices/create	\N	\N	\N
33	Create Product	\N	/codes/images/5dd9806c-1a30-46b1-8fff-1dca2764758f-20.svg	17	2024-09-02 10:11:02.911	2024-09-02 10:11:02.911	admin/projects/create	\N	\N	\N
34	Delete Product	\N	/codes/images/c39af2fa-36b7-42f4-bd0e-affd601b5030-20.svg	17	2024-09-02 10:11:31.158	2024-09-02 10:11:31.158	admin/projects/create	\N	\N	\N
37	Role Mange	\N	/codes/images/0c7efa14-512a-4cad-b77e-ff81043da7dd-20.svg	18	2024-09-02 10:28:47.266	2024-09-02 10:28:47.266	admin/projects/create	\N	\N	\N
35	Create	\N	/codes/images/06d084e6-a0e0-4d8f-883a-4de7b45a47b0-20.svg	18	2024-09-02 10:27:58.761	2024-09-02 10:28:47.266	admin/projects/create	37	\N	\N
36	Delete Role	\N	/codes/images/b335c329-5e03-43d0-8396-dc4c87334753-20.svg	18	2024-09-02 10:28:16.638	2024-09-02 10:28:47.266	admin/projects/create	37	\N	\N
38	Create	\N	/codes/images/943c8bcf-0d87-4ab9-8b92-62e92a16b9df-42.svg	23	2024-09-06 07:36:57.865	2024-09-06 07:36:57.865	admin/orders/create	\N	\N	\N
39	Display	\N	/codes/images/67028f5a-0943-4365-b847-dc229a36fa19-42.svg	23	2024-09-06 07:37:20.779	2024-09-06 07:37:20.779	admin/orders/display	\N	\N	\N
40	Delete	\N	/codes/images/3750d19f-f60a-4acd-be17-f5d1850d480d-42.svg	23	2024-09-06 07:37:55.385	2024-09-06 07:37:55.385	admin/orders/delete	\N	\N	\N
41	Manage Panel	\N	/codes/images/936997cb-df8f-4ead-9cc1-9915e95980a1-42.svg	23	2024-09-06 07:38:26.398	2024-09-06 07:38:26.398	admin/orders	\N	\N	\N
42	Categories	\N	/codes/images/6f7fe1b0-38f6-4e10-8393-5b41572fe46c-42.svg	23	2024-09-06 07:39:06.071	2024-09-06 07:39:06.071	admin/orders/categories	\N	\N	\N
43	Analytics	\N	/codes/images/f6269932-e259-4f40-83dc-d6b88743b614-42.svg	23	2024-09-06 07:39:39.341	2024-09-06 07:39:39.341	admin/orders/analytics	\N	\N	\N
44	Interface Design	\N	/codes/images/20c965f7-d6a5-4edb-a6f1-bc647a65635b-icon3.svg	24	2024-09-24 00:43:20.542	2024-09-24 00:43:20.542	services/interface-design	\N	وصف	تصميم الواجهات 
45	Mobile Icons	\N	/codes/images/f645363c-dd30-4efd-b6b5-7b440998ed1b-basic7.svg	24	2024-09-24 00:48:48.221	2024-09-24 00:48:48.221	admin/orders/create	\N	وثف	أزرار الموبايل
54	Inviting cards	\N	/codes/images/fe3d1beb-683e-4f76-85bd-7cb03d7ce6f0-basic11.svg	27	2024-09-24 21:01:53.858	2024-09-24 21:01:53.858	admin/orders/create	\N	كروت الدعوة	كروت الدعوة
55	Social Media Marketing 	\N	/codes/images/700b015c-0611-4604-8baf-c1f33df8c873-basic11.svg	28	2024-09-24 21:32:47.517	2024-09-24 21:32:47.517	admin/projects/create	\N	تسويق منصات التواصل	تسويق منصات التواصل
56	Servlet	\N	/codes/images/1a0eb399-d0b7-46d4-a392-8e477f40f8bd-basic10.svg	29	2024-09-24 23:32:48.987	2024-09-24 23:32:48.987	admin/orders/create	\N	Servlet	سيرفلت
199	Enterprise Solutions Plan 	\N	\N	58	2024-11-13 16:49:01.065	2024-11-13 16:41:06.763	\N	\N	\N	خطة حلول المؤسسات
57	Egypt	\N	/menus-media/icons/15.svg	26	2024-11-10 13:06:35.86	2024-11-10 12:47:37.015	\N	\N	\N	اعمالنا مصر
58	healthcare App	\N	\N	24	2024-11-10 13:07:57.614	2024-11-10 13:06:40.708	\N	\N	\N	تطبيقات الصحة
59	Performance Optimization 	\N	\N	26	2024-11-10 13:09:09.853	2024-11-10 13:08:01.591	\N	\N	\N	تحسين الاداء
60	Blogs Development	\N	\N	35	2024-11-11 07:51:55.353	2024-11-11 07:48:27.073	\N	\N	\N	برمجة مواقع الاخبار
61	Commerce Web App	\N	/menus-media/icons/17.svg	35	2024-11-11 07:53:32.249	2024-11-11 07:52:01.842	\N	\N	\N	مواقع الاغراض التجارية
62	Custom Website Development	\N	\N	35	2024-11-11 07:58:43.733	2024-11-11 07:57:54.772	\N	\N	\N	تطوير المواقع المخصصة
63	E-commerce Solutions	\N	\N	35	2024-11-11 07:59:31.176	2024-11-11 07:58:47.436	\N	\N	\N	حلول التجارة الإلكترونية
64	Content Management System (CMS) 	\N	\N	35	2024-11-11 08:00:21.283	2024-11-11 07:59:49.327	\N	\N	\N	تطوير نظام إدارة المحتوى
65	Logo Design	\N	\N	36	2024-11-11 08:06:18.388	2024-11-11 08:05:43.923	\N	\N	\N	تصميم الشعار
66	Brand Identity Design	\N	\N	36	2024-11-11 08:06:55.3	2024-11-11 08:06:25.724	\N	\N	\N	تصميم هوية العلامة التجارية
67	Brochure and Flyer Design	\N	\N	36	2024-11-11 08:07:46.335	2024-11-11 08:07:17.58	\N	\N	\N	تصميم الكتيبات والنشرات
68	Packaging Design	\N	\N	36	2024-11-11 08:08:26.531	2024-11-11 08:08:02.229	\N	\N	\N	تصميم التغليف
69	Illustration Services	\N	\N	36	2024-11-11 08:09:06.701	2024-11-11 08:08:40.169	\N	\N	\N	خدمات الرسوم التوضيحية
70	Copywriting Services	\N	\N	37	2024-11-11 08:21:19.342	2024-11-11 08:20:40.275	\N	\N	\N	خدمات كتابة المحتوى
71	Blog and Article Writing	\N	\N	37	2024-11-11 08:22:27.646	2024-11-11 08:21:39.503	\N	\N	\N	كتابة المدونات والمقالات
72	Video Production and Editing	\N	\N	37	2024-11-11 08:23:12.489	2024-11-11 08:22:33.864	\N	\N	\N	إنتاج وتحرير الفيديوهات
73	SEO Content Optimization	\N	\N	37	2024-11-11 08:24:40.261	2024-11-11 08:23:18.172	\N	\N	\N	تحسين المحتوى لمحركات البحث (SEO)
74	Social Media Content Creation	\N	\N	37	2024-11-11 08:24:40.261	2024-11-11 08:23:47.237	\N	\N	\N	إنشاء محتوى لوسائل التواصل الاجتماعي
49	Responsive Website Design	\N	/codes/images/9fbf2116-5740-4334-898f-5f16b6c88fe9-basic10.svg	25	2024-09-24 19:40:10.569	2024-11-11 14:43:14.598	admin/orders/create	\N	المواقع التعليمية	تصميم مواقع متجاوبة
52	Product Demo Videos	\N	/codes/images/d0744655-7b63-46a1-b0f5-8ebebe764c53-icon3.svg	26	2024-09-24 20:18:55.644	2024-11-11 13:24:34.157	admin/orders/create	\N	المتاجر الاكترونية	فيديو توضيحي للمنتجات
50	Landing Page Design	\N	/codes/images/da58bd41-45db-492d-a69c-f4dacb3e4674-basic10.svg	25	2024-09-24 19:41:27.237	2024-11-11 14:43:45.207	admin/orders/create	\N	المتاجر الالكترونية	تصميم صفحات الهبوط
75	Photography and Visual Content	\N	\N	37	2024-11-11 11:43:57.686	2024-11-11 11:43:32.268	\N	\N	\N	التصوير الفوتوغرافي والمحتوى المرئي
76	Podcast Production and Editing	\N	\N	37	2024-11-11 11:53:23.467	2024-11-11 11:52:56.959	\N	\N	\N	إنتاج وتحرير البودكاست
77	Business Card Design	\N	\N	37	2024-11-11 12:03:20.457	2024-11-11 12:01:36.106	\N	\N	\N	تصميم بطاقات العمل
78	Infographic Design	\N	\N	36	2024-11-11 12:03:20.457	2024-11-11 12:01:36.302	\N	\N	\N	تصميم الرسوم البيانية
79	Presentation Design	\N	\N	36	2024-11-11 12:03:20.457	2024-11-11 12:01:57.907	\N	\N	\N	تصميم العروض التقديمية
51	Corporate Video Production	\N	/codes/images/bdf5cb22-b68f-4434-97ef-b83b6a80441e-basic13.svg	26	2024-09-24 20:04:24.149	2024-11-11 13:23:47.873	admin/orders/create	\N	الواجهات البرمجيه	إنتاج فيديو للشركات
80	Animated Explainer Videos	\N	\N	26	2024-11-11 13:27:12.785	2024-11-11 13:25:46.472	\N	\N	\N	فيديو تفسيري متحرك
81	Event Coverage Videos	\N	\N	26	2024-11-11 13:27:12.785	2024-11-11 13:25:59.112	\N	\N	\N	فيديو تغطية الأحداث
82	Social Media Video Ads	\N	\N	26	2024-11-11 13:27:12.785	2024-11-11 13:26:14.543	\N	\N	\N	إعلانات الفيديو لوسائل التواصل الاجتماعي
83	Mobile App UI/UX Design	\N	\N	38	2024-11-11 13:32:41.496	2024-11-11 13:29:11.743	\N	\N	\N	تصميم واجهة وتجربة المستخدم للتطبيقات
84	Wireframing and Prototyping	\N	\N	38	2024-11-11 13:32:41.496	2024-11-11 13:29:36.897	\N	\N	\N	إنشاء النماذج الأولية
85	Dashboard Design	\N	\N	38	2024-11-11 13:32:41.496	2024-11-11 13:29:50.488	\N	\N	\N	تصميم لوحة التحكم
86	Usability Testing	\N	\N	38	2024-11-11 13:32:41.496	2024-11-11 13:30:07.036	\N	\N	\N	اختبار سهولة الاستخدام
87	Website UI/UX Design	\N	\N	38	2024-11-11 13:32:41.496	2024-11-11 13:30:23.106	\N	\N	\N	تصميم واجهة وتجربة المستخدم للمواقع
88	Brand Guidelines	\N	\N	39	2024-11-11 14:27:03.18	2024-11-11 14:24:25.354	\N	\N	\N	دليل العلامة التجارية
89	Business Card Design	\N	\N	39	2024-11-11 14:27:03.18	2024-11-11 14:24:36.892	\N	\N	\N	تصميم بطاقات العمل
90	Logo Design	\N	\N	39	2024-11-11 14:27:03.18	2024-11-11 14:24:55.799	\N	\N	\N	تصميم الشعار
91	Corporate Stationery Design	\N	\N	39	2024-11-11 14:27:03.18	2024-11-11 14:25:10.184	\N	\N	\N	تصميم المستلزمات المكتبية للشركة
92	Packaging Design	\N	\N	39	2024-11-11 14:27:03.18	2024-11-11 14:25:32.798	\N	\N	\N	تصميم التغليف
93	Social Media Marketing	\N	\N	40	2024-11-11 14:34:15.456	2024-11-11 14:31:32.259	\N	\N	\N	التسويق عبر وسائل التواصل الاجتماعي
94	SEO Services	\N	\N	40	2024-11-11 14:34:15.456	2024-11-11 14:32:10.49	\N	\N	\N	خدمات تحسين محركات البحث
95	Email Marketing	\N	\N	40	2024-11-11 14:34:15.456	2024-11-11 14:32:22.5	\N	\N	\N	التسويق عبر البريد الإلكتروني
96	Pay-Per-Click (PPC) Campaigns	\N	\N	40	2024-11-11 14:34:15.456	2024-11-11 14:32:35.9	\N	\N	\N	حملات الدفع لكل نقرة
97	Content Marketing	\N	\N	40	2024-11-11 14:34:15.456	2024-11-11 14:32:51.051	\N	\N	\N	تسويق المحتوى
98	UI/UX Design for Websites	\N	\N	25	2024-11-11 14:45:30.852	2024-11-11 14:43:46.76	\N	\N	\N	تصميم واجهة وتجربة المستخدم للمواقع
99	E-commerce Website Design	\N	\N	25	2024-11-11 14:45:30.852	2024-11-11 14:44:02.941	\N	\N	\N	تصميم مواقع التجارة الإلكترونية
100	Custom Web Layout Design	\N	\N	25	2024-11-11 14:45:30.852	2024-11-11 14:44:21.38	\N	\N	\N	تصميم تخطيطات مخصصة للويب
101	Website Templates 	\N	\N	41	2024-11-12 03:37:02.735	2024-11-12 03:33:25.985	\N	\N	\N	قوالب المواقع
102	E-commerce Plugins	\N	\N	41	2024-11-12 03:37:02.735	2024-11-12 03:33:58.595	\N	\N	\N	 إضافات للتجارة الإلكترونية
103	Landing Page Templates	\N	\N	41	2024-11-12 03:37:02.735	2024-11-12 03:34:19.225	\N	\N	\N	قوالب صفحات الهبوط
104	Web Hosting Packages	\N	\N	41	2024-11-12 03:37:02.735	2024-11-12 03:34:58.099	\N	\N	\N	حزم استضافة الويب
105	SSL Certificates 	\N	\N	41	2024-11-12 03:37:02.735	2024-11-12 03:35:25.431	\N	\N	\N	شهادات SSL
106	Branding Kits (Logo, Colors, Typography) 	\N	\N	42	2024-11-12 03:41:44.757	2024-11-12 03:39:04.857	\N	\N	\N	حزم العلامة التجارية (الشعار، الألوان، الخطوط)
107	Social Media  Templates 	\N	\N	42	2024-11-12 03:41:44.757	2024-11-12 03:39:26.431	\N	\N	\N	قوالب  وسائل التواصل الاجتماعي
108	Custom T-Shirt Designs 	\N	\N	42	2024-11-12 03:41:44.757	2024-11-12 03:40:05.344	\N	\N	\N	تصميمات قمصان مخصصة
109	Business Card Designs 	\N	\N	42	2024-11-12 03:41:44.757	2024-11-12 03:40:17.305	\N	\N	\N	تصميم بطاقات العمل
110	Digital Brochure Templates 	\N	\N	42	2024-11-12 03:41:44.757	2024-11-12 03:40:50.521	\N	\N	\N	قوالب الكتيبات الرقمية
111	SEO Audit Reports 	\N	\N	43	2024-11-12 03:46:02.811	2024-11-12 03:43:46.397	\N	\N	\N	تقارير تدقيق تحسين محركات البحث
112	Custom Analytics Dashboards	\N	\N	43	2024-11-12 03:46:02.811	2024-11-12 03:44:12.301	\N	\N	\N	 لوحات تحكم التحليلات المخصصة
113	Email Campaign Templates 	\N	\N	43	2024-11-12 03:46:02.811	2024-11-12 03:44:28.272	\N	\N	\N	قوالب حملات البريد الإلكتروني
114	Social Media Ad Banners 	\N	\N	43	2024-11-12 03:46:02.811	2024-11-12 03:44:45.898	\N	\N	\N	بانرات إعلانات وسائل التواصل الاجتماعي
115	Landing Page Conversion Kits	\N	\N	43	2024-11-12 03:46:02.811	2024-11-12 03:45:07.128	\N	\N	\N	 حزم تحويل صفحات الهبوط
116	Classic Matte Business Cards	\N	\N	27	2024-11-12 03:59:12.941	2024-11-12 03:56:58.775	\N	\N	\N	بطاقات العمل الكلاسيكية
117	Premium Glossy Business Cards	\N	\N	27	2024-11-12 03:59:12.941	2024-11-12 03:57:19.978	\N	\N	\N	بطاقات العمل اللامعة الفاخرة
118	Eco-Friendly Recycled Business Cards	\N	\N	27	2024-11-12 03:59:12.941	2024-11-12 03:57:50.498	\N	\N	\N	بطاقات العمل الصديقة للبيئة 
119	Embossed & Foil Business Cards	\N	\N	27	2024-11-12 03:59:12.941	2024-11-12 03:58:15.175	\N	\N	\N	بطاقات العمل بالنقش 
120	Single-Page Application (SPA) 	\N	\N	44	2024-11-12 04:11:52.751	2024-11-12 04:08:26.883	\N	\N	\N	تطبيق صفحة واحدة
121	Progressive Web Application (PWA) 	\N	\N	44	2024-11-12 04:11:52.751	2024-11-12 04:08:54.028	\N	\N	\N	تطبيق ويب تقدمي
122	Real-Time Data Sync Solutions حلول تزامن البيانات في الوقت الفعلي	\N	\N	44	2024-11-12 04:11:52.751	2024-11-12 04:09:12.763	\N	\N	\N	Real-Time Data Sync Solutions حلول تزامن البيانات في الوقت الفعلي
123	API Development & Integration 	\N	\N	44	2024-11-12 04:11:52.751	2024-11-12 04:09:41.087	\N	\N	\N	تطوير وتكامل API
124	Analytics and Reporting Dashboard	\N	\N	44	2024-11-12 04:11:52.751	2024-11-12 04:10:34.519	\N	\N	\N	لوحة تحكم التحليلات والتقارير
125	Custom Web Package	\N	\N	44	2024-11-12 04:11:52.751	2024-11-12 04:11:17.371	\N	\N	\N	حزمة تطبيق ويب مخصص
126	SEO Basics 	\N	\N	45	2024-11-12 06:06:49.673	2024-11-12 06:04:51.389	\N	\N	\N	أساسيات تحسين محركات البحث
127	Social Media Marketing	\N	\N	45	2024-11-12 06:06:49.673	2024-11-12 06:05:03.631	\N	\N	\N	 التسويق عبر وسائل التواصل الاجتماعي
128	Email Marketing Fundamentals 	\N	\N	45	2024-11-12 06:06:49.673	2024-11-12 06:05:04.832	\N	\N	\N	أساسيات التسويق عبر البريد الإلكتروني
129	Content Creation Tips 	\N	\N	45	2024-11-12 06:06:49.673	2024-11-12 06:05:05.37	\N	\N	\N	نصائح إنشاء المحتوى
130	Building Your Online Presence 	\N	\N	45	2024-11-12 06:06:49.673	2024-11-12 06:05:05.897	\N	\N	\N	بناء حضورك على الإنترنت
141	Microsoft Office Suite Basics 	\N	\N	48	2024-11-12 06:19:53.637	2024-11-12 06:14:25.43	\N	\N	\N	أساسيات Microsoft Office
142	Google Workspace Guide 	\N	\N	48	2024-11-12 06:19:53.637	2024-11-12 06:14:26.017	\N	\N	\N	دليل Google Workspace
143	Introduction to Cloud Computing	\N	\N	48	2024-11-12 06:19:53.637	2024-11-12 06:14:26.351	\N	\N	\N	 مقدمة في الحوسبة السحابية
144	Introduction to Adobe Creative Suite 	\N	\N	48	2024-11-12 06:19:53.637	2024-11-12 06:14:26.451	\N	\N	\N	مقدمة في Adobe Creative Suite
140	Public Speaking & Presentation Skills	\N	\N	47	2024-11-12 06:13:09.052	2024-11-12 06:19:53.637	\N	\N	\N	مهارات الخطابة
139	Developing a Growth Mindset 	\N	\N	47	2024-11-12 06:13:09.052	2024-11-12 06:19:53.637	\N	\N	\N	تطوير عقلية النمو
138	Effective Problem-Solving Skills 	\N	\N	47	2024-11-12 06:13:09.052	2024-11-12 06:19:53.637	\N	\N	\N	مهارات حل المشكلات بفعالية
137	Leadership & Team Building 	\N	\N	47	2024-11-12 06:13:09.052	2024-11-12 06:19:53.637	\N	\N	\N	القيادة وبناء الفريق
136	Goal Setting Techniques 	\N	\N	47	2024-11-12 06:13:09.052	2024-11-12 06:19:53.637	\N	\N	\N	تقنيات تحديد الأهداف
135	Effective Communication Skills 	\N	\N	46	2024-11-12 06:09:35.51	2024-11-12 06:19:53.637	\N	\N	\N	مهارات التواصل الفعال
134	Building a Personal Brand 	\N	\N	46	2024-11-12 06:09:35.51	2024-11-12 06:19:53.637	\N	\N	\N	بناء العلامة الشخصية
133	Intro to Financial Literacy 	\N	\N	46	2024-11-12 06:09:35.51	2024-11-12 06:19:53.637	\N	\N	\N	مقدمة في الثقافة المالية
132	Using Project Management Tools 	\N	\N	46	2024-11-12 06:09:35.51	2024-11-12 06:19:53.637	\N	\N	\N	استخدام أدوات إدارة المشاريع
131	Time Management Strategies 	\N	\N	46	2024-11-12 06:09:35.51	2024-11-12 06:19:53.637	\N	\N	\N	استراتيجيات إدارة الوقت
145	Setting Up a Remote Workspace 	\N	\N	49	2024-11-12 06:42:35.759	2024-11-12 06:40:52.945	\N	\N	\N	إعداد مساحة العمل عن بُعد
146	Using Video Conferencing Tools 	\N	\N	49	2024-11-12 06:42:35.759	2024-11-12 06:40:53.746	\N	\N	\N	استخدام أدوات مؤتمرات الفيديو
147	Managing Projects Remotely	\N	\N	49	2024-11-12 06:42:35.759	2024-11-12 06:40:54.246	\N	\N	\N	 إدارة المشاريع عن بُعد
148	Collaborating in Real Time	\N	\N	49	2024-11-12 06:42:35.759	2024-11-12 06:40:54.747	\N	\N	\N	 التعاون في الوقت الحقيقي
149	Online Communication Best Practices	\N	\N	49	2024-11-12 06:42:35.759	2024-11-12 06:40:55.271	\N	\N	\N	 أفضل الممارسات للتواصل عبر الإنترنت
150	React.js	\N	\N	50	2024-11-12 13:34:20.33	2024-11-12 13:22:39.567	\N	\N	\N	React.js
151	Vue.js	\N	\N	50	2024-11-12 13:34:20.33	2024-11-12 13:22:41.155	\N	\N	\N	Vue.js
152	Angular	\N	\N	50	2024-11-12 13:34:20.33	2024-11-12 13:22:41.492	\N	\N	\N	Angular
153	Svelte	\N	\N	50	2024-11-12 13:34:20.33	2024-11-12 13:22:41.814	\N	\N	\N	Svelte
154	Remix	\N	\N	50	2024-11-12 13:34:20.33	2024-11-12 13:22:42.191	\N	\N	\N	Svelte
155	Node.js	\N	\N	51	2024-11-12 13:38:41.658	2024-11-12 13:36:27.204	\N	\N	\N	Node.js
156	PHP	\N	\N	51	2024-11-12 13:38:41.658	2024-11-12 13:36:27.571	\N	\N	\N	PHP
157	Java	\N	\N	51	2024-11-12 13:38:41.658	2024-11-12 13:36:27.95	\N	\N	\N	Java
158	Python	\N	\N	51	2024-11-12 13:38:41.658	2024-11-12 13:36:28.36	\N	\N	\N	Python
159	Expressjs	\N	\N	52	2024-11-12 13:42:23.629	2024-11-12 13:40:39.673	\N	\N	\N	Expressjs
160	Laravel	\N	\N	52	2024-11-12 13:42:23.629	2024-11-12 13:40:40.587	\N	\N	\N	Laravel
161	SpringBoot	\N	\N	52	2024-11-12 13:42:23.629	2024-11-12 13:40:40.998	\N	\N	\N	Spring Boot
162	Django	\N	\N	52	2024-11-12 13:42:23.629	2024-11-12 13:40:41.457	\N	\N	\N	Django
163	NextJS	\N	\N	52	2024-11-12 13:42:23.629	2024-11-12 13:41:44.145	\N	\N	\N	NextJS
164	Figma	\N	\N	53	2024-11-12 16:28:18.367	2024-11-12 16:26:25.775	\N	\N	\N	Figma
165	Adobe XD	\N	\N	53	2024-11-12 16:28:18.367	2024-11-12 16:26:27.598	\N	\N	\N	Adobe XD
166	Sketch	\N	\N	53	2024-11-12 16:28:18.367	2024-11-12 16:26:28.208	\N	\N	\N	Sketch
167	InVision	\N	\N	53	2024-11-12 16:28:18.367	2024-11-12 16:26:28.677	\N	\N	\N	InVision
168	Canva	\N	\N	53	2024-11-12 16:28:18.367	2024-11-12 16:27:56.634	\N	\N	\N	Canva
169	Servlets 	\N	\N	29	2024-11-12 17:12:04.668	2024-11-12 17:08:47.991	\N	\N	\N	Servlets 
170	SpringMVC	\N	\N	29	2024-11-12 17:12:04.668	2024-11-12 17:09:37.758	\N	\N	\N	SpringMVC
171	Hibernate	\N	\N	29	2024-11-12 17:12:04.668	2024-11-12 17:10:08.345	\N	\N	\N	SpringMVC
172	Spring Boot 	\N	\N	29	2024-11-12 17:12:04.668	2024-11-12 17:10:37.754	\N	\N	\N	Spring Boot 
173	Java Server Page JSP	\N	\N	29	2024-11-12 17:12:04.668	2024-11-12 17:11:05.653	\N	\N	\N	Java Server Page JSP
174	PostgreSQL	\N	\N	54	2024-11-12 17:15:14.089	2024-11-12 17:14:03.4	\N	\N	\N	PostgreSQL
175	MongoDB	\N	\N	54	2024-11-12 17:15:14.089	2024-11-12 17:14:15.586	\N	\N	\N	MongoDB
176	MySQL	\N	\N	54	2024-11-12 17:15:14.089	2024-11-12 17:14:15.762	\N	\N	\N	MySQL
177	Firebase	\N	\N	54	2024-11-12 17:15:14.089	2024-11-12 17:14:15.932	\N	\N	\N	Firebase
178	Oracle	\N	\N	54	2024-11-12 17:15:14.089	2024-11-12 17:14:42.254	\N	\N	\N	Oracle
179	Saudi Arabia	\N	\N	30	2024-11-13 13:36:58.684	2024-11-13 13:12:49.881	\N	\N	\N	المملكة العربية السعودية
180	Yemen	\N	\N	30	2024-11-13 13:36:58.684	2024-11-13 13:14:27.965	\N	\N	\N	اليـمن
181	Malaysia	\N	\N	30	2024-11-13 13:36:58.684	2024-11-13 13:36:00.39	\N	\N	\N	ماليزيا
182	Website Launch Package حزمة إطلاق الموقع	\N	\N	55	2024-11-13 13:46:51.539	2024-11-13 13:38:55.47	\N	\N	\N	 حزمة إطلاق الموقع
183	E-commerce Setup Discount 	\N	\N	55	2024-11-13 13:46:51.539	2024-11-13 13:45:37.518	\N	\N	\N	خصم إعداد التجارة الإلكترونية
184	Maintenance & Support Plan 	\N	\N	55	2024-11-13 13:46:51.539	2024-11-13 13:45:52.077	\N	\N	\N	خطة الصيانة والدعم
185	Custom Web Application Discount 	\N	\N	55	2024-11-13 13:46:51.539	2024-11-13 13:46:23.687	\N	\N	\N	خصم على تطبيقات الويب المخصصة
186	Logo & Branding Package 	\N	\N	56	2024-11-13 13:51:48.955	2024-11-13 13:49:30.201	\N	\N	\N	حزمة الشعار والعلامة التجارية
187	Social Media Graphics Bundle 	\N	\N	56	2024-11-13 13:51:48.955	2024-11-13 13:49:48.041	\N	\N	\N	حزمة تصميمات وسائل التواصل الاجتماعي
188	Discounted Poster & Flyer Designs	\N	\N	56	2024-11-13 13:51:48.955	2024-11-13 13:50:06.091	\N	\N	\N	 خصومات على تصميمات الملصقات والنشرات
189	Business Card & Stationery Combo 	\N	\N	56	2024-11-13 13:51:48.955	2024-11-13 13:50:57.817	\N	\N	\N	مجموعة بطاقات العمل والقرطاسية
190	Bulk Discount for Marketing Materials 	\N	\N	56	2024-11-13 13:51:48.955	2024-11-13 13:51:19.998	\N	\N	\N	خصم على المواد التسويقية بالجملة
191	Blog & Article Writing Package 	\N	\N	57	2024-11-13 13:57:21.443	2024-11-13 13:55:15.785	\N	\N	\N	عروض كتابة المدونات والمقالات
192	Video Editing and Production Bundle 	\N	\N	57	2024-11-13 13:57:21.443	2024-11-13 13:55:16.3	\N	\N	\N	حزمة تحرير وإنتاج الفيديو
193	Social Media Content Series	\N	\N	57	2024-11-13 13:57:21.443	2024-11-13 13:55:16.635	\N	\N	\N	 سلسلة محتوى وسائل التواصل الاجتماعي
194	Product Photography Package 	\N	\N	57	2024-11-13 13:57:21.443	2024-11-13 13:55:17.055	\N	\N	\N	حزمة تصوير المنتجات
195	Special Rate for Monthly Content Plans 	\N	\N	57	2024-11-13 13:57:21.443	2024-11-13 13:55:17.603	\N	\N	\N	سعر خاص لخطط المحتوى الشهرية
196	Basic Website Plan 	\N	\N	58	2024-11-13 16:49:01.065	2024-11-13 16:41:05.564	\N	\N	\N	خطة الموقع الأساسي
197	E-commerce Growth Plan خطة النمو للتجارة الإلكترونية	\N	\N	58	2024-11-13 16:49:01.065	2024-11-13 16:41:06.004	\N	\N	\N	E-commerce Growth Plan خطة النمو للتجارة الإلكترونية
198	Custom Web Application Plan 	\N	\N	58	2024-11-13 16:49:01.065	2024-11-13 16:41:06.383	\N	\N	\N	خطة التطبيق الويب المخصص
200	Starter Social Media Plan 	\N	\N	59	2024-11-13 16:53:22.157	2024-11-13 16:51:24.797	\N	\N	\N	خطة وسائل التواصل الاجتماعي للمبتدئين
201	SEO Growth Plan 	\N	\N	59	2024-11-13 16:53:22.157	2024-11-13 16:51:41.621	\N	\N	\N	خطة نمو تحسين محركات البحث
202	Comprehensive Digital Strategy Plan	\N	\N	59	2024-11-13 16:53:22.157	2024-11-13 16:51:42.106	\N	\N	\N	 خطة استراتيجية رقمية شاملة
203	Ad Campaign Management Plan 	\N	\N	59	2024-11-13 16:53:22.157	2024-11-13 16:52:17.2	\N	\N	\N	خطة إدارة حملات الإعلانات
204	Full-Service Marketing Plan	\N	\N	59	2024-11-13 16:53:22.157	2024-11-13 16:52:41.237	\N	\N	\N	 خطة التسويق المتكاملة
205	Basic Design Package 	\N	\N	60	2024-11-13 16:57:07.545	2024-11-13 16:55:26.529	\N	\N	\N	حزمة التصميم الأساسية
206	Brand Identity Plan 	\N	\N	60	2024-11-13 16:57:07.545	2024-11-13 16:55:26.903	\N	\N	\N	خطة هوية العلامة التجارية
207	Social Media Graphics Plan 	\N	\N	60	2024-11-13 16:57:07.545	2024-11-13 16:55:27.203	\N	\N	\N	خطة تصميمات وسائل التواصل الاجتماعي
208	Print & Marketing Collateral Plan 	\N	\N	60	2024-11-13 16:57:07.545	2024-11-13 16:55:27.553	\N	\N	\N	خطة المواد المطبوعة والتسويقية
209	Unlimited Revisions Plan 	\N	\N	60	2024-11-13 16:57:07.545	2024-11-13 16:55:51.976	\N	\N	\N	خطة التعديلات غير المحدودة
210	Blog & Article Writing Plan 	\N	\N	61	2024-11-13 17:00:39.703	2024-11-13 16:58:49.902	\N	\N	\N	خطة كتابة المدونات والمقالات
211	Social Media Content Plan 	\N	\N	61	2024-11-13 17:00:39.703	2024-11-13 16:58:50.466	\N	\N	\N	خطة محتوى وسائل التواصل الاجتماعي
212	Video Production Plan 	\N	\N	61	2024-11-13 17:00:39.703	2024-11-13 16:58:51.054	\N	\N	\N	خطة إنتاج الفيديو
213	Photography & Visual Content Plan	\N	\N	61	2024-11-13 17:00:39.703	2024-11-13 16:58:51.626	\N	\N	\N	 خطة التصوير والمحتوى البصري
214	Monthly Content Subscription 	\N	\N	61	2024-11-13 17:00:39.703	2024-11-13 16:58:52.141	\N	\N	\N	اشتراك شهري في المحتوى
\.


--
-- Data for Name: EmployeeProfile; Type: TABLE DATA; Schema: public; Owner: default
--

COPY public."EmployeeProfile" (id, "firstName", "firstNameSlug", "lastName", mobile, "dateOfBirth", bio, sex, image, avatar, "jobTitle", "dateOfJoining", "employmentType", "reportsTo", salary, address, country, city, "postalCode", degree, institution, "yearOfPassing", specialization, "yearsOfExperience", nationality, languages, "maritalStatus", "socialNetworkId", "createdAt", "updatedAt", "userId", "teamId") FROM stdin;
1	SameLand	\N	Mohammed	\N	2026-05-02 00:00:00	I’m a friendly kitchen assistant who suffers from a severe phobia of buttons.\r\nBrother of Elijah Jay Watkins, who has phobia of buttons and trust issues.	f	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	married	\N	2024-08-10 16:58:58.615	2024-08-10 18:05:57.965	clyhm29ou0000dnteppm9du5n	\N
2	Ramzi	\N	Naddem	\N	2024-08-22 00:00:00	Using these libraries, you can easily integrate country and city selection without needing to manually collect or manage the data. This simplifies your task and ensures that the country and city data is accurate and up-to-date.	m	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	single	\N	2024-08-11 09:34:47.197	2024-08-11 09:34:57.951	clzlpr6qn0000138det9i950j	\N
\.


--
-- Data for Name: EmployeeSkill; Type: TABLE DATA; Schema: public; Owner: default
--

COPY public."EmployeeSkill" ("employeeProfileId", "skillId") FROM stdin;
\.


--
-- Data for Name: Explore; Type: TABLE DATA; Schema: public; Owner: default
--

COPY public."Explore" (id, name, "nameAr", url, slug, title, "titleAr", image, icon, description, "descriptionAr", "userId") FROM stdin;
1	Products	منتجات	Products	products	Products	منتجات	/explore-market/images/a787c1f4-8e83-42f4-b03f-78c85b8ce98b-app-development.png		Products	منتجات	clyhm29ou0000dnteppm9du5n
9	markets portal	بوابة المتاجر	markets	markets	\N	\N	/explore-market/images/feature14.svg	\N	\N	\N	clyhm29ou0000dnteppm9du5n
13	Testimonials	مراجعات العملاء	Testimonials	Testimonials	\N	\N	/explore-market/images/feature15.svg	\N	\N	\N	clyhm29ou0000dnteppm9du5n
11	discuss your project	ناقش مشروعك	project	project	\N	\N	/explore-market/images/service1.svg	\N	\N	\N	clyhm29ou0000dnteppm9du5n
10	blogs	مدونات	blogs	blogs	\N	\N	/explore-market/images/feature13.svg	\N	\N	\N	clyhm29ou0000dnteppm9du5n
8	technologies	بروفايل التقنيات	technologies	technologies	\N	\N	/explore-market/images/web-design.png	\N	\N	\N	clyhm29ou0000dnteppm9du5n
7	Industries profile 	مجالات العمل	industries	industries	\N	\N	/explore-market/images/technical-support.png	\N	\N	\N	clyhm29ou0000dnteppm9du5n
6	Our Works	اعمال الشركة	works	works	\N	\N	/explore-market/images/brand.png	\N	\N	\N	clyhm29ou0000dnteppm9du5n
5	Company Plans	اشتراكات الخدمات	plans	plans	\N	\N	/explore-market/images/ui-design.png	\N	\N	\N	clyhm29ou0000dnteppm9du5n
4	Service Offers	عروض الخدمات	offers	offers	\N	\N	/explore-market/images/analytics.png	\N	\N	\N	clyhm29ou0000dnteppm9du5n
3	packages	الباقات	packages	packages	\N	\N	/explore-market/images/feature8.svg	\N	\N	\N	clyhm29ou0000dnteppm9du5n
2	Our Services	خدماتنا	services	services	services	خدماتنا	/explore-market/images/feature3.svg	\N	\N	\N	clyhm29ou0000dnteppm9du5n
12	clients	قائمة العملاء	clients	clients	\N	\N	/explore-market/images/service9.svg	\N	\N	\N	clyhm29ou0000dnteppm9du5n
14	search portal	بوابة البحث	search	search	\N	\N	/explore-market/images/service5.svg	\N	\N	\N	clyhm29ou0000dnteppm9du5n
\.


--
-- Data for Name: Feature; Type: TABLE DATA; Schema: public; Owner: default
--

COPY public."Feature" (id, name, title, "titleAr", "desc", "descAr", more, image, "moreAr", "isActive", url, "createdAt", "updatedAt", "toolId") FROM stdin;
1	\N	Platform Independence	الاستقلالية عن المنصة	Java's "write once, run anywhere" capability allows applications to run on any platform with a Java Virtual Machine (JVM), making it highly portable.	تتيح ميزة "اكتب مرة، اعمل في أي مكان" في جافا تشغيل التطبيقات على أي منصة تحتوي على آلة جافا الافتراضية (JVM)، مما يجعلها قابلة للنقل بشكل كبير.	gtrgtr	/feature-market/images/2505a087-f759-4604-9943-70d3e854af50-3.webp	gtrgtr	\N		2025-01-05 21:01:56.187	2025-01-05 21:23:21.198	1
2	\N	Object-Oriented Programming	البرمجة الموجهة للكائنات	Java supports key OOP principles like inheritance, encapsulation, polymorphism, and abstraction, enabling modular and reusable code structures.	تدعم جافا مبادئ البرمجة الموجهة للكائنات الأساسية مثل الوراثة، التغليف، التعددية، والتجريد، مما يتيح إنشاء هياكل كود قابلة لإعادة الاستخدام.	\N	\N	\N	\N	\N	2025-01-05 21:24:24.99	2025-01-05 21:23:22.97	1
3	\N	Robust Security	أمان قوي	Java ensures secure application development through features like secure class loading, bytecode verification, and built-in cryptographic APIs.	تضمن جافا تطوير تطبيقات آمنة من خلال ميزات مثل تحميل الفئات الآمن، التحقق من الشيفرة الوسيطة، وواجهات برمجة التطبيقات المشفرة المدمجة.	\N	\N	\N	\N	\N	2025-01-05 21:25:18.524	2025-01-05 21:24:27.081	1
4	\N	Multithreading and Concurrency	تعدد  والتزامن	Java provides multithreading support, allowing efficient CPU utilization and enabling applications to handle multiple tasks simultaneously.	توفر جافا دعمًا لتعدد الخيوط، مما يسمح باستخدام فعال لوحدة المعالجة المركزية وتمكين التطبيقات من تنفيذ مهام متعددة في وقت واحد.	\N	\N	\N	\N	\N	2025-01-05 21:27:55.056	2025-01-05 21:25:25.514	1
5	\N	Rich Standard Libraries	مكتبات قياسية غنية	With its extensive standard libraries, Java simplifies development in areas like networking, database access, data structures, and user interfaces.	تحتوي جافا على مكتبات قياسية واسعة النطاق، مما يبسط عملية التطوير في مجالات مثل الشبكات، الوصول إلى قواعد البيانات، هياكل البيانات، وواجهات المستخدم.	\N	\N	\N	\N	\N	2025-01-05 21:27:55.056	2025-01-05 21:26:18.216	1
6	\N	High Scalability and Performance	قابلية التوسع العالية والأداء	Java's optimized JVM, garbage collection, and support for distributed computing make it ideal for building scalable, high-performance applications.	تجعل تحسينات JVM، وجمع القمامة، ودعم الحوسبة الموزعة في جافا منها الخيار الأمثل لتطوير تطبيقات قابلة للتوسع وعالية الأداء.	\N	\N	\N	\N	\N	2025-01-05 21:27:55.056	2025-01-05 21:27:02.077	1
\.


--
-- Data for Name: HeroSection; Type: TABLE DATA; Schema: public; Owner: default
--

COPY public."HeroSection" (id, title, "titleAr", "subTitl", "subTitlAr", more, "moreAr", "isActive", url, "pageName", "footerTitle", "footerTitleAr", image, "createdAt", "updatedAt", "userId") FROM stdin;
4	Exclusive Special Offers Available in 	عروض خاصة وحصرية متوفرة في	Discover our exclusive range of special offers in [Location], carefully curated to meet your needs. Whether you're looking for top-quality services or unbeatable prices, we have something for everyone. Our deals are available for a limited time only in [Location], so don't miss out! Explore now and take advantage of the best offerings in your area	اكتشف مجموعتنا الحصرية من العروض الخاصة في [الموقع]، المصممة بعناية لتلبية احتياجاتك. سواء كنت تبحث عن خدمات عالية الجودة أو أسعار لا تُضاهى، لدينا شيء للجميع. عروضنا متاحة لفترة محدودة فقط في [الموقع]، فلا تفوت الفرصة! استكشف الآن واستفد من أفضل عروضنا في منطقتك	more	المزيــد	yes		MarketOffers	Contact us today and discover how we can achieve success together with a strong partnership.	الابتكار والتفوق هما جوهر مسيرتنا في دعمك من البداية حتى النهاية، حيث نعمل بجد لتحقيق طموحاتك بكل احترافية	/front/hero/images/15.jpg	2024-09-22 00:17:03.19	2024-10-22 18:50:18.164	clyhm29ou0000dnteppm9du5n
2	Unleash Creativity with Our Expert Services	انقل مشاريعك إلى مستوى آخر مع خدماتنا الاحترافية	Search through a variety of categories to discover the right tools, expertise, and innovative solutions that fit your needs	تصفح مجموعة واسعة ومتنوعة من الفئات لاكتشاف الأدوات، الخبرات، والحلول المبتكرة والمخصصة التي تناسب جميع احتياجاتك.	More	المزيــد	yes		categoriesPage	Join Our Creative Community	انضم إلى مجتمعنا الإبداعي	/front/hero/images/18.jpg	2024-10-04 00:15:46.129	2024-10-04 00:07:45.821	clyhm29ou0000dnteppm9du5n
5	Discover solutions that turn your vision into reality with our specialized services.	اكتشف حلولاً تحوّل رؤيتك إلى واقع مع خدماتنا المتخصصة	Browse our services to find the perfect match for your project’s goals.	تصفح خدماتنا المتنوعة والشاملة للعثور على ما يناسب أهداف مشروعك واحتياجاتك الخاصة	more	المزيــد	yes		market-services	Get Started with Our Professional Team"	الابتكار والتفوق هما جوهر مسيرتنا في دعمك من البداية حتى النهاية، حيث نعمل بجد لتحقيق طموحاتك بكل احترافية	/front/hero/images/15.jpg	2024-10-04 03:26:23.566	2024-10-22 20:47:55.888	clyhm29ou0000dnteppm9du5n
6	Top Quality Products Available in 	منتجات عالية الجودة متوفرة في	English: "Explore our wide selection of high-quality products in [Location], designed to meet all your needs. From the latest innovations to trusted favorites, we offer a variety of options tailored for you. Our products are sourced with care to ensure the best in quality and value. Shop now and discover the perfect product for your lifestyle."	استكشف مجموعتنا الواسعة من المنتجات عالية الجودة في [الموقع]، المصممة لتلبية جميع احتياجاتك. من أحدث الابتكارات إلى الخيارات الموثوقة، نقدم لك مجموعة متنوعة تناسبك. منتجاتنا مختارة بعناية لضمان أفضل جودة وقيمة. تسوق الآن واكتشف المنتج المثالي لأسلوب حياتك.	more	المزيــد	yes		market-products	From the latest innovations to trusted favorites, we offer a variety of options tailored for you. Our products are sourced with care to ensure the best in quality and value. Shop now and discover the perfect product for your lifestyle	 منتجاتنا مختارة بعناية لضمان أفضل جودة وقيمة. تسوق الآن واكتشف المنتج المثالي لأسلوب حياتك	/front/hero/images/15.jpg	2024-09-22 00:17:03.19	2024-10-22 21:18:35.308	clyhm29ou0000dnteppm9du5n
3	Discover solutions that turn your vision into reality with our specialized services.	اكتشف حلولاً تحوّل رؤيتك إلى واقع مع خدماتنا المتخصصة	Browse our services to find the perfect match for your project’s goals.	تصفح خدماتنا المتنوعة والشاملة للعثور على ما يناسب أهداف مشروعك واحتياجاتك الخاصة	More	المزيــد	yes		servicesPage	Get Started with Our Professional Team"	ابدأ العمل مع فريقنا المحترف	/front/hero/images/14.jpg	2024-10-04 03:26:23.566	2024-10-04 03:28:46.293	clyhm29ou0000dnteppm9du5n
1	DESIGN SHINE GATE FOR TEMPLATE AND WEB DEVLOPMENT	التميز والابداع عنواننا الاصيل في رحلتك من الصفر للنهاية	WE LOVE OUR CLIENTS AND THEY LOVE US BACK. HEAR WHAT THEY’RE SAYING…	عملاؤنا في مقدمة اهتماماتنا، وهم يبادلوننا الثقة. اكتشف آراءهم وتجاربهم معنا...	more	المزيد	yes		mainPage	Contact us today and discover how we can achieve success together with a strong partnership.	الابتكار والتفوق هما جوهر مسيرتنا في دعمك من البداية حتى النهاية، حيث نعمل بجد لتحقيق طموحاتك بكل احترافية	/front/hero/images/bg-21.webp	2024-09-22 00:17:03.19	2024-11-12 17:51:08.711	clyhm29ou0000dnteppm9du5n
7	 Showcasing Our Best Works in	عرض أفضل أعمالنا في	Take a look at some of our finest works completed in [Location], highlighting our commitment to excellence. From successful projects to innovative solutions, our portfolio reflects the quality and dedication we bring to every task. Explore our work and see how we’ve made a positive impact across various industries. We’re proud to showcase the results of our expertise and creativity.	اطلع على بعض من أفضل أعمالنا المنجزة في [الموقع]، والتي تسلط الضوء على التزامنا بالتميز. من المشاريع الناجحة إلى الحلول المبتكرة، يعكس ملفنا جودة وإخلاصنا في كل مهمة. استكشف أعمالنا وشاهد كيف قمنا بإحداث تأثير إيجابي في مختلف الصناعات. نحن فخورون بعرض نتائج خبرتنا وإبداعنا.	nore	المزيــد	yes		market-works			/front/hero/images/14.jpg	2024-10-04 00:15:46.129	2024-10-22 23:06:47.417	clyhm29ou0000dnteppm9du5n
8	Discover Our Premium Collection of Innovative Products	 اكتشف مجموعتنا المتميزة من المنتجات المبتكرة	Explore a diverse selection of top-quality products that cater to your unique needs. Each item is crafted with precision, blending innovation with reliability. Elevate your lifestyle with products designed to deliver outstanding performance and style.	استكشف مجموعة متنوعة من المنتجات عالية الجودة التي تلبي احتياجاتك الفريدة. كل منتج مصنوع بدقة ويمزج بين الابتكار والموثوقية. ارتقِ بنمط حياتك مع منتجات مصممة لتقديم أداء رائع وأناقة متميزة.	more	المزيــد	yes		products			/front/hero/images/12.jpg	2024-10-24 21:44:51.19	2024-10-24 22:44:13.27	clyhm29ou0000dnteppm9du5n
12	Whatever we are, we owe it to our clients	كلمات عملائنا الرائدة عن شراكتهم المميزة معنا	Experts take care of your business app with application maintenance and support services that can help you ensure that and running at peak performance.	كتشف تجارب عملائنا الكرام الذين وثقوا بنا لتحقيق التميز. تعكس آراؤهم التزامنا بالجودة والابتكار ورضا العملاء. كل شهادة هي دليل على تفانينا في بناء علاقات دائمة ومثمرة. انضم إلى عائلتنا المتوسطة ودع قصتك الناجحة تُلهم الآخرين!	more	المزيــد	yes		testimonials			/front/hero/images/49bf34f3-cfc8-4651-8d9e-f6dbb064af21-22.webp	2025-01-25 10:18:32.418	2025-01-25 10:18:50.888	clyhm29ou0000dnteppm9du5n
11	Discover Our Comprehensive and Extensive Plans Across Diverse Areas and Categories	استكشف خططنا المتكاملة والمتميزة في مختلف المجالات والفئات	Choose from a wide range of meticulously crafted plans tailored to meet diverse needs across various industries and categories, ensuring the perfect solution for every requirement.	نوفر لك مجموعة متنوعة من الخطط المصممة بعناية لتناسب احتياجاتك وتلبي متطلباتك في كافة القطاعات والمجالات، لضمان حلول فعالة ومناسبة لكل حالة.\r\n\r\n\r\n\r\n\r\n	More 	المزيد 	yes		planCategories			/front/hero/images/49bf34f3-cfc8-4651-8d9e-f6dbb064af21-22.webp	2024-11-03 04:20:03.334	2024-11-03 04:59:40.569	clyhm29ou0000dnteppm9du5n
\.


--
-- Data for Name: Industry; Type: TABLE DATA; Schema: public; Owner: default
--

COPY public."Industry" (id, name, "nameAr", slug, title, "titleAr", image, description, "descriptionAr", "userId", icon) FROM stdin;
5	Finance	القطاع المالي	finance	Finance	القطاع المالي	/industry-media/images/indu-1.avif	The finance industry involves managing money, investments, and credit through banks, insurance companies, and financial institutions. It facilitates the flow of capital and supports economic activities. Financial services include banking, asset management, insurance, and real estate financing. The industry is highly regulated and influenced by global markets. Innovations like fintech are reshaping how financial services are delivered.	يشمل قطاع المالية إدارة الأموال والاستثمارات والائتمان من خلال البنوك وشركات التأمين والمؤسسات المالية. يساهم في تدفق رأس المال ويدعم الأنشطة الاقتصادية. تشمل الخدمات المالية البنوك، وإدارة الأصول، والتأمين، وتمويل العقارات. يخضع القطاع لرقابة شديدة ويتأثر بالأسواق العالمية. تعيد الابتكارات مثل التكنولوجيا المالية (fintech) تشكيل كيفية تقديم الخدمات المالية.	clyhm29ou0000dnteppm9du5n	/industry-media/icons/indu5.png
4	Manufacturing	التصنيع	manufacturing	Manufacturing	التصنيع	/industry-media/images/indu-2.avif	Manufacturing involves the production of goods using labor, machines, and raw materials. This industry plays a significant role in creating products for everyday use, from automobiles to electronics. Manufacturing drives economies by creating jobs, improving productivity, and fostering innovation. Modern manufacturing relies on technology like automation and robotics. Sustainability practices are becoming integral to reducing environmental impact.	يشمل قطاع التصنيع إنتاج السلع باستخدام العمالة والآلات والمواد الخام. يلعب دورًا مهمًا في إنتاج المنتجات المستخدمة يوميًا، مثل السيارات والإلكترونيات. يسهم التصنيع في تحريك الاقتصاد من خلال توفير فرص العمل وتحسين الإنتاجية وتعزيز الابتكار. يعتمد التصنيع الحديث على التكنولوجيا مثل الأتمتة والروبوتات. تتزايد أهمية ممارسات الاستدامة لتقليل الأثر البيئي.	clyhm29ou0000dnteppm9du5n	/industry-media/icons/indu4.png
3	Education	التعليم	education	Education	التعليم	/industry-media/images/indu-3.avif	The education industry focuses on providing knowledge and skills through schools, universities, and training institutions. It helps individuals grow intellectually and prepares them for professional careers. Education is key to personal development and societal progress. The industry is evolving with the adoption of digital learning and online courses. Governments and organizations prioritize education to foster innovation and economic growth.	يركز قطاع التعليم على تقديم المعرفة والمهارات من خلال المدارس والجامعات والمؤسسات التدريبية. يساعد الأفراد على النمو فكريًا ويعدهم لمهنهم المهنية. التعليم هو مفتاح التنمية الشخصية والتقدم الاجتماعي. يتطور القطاع مع تبني التعلم الرقمي والدورات عبر الإنترنت. تركز الحكومات والمنظمات على التعليم لتعزيز الابتكار والنمو الاقتصادي.	clyhm29ou0000dnteppm9du5n	/industry-media/icons/indu3.png
2	Healthcare	الرعاية الصحية	healthcare	Healthcare	الرعاية الصحية	/industry-media/images/indu-4.avif	The healthcare industry provides medical services, including diagnosis, treatment, and prevention of diseases. It encompasses hospitals, clinics, pharmaceuticals, and medical devices. Healthcare professionals like doctors and nurses work to ensure public health and wellness. The industry is driven by research, technological advancements, and policies aimed at improving patient care. Access to healthcare remains a key social issue worldwide.	يوفر قطاع الرعاية الصحية خدمات طبية تشمل التشخيص والعلاج والوقاية من الأمراض. يشمل المستشفيات والعيادات والأدوية والأجهزة الطبية. يعمل المهنيون الصحيون مثل الأطباء والممرضين لضمان صحة ورفاهية الجمهور. يُدفع هذا القطاع من خلال البحث والتقدم التكنولوجي والسياسات الهادفة إلى تحسين رعاية المرضى. يعد الوصول إلى الرعاية الصحية قضية اجتماعية رئيسية على مستوى العالم.	clyhm29ou0000dnteppm9du5n	/industry-media/icons/indu2.png
6	Tourism	السياحة	tourism	\N	السياحة	/industry-media/images/indu-8.avif	The tourism industry promotes travel and leisure activities, providing services such as accommodations, transportation, and guided tours. It includes hospitality sectors like hotels, airlines, and entertainment venues. Tourism boosts local economies by attracting international and domestic visitors. The industry is adapting to trends like eco-tourism and digital travel platforms. Sustainable tourism practices aim to minimize the environmental impact of travel.	يروج قطاع السياحة للسفر والأنشطة الترفيهية، ويقدم خدمات مثل الإقامة والنقل والجولات السياحية. يشمل قطاعات الضيافة مثل الفنادق وشركات الطيران وأماكن الترفيه. يعزز السياحة الاقتصادات المحلية من خلال جذب الزوار الدوليين والمحليين. يتكيف القطاع مع الاتجاهات مثل السياحة البيئية والمنصات الرقمية للسفر. تهدف ممارسات السياحة المستدامة إلى تقليل الأثر البيئي للسفر.	clyhm29ou0000dnteppm9du5n	/industry-media/icons/indu6.png
7	Real Estate	سوق العفارات	real-estate	\N	\N	/industry-media/images/indu-6.avif	The real estate industry involves the buying, selling, and development of properties such as residential, commercial, and industrial buildings. It includes real estate agents, property management, and construction firms. Real estate is a major investment avenue and contributes to economic growth. The industry is influenced by market demand, interest rates, and regulations. Smart technologies are transforming property development and management.	يشمل قطاع العقارات شراء وبيع وتطوير العقارات مثل المباني السكنية والتجارية والصناعية. يتضمن وكلاء العقارات وإدارة الممتلكات وشركات البناء. يعتبر العقارات وسيلة استثمار رئيسية ويساهم في النمو الاقتصادي. يتأثر القطاع بالطلب في السوق وأسعار الفائدة والقوانين. تعمل التقنيات الذكية على تحويل تطوير وإدارة العقارات.	clyhm29ou0000dnteppm9du5n	/industry-media/icons/indu7.svg
8	Transportation	قطاع النقل	transportation	\N	\N	/industry-media/images/indu-7.avif	The transportation industry encompasses the movement of people and goods through various modes such as road, rail, air, and sea. It includes logistics, shipping, and public transport services. Transportation is essential for trade and globalization, supporting the movement of products and resources worldwide. The industry is evolving with the introduction of electric vehicles, autonomous driving, and smart logistics solutions.	يشمل قطاع النقل حركة الأفراد والبضائع عبر وسائل متنوعة مثل الطرق والسكك الحديدية والطائرات والبحر. يتضمن الخدمات اللوجستية والشحن والنقل العام. يعد النقل ضروريًا للتجارة والعولمة، حيث يدعم حركة المنتجات والموارد عالميًا. يتطور القطاع مع إدخال السيارات الكهربائية والقيادة الذاتية وحلول اللوجستيات الذكية.	clyhm29ou0000dnteppm9du5n	/industry-media/icons/indu8.png
1	Information Technology 	تكنولوجيا المعلومات	information-technology	Information Technology encompasses the use of computers and software to manage and process information. This industry plays a crucial role in businesses by improving productivity, communication, and data management. IT services include cloud computing, cybersecurity, networking, and data analytics. It supports both hardware and software solutions across multiple sectors. The demand for IT services continues to grow globally due to technological advancements.	تكنولوجيا المعلومات تشمل استخدام أجهزة الكمبيوتر والبرمجيات لإدارة ومعالجة المعلومات. يلعب هذا القطاع دورًا حيويًا في تحسين الإنتاجية والاتصالات وإدارة البيانات في الشركات. تشمل خدمات تكنولوجيا المعلومات الحوسبة السحابية، وأمن المعلومات، والشبكات، وتحليل البيانات. يدعم حلول الأجهزة والبرمجيات عبر العديد من القطاعات. يتزايد الطلب على خدمات تكنولوجيا المعلومات عالميًا بفضل التقدم التكنولوجي.	/industry-media/images/indu-5.avif	Information Technology encompasses the use of computers and software to manage and process information. This industry plays a crucial role in businesses by improving productivity, communication, and data management. IT services include cloud computing, cybersecurity, networking, and data analytics. It supports both hardware and software solutions across multiple sectors. The demand for IT services continues to grow globally due to technological advancements.	تكنولوجيا المعلومات تشمل استخدام أجهزة الكمبيوتر والبرمجيات لإدارة ومعالجة المعلومات. يلعب هذا القطاع دورًا حيويًا في تحسين الإنتاجية والاتصالات وإدارة البيانات في الشركات. تشمل خدمات تكنولوجيا المعلومات الحوسبة السحابية، وأمن المعلومات، والشبكات، وتحليل البيانات. يدعم حلول الأجهزة والبرمجيات عبر العديد من القطاعات. يتزايد الطلب على خدمات تكنولوجيا المعلومات عالميًا بفضل التقدم التكنولوجي.	clyhm29ou0000dnteppm9du5n	/industry-media/icons/indu1.png
\.


--
-- Data for Name: Invoice; Type: TABLE DATA; Schema: public; Owner: default
--

COPY public."Invoice" (id, "invoiceNumber", "issueDate", "dueDate", "invoiceType", "initialPayment", "paymentStatus", "clientId", "clientName", "clientAddress", "clientContact", "clientEmail", "clientPhone", "serviceId", "serviceDescription", quantity, "unitPrice", discount, "taxRate", subtotal, "taxAmount", "discountAmount", "totalAmount", currency, "paymentTerms", "paidAt", "paymentMethod", notes, "referenceNumber", "termsAndConditions", attachments, "companyName", "companyAddress", "companyEmail", "companyPhone", "taxId", "taxDetails", "createdAt", "updatedAt") FROM stdin;
\.


--
-- Data for Name: Location; Type: TABLE DATA; Schema: public; Owner: default
--

COPY public."Location" (id, country, city, image, "createdAt", "updatedAt", slug, "cityAr", "countryAr") FROM stdin;
2	Yemen	Sanaa	/locations/images/bc34adf9-498e-4283-8251-875dc99faf01-13.jpg	2024-07-23 00:09:46.124	2024-10-15 12:17:48.733	default-slug	\N	اليمن
3	Qatar	Qatar Details buiness data methods funcatilo 		2024-08-07 08:07:08.785	2024-10-15 12:17:48.733	default-slug	\N	قطر
4	Oman	Massqet	/codes/images/4c67b8ec-9297-4d7b-be64-7ec80bdbc78a-12.jpg	2024-08-07 08:09:24.345	2024-10-15 12:17:48.733	default-slug	\N	عمان
1	Saudi Arabia 	Dammam	/locations/images/7bcf45bd-4a55-497d-833a-b67a2275a9c1-6.jpg	2024-07-23 00:08:06.826	2024-10-16 13:07:03.745	saudi-arabia	\N	السعودية
\.


--
-- Data for Name: Market; Type: TABLE DATA; Schema: public; Owner: default
--

COPY public."Market" (id, name, "nameAr", description, "descriptionAr", image, icon, "createdAt", "updatedAt", location, title, "titleAr", "topTitlAr", "topTitle", "userId") FROM stdin;
2	Yemen	اليمن	yemen	اليمن	/market/images/f0744066-5879-4197-b92f-b9e6a35b3639-yemen-1.jpg	/market/icons/2c3be9d6-8bbc-4b49-a358-7c1936adccc0-yemen-1.jpg	2024-10-21 10:02:30.32	2024-10-21 10:02:30.32		Yemen	اليمن		Yemen 	clyhm29ou0000dnteppm9du5n
1	Saudi Arabia 	السعودية	trgtrgtr	ربلﻻبالب	/market/images/saudi-2.jpg	/market/icons/sadu-flag.png	2024-10-15 13:27:34.353	2024-10-21 13:26:33.156	saudi-arabia	gtrgtrgtr	خدمات الشركة	الا الغلث	grtgtrgtrg rgtrgtr	clyhm29ou0000dnteppm9du5n
3	Malaysia	ماليزياء	desc mal	وصق	/market/images/malaysia-4.jpg	/market/icons/malaysia-flag.png	2024-10-21 13:34:43.129	2024-10-21 13:30:52.729	malaysia	malaysia	ماليزياء			clyhm29ou0000dnteppm9du5n
\.


--
-- Data for Name: MarketPage; Type: TABLE DATA; Schema: public; Owner: default
--

COPY public."MarketPage" ("marketId", "pageId", url) FROM stdin;
1	1	/markets/services/saudi-arabia
1	3	/markets/works/saudi-arabia
1	4	/markets/categories/saudi-arabia
2	1	/markets/services/yemen
2	2	/markets/products/yemen
2	3	/markets/works/yemen
2	4	/markets/categories/yemen
3	3	/markets/works/malaysia
3	4	/markets/categories/malaysia
3	1	/markets/services/malaysia
3	2	proucts
1	5	/markets/offers/saudi-arabia
1	2	/markets/products/saudi-arabia
2	5	/markets/offers/yemen
3	5	/markets/offers/malaysia
\.


--
-- Data for Name: Media; Type: TABLE DATA; Schema: public; Owner: default
--

COPY public."Media" (id, url, type, "projectId", "tasktId", "productId", "altText", "createdAt", description, "externalUrl", "mimeType", size, "updatedAt", media_order, "orderId", "clientId") FROM stdin;
cm0pmrxy70001rb9a12vjej0f	/products/images/79839130-dc88-4e2c-923b-a2d190515f6b-5.jpg	\N	\N	\N	0e74b78c-bf3e-4def-98ed-2d578ae643fa	\N	2024-09-05 18:38:39.697	\N	\N	\N	\N	2024-09-05 18:38:39.697	\N	\N	\N
cm0pmry5t0003rb9amba6x612	/products/images/ff200185-1cd2-40d2-80fb-7791bc465d68-6.jpg	\N	\N	\N	0e74b78c-bf3e-4def-98ed-2d578ae643fa	\N	2024-09-05 18:38:39.697	\N	\N	\N	\N	2024-09-05 18:38:39.697	\N	\N	\N
cm0pmry610005rb9a54b4jxrp	/products/images/5b60c634-a58e-4f6f-b046-2d57455b517c-7.jpg	\N	\N	\N	0e74b78c-bf3e-4def-98ed-2d578ae643fa	\N	2024-09-05 18:38:39.697	\N	\N	\N	\N	2024-09-05 18:38:39.697	\N	\N	\N
cm0pms30m000brb9aqaelmee3	/products/images/d58d14b7-0ad4-4908-a6d3-208ab5cfc0bb-7.jpg	\N	\N	\N	0e74b78c-bf3e-4def-98ed-2d578ae643fa	\N	2024-09-05 18:38:46.343	\N	\N	\N	\N	2024-09-05 18:38:46.343	\N	\N	\N
cm0pms30l0008rb9atwymjpkv	/products/images/17c40945-354a-4668-a692-fd5779ffaf38-6.jpg	\N	\N	\N	0e74b78c-bf3e-4def-98ed-2d578ae643fa	\N	2024-09-05 18:38:46.342	\N	\N	\N	\N	2024-09-05 18:38:46.342	\N	\N	\N
cm0pms30l0009rb9ay89d1gkz	/products/images/b5f2a2b4-bc16-41cf-a0d4-582d80fceae2-5.jpg	\N	\N	\N	0e74b78c-bf3e-4def-98ed-2d578ae643fa	\N	2024-09-05 18:38:46.342	\N	\N	\N	\N	2024-09-05 18:38:46.342	\N	\N	\N
cm0pnsoue000drb9ag82zgy7o	/products/images/d345a7c9-7472-4296-ab3c-878405d2b39e-12.jpg	\N	\N	\N	4b2c20ee-ff22-40e7-9a86-59e6dccbc31c	\N	2024-09-05 19:07:14.184	\N	\N	\N	\N	2024-09-05 19:07:14.184	\N	\N	\N
cm0pnsp2g000frb9avenny48g	/products/images/75ad37e3-d434-43b3-86a0-f0980e88bc0e-13.jpg	\N	\N	\N	4b2c20ee-ff22-40e7-9a86-59e6dccbc31c	\N	2024-09-05 19:07:14.184	\N	\N	\N	\N	2024-09-05 19:07:14.184	\N	\N	\N
cm0pnsp2s000hrb9a3lpih2y0	/products/images/ca2cce30-f9f7-4b64-badf-80f8c40122f5-14.jpg	\N	\N	\N	4b2c20ee-ff22-40e7-9a86-59e6dccbc31c	\N	2024-09-05 19:07:14.184	\N	\N	\N	\N	2024-09-05 19:07:14.184	\N	\N	\N
\.


--
-- Data for Name: MenuParent; Type: TABLE DATA; Schema: public; Owner: default
--

COPY public."MenuParent" (id, title, description, icon, "createdAt", "updatedAt", priority, "userId", "descriptionAr", "titleAr") FROM stdin;
1	frfgtrg	\N	/setting/leftnav/images/16cc8cd4-9c87-40b4-885a-14227329a918-7.jpg	2024-09-01 14:10:16.941	2024-09-01 14:10:16.941	5454	clyhm29ou0000dnteppm9du5n	\N	\N
2	Service	\N	/setting/leftnav/images/11d34ea3-fec6-4b07-8408-087a758c3a16-6.jpg	2024-09-01 14:10:53.979	2024-09-01 14:10:53.979	2	clyhm29ou0000dnteppm9du5n	\N	\N
3	Products	\N		2024-09-01 15:09:21.08	2024-09-01 15:09:21.08	3	clyhm29ou0000dnteppm9du5n	\N	\N
4	Projects	\N	/setting/leftnav/images/445d5368-f8fe-44d4-ad09-d0019c6b633f-5.jpg	2024-09-01 15:25:11.383	2024-09-01 15:25:11.383	3	clyhm29ou0000dnteppm9du5n	\N	\N
5	Invoice 	\N	/setting/leftnav/images/a3b5773f-b133-45b6-b8d1-9f618e96803a-13.jpg	2024-09-01 15:25:45.858	2024-09-01 15:25:45.858	4	clyhm29ou0000dnteppm9du5n	\N	\N
6	Blogs	\N	/setting/leftnav/images/64fc5d96-d193-4cd8-a98c-9da52f2358d8-16.jpeg	2024-09-01 15:26:26.433	2024-09-01 15:26:26.433	5	clyhm29ou0000dnteppm9du5n	\N	\N
7	Employees	\N	/setting/leftnav/images/2bb04a89-a4e2-4a88-8d0b-4fcd29f985cc-18.jpg	2024-09-01 15:26:56.476	2024-09-01 15:26:56.476	6	clyhm29ou0000dnteppm9du5n	\N	\N
8	Services	Service Description 	/setting/leftnav/images/30ac4c99-34d6-40b3-af07-dc431bf65b76-20.svg	2024-09-24 00:39:00.771	2024-09-24 00:39:00.771	1	clyhm29ou0000dnteppm9du5n	وصف الخدمات	الخدمات
9	Works	desc	/setting/leftnav/images/30e1c964-81e7-4b41-bd42-0f89578a6b55-basic14.svg	2024-09-24 19:35:40.717	2024-09-24 19:35:40.717	2	clyhm29ou0000dnteppm9du5n	الاعمال	أعمالنا
10	Our Products	Our Products	/setting/leftnav/images/8e34bc68-1886-464e-8a9f-a02113f2e733-basic12.svg	2024-09-24 20:46:13.65	2024-09-24 20:46:13.65	3	clyhm29ou0000dnteppm9du5n	بوابة المنتجات	بوابة المنتجات
11	Blogs 	blogs	/setting/leftnav/images/001e367c-8834-4e4b-8ad2-54671314b110-basic7.svg	2024-09-24 21:28:28.779	2024-09-24 21:28:28.779	5	clyhm29ou0000dnteppm9du5n	مدونات 	مدونات 
12	Technologies 	Technologies 		2024-09-24 23:30:24.544	2024-09-24 23:30:24.544	5	clyhm29ou0000dnteppm9du5n	Technologies 	تقنيات 
13	Packages	bewhdbwed	/setting/leftnav/images/16b2edc3-120a-42a1-b6eb-25e6855397c2-indos4.svg	2024-10-07 06:28:45.859	2024-10-07 06:28:45.859	3	clyhm29ou0000dnteppm9du5n	صثلثصغيلثص	عروض
15	industries	\N	\N	2024-10-26 23:32:59.684	2024-11-13 14:17:36.621	0	clyhm29ou0000dnteppm9du5n	\N	مجالات 
14	Plans	\N	\N	2024-10-26 22:46:27.607	2024-11-13 16:33:03.817	0	clyhm29ou0000dnteppm9du5n	\N	الاشتراكات
\.


--
-- Data for Name: Offer; Type: TABLE DATA; Schema: public; Owner: default
--

COPY public."Offer" (id, title, "titleAr", description, "descriptionAr", discount, "startDate", "endDate", "isActive", image, icon, "createdAt", "updatedAt", "userId") FROM stdin;
e68474fb-c0e6-4966-90bd-d380d843a96b	Get a free brand guideline document with your logo design!	 احصل على دليل هوية العلامة التجارية مجانًا مع تصميم الشعار الخاص بك	Elevate your brand with a professional logo, color palette, and typography that ensure consistency across all platforms. Ideal for businesses building their identity.	ارتقِ بعلامتك التجارية بشعار احترافي، ولوحة ألوان، وخطوط تضمن التناسق عبر جميع المنصات. مثالي للشركات التي تبني هويتها.	79	2025-01-10 00:00:00	2025-01-26 00:00:00	t	/offers-media/images/offer1.jpg	\N	2025-01-15 02:36:27.937	2025-01-15 04:26:24.301	clyhm29ou0000dnteppm9du5n
d0dda690-2901-465c-9ce1-b2aa08b2665a	Get 3 free social media post designs with your first package!	احصل على 3 تصاميم مجانية لمنشورات وسائل التواصل الاجتماعي مع أول باقة	Boost your online engagement with eye-catching and professional designs tailored for your social media platforms. Perfect for businesses looking to grow their audience.	عزز تفاعلك على الإنترنت بتصاميم احترافية وجذابة مخصصة لمنصات التواصل الاجتماعي الخاصة بك. مثالي للشركات التي تسعى لتوسيع جمهورها.	190	2025-02-15 00:00:00	2025-04-28 00:00:00	t	/offers-media/images/offer2.jpg	\N	2025-01-15 02:31:53.329	2025-01-15 04:32:02.462	clyhm29ou0000dnteppm9du5n
576adf57-34ae-45a4-a445-059fd2f8e996	Get a free logo design with your first branding package!	احصل على تصميم شعار مجاني مع أول باقة للعلامة التجارية	Transform your ideas into visually appealing designs that capture your brand’s essence. From logos to complete branding, we’ve got you covered.	حول أفكارك إلى تصاميم جذابة تعكس جوهر علامتك التجارية. من الشعارات إلى العلامة التجارية الكاملة، نحن هنا لخدمتك.	240	2025-01-12 00:00:00	2025-03-11 00:00:00	t	/offers-media/images/offer3.jpg	\N	2025-01-15 02:26:42.114	2025-01-15 04:32:02.462	clyhm29ou0000dnteppm9du5n
137fe2fd-7d92-4a90-a156-6cc4dfd4162f	Get 20% off on your first project!	 احصل على خصم 20٪ على مشروعك الأول	We specialize in creating custom, high-quality software tailored to meet your business needs. Our solutions are designed to improve efficiency and drive growth.	نحن متخصصون في إنشاء برمجيات عالية الجودة ومخصصة لتلبية احتياجات عملك. حلولنا مصممة لتحسين الكفاءة ودفع عجلة النمو.	130	2025-01-25 00:00:00	2025-02-08 00:00:00	t	/offers-media/images/offer4.jpg	/offers/icons/e5d78454-96f2-41de-8db3-d394e20f5a90-49a72045-77c4-4c9c-9a4d-4fb3f4f05b8b-15.jpg	2024-10-16 19:02:56.67	2025-01-15 04:39:07.886	clyhm29ou0000dnteppm9du5n
\.


--
-- Data for Name: Order; Type: TABLE DATA; Schema: public; Owner: default
--

COPY public."Order" (id, "orderNumber", "orderDate", description, "clientId", "clientName", "clientAddress", "clientContact", "clientEmail", "clientPhone", "serviceId", quantity, "unitPrice", "estimatedCost", subtotal, discount, "taxRate", "taxAmount", "totalAmount", currency, "paymentTerms", "paidAt", "paymentMethod", "startDate", "completionDate", notes, "referenceNumber", "termsAndConditions", "createdAt", "updatedAt", "orderType", status, "orderManagerId", image) FROM stdin;
cm0w3xrlj0001xrjdwjdnjcx9	SAMORD202409108094022553	2024-09-10 07:25:41.877	dcref	\N	\N	\N	\N	\N	\N	\N	4343	3	\N	3232	4343	4343	4343	323232	eefre	frefre	\N	Visa	\N	\N	fre	\N	\N	2024-09-10 07:25:41.877	2024-09-10 07:25:41.877	Service	PENDING	clyhm29ou0000dnteppm9du5n	
cm0w4skda0001drd83lhntx6o	SAMORD202409106144536245	2024-09-10 07:49:38.928	rtgtr	\N	\N	\N	\N	\N	\N	\N	434	554	\N	4554	4343	445	554	4554	erg	gtrgr	\N	Visa	\N	\N	rtg	\N	\N	2024-09-10 07:49:38.928	2024-09-10 07:49:38.928	Service	PENDING	clyhm29ou0000dnteppm9du5n	
cm0w7nbnm00011aj9cfmh1b87	SAMORD202409109782972522	2024-09-10 09:09:33.157	gtr	\N	\N	\N	\N	\N	\N	\N	454	4545	\N	4343	55	454	4554	434343	rgtr	efref	\N	Visa	\N	\N	erfre	\N	\N	2024-09-10 09:09:33.157	2024-09-10 09:09:33.157	\N	\N	clyhm29ou0000dnteppm9du5n	
cm0w7wnbd00031aj9l7di8qyq	SAMORD202409107954510651	2024-09-10 09:16:47.207	gtr	\N	\N	\N	\N	\N	\N	\N	455	5454	\N	5454	6565	4554	5454	545454	trtr	gf	\N	Visa	\N	\N	gff	\N	\N	2024-09-10 09:16:47.207	2024-09-10 09:16:47.207	\N	\N	clyhm29ou0000dnteppm9du5n	
cm0wkeo120001h36r26b4qb78	SAMORD202409102738891153	2024-09-10 15:06:44.335	erfrefre	\N	\N	\N	\N	\N	\N	\N	4343	434343	\N	433443	4343	34	4343	344343	ff	erfre	\N	Bank Transfer	\N	\N	refr	\N	\N	2024-09-10 15:06:44.335	2024-09-10 15:06:44.335	Service	PENDING	clyhm29ou0000dnteppm9du5n	
cm0wmerjo0001ijwmz0y4twem	SAMORD202409101775064058	2024-09-10 16:02:48.148	edw	\N	\N	\N	\N	\N	\N	\N	43	3232	\N	3232	3443	32	3232	3232	rgtrt	ded	\N	Bank Transfer	\N	\N	ewd	\N	\N	2024-09-10 16:02:48.148	2024-09-10 16:02:48.148	Service	PENDING	clyhm29ou0000dnteppm9du5n	
\.


--
-- Data for Name: Package; Type: TABLE DATA; Schema: public; Owner: default
--

COPY public."Package" (id, name, "nameAr", description, "descriptionAr", price, "isPopular", image, icon, "createdAt", "updatedAt", "userId", slug) FROM stdin;
1	standard	اساسية	This is a standard web development package, featuring essential tools and libraries for building responsive and dynamic applications. It includes frameworks for frontend and backend development, databases, styling solutions, and authentication modules. This package is ideal for creating high-performance, full-stack web applications.	هذه حزمة قياسية لتطوير الويب، تحتوي على أدوات ومكتبات أساسية لبناء تطبيقات تفاعلية ومتجاوبة. تتضمن أطر عمل لتطوير الواجهة الأمامية والخلفية، وقواعد بيانات، وحلول لتنسيق التصميم، ووحدات للمصادقة. هذه الحزمة مثالية لإنشاء تطبيقات ويب عالية الأداء وكاملة.	453	f	/package-media/images/90bfa19e-c06d-40c4-85c4-91a66acdde22-2.webp	/package-media/icons/90209002-8186-40ab-83bc-bd0eb34a2d00-basic14.svg	2024-11-07 09:29:34.372	2024-11-08 00:59:50.156	clyhm29ou0000dnteppm9du5n	standard
3	enterprise 	شركات	The enterprise web development package is designed to meet the complex needs of large organizations and corporations. It offers high-end solutions for scalable websites, custom applications, and robust digital platforms. This package includes advanced security measures, integrations with enterprise systems, and multi-user management. It ensures seamless performance, even with high traffic loads, and offers full data analytics and reporting tools. Our team works closely with you to deliver a tailored solution that aligns with your business goals. From content management to customer relationship management, we handle all aspects. With a focus on security, compliance, and efficiency, this package is perfect for businesses looking to expand and optimize their online operations. Choose the enterprise package for a reliable, high-performance solution.	تم تصميم حزمة تطوير الويب للمؤسسات لتلبية احتياجات المنظمات الكبيرة والشركات الكبرى. توفر هذه الحزمة حلولًا متطورة للمواقع القابلة للتوسع، والتطبيقات المخصصة، والمنصات الرقمية القوية. تشمل الحزمة تدابير أمان متقدمة، وتكامل مع أنظمة المؤسسات، وإدارة متعددة للمستخدمين. تضمن الحزمة أداءً سلسًا حتى مع أحمال المرور العالية، وتوفر أدوات تحليل البيانات والتقارير. يعمل فريقنا عن كثب معك لتقديم حل مخصص يتماشى مع أهداف عملك. من إدارة المحتوى إلى إدارة علاقات العملاء، نحن نتعامل مع جميع الجوانب. مع التركيز على الأمان والامتثال والكفاءة، تعد هذه الحزمة مثالية للشركات التي تتطلع إلى التوسع وتحسين عملياتها عبر الإنترنت. اختر حزمة المؤسسات للحصول على حل موثوق وعالي الأداء.	1200	t	/package-media/images/704c5030-a680-40e2-b954-76f6b5453a4f-7.webp	/package-media/icons/ff98dbd5-7a6a-4d68-85d5-f98203ed83a0-basic13.svg	2024-11-08 13:04:36.779	2024-11-08 13:55:57.255	clyhm29ou0000dnteppm9du5n	enterprise
2	advanced	متقدم	This advanced web development package offers a comprehensive set of tools and services to create dynamic, responsive, and high-performing websites. It includes cutting-edge technologies, custom designs, and robust backend solutions. The package ensures scalability, security, and seamless user experience across all devices. Ideal for businesses looking to enhance their online presence and meet modern digital demands. With expertise in front-end and back-end development, we guarantee an optimized website that delivers results. Let us bring your vision to life with precision and creativity. Whether for e-commerce, corporate sites, or blogs, our solutions are tailored to your needs. Choose this package for a powerful and future-ready web solution.	يقدم هذا الحزمة المتقدمة لتطوير الويب مجموعة شاملة من الأدوات والخدمات لإنشاء مواقع ويب ديناميكية وقابلة للتفاعل وعالية الأداء. تشمل الحزمة أحدث التقنيات، والتصاميم المخصصة، وحلول backend قوية. تضمن الحزمة قابلية التوسع والأمان وتجربة مستخدم سلسة عبر جميع الأجهزة. مثالية للشركات التي تتطلع إلى تعزيز وجودها على الإنترنت وتلبية المتطلبات الرقمية الحديثة. بفضل خبرتنا في تطوير الواجهات الأمامية والخلفية، نضمن لك موقع ويب محسن يقدم نتائج. دعنا نحيي رؤيتك بدقة وابداع. سواء كان لمواقع التجارة الإلكترونية أو المواقع المؤسسية أو المدونات، فإن حلولنا مخصصة لاحتياجاتك. اختر هذه الحزمة للحصول على حل ويب قوي وجاهز للمستقبل.	899	t	/package-media/images/18.webp	\N	2024-11-08 00:59:50.156	2024-11-08 14:10:29.905	clyhm29ou0000dnteppm9du5n	advanced
\.


--
-- Data for Name: PackageFeature; Type: TABLE DATA; Schema: public; Owner: default
--

COPY public."PackageFeature" (id, name, "nameAr", value, "valueAr", description, "descriptionAr") FROM stdin;
3	Custom Layout Design	تصميم مخصص لواجهة الموقع	Custom Layout Design	تصميم مخصص لواجهة الموقع	\N	\N
4	SEO Semantic 	ملائم لتحسين محركات البحث	SEO Semantic 	ملائم لتحسين محركات البحث	\N	\N
5	CMS	نظام إدارة المحتوى 	CMS	نظام إدارة المحتوى 	\N	\N
6	Integrated Contact Forms w/ Captcha	نماذج تواصل مدمجة مع كود تحقق	Integrated Contact Forms w/ Captcha	نماذج تواصل مدمجة مع كود تحقق	\N	\N
7	News Management (if applicable)	إدارة الأخبار (عند الحاجة)	News Management (if applicable)	إدارة الأخبار (عند الحاجة)	\N	\N
8	Testimonials Management	إدارة شهادات العملاء	Testimonials Management	إدارة شهادات العملاء	\N	\N
9	Newsletter	نظام نشرة بريدية	Newsletter	نظام نشرة بريدية	\N	\N
10	SEO Plugin	إضافة لتحسين محركات البحث 	SEO Plugin	إضافة لتحسين محركات البحث (SEO)	\N	\N
11	Website Training Up to 5 Hrs	تدريب على الموقع لمدة تصل إلى 5 ساعات	Website Training Up to 5 Hrs	تدريب على الموقع لمدة تصل إلى 5 ساعات	\N	\N
12	URL Submission in SEs	إدراج روابط الموقع في محركات البحث	URL Submission in SEs	إدراج روابط الموقع في محركات البحث	\N	\N
1	URL Submission in SEs	إدراج روابط الموقع في محركات البحث	URL Submission in SEs	إدراج روابط الموقع في محركات البحث	deded	efrfrf
14	Custom Layout Design	تصميم مخصص لواجهة الموقع	Responsive Design	تصميم مخصص لواجهة الموقع	\N	\N
15	SEO Semantic 	ملائم لتحسين محركات البحث	SEO Semantic 	ملائم لتحسين محركات البحث	\N	\N
16	CMS	نظام إدارة المحتوى 	CMS	نظام إدارة المحتوى 	\N	\N
18	Integrated Contact Forms w/ Captcha	نماذج تواصل مدمجة مع كود تحقق	Integrated Contact Forms w/ Captcha	نماذج تواصل مدمجة مع كود تحقق	\N	\N
17	News Management (if applicable)	إدارة الأخبار (عند الحاجة)	News Management (if applicable)	إدارة الأخبار (عند الحاجة)	\N	\N
19	Testimonials Management	إدارة شهادات العملاء	Testimonials Management	إدارة شهادات العملاء	\N	\N
20	Newsletter	نظام نشرة بريدية	Newsletter	نظام نشرة بريدية	\N	\N
2	Responsive Design	تصميم متجاوب	Responsive Design	تصميم متجاوب	gtrgtr	gtrgt
13	Responsive Design	تصميم متجاوب	Responsive Design	تصميم متجاوب	\N	\N
\.


--
-- Data for Name: PackageFeatureLink; Type: TABLE DATA; Schema: public; Owner: default
--

COPY public."PackageFeatureLink" (id, included, "packageId", "featureId") FROM stdin;
5	t	1	5
6	t	1	6
13	t	2	3
14	t	2	4
15	t	2	5
16	t	2	6
17	t	2	7
18	t	2	8
21	t	3	1
22	t	3	2
23	t	3	4
24	t	3	5
25	t	3	6
26	t	3	7
27	t	3	8
28	t	3	9
29	t	3	10
1	t	1	1
2	t	1	2
3	t	1	3
4	t	1	4
10	f	1	10
9	f	1	9
8	f	1	8
7	f	1	7
11	t	2	1
12	t	2	2
20	f	2	10
19	f	2	9
30	t	3	3
\.


--
-- Data for Name: Page; Type: TABLE DATA; Schema: public; Owner: default
--

COPY public."Page" (id, name, "nameAr", description, "descriptionAr", title, "titleAr", image, icon, "userId") FROM stdin;
1	services	الخدمات	desc	وصف	service	خدمات الشركة	/page-media/images/4107acd8-1f65-4f4b-90f9-5b64678a836e-16.jpg	/page-media/icons/c25bb32e-aa9b-47ce-900c-516ab204bda4-16.jpg	clyhm29ou0000dnteppm9du5n
2	products	منتجات	product	منتجات	product	منتجات	/page-media/images/85e02b20-9fd5-4521-a9d4-9995552d2664-saudi-3.jpg	/page-media/icons/f8d86030-6f29-4678-b180-f62461238cef-saudi-3.jpg	clyhm29ou0000dnteppm9du5n
3	works	أعمال	works	أعمال	works	أعمال	/page-media/images/33ea241e-7468-46df-a74b-f5e0ec2245ae-5.jpg	/page-media/icons/481425c4-5841-4c61-8c50-59e9479338e0-5.jpg	clyhm29ou0000dnteppm9du5n
4	categories	تصنيفات	categories	تصنيفات	categories	تصنيفات	/page-media/images/37512773-95a6-4352-ba9f-547c84fc6cec-indu7.webp	/page-media/icons/2dc1c9ae-844d-4003-8db3-d48e146fb4b1-indu7.webp	clyhm29ou0000dnteppm9du5n
5	offers	عروض حصرية	offers	عروض حصرية	offers	عروض حصرية	/page-media/images/081735fc-d629-4afa-bfc3-4bfb643263e6-6.webp	/page-media/icons/dfa7057e-c49c-41f1-ab63-c9dc6613dbe7-6.webp	clyhm29ou0000dnteppm9du5n
\.


--
-- Data for Name: PageSection; Type: TABLE DATA; Schema: public; Owner: default
--

COPY public."PageSection" (id, title, "titleAr", "desc", "descAr", more, "moreAr", "isActive", url, "itemsNo", "createdAt", "updatedAt", name, "userId") FROM stdin;
1	Our Services	خدمات الشركة	Our services are designed to provide innovative solutions tailored to meet your unique needs. From concept to execution, we ensure top-notch quality and reliability in every project. Explore our wide range of offerings to find the perfect fit for your business.	تُقدّم خدماتنا حلولاً مبتكرة مصممة خصيصًا لتلبية احتياجاتك الفريدة. من الفكرة إلى التنفيذ، نضمن أعلى مستويات الجودة والموثوقية في كل مشروع. استكشف مجموعة خدماتنا المتنوعة للعثور على ما يناسب عملك\r\n\r\n	More Services	المزيد من الخدمات	yes		18	2024-09-22 11:14:08.822	2024-09-22 11:14:08.822	services	clyhm29ou0000dnteppm9du5n
2	Service  Categories	الخدمات حسب التصنيف	Explore our diverse range of services, organized into specific categories.\r\nFind tailored solutions to meet your needs quickly and efficiently.\r\nNavigate through our offerings with ease and discover the right service for you.	استكشف مجموعتنا المتنوعة من الخدمات المصنفة إلى فئات محددة لتلبية جميع احتياجاتك، سواء كانت خدمات فردية أو تجارية. ابحث عن الحلول المثالية بسرعة وكفاءة، وتصفح بسهولة بين العروض لاكتشاف الخدمة الأنسب لك التي تضمن لك الجودة والاحترافية.	More categories 	المزيد من التصنيفات	yes		8	2024-09-23 10:01:32.634	2024-09-23 10:01:32.634	servicesCategory	clyhm29ou0000dnteppm9du5n
3	Latest Blogs 	احدث التدوينات 	Blogs	المدونات	ore posts 	المــزيد من الاخبار	yes		2	2024-09-25 17:18:55.723	2024-09-25 18:17:48.199	blog	clyhm29ou0000dnteppm9du5n
4	How it Works	طريقة التنفيذ	Discover how easy it is to get started with us! Our process is designed to be simple and transparent. From choosing the service you need to receiving the final product, we guide you through each step to ensure a smooth and satisfying experience.	اكتشف مدى سهولة البدء معنا! تم تصميم عمليتنا لتكون بسيطة وشفافة. بدءًا من اختيار الخدمة التي تحتاجها إلى استلام المنتج النهائي، نرشدك خلال كل خطوة لضمان تجربة سلسة ومرضية. سواء كنت تبحث عن حلول مخصصة أو توجيه من الخبراء	More Info	الاطلاع على المزيد			0	2024-09-25 21:50:28.853	2024-09-25 21:43:58.096	workPhase	clyhm29ou0000dnteppm9du5n
5	Display Our Latest Work	عرض اخر الاعمال	Out last works in all industries starting from designing to devlopment 	اخر اعمال الشركة في كل المجالات الحيوية 	More Works	عرض المزيد من الاعمال	yes		0	2024-09-26 20:36:27.385	2024-09-26 20:37:40.351	works	clyhm29ou0000dnteppm9du5n
8	Exclusive Special Offers Available in 	عروض خاصة وحصرية متوفرة في	Discover our exclusive range of special offers in [Location], carefully curated to meet your needs. Whether you're looking for top-quality services or unbeatable prices, we have something for everyone. Our deals are available for a limited time only in [Location], so don't miss out! Explore now and take advantage of the best offerings in your area	اكتشف مجموعتنا الحصرية من العروض الخاصة في [الموقع]، المصممة بعناية لتلبية احتياجاتك. سواء كنت تبحث عن خدمات عالية الجودة أو أسعار لا تُضاهى، لدينا شيء للجميع. عروضنا متاحة لفترة محدودة فقط في [الموقع]، فلا تفوت الفرصة! استكشف الآن واستفد من أفضل عروضنا في منطقتك	More Offers	المزيد من العروض	yes		0	2024-09-22 11:14:08.822	2024-10-22 13:59:43.784	offers	clyhm29ou0000dnteppm9du5n
6	Our Happy Clients Simply Love Us and Our Work	عملاؤنا المخلصون يثقون بنا وبجودة عملنا دون تردد	Our clients trust us because we deliver high-quality work that exceeds their expectations. With a strong focus on understanding their needs, we ensure that every project is a success. From design to execution, we are committed to providing exceptional results that build lasting relationships.	ضع عملاؤنا ثقتهم فينا لأننا نقدم أعمالاً عالية الجودة تتجاوز توقعاتهم. مع التركيز على فهم احتياجاتهم، نحرص على أن يكون كل مشروع ناجحًا. من التصميم إلى التنفيذ، نحن ملتزمون بتقديم نتائج استثنائية تساهم في بناء علاقات طويلة الأمد.	Explore More	أطلع على المزيد	yes		0	2024-09-27 01:49:58.45	2024-09-27 01:52:34.383	testimonials	clyhm29ou0000dnteppm9du5n
7	Service Quality 	جودة الخدمات	Service quality refers to the overall assessment of how well a service meets or exceeds customer expectations. It encompasses various factors such as reliability, responsiveness, professionalism, and the ability to fulfill promises. High service quality is critical for building customer satisfaction, loyalty, and trust, often leading to repeat business and positive word-of-mouth. It is measured through customer feedback, performance metrics, and industry standards. Ensuring consistent and high-quality service can differentiate a company from its competitors, making it a key driver of success in service-oriented industries.\r\n\r\n	جودة الخدمة تشير إلى التقييم العام لكيفية تلبية أو تجاوز الخدمة لتوقعات العملاء. تشمل مجموعة من العوامل مثل الموثوقية، الاستجابة، الاحترافية، والقدرة على الوفاء بالوعود. تعتبر جودة الخدمة العالية أمرًا أساسيًا لبناء رضا العملاء، الولاء، والثقة، مما يؤدي غالبًا إلى تكرار الأعمال والإشادة الشفهية. يتم قياسها من خلال ملاحظات العملاء، مقاييس الأداء، والمعايير الصناعية. يساهم الحفاظ على جودة خدمة عالية ومتسقة في تمييز الشركة عن منافسيها، مما يجعلها محركًا رئيسيًا للنجاح في الصناعات القائمة على الخدمات.\r\n	More 	المزيد من الخدمات	yes		44	2024-09-29 17:23:49.087	2024-09-29 17:23:49.087	ServiceFeature	clyhm29ou0000dnteppm9du5n
9	Technologies We Work With	التقنيات المستخدمة في الشركة لبناء مختلف التطبيفات	Our team leverages cutting-edge technologies to deliver innovative software solutions tailored to your needs. We specialize in utilizing the latest tools, platforms, and programming frameworks to ensure efficiency, scalability, and seamless integration, driving your business growth with the power of technology.	نستخدم أحدث التقنيات لتقديم حلول برمجية مبتكرة تناسب احتياجاتكم. نتميز باستخدام أحدث الأدوات والمنصات وأطر البرمجة لضمان الكفاءة والقابلية للتوسع والتكامل السلس، مما يساعد في تنمية أعمالكم باستخدام قوة التكنولوجيا.					0	2024-12-06 09:38:04.735	2024-12-07 07:59:16.517	technologies	clyhm29ou0000dnteppm9du5n
10	Industries We Serve	مجالات العمل 	We deliver tailored solutions across diverse sectors like healthcare, education, finance, retail, and technology, driving innovation and growth.	نقدم حلولًا مخصصة لمجالات متنوعة مثل الرعاية الصحية والتعليم والمالية والتجزئة والتكنولوجيا، مما يدعم الابتكار والنمو.	more 	المزيــد	yes		0	2024-12-30 15:06:42.009	2024-12-30 15:04:12.18	industries	clyhm29ou0000dnteppm9du5n
\.


--
-- Data for Name: Partner; Type: TABLE DATA; Schema: public; Owner: default
--

COPY public."Partner" (id, name, slug, type, image, icon, "contactPerson", email, phone, address, city, country, website, notes, "createdAt", "updatedAt", "userId") FROM stdin;
\.


--
-- Data for Name: Permission; Type: TABLE DATA; Schema: public; Owner: default
--

COPY public."Permission" (id, name, slug, image, description, "createdAt", "updatedAt") FROM stdin;
\.


--
-- Data for Name: Phase; Type: TABLE DATA; Schema: public; Owner: default
--

COPY public."Phase" (id, name, description, image, icon, sequence, "serviceId", "userId", "createdAt", "updatedAt", "projectId", "descriptionAr", "nameAr", "phaseType") FROM stdin;
11	Programming pages 1	gtgtrgtrg	/projects/phases/images/ccfb923e-af19-4916-97c4-e62c15aefe7c-7.jpg	/projects/phases/icons/288b5e1e-aa66-49f7-abf5-fd6ba5a0a0a6-13.jpg	9	\N	clyhm29ou0000dnteppm9du5n	2024-08-28 03:56:28.17	2024-08-28 03:56:28.17	cm0dbpmyi0001108jjvbv40zl	\N	\N	\N
12	Programming pages 2	gtgtrgtrg	/projects/phases/images/3bd002b5-7c55-45a0-97bb-1397e580bd41-7.jpg	/projects/phases/icons/69ea24b7-9f48-4d6a-b447-0f989c880e45-13.jpg	9	\N	clyhm29ou0000dnteppm9du5n	2024-08-28 03:56:47.499	2024-08-28 03:57:06.218	\N	\N	\N	\N
13	phase3	regftgt			9	\N	clyhm29ou0000dnteppm9du5n	2024-08-28 07:53:40.076	2024-08-28 07:53:40.076	cm0dk4ntb0007yqubdjyu77po	\N	\N	\N
14	phase4	regftgt			9	\N	clyhm29ou0000dnteppm9du5n	2024-08-28 07:53:51.637	2024-08-28 07:53:51.637	cm0dk4ntb0007yqubdjyu77po	\N	\N	\N
15	phase5	regftgt			9	\N	clyhm29ou0000dnteppm9du5n	2024-08-28 07:54:03.532	2024-08-28 07:54:03.532	cm0dk4ntb0007yqubdjyu77po	\N	\N	\N
17	Planning	planning	/projects/phases/images/ba2671c5-061c-4023-bf2f-1f1c231a5b62-16.jpg	/projects/phases/icons/64841374-4d90-4cbd-928a-6db4a8a9bc62-basic9.svg	9	\N	clyhm29ou0000dnteppm9du5n	2024-09-02 15:49:49.47	2024-09-02 15:49:49.47	cm0l6e16y0001k71mgu08zugv	\N	\N	\N
18	design	This setup should give you a solid foundation for displaying your nested menu structure in a React component. The ElementDisplay component's recursive nature allows for deep nesting of elements, handling even complex menu structures with multiple levels of sub-elements.	/projects/phases/images/3aab0002-7b21-474a-bba0-d7b7521d9477-16.jpeg	/projects/phases/icons/9ec03c55-d4b5-43e3-93b2-e37fc72d46e2-icon5.svg	9	\N	clyhm29ou0000dnteppm9du5n	2024-09-02 15:51:09.524	2024-09-02 15:51:09.524	cm0l6e16y0001k71mgu08zugv	\N	\N	\N
9	phase1	This approach ensures that the loading spinner is displayed initially and then the actual content is shown once the component has finished its initial render.	/services/phases/images/6655072a-9fd6-4268-80e4-b9cbb91e0b67-6.jpg	/services/phases/icons/207ffd17-18b4-404e-93d6-a68ddcef2639-basic10.svg	9	\N	clyhm29ou0000dnteppm9du5n	2024-07-29 12:22:54.032	2024-10-03 06:35:07.858	\N	\N	\N	\N
10	phase2	This approach ensures that the loading spinner is displayed initially and then the actual content is shown once the component has finished its initial render.	/services/phases/images/3ab5c5d8-adf9-44a5-9934-c257d975d3e2-15.jpg	/services/phases/icons/b3f0d9bf-d6fb-4e54-899f-09e3ac231819-basic9.svg	9	\N	clyhm29ou0000dnteppm9du5n	2024-07-29 12:23:23.978	2024-10-03 06:35:07.858	\N	\N	\N	\N
20	Research&Discovery	nformation is gathered to understand user needs and the market. The goal is to identify problems and potential opportunities	/company/phases/phase1.png	/projects/phases/icons/18dadfb3-f7df-4cd0-b344-74c73e26742d-icon3.svg	1	59	clyhm29ou0000dnteppm9du5n	2024-09-02 15:52:26.737	2024-10-03 06:39:48.872	cm0l6e16y0001k71mgu08zugv	 جمع المعلومات لفهم احتياجات المستخدمين والسوق. الهدف هو تحديد المشاكل والفرص المحتملة	البحث والاكتشاف	company
19	Strategy	Reflects the goal of defining a strategic approach to the design challenge.	/company/phases/phase2.png	/projects/phases/icons/34c9b8d0-f368-4c85-9987-0645076384eb-basic7.svg	2	59	clyhm29ou0000dnteppm9du5n	2024-09-02 15:51:49.472	2024-10-03 06:39:48.872	cm0l6e16y0001k71mgu08zugv	 تهدف هذه المرحلة إلى تحديد وتوثيق المشكلات والأهداف، مما يساعد على توجيه الجهود في المشروع	الاستراتيجية	company
21	Ideate	Focuses on developing and refining initial concepts into viable solutions.	/company/phases/phase3.svg	\N	3	59	clyhm29ou0000dnteppm9du5n	2024-09-25 21:05:33.589	2024-10-03 06:39:48.872	\N	 يتم خلال هذه المرحلة توليد الأفكار والحلول المحتملة، مما يسمح بالابتكار والاستكشاف	تطوير المفاهيم	company
22	Design	involves translating the selected ideas into tangible, detailed designs.	/company/phases/phase4.jpg	\N	4	59	clyhm29ou0000dnteppm9du5n	2024-09-25 21:09:26.011	2024-10-03 06:39:48.872	\N	 في هذه المرحلة، يتم تحويل الأفكار المختارة إلى تصاميم واقعية وتفصيلية	التصميم	company
\.


--
-- Data for Name: Plan; Type: TABLE DATA; Schema: public; Owner: default
--

COPY public."Plan" (id, name, "nameAr", slug, description, "descriptionAr", "monthlyPrice", "semiAnnualPrice", "yearlyPrice", features, "featuresAr", limits, "limitsAr", support, "supportAr", purpose, image, icon, "interval", duration, "createdAt", "updatedAt", "purposeAr", "userId") FROM stdin;
2	Basic 	اساسية	basic	he Basic plan offers essential design tools and features, perfect for freelance designers and small design teams to begin their creative projects.	 تقدم الخطة الأساسية أدوات وميزات تصميم ضرورية، مثالية للمصممين المستقلين والفرق الصغيرة لبدء مشاريعهم الإبداعية.	46.000000000000000000000000000000	234.000000000000000000000000000000	345.000000000000000000000000000000	Access to core design tools - Standard design templates - Basic revisions and edits - Portfolio management	الوصول إلى أدوات التصميم الأساسية - قوالب تصميم قياسية - مراجعات وتعديلات أساسية - إدارة ملف الأعمال	Up to 10 design projects, 5 GB cloud storage, limited design templates	حتى 10 مشاريع تصميم، 5 جيجابايت من التخزين السحابي، قوالب تصميم محدودة	Standard support via email, available weekdays	دعم قياسي عبر البريد الإلكتروني متاح خلال أيام الأسبوع	Best suited for freelance designers or small teams looking to manage and execute simple design projects	/plans-media/images/8.webp	/plans-media/icons/feature4.svg	MONTHLY	4	2024-11-02 03:07:32.447	2024-11-06 12:21:48.013	الأنسب للمصممين المستقلين أو الفرق الصغيرة لإدارة وتنفيذ مشاريع تصميم بسيطة	clyhm29ou0000dnteppm9du5n
3	Standard	قياسي	standard	The Standard plan provides enhanced design features, making it suitable for growing design teams and agencies that require more flexibility and resources.	وفر الخطة القياسية ميزات تصميم متقدمة، مما يجعلها مناسبة للفرق التصميمية المتنامية والوكالات التي تتطلب المزيد من المرونة والموارد.	100.000000000000000000000000000000	500.000000000000000000000000000000	900.000000000000000000000000000000	Advanced design tools and editing options - Premium design templates and assets - Team collaboration features	مراجعات ذات أولوية وأوقات تسليم أسرع - أدوات تصميم متقدمة وخيارات تحرير - ميزات تعاون الفريق	Up to 25 design projects, 20 GB cloud storage, access to premium design templates	حتى 25 مشروع تصميم، 20 جيجابايت من التخزين السحابي، الوصول إلى قوالب التصميم المميزة	Priority email and chat support, available during business hours	دعم ذو أولوية عبر البريد الإلكتروني والدردشة، متاح خلال ساعات العمل	Ideal for growing design teams or agencies that need comprehensive design resources and collaboration tools	/plans-media/images/5.webp	/plans-media/icons/feature1.svg	MONTHLY	5	2024-11-02 03:07:32.447	2024-11-06 12:21:48.013	 مثالية للفرق التصميمية المتنامية أو الوكالات التي تحتاج إلى موارد تصميم شاملة وأدوات للتعاون	clyhm29ou0000dnteppm9du5n
4	Premium	بريميوم	premium	The Premium plan offers a complete set of design features and tools, designed for professional design studios and large agencies that handle high-volume projects and require top-tier support.	توفر خطة بريميوم مجموعة كاملة من ميزات وأدوات التصميم، مصممة لاستوديوهات التصميم الاحترافية والوكالات الكبيرة التي تتعامل مع مشاريع ضخمة وتحتاج إلى دعم من الدرجة الأولى.	340.000000000000000000000000000000	780.000000000000000000000000000000	1200.000000000000000000000000000000	Full access to all design tools and assets - Exclusive templates and high-quality resources - Unlimited revisions and dedicated project management	تعاون الفريق المتقدم وإدارة سير العمل - مراجعات غير محدودة وإدارة مشاريع مخصصة - الوصول الكامل إلى جميع أدوات وأصول التصميم	Unlimited design projects, 100 GB cloud storage, access to exclusive design templates and resources	مشاريع تصميم غير محدودة، 100 جيجابايت من التخزين السحابي، الوصول إلى قوالب وموارد تصميم حصرية	24/7 priority support via email, chat, and phone	دعم ذو أولوية على مدار الساعة عبر البريد الإلكتروني والدردشة والهاتف	Perfect for professional design studios and large agencies that need advanced tools, premium support, and unlimited project capabilities	/plans-media/images/8.webp	/plans-media/icons/feature16.svg	MONTHLY	1	2024-11-02 03:07:32.447	2024-11-06 12:21:48.013	مثالية لاستوديوهات التصميم الاحترافية والوكالات الكبيرة التي تحتاج إلى أدوات متقدمة ودعم مميز وقدرات مشاريع غير محدودة	clyhm29ou0000dnteppm9du5n
\.


--
-- Data for Name: PlanCategory; Type: TABLE DATA; Schema: public; Owner: default
--

COPY public."PlanCategory" (id, name, "nameAr", slug, image, title, icon, description, "descriptionAr", "createdAt", "updatedAt", "subTitle", "subTitleAr", "titleAr", "userId", priority) FROM stdin;
6	Web Development Plans	باقات تطوير مواقع الويب 	web-development-plans	/plans-media/category/images/8d1526b4-4e3d-4624-8bfe-ae9cb7e03e25-8.webp	Web Development Plans	/plans-media/category/icons/561005ef-7085-4c2d-8634-6bd1ddfccd08-basic9.svg	Our Web Development Plans are designed to provide clients with customized solutions that fit their specific requirements and budget. Choose from a range of packages that include everything from essential website setup to advanced custom features. We offer ongoing support, regular updates, and performance optimizations to keep your site running smoothly. Each plan is crafted to ensure your business stays ahead of the curve with a stunning, responsive, and SEO-friendly website. Explore our plans and transform your digital presence today.\r\n\r\n\r\n\r\n\r\n\r\n\r\n	تم تصميم خطط تطوير الويب لدينا لتوفير حلول مخصصة تتناسب مع متطلباتك وميزانيتك. اختر من بين مجموعة من الباقات التي تشمل كل شيء من إعداد الموقع الأساسي إلى الميزات المخصصة المتقدمة. نقدم دعمًا مستمرًا، وتحديثات منتظمة، وتحسينات للأداء لضمان سلاسة تشغيل موقعك. كل خطة مصممة بعناية لتبقي عملك في الصدارة بموقع جذاب، متجاوب، ومحسن لمحركات البحث. استكشف خططنا اليوم وحول وجودك الرقمي إلى تجربة فريدة.	2024-11-04 01:25:20.874	2024-11-04 01:57:11.934	Flexible and Comprehensive Web Development Plans Tailored to Your Business Needs, Offering Scalable Solutions from Basic Websites to Advanced, Custom-Built Platforms	خطط تطوير ويب مرنة وشاملة مصممة خصيصًا لتلبية احتياجات عملك، مع تقديم حلول قابلة للتوسع من المواقع الأساسية إلى المنصات المتقدمة والمخصصة	باقات تطوير مواقع الويب 	clyhm29ou0000dnteppm9du5n	0
7	Graphic Design Plans	باقات التصميم الجرافيكي	graphic-design-plans	/plans-media/category/images/62649ec9-8423-49a8-b572-8f4d0f2efe29-7.webp		/plans-media/category/icons/3bc5f3e9-a369-498d-a49e-3db864fc26a2-basic7.svg	Our Web Development Plans are designed to provide clients with customized solutions that fit their specific requirements and budget. Choose from a range of packages that include everything from essential website setup to advanced custom features. We offer ongoing support, regular updates, and performance optimizations to keep your site running smoothly. Each plan is crafted to ensure your business stays ahead of the curve with a stunning, responsive, and SEO-friendly website. Explore our plans and transform your digital presence today.\r\n\r\n\r\n\r\nOur Graphic Design Plans are crafted to deliver creative visual solutions that align with your business vision and brand identity. Whether you need striking logos, complete visual identities, or captivating marketing designs, we offer services that inspire your audience. Our packages provide flexible options to ensure they match your budget and requirements. We guarantee high-quality, impactful designs that elevate your brand’s presence. Check out our plans and take your creative ideas to the next level.\r\n\r\n\r\n\r\n\r\n	خطط تصميم الجرافيك لدينا مصممة لتقديم حلول بصرية إبداعية تتناسب مع رؤية عملك وهويته. سواء كنت بحاجة إلى شعارات مميزة، أو هويات بصرية متكاملة، أو تصميمات تسويقية جاذبة، نحن نقدم خدمات تلهم جمهورك. تشمل الباقات خيارات مرنة لضمان توافقها مع ميزانيتك ومتطلباتك. نضمن تقديم تصميمات جذابة، مؤثرة، وذات جودة عالية تساهم في تعزيز علامتك التجارية. استعرض خططنا واختر الأفضل لنقل أفكارك الإبداعية إلى مستوى جديد.	2024-11-04 01:35:38.336	2024-11-04 01:57:11.934		خطط تصميم جرافيك مبتكرة وشاملة تلبي احتياجاتك الإبداعية، من التصميمات الأساسية إلى المشاريع المعقدة والمتخصصة\r\n	باقات التصميم الجرافيكي	clyhm29ou0000dnteppm9du5n	0
\.


--
-- Data for Name: Post; Type: TABLE DATA; Schema: public; Owner: default
--

COPY public."Post" (id, title, content, published, "authorId", slug, "contentAr", excerpt, "excerptAr", image, "isFeatured", language, "metaDescription", "metaTitle", "publishedAt", "readingTime", "titleAr", "viewCount") FROM stdin;
cm2pcfmzy000183crniqtj204	Understanding the Vital Role of Healthy Eating in Modern Lifestyles	Healthy eating has become a central focus in modern lifestyles, with an emphasis on maintaining energy and preventing chronic diseases. Choosing nutrient-dense foods like fruits, vegetables, whole grains, and lean proteins ensures the body receives essential vitamins and minerals necessary for growth and repair. Healthy eating also contributes to better mental clarity, as certain nutrients like omega-3 fatty acids are linked to improved brain function. Avoiding processed foods and high-sugar items can help maintain stable energy levels throughout the day and reduce inflammation. Additionally, consuming a balanced diet supports immune function, aiding the body in fighting off illnesses. As people lead increasingly busy lives, making conscious choices about food can foster long-term well-being, supporting both mental and physical health. Developing good eating habits not only sustains energy but also promotes a sense of satisfaction and vitality	t	clyhm29ou0000dnteppm9du5n	Understanding the Vital Role of Healthy Eating in Modern Lifestyles	أصبح الأكل الصحي محور التركيز في أسلوب الحياة الحديثة، حيث يتم التأكيد على الحفاظ على الطاقة والوقاية من الأمراض المزمنة. اختيار الأطعمة الغنية بالعناصر الغذائية مثل الفواكه، الخضروات، الحبوب الكاملة، والبروتينات الخالية من الدهون يضمن حصول الجسم على الفيتامينات والمعادن الأساسية اللازمة للنمو والإصلاح. كما يسهم الأكل الصحي في تحسين الوضوح الذهني، حيث ترتبط بعض العناصر الغذائية مثل أحماض الأوميغا-3 الدهنية بتحسين وظائف الدماغ. تجنب الأطعمة المصنعة والمليئة بالسكر يمكن أن يساعد في الحفاظ على مستويات طاقة مستقرة طوال اليوم ويقلل من الالتهابات. بالإضافة إلى ذلك، فإن تناول نظام غذائي متوازن يدعم وظائف الجهاز المناعي، مما يساعد الجسم في مقاومة الأمراض. ومع تزايد انشغال الأفراد، يمكن أن تساهم الاختيارات الغذائية الواعية في تعزيز الصحة العامة على المدى الطويل، مما يدعم الصحة العقلية والجسدية. تطوير عادات غذائية جيدة لا يدعم الطاقة فحسب، بل يعزز الشعور بالرضا والحيوية	\N	\N	/blogs-media/images/17.jpg	f	\N	\N	\N	2024-09-25 16:59:55.421	\N	فهم الدور الحيوي للأكل الصحي في أسلوب الحياة الحديثة	0
cm2pcjj9s000283crp2r75b1o	Why Time Management Skills Are Essential for Personal Growth and Success	Time management is a skill that is highly valued in both personal and professional life. It allows individuals to prioritize tasks, set realistic goals, and use their time effectively to achieve them. Effective time management reduces stress and enhances productivity by ensuring that essential tasks are completed without last-minute pressure. It also provides a sense of control over one's day, leading to improved work-life balance and greater satisfaction. By planning their day carefully, individuals can make room for personal development activities, such as learning new skills or engaging in hobbies. Time management skills are crucial for personal growth, as they enable people to take control of their time and direct it toward meaningful activities. Mastering this skill can contribute to overall success, as people learn to focus on what truly matters and eliminate unnecessary distractions	t	clyhm29ou0000dnteppm9du5n	why-time-management-skills-are-essential-for-personal-growth-and-success	تعتبر إدارة الوقت مهارة ذات قيمة عالية في الحياة الشخصية والمهنية. تمكن هذه المهارة الأفراد من ترتيب أولوياتهم، وتحديد أهداف واقعية، واستخدام وقتهم بشكل فعال لتحقيق تلك الأهداف. إدارة الوقت الفعالة تقلل من التوتر وتعزز الإنتاجية من خلال ضمان إتمام المهام الأساسية بدون ضغوط اللحظة الأخيرة. كما تمنح الشعور بالتحكم في اليوم، مما يؤدي إلى تحسين التوازن بين الحياة العملية والشخصية وزيادة الرضا. من خلال تخطيط يومهم بعناية، يمكن للأفراد إفساح المجال للأنشطة التي تساهم في النمو الشخصي، مثل تعلم مهارات جديدة أو الانخراط في الهوايات. تعتبر مهارات إدارة الوقت ضرورية للنمو الشخصي، حيث تمكن الأشخاص من السيطرة على وقتهم وتوجيهه نحو الأنشطة الهادفة. إتقان هذه المهارة يمكن أن يسهم في تحقيق النجاح العام، حيث يتعلم الأفراد التركيز على ما هو مهم حقاً وإزالة المشتتات غير الضرورية	\N	\N	/blogs-media/images/16.jpg	f	\N	\N	\N	2024-09-20 16:59:55.421	\N	لماذا تعتبر مهارات إدارة الوقت ضرورية للنمو الشخصي والنجاح	0
cm2pcmgsm000383crckbadgmc	How Digital Literacy Impacts Modern Education and Workforce Readiness	Digital literacy is becoming increasingly important in today’s technology-driven world, where digital tools and platforms are integral to education and work. In schools, digital literacy helps students navigate information effectively, access online resources, and develop critical thinking skills. These skills are essential as they prepare students for a workforce where digital competency is often a basic requirement. Similarly, employees with high levels of digital literacy can collaborate more effectively, utilize data-driven tools, and stay adaptable in fast-evolving work environments. Digital literacy also involves understanding online safety and ethical use of information, empowering individuals to make informed choices in their digital interactions. Schools and workplaces that promote digital literacy contribute to building a society ready to embrace future technological advancements and meet industry demands. This skill fosters adaptability, making it easier for individuals to keep up with new technologies, improve productivity, and achieve success in a digitalized world.	t	clyhm29ou0000dnteppm9du5n	how-digital-literacy-impacts-modern-education-and-workforce-readiness	تزداد أهمية المعرفة الرقمية في عالمنا المعاصر الذي يعتمد على التكنولوجيا، حيث أصبحت الأدوات والمنصات الرقمية جزءًا لا يتجزأ من التعليم والعمل. في المدارس، تساعد المعرفة الرقمية الطلاب في التنقل بين المعلومات بفعالية، والوصول إلى الموارد عبر الإنترنت، وتطوير مهارات التفكير النقدي. هذه المهارات أساسية حيث تهيئ الطلاب لسوق العمل الذي غالبًا ما يتطلب الكفاءة الرقمية كشرط أساسي. وبالمثل، يمكن للموظفين ذوي المستويات العالية من المعرفة الرقمية التعاون بشكل أكثر فعالية، واستخدام الأدوات القائمة على البيانات، والبقاء متكيفين في بيئات العمل المتطورة بسرعة. تتضمن المعرفة الرقمية أيضًا فهم الأمان عبر الإنترنت والاستخدام الأخلاقي للمعلومات، مما يمكّن الأفراد من اتخاذ قرارات واعية في تفاعلاتهم الرقمية. تساهم المدارس وأماكن العمل التي تشجع على المعرفة الرقمية في بناء مجتمع مستعد لتبني التطورات التكنولوجية المستقبلية وتلبية متطلبات الصناعة. هذه المهارة تعزز التكيف، مما يسهل على الأفراد مواكبة التقنيات الجديدة، وتحسين الإنتاجية، وتحقيق النجاح في عالم رقمي	\N	\N	/blogs-media/images/e1.jpg	f	\N	\N	\N	2024-09-29 16:59:55.421	\N	كيف تؤثر المعرفة الرقمية على التعليم الحديث واستعداد القوى العاملة	0
cm2ngk4d10000xbjrdhubrcgs	Exploring the Power and Impact of Design	Design is more than just aesthetics; it’s about problem-solving. In the modern world, design shapes how we interact with everything around us. From the smartphone in your pocket to the chair you sit on, design plays a crucial role. Good design simplifies complex processes, making them intuitive. It enhances user experiences, improves functionality, and evokes emotions. Designers are not just artists; they are thinkers and innovators. They consider usability, accessibility, and sustainability. In a competitive market, design can be the differentiator. It tells stories, builds brands, and creates connections. Great design is timeless, adapting to new challenges while maintaining its core values. The future of design is bright, as technology opens new horizons. With AI and virtual reality, the boundaries of creativity are expanding. But at its heart, design will always be about people, their needs, and their dreams. Whether in architecture, fashion, or digital interfaces, design is everywhere, influencing how we live, work, and communicate. In short, design shapes the world	t	clyhm29ou0000dnteppm9du5n	Exploring-the-Power-and-Impact-of-Design	التصميم ليس مجرد جمالية؛ إنه يتعلق بحل المشكلات. في العالم الحديث، يشكل التصميم كيفية تفاعلنا مع كل ما يحيط بنا. من الهاتف الذكي في جيبك إلى الكرسي الذي تجلس عليه، يلعب التصميم دورًا حيويًا. التصميم الجيد يبسط العمليات المعقدة، مما يجعلها بديهية. إنه يعزز تجربة المستخدمين، ويحسن الوظائف، ويثير المشاعر. المصممون ليسوا مجرد فنانين؛ إنهم مفكرون ومبتكرون. إنهم يأخذون في الاعتبار قابلية الاستخدام، وإمكانية الوصول، والاستدامة. في سوق تنافسية، يمكن أن يكون التصميم هو العامل المميز. إنه يروي القصص، ويبني العلامات التجارية، ويخلق الروابط. التصميم الرائع خالد، يتكيف مع التحديات الجديدة بينما يحافظ على قيمه الأساسية. مستقبل التصميم مشرق، مع فتح التكنولوجيا لآفاق جديدة. مع الذكاء الاصطناعي والواقع الافتراضي، تتوسع حدود الإبداع. ولكن في جوهره، سيظل التصميم دائمًا يتعلق بالناس، واحتياجاتهم، وأحلامهم. سواء في العمارة أو الموضة أو الواجهات الرقمية، التصميم موجود في كل مكان، يؤثر على كيفية عيشنا وعملنا وتواصلنا. باختصار، التصميم يشكل العالم	\N	\N	/blogs-media/images/14.jpg	f	\N	\N	\N	2024-09-25 16:59:55.421	\N	استكشاف قوة وتأثير التصميم في حياتنا	0
cm1i4200s0000nm8l52rtx6dj	Best Practices in Design for a Successful User Experience	In design, creating a seamless and engaging user experience is crucial. One of the foundational principles is simplicity. Keeping your design clean and minimal allows users to navigate easily without feeling overwhelmed. Consistency also plays a vital role—using uniform elements such as colors, fonts, and icons helps establish a sense of familiarity across different pages or sections.  Another important aspect is accessibility. A good design ensures that all users, including those with disabilities, can interact with it. This can be achieved through readable fonts, accessible color contrasts, and keyboard-friendly navigation. Responsiveness is equally important. Your design should adapt effortlessly to various screen sizes, from large desktop monitors to small mobile phones.  Lastly, feedback is key in creating a smooth user experience. Providing users with clear feedback for their actions—whether it’s a loading indicator or confirmation message—assures them that the system is working as expected. By focusing on these principles, you create a design that not only looks great but also works well for users.	t	clyhm29ou0000dnteppm9du5n	Best_Practices_in_Design_for a_Successful_User_Experience	في عالم التصميم، يعتبر إنشاء تجربة مستخدم سلسة وجذابة أمرًا بالغ الأهمية. من المبادئ الأساسية هو البساطة؛ فالحفاظ على التصميم نظيفًا وبسيطًا يتيح للمستخدمين التنقل بسهولة دون الشعور بالتشتت. كما أن الاتساق يلعب دورًا مهمًا؛ استخدام عناصر متناسقة مثل الألوان والخطوط والرموز يساعد في خلق إحساس بالألفة عبر الصفحات أو الأقسام المختلفة.  جانب آخر مهم هو سهولة الوصول. التصميم الجيد يضمن أن جميع المستخدمين، بما في ذلك ذوي الاحتياجات الخاصة، يمكنهم التفاعل معه. يمكن تحقيق ذلك من خلال استخدام خطوط قابلة للقراءة وتباينات لونية مناسبة وتسهيل التنقل باستخدام لوحة المفاتيح. المرونة أيضًا لا تقل أهمية؛ يجب أن يتكيف التصميم بسهولة مع أحجام الشاشات المختلفة، من شاشات أجهزة الكمبيوتر الكبيرة إلى الهواتف المحمولة الصغيرة.  أخيرًا، تعد التغذية الراجعة جزءًا أساسيًا في خلق تجربة مستخدم سلسة. إعطاء المستخدمين مؤشرات واضحة على تفاعلهم مع النظام—سواء كان ذلك مؤشر تحميل أو رسالة تأكيد—يطمئنهم بأن النظام يعمل كما هو متوقع. من خلال التركيز على هذه المبادئ، يمكنك إنشاء تصميم لا يبدو رائعًا فحسب، بل يعمل بشكل جيد للمستخدمين أيضًا.	In design, creating a seamless and engaging user experience is crucial. One of the foundational principles is simplicity.	في عالم التصميم، يعتبر إنشاء تجربة مستخدم سلسة وجذابة أمرًا بالغ الأهمية. من المبادئ الأساسية هو البساطة؛ فالحفاظ على التصميم نظيفًا وبسيطًا يتيح للمستخدمين التنقل بسهولة دون الشعور بالتشتت	/blogs-media/images/p1.webp	f	\N	\N	\N	2024-09-25 16:59:55.421	4	أفضل الممارسات في تصميم تجربة المستخدم لضمان تجربة ناجحة وشاملة للمستخدمين	5
cm2pc8n1l000083crfg95bqug	Exploring the Numerous Physical and Mental Benefits of Practicing Yoga	Yoga has been practiced for centuries and is known to offer a multitude of physical and mental benefits. From enhancing flexibility to strengthening core muscles, yoga is a holistic exercise that focuses on uniting the mind, body, and spirit. Regular practice can improve posture, balance, and coordination, making everyday movements easier and safer. Mentally, yoga is celebrated for its stress-relieving qualities, as it encourages mindfulness and deep breathing exercises. This helps individuals manage anxiety and maintain a calmer, more focused mind. Yoga can also boost circulation and aid in detoxification, making it an excellent choice for those seeking physical and mental rejuvenation. Whether you're new to yoga or an experienced practitioner, incorporating it into your daily routine can provide numerous benefits that contribute to an overall sense of well-being	t	clyhm29ou0000dnteppm9du5n	exploring-the-numerous-physical-and-mental-benefits-of-practicing-yoga	تعتبر اليوغا من الممارسات القديمة التي عرفت بتقديم فوائد عديدة للجسم والعقل. تعزز اليوغا المرونة وتقوي العضلات الأساسية، وتعتبر تمريناً شاملاً يركز على توحيد العقل والجسم والروح. يمكن أن تحسن اليوغا من وضعية الجسم وتوازنه وتنسيقه، مما يسهل ويزيد أمان الحركات اليومية. من الناحية العقلية، تشتهر اليوغا بقدرتها على تخفيف التوتر، حيث تشجع على ممارسة اليقظة وتمارين التنفس العميق، مما يساعد على إدارة القلق والحفاظ على عقل هادئ ومركز. كما يمكن لليوغا أن تحسن الدورة الدموية وتساعد على التخلص من السموم، مما يجعلها خياراً ممتازاً لأولئك الذين يسعون إلى التجديد البدني والعقلي. سواء كنت مبتدئًا في ممارسة اليوغا أو من الممارسين ذوي الخبرة، فإن دمجها في روتينك اليومي يمكن أن يوفر لك العديد من الفوائد التي تسهم في تحسين الشعور بالراحة الشاملة	\N	\N	/blogs-media/images/18.jpg	f	\N	\N	\N	2024-09-25 16:59:55.421	\N	استكشاف الفوائد الجسدية والعقلية العديدة لممارسة اليوغا	0
cm1i497e40001nm8lj1xxz1bs	The Importance of Feedback in User Interface Design	Feedback plays a crucial role in the success of user interface (UI) design. It serves as the link between user interactions and the system, making the user experience clearer and smoother. When a user takes an action, such as clicking a button or entering information, they expect to receive confirmation that the system has responded. Immediate feedback helps establish this communication.	t	clyhm29ou0000dnteppm9du5n	The_Importance_of_Feedback_in_User_Interface_Design	تلعب التغذية الراجعة دورًا محوريًا في تصميم واجهات المستخدم الناجحة. فهي العنصر الذي يربط بين تفاعلات المستخدم والنظام، مما يجعل تجربة الاستخدام أكثر وضوحًا وسلاسة. عندما يقوم المستخدم باتخاذ إجراء، مثل النقر على زر أو إدخال معلومات، يتوقع الحصول على تأكيد بأن النظام قد استجاب. التغذية الراجعة الفورية تساعد في تحقيق هذا التواصل.  على سبيل المثال، عند تحميل ملف، يُظهر مؤشر التحميل تقدم العملية، مما يمنح المستخدم شعورًا بالاطمئنان بأن الأمور تسير كما هو متوقع. إذا لم يتلق المستخدم أي إشارة بعد إجراء ما، قد يشعر بالارتباك أو الشك في نجاح العملية. وبالتالي، تُعزز التغذية الراجعة الشعور بالثقة وتُقلل من فرص حدوث الأخطاء.	Feedback plays a crucial role in the success of user interface (UI) design. It serves as the link between user interactions and the system, 	تشمل التغذية الراجعة أنواعًا مختلفة، مثل الرسائل النصية، التنبيهات البصرية، والأصوات. يجب أن تكون هذه المؤشرات واضحة دون أن تكون مزعجة، لتوفير تجربة مريحة للمستخدم	/blogs-media/images/p2.webp	f	\N	\N	\N	2024-09-25 17:05:31.564	10	 أهمية التغذية الراجعة في تصميم واجهات المستخدم	90
cm2nkgik500004ntzxti65u47	The Evolution of Digital Marketing Strategies	Digital marketing has revolutionized the way businesses reach their audiences. Over the years, it has evolved from simple banner ads to complex, data-driven campaigns. The rise of social media platforms like Facebook, Instagram, and TikTok has changed the dynamics of how brands engage with customers. Today, personalized content and targeted advertising are key to success. Understanding user behavior, demographics, and preferences allows marketers to create more effective campaigns. SEO, content marketing, and influencer collaborations also play crucial roles. As technology continues to advance, artificial intelligence and automation are transforming digital marketing. AI-powered tools can analyze data in real-time, predict trends, and optimize campaigns for better performance. The future of digital marketing lies in understanding and predicting customer needs before they even realize them. Brands that can adapt to these changes will remain competitive. Whether through video marketing, podcasts, or interactive content, the opportunities are endless. In the ever-evolving digital world, innovation and agility are critical for staying ahead of the competition	t	\N	The-Evolution-of-Digital-Marketing-Strategies	لقد أحدث التسويق الرقمي ثورة في كيفية وصول الشركات إلى جمهورها. على مر السنين، تطور من إعلانات البانر البسيطة إلى حملات معقدة تعتمد على البيانات. غيرت منصات التواصل الاجتماعي مثل فيسبوك وإنستغرام وتيك توك ديناميكيات كيفية تفاعل العلامات التجارية مع العملاء. اليوم، يعد المحتوى المخصص والإعلانات المستهدفة مفتاح النجاح. فهم سلوك المستخدمين والديموغرافيات والتفضيلات يسمح للمسوقين بإنشاء حملات أكثر فعالية. يلعب تحسين محركات البحث والتسويق بالمحتوى والتعاون مع المؤثرين أيضًا أدوارًا حاسمة. مع استمرار تطور التكنولوجيا، يقوم الذكاء الاصطناعي والأتمتة بتحويل التسويق الرقمي. يمكن للأدوات المدعومة بالذكاء الاصطناعي تحليل البيانات في الوقت الفعلي، والتنبؤ بالاتجاهات، وتحسين الحملات لتحقيق أداء أفضل. يكمن مستقبل التسويق الرقمي في فهم احتياجات العملاء والتنبؤ بها قبل أن يدركوها. العلامات التجارية التي تستطيع التكيف مع هذه التغيرات ستظل قادرة على المنافسة. سواء من خلال التسويق بالفيديو، أو البودكاست، أو المحتوى التفاعلي، فإن الفرص لا حدود لها. في العالم الرقمي المتغير باستمرار، تعتبر الابتكار والمرونة ضروريين للبقاء في المقدمة	\N	\N	/blogs-media/images/15.jpg	f	\N	\N	\N	2024-10-24 17:17:39.701	\N	تطور استراتيجيات التسويق الرقمي الحديثة	0
\.


--
-- Data for Name: PostCategory; Type: TABLE DATA; Schema: public; Owner: default
--

COPY public."PostCategory" (id, name, "nameAr", slug, image, icon, description, "descriptionAr", "userId", "createdAt", "updatedAt") FROM stdin;
1	politics	سياسة	politics	\N	\N	\N	\N	clyhm29ou0000dnteppm9du5n	2024-10-27 19:39:48.895	2024-10-27 19:39:48.895
2	economics	اقتصاد	economics	\N	\N	\N	\N	clyhm29ou0000dnteppm9du5n	2024-10-27 19:41:04.341	2024-10-27 19:41:04.341
3	technology	تقنية	technology	\N	\N	\N	\N	clyhm29ou0000dnteppm9du5n	2024-10-27 19:43:58.944	2024-10-27 19:43:58.944
\.


--
-- Data for Name: Price; Type: TABLE DATA; Schema: public; Owner: default
--

COPY public."Price" (id, amount, "startPrice", median, currency, discount, "effectiveDate", "expiryDate", description, image, "serviceId", "locationId", "createdAt", "updatedAt", "productId") FROM stdin;
clz8cmpuh0001knv4ry2b74ar	54.000000000000000000000000000000	454.000000000000000000000000000000	454.000000000000000000000000000000	grtr	32432.000000000000000000000000000000	2024-07-09 00:00:00	2024-07-25 00:00:00	45fgfggg	/service/images/006c702a-08a0-4881-b893-dfeed6d2f121-5.jpg	56	1	2024-07-30 11:42:52.436	2024-07-30 11:42:52.436	\N
clz9adtws000113fk1ujzjcsc	6576.000000000000000000000000000000	676778.000000000000000000000000000000	67876876.000000000000000000000000000000	Saudi Ryal	24234.000000000000000000000000000000	2024-07-01 00:00:00	2024-07-18 00:00:00	Yes, price is an object, and the acc (accumulator) in the reduce method is grouping these price objects by location name. If you need more clarification or further adjustments, here’s a detailed explanation and the revised code:	/service/images/bdd1f8d7-6114-4ba5-af0d-a387ebde768f-12.jpg	57	1	2024-07-31 03:27:44.725	2024-07-31 03:27:44.725	\N
clzjl5ymk00015rv2h97tsw3y	44.000000000000000000000000000000	34.000000000000000000000000000000	43543.000000000000000000000000000000	erfre	54.000000000000000000000000000000	2024-08-05 00:00:00	2024-08-22 00:00:00	fre	/service/images/a80b27df-2f2e-4709-9989-f67c02e7cd56-11.jpg	59	4	2024-08-07 08:27:15.143	2024-08-07 08:27:15.143	\N
clzjq9g9b00017j2tk458v3v7	66.000000000000000000000000000000	66.000000000000000000000000000000	66.000000000000000000000000000000	erfre	66.000000000000000000000000000000	2024-08-23 00:00:00	2024-08-23 00:00:00	trghrthty	/service/images/c831d19a-6a93-49fc-b270-70b8070f4430-basic10.svg	59	2	2024-08-07 10:49:56.018	2024-08-07 10:49:56.018	\N
clzjr6x1b00037j2t6kfyaz0i	88.000000000000000000000000000000	88.000000000000000000000000000000	88.000000000000000000000000000000	trgtr	5656.000000000000000000000000000000	2024-08-06 00:00:00	2024-08-13 00:00:00	thtyhyt	/service/images/8a5cf770-5a37-4e70-a9ce-72b1b0bf1836-6.jpg	59	1	2024-08-07 11:15:57.029	2024-08-07 11:15:57.029	\N
clz9aew9u000313fkuubrl3oa	89.000000000000000000000000000000	10.000000000000000000000000000000	75756.000000000000000000000000000000	Yemen	100.000000000000000000000000000000	2024-08-22 00:00:00	2024-08-22 00:00:00	price is an object, and the acc (accumulator) in the reduce method is grouping these price objects by location name. If you need more clarification or further adjustments, here’s a detailed explanation and the revised code:	/service/images/855317d3-23b9-4f50-8580-7ef79cd35661-16.jpeg	57	2	2024-07-31 03:28:34.441	2024-08-07 11:23:46.159	\N
clzjri6fh00057j2t2srvcwdv	445.000000000000000000000000000000	4545.000000000000000000000000000000	455.000000000000000000000000000000	trgtr	44.000000000000000000000000000000	2024-08-28 00:00:00	2024-08-14 00:00:00	grgth	/service/images/4226c203-988c-4878-8c31-3e0a20f81e9b-basic9.svg	57	4	2024-08-07 11:24:42.831	2024-08-07 11:24:42.831	\N
clzmxb1pr000135z0hzeksz90	44.000000000000000000000000000000	44.000000000000000000000000000000	434.000000000000000000000000000000	rgtrt	4.000000000000000000000000000000	2024-08-13 00:00:00	2024-08-07 00:00:00	rgthythyth	/service/images/4b14a008-2ec9-4971-932c-729534a66639-basic10.svg	60	1	2024-08-09 16:30:26.377	2024-08-09 16:30:26.377	\N
clzsenlru000114gzt9hfehu0	345.000000000000000000000000000000	435.000000000000000000000000000000	435.000000000000000000000000000000	erfre	545.000000000000000000000000000000	2024-09-12 00:00:00	2024-08-29 00:00:00	grtgtr		58	1	2024-08-13 12:34:56.634	2024-08-13 12:34:56.634	\N
clzsesbll000314gzj3al09jg	44.000000000000000000000000000000	6.000000000000000000000000000000	11.000000000000000000000000000000	erfre	8.000000000000000000000000000000	2024-08-22 00:00:00	2024-08-20 00:00:00	45t45t54		58	2	2024-08-13 12:38:36.507	2024-08-13 12:38:36.507	\N
\.


--
-- Data for Name: Product; Type: TABLE DATA; Schema: public; Owner: default
--

COPY public."Product" (id, name, slug, description, "stockQuantity", "isActive", "isPublished", "createdAt", "updatedAt", "vendorId", rating, sku, dimensions, weight, image, "userId", "descriptionAr", "nameAr") FROM stdin;
e8f373ff-ac9b-44fa-88c4-b42a312f33b6	4K Action Camera ProGo	4K-Action-Camera-ProGo	Capture your adventures in stunning 4K resolution with the ProGo Action Camera. It’s compact and lightweight, perfect for outdoor sports and travel. The camera is waterproof up to 30 meters, making it ideal for underwater filming. With built-in Wi-Fi, you can easily share your footage directly to social media. The ProGo also includes various shooting modes like time-lapse and slow motion. A long-lasting battery keeps you filming for hours.	3232	t	t	2024-09-05 08:52:21.967	2025-01-10 09:31:34.846	\N	2332.000000000000000000000000000000	\N	2323	\N	/products-media/images/productSer14.jpg	clyhm29ou0000dnteppm9du5n	التقط مغامراتك بدقة 4K مذهلة باستخدام كاميرا الحركة ProGo. تتميز بحجمها الصغير وخفة وزنها، مما يجعلها مثالية للرياضات الخارجية والسفر. الكاميرا مقاومة للماء حتى عمق 30 مترًا، مما يجعلها مثالية للتصوير تحت الماء.	كاميرا الحركة 4K ProGo
66cc2aa5-2c56-4b1d-8971-6045e491f62e	Wireless Noise-Cancelling Headphones	Wireless-Noise-Cancelling-Headphones	Experience superior sound with these wireless noise-cancelling headphones. Designed for comfort, they feature soft ear cushions and an adjustable headband. The active noise-cancellation technology blocks out distractions, making them ideal for travel or work. Enjoy up to 30 hours of battery life on a single charge. Built-in controls allow you to manage music and calls easily. Compatible with all Bluetooth-enabled devices.	4334	t	t	2024-09-04 19:08:28.984	2025-01-10 08:55:20.517	\N	4334.000000000000000000000000000000	\N	4343	\N	/products-media/images/productSer11.avif	clyhm29ou0000dnteppm9du5n	استمتع بجودة صوت استثنائية مع هذه السماعات اللاسلكية التي تلغي الضوضاء. مصممة للراحة، تحتوي على وسائد أذن ناعمة وعقال قابل للتعديل. تعمل تقنية إلغاء الضوضاء النشطة على حجب التشتيت، مما يجعلها مثالية للسفر أو العمل. توفر حتى 30 ساعة من عمر البطارية بشحنة واحدة. التحكم المدمج يتيح لك إدارة الموسيقى والمكالمات بسهولة. متوافقة مع جميع الأجهزة التي تدعم البلوتوث.	سماعات لاسلكية تلغي الضوضاء
86b2fbe4-be72-4627-ae77-75c8019fb127	Smart Fitness Watch	Smart-Fitness-Watch	Track your health and fitness goals with the Smart Fitness Watch. This device monitors heart rate, sleep patterns, and daily steps. With its water-resistant design, it’s perfect for swimming and outdoor activities. It features a customizable display and syncs with your smartphone for notifications. The watch offers over 15 fitness modes to support a variety of workouts. Battery life lasts up to 10 days with regular use.	5	t	t	2024-09-05 11:43:55.394	2025-01-10 09:28:54.493	\N	4334.000000000000000000000000000000	\N	33	\N	/products-media/images/productSer15.jpg	clyhm29ou0000dnteppm9du5n	تابع أهدافك الصحية واللياقة مع ساعة اللياقة الذكية. يراقب هذا الجهاز معدل ضربات القلب، أنماط النوم، والخطوات اليومية. بفضل تصميمه المقاوم للماء، هو مثالي للسباحة والأنشطة الخارجية. يتميز بشاشة قابلة للتخصيص ويتزامن مع هاتفك الذكي لتلقي الإشعارات. تقدم الساعة أكثر من 15 وضعًا رياضيًا لدعم مجموعة متنوعة من التمارين. تدوم البطارية حتى 10 أيام بالاستخدام العادي.	ساعة اللياقة الذكية
0e74b78c-bf3e-4def-98ed-2d578ae643fa	Smartphone X1 Pro	Smartphone-X1-Pro	The Smartphone X1 Pro offers a sleek design with a powerful 6.7-inch display. It features a triple-lens camera for high-quality photos and 5G connectivity for ultra-fast internet speeds. Powered by the latest chipset, the X1 Pro delivers exceptional performance. It includes 256GB of storage and a long-lasting battery. With face and fingerprint recognition, your data stays secure. Available in multiple colors.	2	t	t	2024-09-05 18:38:18.074	2025-01-10 08:53:50.294	\N	3.000000000000000000000000000000	\N	54	\N	/products-media/images/productSer19.jpeg	clyhm29ou0000dnteppm9du5n	The Smartphone X1 Pro offers a sleek design with a powerful 6.7-inch display. It features a triple-lens camera for high-quality photos and 5G connectivity for ultra-fast internet speeds. Powered by the latest chipset, the X1 Pro delivers exceptional performance. It includes 256GB of storage and a long-lasting battery. With face and fingerprint recognition, your data stays secure. Available in multiple colors.	هاتف X1 Pro الذكي
cc0ab707-4bc7-4a7d-98d7-c6e3cb2036f1	Home Coffee Machine Barista Pro	Home-Coffee-Machine-Barista-Pro	Brew your favorite coffee at home with the Barista Pro Coffee Machine. It features an intuitive touchscreen for easy operation and a built-in grinder for fresh coffee beans. The machine offers multiple brewing options, including espresso, cappuccino, and latte. Its sleek design fits perfectly in any kitchen. With fast heating technology, your coffee is ready in under a minute. The removable water tank ensures easy refilling.	5	t	t	2024-09-05 15:01:56.299	2025-01-10 09:31:34.846	\N	54.000000000000000000000000000000	\N	4343	\N	/products-media/images/productSer14.jpg	clyhm29ou0000dnteppm9du5n	حضّر قهوتك المفضلة في المنزل مع آلة القهوة Barista Pro. تتميز بشاشة تعمل باللمس لسهولة التشغيل وطاحونة مدمجة لحبوب البن الطازجة. تقدم الآلة خيارات تخمير متعددة، بما في ذلك الإسبريسو والكابتشينو واللاتيه. تصميمها الأنيق يتناسب تمامًا مع أي مطبخ. بفضل تقنية التسخين السريع، تصبح قهوتك جاهزة في أقل من دقيقة. خزان المياه القابل للإزالة يضمن سهولة إعادة الملء.	آلة صنع القهوة المنزلية Barista Pro
cd8645c9-aeaf-44ee-a813-c57bb0d269cd	Laptop X200 Ultra	Laptop-X200-Ultra	The X200 Ultra laptop is designed for power users who need high performance and portability. It features a 15.6-inch full HD display, a fast Intel i7 processor, and 16GB of RAM for multitasking. The laptop has a 512GB SSD for quick boot times and ample storage. With a battery life of up to 12 hours, it’s perfect for work on the go. The X200 Ultra is also equipped with multiple ports, including USB-C and HDMI.	8	t	t	2024-09-05 08:46:35.393	2025-01-10 09:31:34.846	\N	3.000000000000000000000000000000	\N	33	\N	/products-media/images/productSer13.webp	clyhm29ou0000dnteppm9du5n	تم تصميم لابتوب X200 Ultra للمستخدمين الذين يحتاجون إلى أداء عالٍ وإمكانية حمل. يتميز بشاشة بحجم 15.6 بوصة بدقة HD كاملة، ومعالج Intel i7 سريع، وذاكرة وصول عشوائي 16 جيجابايت لتعدد المهام. يحتوي اللابتوب على SSD بسعة 512 جيجابايت لأوقات تشغيل سريعة ومساحة تخزين كبيرة. بفضل عمر البطارية الذي يصل إلى 12 ساعة، فهو مثالي للعمل أثناء التنقل. كما أنه مزود بمنافذ متعددة، بما في ذلك USB-C و HDMI.	لابتوب X200 Ultra
4b2c20ee-ff22-40e7-9a86-59e6dccbc31c	UltraHD Smart TV 55	UltraHD-Smart-TV-55	 The UltraHD Smart TV offers a stunning 4K resolution and a 55-inch screen for a cinema-like experience at home. Equipped with HDR for enhanced color and contrast, it provides a vivid viewing experience. The built-in apps allow you to stream content directly from popular platforms. It features voice control, enabling hands-free operation. Its slim design complements any living room. Energy-efficient and eco-friendly.	4	t	t	2024-09-05 19:06:42.162	2025-01-10 08:54:25.299	\N	3443.000000000000000000000000000000	\N	33	\N	/products-media/images/productSer16.jpg	clyhm29ou0000dnteppm9du5n	يوفر تلفاز UltraHD الذكي دقة 4K مذهلة وشاشة بحجم 55 بوصة لتجربة سينمائية في المنزل. مزود بتقنية HDR لتعزيز الألوان والتباين، مما يوفر تجربة مشاهدة حية. تتيح التطبيقات المدمجة بث المحتوى مباشرة من المنصات الشهيرة. يتميز بتحكم صوتي لتشغيل دون استخدام اليدين. تصميمه النحيف يكمل أي غرفة معيشة. فعال في استهلاك الطاقة وصديق للبيئة.	تلفاز UltraHD الذكي 55 بوصة
884aa79b-47dc-4c42-b85d-f5ab6b4c5e54	 Bluetooth Portable Speaker	 Bluetooth-Portable-Speaker	 Enjoy powerful, clear sound anywhere with this Bluetooth portable speaker. Its compact design makes it easy to carry for outdoor events and parties. It offers rich bass and crisp highs, ensuring excellent audio quality. The speaker connects easily to any Bluetooth-enabled device and provides up to 20 hours of playtime. Its durable, water-resistant build makes it ideal for outdoor adventures. Available in various colors.	5	t	t	2024-09-05 11:32:03.91	2025-01-10 09:28:54.493	\N	5454.000000000000000000000000000000	\N	4343	\N	/products-media/images/productSer12.avif	clyhm29ou0000dnteppm9du5n	استمتع بصوت قوي ونقي في أي مكان مع مكبر الصوت المحمول الذي يعمل بتقنية البلوتوث. تصميمه المدمج يسهل حمله للفعاليات الخارجية والحفلات. يوفر جهيرًا غنيًا وأصواتًا عالية واضحة، مما يضمن جودة صوت ممتازة. يتصل بسهولة بأي جهاز يدعم البلوتوث ويوفر ما يصل إلى 20 ساعة من التشغيل. بنيته المتينة والمقاومة للماء تجعله مثاليًا للمغامرات الخارجية. متوفر بألوان متعددة.	مكبر صوت محمول يعمل بتقنية البلوتوث
ba2a0ea8-6182-4e0c-995a-43e2b80f2110	Digital SLR Camera D900	Digital-SLR-Camera D900	Capture stunning photos with the D900 Digital SLR Camera. It features a 24.1-megapixel sensor for high-resolution images, even in low light. The camera is equipped with a fast autofocus system, making it perfect for capturing fast-moving subjects. Its lightweight body is easy to carry, and the 3-inch touchscreen allows for intuitive control. The D900 also records Full HD video, making it versatile for all media needs.	4	t	t	2024-09-05 11:41:14.138	2025-01-10 09:31:34.846	\N	4334.000000000000000000000000000000	\N	43	\N	/products-media/images/productSer14.jpg	clyhm29ou0000dnteppm9du5n	التقط صورًا مذهلة باستخدام الكاميرا الرقمية D900. تتميز بمستشعر بدقة 24.1 ميجابكسل للحصول على صور عالية الدقة حتى في ظروف الإضاءة المنخفضة. الكاميرا مزودة بنظام تركيز تلقائي سريع، مما يجعلها مثالية لالتقاط الأهداف المتحركة بسرعة. جسمها الخفيف يسهل حملها، وتتيح الشاشة التي تعمل باللمس بحجم 3 بوصات تحكمًا سهلاً. تسجل الكاميرا أيضًا فيديو بدقة Full HD، مما يجعلها متعددة الاستخدامات لجميع الاحتياجات الإعلامية.	كاميرا رقمية D900
fdf10067-e726-4ac3-a670-fd169b861ffb	Smart Home Thermostat	Smart-Home-Thermostat	 Control the temperature of your home effortlessly with the Smart Home Thermostat. It learns your schedule and adjusts settings to save energy while keeping your home comfortable. The thermostat can be controlled remotely via a smartphone app, allowing you to adjust the temperature even when you’re away. It works with voice assistants like Alexa and Google Assistant. The sleek, modern design blends seamlessly with any decor.	7	t	t	2024-09-05 08:27:20.374	2025-01-10 09:31:34.846	\N	54.000000000000000000000000000000	\N	4343	\N	/products-media/images/productSer17.jpg	clyhm29ou0000dnteppm9du5n	تحكم في درجة حرارة منزلك بسهولة مع منظم حرارة المنزل الذكي. يتعلم جدولك الزمني ويضبط الإعدادات لتوفير الطاقة مع الحفاظ على راحة منزلك. يمكن التحكم في منظم الحرارة عن بعد عبر تطبيق الهاتف الذكي، مما يتيح لك ضبط درجة الحرارة حتى عندما تكون بعيدًا. يعمل مع مساعدي الصوت مثل أليكسا ومساعد جوجل. التصميم الأنيق والعصري يندمج بسلاسة مع أي ديكور.	منظم حرارة المنزل الذكي
\.


--
-- Data for Name: Project; Type: TABLE DATA; Schema: public; Owner: default
--

COPY public."Project" (id, name, description, "startDate", "endDate", budget, priority, progress, "createdAt", "updatedAt", "userId", "teamId", "clientId", status, icon, image) FROM stdin;
cm0ahh6nv0001ohc7miuhp1pw	Web Development Design	erfrefrefre	2024-08-30 00:00:00	2024-08-31 00:00:00	2343.000000000000000000000000000000	\N	43443332	2024-08-26 04:13:47.122	2024-08-26 04:13:47.122	clyhm29ou0000dnteppm9du5n	\N	\N	\N		
cm0ajavdc0001nj72hoiaot3w	Programming	frfrefrefre	2024-08-23 00:00:00	2024-08-30 00:00:00	10.000000000000000000000000000000	\N	40	2024-08-26 05:04:51.752	2024-08-26 05:04:51.752	clyhm29ou0000dnteppm9du5n	\N	\N	\N	/works/icons/76a2292f-2068-4031-8131-4bf0667f7e0a-18.jpg	/works/images/46248bd2-9751-4f3d-b393-d9f611d2932f-6.jpg
cm0apttg90001j82le3owhl6d	Content	FREFREFRE	2024-08-16 00:00:00	2024-08-29 00:00:00	2343.000000000000000000000000000000	\N	9	2024-08-26 08:07:33.465	2024-08-26 08:07:33.465	clyhm29ou0000dnteppm9du5n	\N	\N	\N	/works/icons/ebd39d29-ef9b-4fc1-b9f6-96eae559c274-16.jpeg	/works/images/8c7b2d5a-aef0-40f6-ab60-c72ccf831ed3-11.jpg
cm0atmepr00011ytmbpt6sjcy	Java	efre	2024-08-24 00:00:00	2024-08-12 00:00:00	2343.000000000000000000000000000000	\N	433	2024-08-26 09:53:46.239	2024-08-26 09:53:46.239	clyhm29ou0000dnteppm9du5n	\N	\N	\N	/works/icons/19929400-255d-48e5-8a1d-2116b05a1f98-7.jpg	/works/images/86d46b87-d605-40ee-9c5d-69c759aac63b-6.jpg
cm0auuycq00031ytmzyzlpa79	Design	ttgt	2024-08-23 00:00:00	2024-08-30 00:00:00	2343.000000000000000000000000000000	\N	43	2024-08-26 10:28:24.554	2024-08-26 10:28:24.554	clyhm29ou0000dnteppm9du5n	\N	\N	\N		
cm0axloet00051ytmhsxxwteo	rrree	fref	2024-08-17 00:00:00	2024-08-30 00:00:00	2343.000000000000000000000000000000	\N	4	2024-08-26 11:45:10.59	2024-08-26 11:45:10.59	clyhm29ou0000dnteppm9du5n	\N	\N	\N		
cm0azay8z0001fw4576kc7gr4	frf	hyhy	2024-08-23 00:00:00	2024-08-29 00:00:00	2343.000000000000000000000000000000	\N	5	2024-08-26 12:32:49.3	2024-08-26 12:32:49.3	clyhm29ou0000dnteppm9du5n	\N	\N	\N		
cm0bu0y780001mcj28xayd2fo	Programming3	ty	2024-08-23 00:00:00	2024-08-29 00:00:00	6.000000000000000000000000000000	\N	56	2024-08-27 02:52:50.813	2024-08-27 02:52:50.813	clyhm29ou0000dnteppm9du5n	\N	\N	\N		
cm0bu5jkb0003mcj22uno3wet	Programming333	dff	2024-08-22 00:00:00	2024-08-22 00:00:00	2343.000000000000000000000000000000	\N	33	2024-08-27 02:56:25.163	2024-08-27 02:56:25.163	clyhm29ou0000dnteppm9du5n	\N	\N	\N		
cm0bu5m2f0005mcj2map1zid9	Programming333	dff	2024-08-22 00:00:00	2024-08-22 00:00:00	2343.000000000000000000000000000000	\N	33	2024-08-27 02:56:28.407	2024-08-27 02:56:28.407	clyhm29ou0000dnteppm9du5n	\N	\N	\N		
cm0buc0wm000131r1khep012q	Programming55	dde	2024-08-16 00:00:00	2024-08-28 00:00:00	2343.000000000000000000000000000000	\N	44	2024-08-27 03:01:27.574	2024-08-27 03:01:27.574	clyhm29ou0000dnteppm9du5n	\N	\N	\N		
cm0bunf6b000331r12eajzi2l	Programming56	trgftr	2024-08-20 00:00:00	2024-08-22 00:00:00	2343.000000000000000000000000000000	\N	3	2024-08-27 03:10:19.283	2024-08-27 03:10:19.283	clyhm29ou0000dnteppm9du5n	\N	\N	\N		
cm0buzpcw000531r1l2qkd0ba	cdscds	efe	2024-08-23 00:00:00	2024-08-27 00:00:00	2.000000000000000000000000000000	\N	4	2024-08-27 03:19:52.352	2024-08-27 03:19:52.352	clyhm29ou0000dnteppm9du5n	\N	\N	\N		
cm0bv3s0r000731r17upaojqk	Java33	jhhn	2024-08-07 00:00:00	2024-08-14 00:00:00	3.000000000000000000000000000000	\N	3	2024-08-27 03:23:02.427	2024-08-27 03:23:02.427	clyhm29ou0000dnteppm9du5n	\N	\N	\N		
cm0c6co5w0001jfexkj2d68ot	tfrf	efrefre	2024-08-07 00:00:00	2024-08-30 00:00:00	2343.000000000000000000000000000000	\N	3	2024-08-27 08:37:53.058	2024-08-27 08:37:53.058	clyhm29ou0000dnteppm9du5n	\N	\N	\N		
cm0c77n3s0003jfex5d6uyepn	Programming87	gtrgt	2024-08-16 00:00:00	2024-08-24 00:00:00	2343.000000000000000000000000000000	\N	3	2024-08-27 09:01:58.028	2024-08-27 09:01:58.028	clyhm29ou0000dnteppm9du5n	\N	\N	\N		
cm0ck2pa1000111410y2iyw29	edewdewd	frefre	2024-08-21 00:00:00	2024-08-22 00:00:00	2343.000000000000000000000000000000	\N	343	2024-08-27 15:02:02.584	2024-08-27 15:19:28.485	clyhm29ou0000dnteppm9du5n	3	\N	\N		
cm0d916uz00018quypvf1ron0	projctWit team	gttrgtrgtr	2024-08-16 00:00:00	2024-08-22 00:00:00	2343.000000000000000000000000000000	\N	5	2024-08-28 02:40:42.415	2024-08-28 02:49:34.13	clyhm29ou0000dnteppm9du5n	9	\N	\N		
cm0dbpmyi0001108jjvbv40zl	Programming909	trgtrgtrgtr	2024-08-16 00:00:00	2024-08-30 00:00:00	2343.000000000000000000000000000000	\N	5	2024-08-28 03:55:42.295	2024-08-28 03:55:42.295	clyhm29ou0000dnteppm9du5n	\N	\N	\N		
cm0dk4ntb0007yqubdjyu77po	Programming45656	rhgythyt	2024-08-05 00:00:00	2024-08-23 00:00:00	2343.000000000000000000000000000000	\N	54	2024-08-28 07:51:20.207	2024-08-28 07:53:09.253	clyhm29ou0000dnteppm9du5n	2	\N	\N		
cm0l6e16y0001k71mgu08zugv	Programming000	5tr4554t5	2024-09-24 00:00:00	2024-09-25 00:00:00	2343.000000000000000000000000000000	\N	16	2024-09-02 15:48:52.06	2024-09-02 15:57:43.524	clyhm29ou0000dnteppm9du5n	2	\N	\N	/works/icons/3e4016e3-165b-4c4e-8e38-51d09f1505e3-icon6.svg	/works/images/0c0fbd77-3709-4aeb-adf7-e2ccbcdd5000-8.jpg
cm0o7nc9e000113i6tl4cr5cy	Design	erfrefrf	\N	\N	\N	\N	\N	2024-09-04 18:47:24.553	2024-09-04 18:47:24.553	clyhm29ou0000dnteppm9du5n	\N	\N	\N		/works/images/570d4f4d-38e9-4993-a1e1-76063d413560-13.jpg
cm0o8bfr80001ch4huxnjza4o	Printing	ddede	\N	\N	\N	\N	\N	2024-09-04 19:06:08.821	2024-09-04 19:06:08.821	clyhm29ou0000dnteppm9du5n	\N	\N	\N		/works/images/4a99a8f8-f635-4f91-bc39-4defad157203-6.jpg
\.


--
-- Data for Name: Role; Type: TABLE DATA; Schema: public; Owner: default
--

COPY public."Role" (id, name, slug, image, description, "createdAt", "updatedAt") FROM stdin;
\.


--
-- Data for Name: Service; Type: TABLE DATA; Schema: public; Owner: default
--

COPY public."Service" (id, name, name_slug, title, price, description, discount, image, icon, "userId", "createdAt", "updatedAt", "codeId", location, "descriptionAr", "nameAr", "titleAr") FROM stdin;
52	Logo Design & Branding	Logo-Design-&-Branding	Web Ecommerce  Deveopment	5	Logo design and branding are essential components of a company’s identity, representing its values, vision, and mission through visual elements. A logo is a distinctive symbol or graphic that helps customers recognize and associate with a brand, while branding encompasses the overall look, feel, and message a business conveys. Effective logo design should be simple, memorable, and versatile, often incorporating unique typography, colors, and shapes that align with the brand's identity. Branding extends beyond the logo, influencing how a company is perceived across all touchpoints, from packaging and marketing materials to customer experience and digital presence.	\N	/service/images/3.jpg	/service/icons/brand.png	clyhm29ou0000dnteppm9du5n	2024-07-29 12:20:49.58	2025-01-07 06:17:30.183	4	\N	تصميم الشعار والعلامة التجارية هما عنصران أساسيان في هوية الشركة، حيث يعبران عن قيمها ورؤيتها ورسالتها من خلال العناصر البصرية. الشعار هو رمز أو رسم مميز يساعد العملاء على التعرف على العلامة التجارية والارتباط بها، في حين أن العلامة التجارية تشمل المظهر العام والشعور والرسالة التي توصلها الشركة. يجب أن يكون تصميم الشعار فعالًا من خلال البساطة وسهولة التذكر والتكيف مع مختلف الاستخدامات، ويعتمد عادة على الخطوط والألوان والأشكال التي تتماشى مع هوية العلامة التجارية. تمتد العلامة التجارية إلى ما هو أبعد من الشعار، حيث تؤثر على كيفية إدراك الشركة عبر جميع نقاط التواصل، من التغليف ومواد التسويق إلى تجربة العملاء والحضور الرقمي.	 الشعار والهوية البصرية	\N
57	Web Development	Web-Development	Programming	\N	Web development is the process of creating and maintaining websites and web applications. It encompasses a wide range of tasks, including front-end development (what users see and interact with), back-end development (server-side logic and database management), and full-stack development (both front-end and back-end). Web development involves using programming languages like HTML, CSS, JavaScript, and frameworks such as React, Node.js, and Django. The goal of web development is to build responsive, secure, and user-friendly websites that provide a seamless experience across different devices. It plays a critical role in modern business, enabling companies to have a strong online presence.	\N	/service/images/8.jpg	/service/icons/programming.png	clyhm29ou0000dnteppm9du5n	2024-07-31 03:25:52.124	2025-01-07 06:32:02.56	\N	\N	تطوير الويب هو عملية إنشاء وصيانة مواقع الويب وتطبيقات الويب. يشمل ذلك مجموعة واسعة من المهام، مثل تطوير الواجهة الأمامية (ما يراه ويتفاعل معه المستخدمون)، وتطوير الواجهة الخلفية (المنطق على جانب الخادم وإدارة قواعد البيانات)، وتطوير كامل الواجهة (الواجهة الأمامية والخلفية معًا). يتضمن تطوير الويب استخدام لغات برمجة مثل HTML وCSS وJavaScript، وأطر عمل مثل React وNode.js وDjango. يهدف تطوير الويب إلى بناء مواقع إلكترونية سريعة الاستجابة، آمنة، وسهلة الاستخدام لتوفير تجربة سلسة عبر مختلف الأجهزة. يلعب دورًا أساسيًا في الأعمال الحديثة، مما يساعد الشركات على تعزيز وجودها عبر الإنترنت.	برمجة المواقع	\N
59	Magazine & Print Layout	Magazine-Print-Layout	tnn	\N	Magazine and print layout design involves organizing text, images, and graphics within printed publications to create an engaging and visually appealing format. This design process includes selecting fonts, colors, and styles that align with the publication's theme and target audience. A well-executed layout enhances readability and guides the reader's eye through the content, making it easy to digest information. Key elements include the arrangement of articles, headlines, captions, and visuals to maintain a balanced and cohesive look. Effective magazine and print layouts play a crucial role in brand identity and can significantly influence a publication's overall impact and success.	\N	/service/images/10.jpg	/service/icons/printer.png	clyhm29ou0000dnteppm9du5n	2024-08-07 08:26:16.67	2025-01-07 06:46:08.044	\N	\N	تصميم تخطيط المجلات والطباعة يتضمن تنظيم النصوص والصور والرسومات داخل المنشورات المطبوعة لإنشاء تنسيق جذاب بصريًا. تشمل هذه العملية اختيار الخطوط والألوان والأساليب التي تتماشى مع موضوع المنشور والجمهور المستهدف. يعزز التخطيط المصمم بشكل جيد سهولة القراءة ويوجه نظر القارئ من خلال المحتوى، مما يجعل من السهل استيعاب المعلومات. تشمل العناصر الرئيسية ترتيب المقالات، العناوين، التعليقات، والمرئيات للحفاظ على مظهر متوازن ومتماسك. تلعب التخطيطات الفعالة للمجلات والطباعة دورًا حاسمًا في هوية العلامة التجارية ويمكن أن تؤثر بشكل كبير على تأثير المنشور ونجاحه العام.	 المجلات وتخطيط الطباعة	\N
61	3D Graphic Design	3D-Graphic-Design	3D graphic design involves the creation of three-dimensional visual content using specialized software and techniques. It encompasses modeling, texturing, lighting, and rendering to produce lifelike images, animations, or environments. 3D graphic design is widely used in industries such as video games, film, product design, architecture, and virtual reality. By simulating real-world objects and spaces, 3D design enhances user engagement, providing immersive and visually stunning experiences. Its applications range from creating animated characters to architectural visualizations and marketing materials, offering endless possibilities for creativity and innovation.	\N	3D graphic design involves creating three-dimensional visual representations of objects, characters, or environments using specialized software and techniques. This design discipline encompasses modeling, texturing, lighting, and rendering, allowing designers to produce realistic and visually captivating images or animations. 3D graphics are widely used in various industries, including video games, film, architecture, product design, and virtual reality. Effective 3D design enhances storytelling and user engagement by providing immersive experiences. As technology advances, 3D graphic design continues to evolve, offering new possibilities for creativity and innovation in visual communication.	\N	/service/images/12.jpg	/service/icons/3d.png	clyhm29ou0000dnteppm9du5n	2024-09-25 14:37:49.71	2025-01-07 06:31:22.57	\N	\N	تصميم الرسومات ثلاثية الأبعاد يتضمن إنشاء محتوى بصري ثلاثي الأبعاد باستخدام برامج وتقنيات متخصصة. يشمل هذا التصميم النمذجة، والتلوين، والإضاءة، والتصيير لإنتاج صور أو رسوم متحركة أو بيئات واقعية. يُستخدم تصميم الرسومات ثلاثية الأبعاد على نطاق واسع في صناعات مثل ألعاب الفيديو، والأفلام، وتصميم المنتجات، والهندسة المعمارية، والواقع الافتراضي. من خلال محاكاة الكائنات والمساحات الحقيقية، يعزز التصميم ثلاثي الأبعاد تفاعل المستخدم، مما يوفر تجارب غامرة وجذابة بصريًا. تتنوع تطبيقاته من إنشاء شخصيات متحركة إلى التصورات المعمارية ومواد التسويق، مما يوفر إمكانيات لا حصر لها للإبداع والابتكار.	الجرافيك ثلاثي الأبعاد	تصميم الرسومات ثلاثية الأبعاد يتضمن إنشاء محتوى بصري ثلاثي الأبعاد باستخدام برامج وتقنيات متخصصة. يشمل هذا التصميم النمذجة، والتلوين، والإضاءة، والتصيير لإنتاج صور أو رسوم متحركة أو بيئات واقعية. يُستخدم تصميم الرسومات ثلاثية الأبعاد على نطاق واسع في صناعات مثل ألعاب الفيديو، والأفلام، وتصميم المنتجات، والهندسة المعمارية، والواقع الافتراضي. من خلال محاكاة الكائنات والمساحات الحقيقية، يعزز التصميم ثلاثي الأبعاد تفاعل المستخدم، مما يوفر تجارب غامرة وجذابة بصريًا. تتنوع تطبيقاته من إنشاء شخصيات متحركة إلى التصورات المعمارية ومواد التسويق، مما يوفر إمكانيات لا حصر لها للإبداع والابتكار.
53	Mobile Interfaces 	Mobile-Interfaces	gtrgtr	\N	Mobile interface design refers to the process of creating user-friendly and visually appealing interfaces for mobile devices like smartphones and tablets. It focuses on optimizing the user experience (UX) and user interface (UI) to ensure that apps and websites are easy to navigate and interact with on smaller screens. Mobile interfaces prioritize simplicity, responsiveness, and accessibility, taking into account touch gestures, screen sizes, and operating systems. Key elements of mobile design include clear icons, intuitive navigation, and fast load times, all aimed at enhancing usability and ensuring a seamless experience across different mobile devices.	\N	/service/images/4.jpg	/service/icons/mobile.png	clyhm29ou0000dnteppm9du5n	2024-07-30 10:08:10.05	2025-01-07 06:14:03.915	5	\N	تصميم واجهات الجوال يشير إلى عملية إنشاء واجهات سهلة الاستخدام وجذابة بصريًا للأجهزة المحمولة مثل الهواتف الذكية والأجهزة اللوحية. يركز التصميم على تحسين تجربة المستخدم (UX) وواجهة المستخدم (UI) لضمان سهولة التنقل والتفاعل مع التطبيقات والمواقع على الشاشات الصغيرة. تضع واجهات الجوال الأولوية للبساطة، الاستجابة، وإمكانية الوصول، مع مراعاة الإيماءات اللمسية، أحجام الشاشات، وأنظمة التشغيل. تشمل العناصر الأساسية لتصميم الجوال أيقونات واضحة، وتنقلًا بديهيًا، وأوقات تحميل سريعة، بهدف تحسين سهولة الاستخدام وضمان تجربة سلسة على مختلف الأجهزة المحمولة.	واجهات الموبايل	\N
50	Infographic Design	Infographic-Design	gtrgtrg	\N	Infographic design is a visual communication method that combines data, text, and imagery to convey complex information in an easy-to-understand format. It is widely used in marketing, education, and media to break down statistics, processes, or stories into visually appealing elements. A well-designed infographic simplifies information, making it more accessible and engaging for the audience. By utilizing creative layouts, icons, and vibrant colors, infographic designs help viewers quickly grasp key points. They can be customized for various platforms, such as social media, presentations, 	\N	/service/images/1.jpg	/service/icons/infographic2.png	clyhm29ou0000dnteppm9du5n	2024-07-29 08:07:33.041	2025-01-07 06:31:22.57	1	\N	تصميم الإنفوجرافيك هو أسلوب للتواصل المرئي يجمع بين البيانات والنصوص والرسومات لتقديم معلومات معقدة بطريقة سهلة الفهم. يُستخدم على نطاق واسع في التسويق والتعليم والإعلام لتبسيط الإحصائيات أو العمليات أو القصص وتحويلها إلى عناصر جذابة بصريًا. يساعد الإنفوجرافيك المصمم جيدًا على تسهيل الوصول إلى المعلومات وجعلها أكثر تشويقًا للجمهور. من خلال استخدام تخطيطات إبداعية وأيقونات وألوان مميزة، يسهل التصميم على المشاهدين استيعاب النقاط الرئيسية بسرعة. كما يمكن تخصيصه لمختلف المنصات، مثل وسائل التواصل الاجتماعي أو العروض التقديمية أو المطبوعات، مما يعزز التفاعل وفهم المعلومات.	تصميم الإنفوجرافيك	\N
56	Banner Ads Design	Banner-Ads-Design	tyhythy	\N	Banner ads design involves creating eye-catching, clickable advertisements that appear on websites, apps, or social media platforms. The goal is to attract the viewer’s attention and encourage them to engage with the ad by clicking on it. Banner ads are typically used for promoting products, services, or special offers, and their design is crucial in making a lasting impression. Effective banner ads combine striking visuals, bold headlines, concise messaging, and a clear call-to-action (CTA). The design should be clean, responsive, and optimized for different screen sizes, ensuring it looks appealing on both desktop and mobile devices.	\N	/service/images/7.jpg	/service/icons/ui-design.png	clyhm29ou0000dnteppm9du5n	2024-07-30 11:42:17.941	2025-01-07 06:42:13.248	\N	\N	تصميم إعلانات البانر يشمل إنشاء إعلانات لافتة للنظر وقابلة للنقر تظهر على المواقع الإلكترونية أو التطبيقات أو منصات التواصل الاجتماعي. الهدف من هذه الإعلانات هو جذب انتباه المشاهدين وتشجيعهم على التفاعل مع الإعلان من خلال النقر عليه. تُستخدم إعلانات البانر عادةً للترويج للمنتجات أو الخدمات أو العروض الخاصة، ويكون التصميم أمرًا حاسمًا في ترك انطباع دائم. تجمع الإعلانات الفعالة بين الصور الجذابة، العناوين البارزة، الرسائل الموجزة، والدعوة الواضحة لاتخاذ إجراء (CTA). يجب أن يكون التصميم بسيطًا، متجاوبًا، ومحسّنًا لمختلف أحجام الشاشات، لضمان مظهر جذاب على الأجهزة المكتبية والمحمولة.	أعلانات البنرز	\N
54	Flyer Design	Flyer-Design	gtrgtr	464	Flyer design is the art of creating visually striking and informative promotional materials, typically used for advertising events, products, or services. Flyers are usually printed on a single sheet of paper and distributed in public spaces or digitally shared online. The design of a flyer aims to capture attention quickly, often using bold headlines, engaging images, and concise messaging. Effective flyer design balances creativity with clarity, ensuring that the key information—such as the event details, contact information, or special offers—is easy to find and understand. It’s a cost-effective marketing tool used in various industries.	\N	/service/images/5.jpg	/service/icons/flyer.png	clyhm29ou0000dnteppm9du5n	2024-07-30 10:27:31.064	2025-01-07 06:44:56.993	6	\N	تصميم النشرات الإعلانية هو فن إنشاء مواد ترويجية جذابة بصريًا وغنية بالمعلومات، تُستخدم عادةً للإعلان عن الأحداث أو المنتجات أو الخدمات. غالبًا ما تُطبع النشرات على ورقة واحدة وتُوزع في الأماكن العامة أو تُشارك رقميًا عبر الإنترنت. يهدف تصميم النشرة إلى جذب الانتباه بسرعة، وذلك باستخدام عناوين بارزة، وصور جذابة، ورسائل مختصرة. يتطلب تصميم النشرة الفعّال التوازن بين الإبداع والوضوح، مع ضمان أن تكون المعلومات الأساسية—مثل تفاصيل الحدث، معلومات الاتصال، أو العروض الخاصة—سهلة الوصول والفهم. إنها أداة تسويقية فعالة من حيث التكلفة تُستخدم في العديد من الصناعات.	تصميم الفلايرز	\N
55	Logo Design	Logo-Design	ythyt	\N	Logo design is the process of creating a unique and recognizable symbol that represents a company, organization, or brand. A logo serves as the visual identity of a brand, often incorporating elements like shapes, typography, and colors to communicate the brand's values and personality. A well-designed logo should be simple, memorable, and versatile, ensuring it works across different mediums and sizes. It plays a crucial role in establishing brand recognition and trust. Whether used on business cards, websites, or packaging, an effective logo is key to making a lasting impression on customers.	\N	/service/images/6.jpg	/service/icons/seo.png	clyhm29ou0000dnteppm9du5n	2024-07-30 11:24:09.232	2025-01-07 07:03:44.889	7	\N	تصميم الشعار هو عملية إنشاء رمز فريد وقابل للتعرف يمثل شركة أو مؤسسة أو علامة تجارية. يعمل الشعار كهوية بصرية للعلامة التجارية، ويجمع غالبًا بين عناصر مثل الأشكال والخطوط والألوان للتعبير عن قيم وشخصية العلامة التجارية. يجب أن يكون الشعار المصمم جيدًا بسيطًا وسهل التذكر وقابلًا للتكيف مع مختلف الوسائط والأحجام. يلعب الشعار دورًا أساسيًا في تعزيز التعرف على العلامة التجارية وبناء الثقة. سواء تم استخدامه على بطاقات العمل أو المواقع الإلكترونية أو التغليف، فإن الشعار الفعّال يعد مفتاحًا لترك انطباع دائم لدى العملاء.	تصميم الشعارات	\N
63	Custom Web Development	custom-web-development	Tailored Solutions for Unique Business Needs	\N	Create a custom-built website tailored to your business requirements, ensuring scalability, security, and unique design. Our team crafts innovative solutions to give your online presence a competitive edge.	\N	\N	/service/icons/web-custom.png	clyhm29ou0000dnteppm9du5n	2025-01-07 01:45:33.908	2025-01-07 01:41:51.76	\N	\N	أنشئ موقع ويب مصمم خصيصًا لتلبية متطلبات عملك، مع ضمان التوسع والأمان والتصميم الفريد. يقوم فريقنا بابتكار حلول مبتكرة لمنح تواجدك على الإنترنت ميزة تنافسية.	تطوير الويب المخصص	حلول مصممة خصيصًا لاحتياجات الأعمال الفريدة
64	WordPress Development	wordPress-development	Versatile and Scalable WordPress Websites	\N	Build powerful WordPress websites that are easy to manage, SEO-friendly, and visually appealing. From themes to plugins, we deliver tailored solutions for your content management needs.	\N	\N	/service/icons/wordpress.png	clyhm29ou0000dnteppm9du5n	2025-01-07 01:50:49.105	2025-01-07 01:48:55.038	\N	\N	قم ببناء مواقع ووردبريس قوية وسهلة الإدارة ومحسّنة لمحركات البحث وجذابة بصريًا. بدءًا من القوالب إلى الإضافات، نقدم حلولاً مخصصة لاحتياجات إدارة المحتوى لديك.	تطوير ووردبريس	مواقع ووردبريس متعددة الاستخدامات وقابلة للتوسع
65	Full Stack Web Development	full-stack-web-development	Comprehensive Front-End and Back-End Development	\N	Leverage our expertise in full-stack development to build robust web applications. We handle both front-end interfaces and back-end systems to ensure seamless functionality and performance.	\N	\N	/service/icons/fullStack.png	clyhm29ou0000dnteppm9du5n	2025-01-07 01:54:56.395	2025-01-07 01:52:31.302	\N	\N	استفد من خبرتنا في التطوير الكامل لبناء تطبيقات ويب قوية. نحن نتولى تطوير الواجهة الأمامية والأنظمة الخلفية لضمان الوظائف السلسة والأداء المميز.	تطوير الويب الكامل	تطوير شامل للواجهة الأمامية والخلفية
66	API Development	api-development	Seamless Integration with Powerful APIs	\N	Develop secure and scalable APIs to connect your systems and enhance data exchange. Our solutions simplify integration with third-party services and streamline your operations.	\N	\N	/service/icons/api.png	clyhm29ou0000dnteppm9du5n	2025-01-07 01:58:05.209	2025-01-07 01:56:17.607	\N	\N	تطوير واجهات برمجة تطبيقات آمنة وقابلة للتوسع لربط أنظمتك وتعزيز تبادل البيانات. حلولنا تسهل التكامل مع الخدمات الخارجية وتبسط عملياتك.	تطوير واجهات برمجة التطبيقات (API)	تكامل سلس مع واجهات برمجة التطبيقات القوية
67	Ecommerce Web Development	ecommerce-web-development	Build Engaging and High-Performing Online Stores	\N	Design and develop ecommerce platforms tailored to your business. From user-friendly interfaces to secure payment systems, we create solutions to maximize your sales and customer experience.	\N	\N	/service/icons/fullStack.png	clyhm29ou0000dnteppm9du5n	2025-01-07 02:01:11.28	2025-01-07 01:59:19.112	\N	\N	تصميم وتطوير منصات التجارة الإلكترونية المصممة خصيصًا لعملك. بدءًا من واجهات سهلة الاستخدام إلى أنظمة دفع آمنة، نقوم بإنشاء حلول لتعظيم مبيعاتك وتجربة العملاء.	تطوير مواقع التجارة الإلكترونية	إنشاء متاجر إلكترونية جذابة وعالية الأداء
68	Website Maintenance	website-maintenance	Reliable Support for Your Website’s Performance	\N	Keep your website running smoothly with regular updates, bug fixes, and performance optimization. Our maintenance services ensure your site stays secure and up-to-date.	\N	\N	/service/icons/webTech.png	clyhm29ou0000dnteppm9du5n	2025-01-07 02:05:18.761	2025-01-07 02:01:40.991	\N	\N	حافظ على تشغيل موقعك الإلكتروني بسلاسة مع التحديثات المنتظمة وإصلاح الأخطاء وتحسين الأداء. تضمن خدماتنا للصيانة بقاء موقعك آمنًا ومحدثًا.	صيانة المواقع الإلكترونية	دعم موثوق لأداء موقعك الإلكتروني
60	Presentation Design 	Presentation-Design-printing4	rtgtrgtrg	0	Presentation design is the art of creating visually engaging and effective slide decks for various purposes, such as business meetings, educational lectures, and conferences. It involves organizing information, selecting appropriate visuals, and crafting a cohesive narrative to communicate ideas clearly and persuasively. Key elements of effective presentation design include a balanced layout, consistent color schemes, readable fonts, and high-quality images or graphics. A well-designed presentation not only captures the audience’s attention but also enhances understanding and retention of the material. It empowers presenters to convey their message confidently and make a lasting impression.	\N	/service/images/11.jpg	/service/icons/design-software.png	clyhm29ou0000dnteppm9du5n	2024-08-09 16:13:45.075	2025-01-07 07:04:31.254	\N	\N	تصميم العروض التقديمية هو فن إنشاء شرائح جذابة بصريًا وفعّالة لأغراض متنوعة، مثل الاجتماعات التجارية، المحاضرات التعليمية، والمؤتمرات. يتضمن ذلك تنظيم المعلومات، اختيار المرئيات المناسبة، وصياغة رواية متماسكة لنقل الأفكار بوضوح وإقناع. تشمل العناصر الأساسية لتصميم العرض التقديمي الفعّال تخطيطًا متوازنًا، ونظام ألوان متناسق، وخطوطًا قابلة للقراءة، وصور أو رسومات عالية الجودة. العرض التقديمي المصمم بشكل جيد لا يجذب انتباه الجمهور فحسب، بل يعزز أيضًا فهم المعلومات واحتفاظها. يمكن أن يمكّن المصممين من نقل رسالتهم بثقة وترك انطباع دائم.	تصميم العروض التقديمية	\N
51	Business Card 	Business-Card	thythyt	\N	A business card is a small, printed card that contains essential contact information about a person or business. It typically includes the individual’s name, job title, company name, phone number, email address, and sometimes a website or social media links. Business cards are a convenient tool for networking, helping to establish connections and provide a professional impression. The design of a business card is crucial, often reflecting the brand identity of the individual or company through elements like logos, colors, and fonts. They are commonly exchanged during formal introductions, meetings, and events.	\N	/service/images/2.jpg	/service/icons/support.png	clyhm29ou0000dnteppm9du5n	2024-07-29 10:26:00.726	2025-01-07 07:05:26.689	3	\N	بطاقة العمل هي بطاقة مطبوعة صغيرة تحتوي على معلومات الاتصال الأساسية لشخص أو شركة. عادة ما تتضمن اسم الشخص، المسمى الوظيفي، اسم الشركة، رقم الهاتف، البريد الإلكتروني، وأحيانًا روابط للموقع الإلكتروني أو وسائل التواصل الاجتماعي. تعتبر بطاقات العمل أداة مريحة لبناء العلاقات وتقديم انطباع مهني. تصميم بطاقة العمل له أهمية كبيرة، حيث يعكس في كثير من الأحيان هوية العلامة التجارية للفرد أو الشركة من خلال عناصر مثل الشعارات والألوان والخطوط. يتم تبادلها عادة خلال الاجتماعات الرسمية والمناسبات.	تصميم بطاقات العمل	\N
58	Packaging Design	Packaging-Design	Programming 	4	Packaging design is the process of creating the exterior visual appearance of a product’s packaging to make it appealing, functional, and aligned with the brand's identity. It involves the choice of materials, colors, typography, images, and structural elements to both protect the product and attract customers. Effective packaging design not only enhances the product's shelf presence but also communicates its value and purpose. It is a critical aspect of branding, as it influences consumers’ purchasing decisions by creating a memorable first impression. Sustainable and innovative designs are also becoming increasingly important in packaging to meet environmental and market demands.	\N	/service/images/9.jpg	/service/icons/covers.png	clyhm29ou0000dnteppm9du5n	2024-07-31 15:10:24.241	2025-01-07 07:20:39.403	\N	\N	تصميم العبوات هو عملية إنشاء المظهر الخارجي لتغليف المنتج لجعله جذابًا وعمليًا ومتوافقًا مع هوية العلامة التجارية. يشمل تصميم العبوة اختيار المواد، الألوان، الخطوط، الصور، والعناصر الهيكلية لحماية المنتج وجذب العملاء في الوقت نفسه. يعزز التصميم الفعّال للعبوات حضور المنتج على الرف ويعبر عن قيمته وغرضه. يعتبر جزءًا مهمًا من العلامة التجارية لأنه يؤثر على قرارات الشراء لدى المستهلكين من خلال خلق انطباع أولي لا يُنسى. أصبحت التصاميم المستدامة والمبتكرة أكثر أهمية في مجال التغليف لتلبية المتطلبات البيئية واحتياجات السوق.	تصميم العبوات والتغليف	\N
\.


--
-- Data for Name: ServiceCategory; Type: TABLE DATA; Schema: public; Owner: default
--

COPY public."ServiceCategory" ("serviceId", "categoryId") FROM stdin;
50	49
51	50
60	52
60	51
58	50
51	57
57	57
51	59
54	51
53	51
63	51
64	51
65	51
66	51
67	51
68	51
\.


--
-- Data for Name: ServiceCode; Type: TABLE DATA; Schema: public; Owner: default
--

COPY public."ServiceCode" (id, code, description, icon, image, "createdAt", "updatedAt") FROM stdin;
1	SCHK900	The approach keeps things simple and avoids the complexity of creating separate types and casting. It ensures that the types are directly aligned with the data structure you are working 	/codes/icons/0658fcbc-d326-4370-b89d-06e92b5e0669-icon6.svg	/codes/images/24d05f4e-9427-4892-9a8e-96e454b1242d-5.jpg	2024-07-22 07:42:11.448	2024-07-22 21:10:49.064
3	SCHK10076	To address the error and improve the Create component, let's ensure the component returns the necessary form and displays the appropriate content.	/codes/icons/485d8b3a-658c-4120-91a4-bf976ebfee53-icon5.svg	/codes/images/f560db69-7d78-45be-b5e1-317135ba625b-19.webp	2024-07-22 21:57:49.208	2024-10-03 07:09:59.037
4	SCHK10576	To address the error and improve the Create component, let's ensure the component returns the necessary form and displays the appropriate content.	/codes/icons/0df925c1-d15a-4e29-9fa6-f07b7639492f-icon1.svg	/codes/images/876343b0-c359-434c-8609-5bf06bb1520c-13.jpg	2024-07-22 22:00:04.69	2024-10-03 07:10:14.445
5	SCHK9876	Description	\N	\N	2024-10-03 07:10:49.051	2024-10-03 07:10:17.876
6	SCHK7654	\N	\N	\N	2024-10-03 07:11:12.083	2024-10-03 07:10:58.372
7	SCHK3498	\N	\N	\N	2024-10-03 07:11:30.029	2024-10-03 07:11:19.642
\.


--
-- Data for Name: ServiceFeature; Type: TABLE DATA; Schema: public; Owner: default
--

COPY public."ServiceFeature" (id, name, title, "titleAr", "desc", "descAr", more, image, "moreAr", "isActive", url, "createdAt", "updatedAt", "userId") FROM stdin;
1	ServiceFeature	Good Service	خدمات رائعة	Service quality refers to the overall assessment of how well a service meets or exceeds customer expectations. It encompasses various factors such as reliability, responsiveness, professionalism, and the ability to fulfill promises. High service quality is critical for building customer satisfaction, loyalty, and trust, often leading to repeat business and positive word-of-mouth. It is measured through customer feedback, performance metrics, and industry standards. Ensuring consistent and high-quality service can differentiate a company from its competitors, making it a key driver of success in service-oriented industries.\r\n\r\n	جودة الخدمة تشير إلى التقييم العام لكيفية تلبية أو تجاوز الخدمة لتوقعات العملاء. تشمل مجموعة من العوامل مثل الموثوقية، الاستجابة، الاحترافية، والقدرة على الوفاء بالوعود. تعتبر جودة الخدمة العالية أمرًا أساسيًا لبناء رضا العملاء، الولاء، والثقة، مما يؤدي غالبًا إلى تكرار الأعمال والإشادة الشفهية. يتم قياسها من خلال ملاحظات العملاء، مقاييس الأداء، والمعايير الصناعية. يساهم الحفاظ على جودة خدمة عالية ومتسقة في تمييز الشركة عن منافسيها، مما يجعلها محركًا رئيسيًا للنجاح في الصناعات القائمة على الخدمات.\r\n\r\n\r\n\r\n\r\n\r\n\r\n	More 	/front/service-features/feature1.svg	المزيد من الخدمات	\N		2024-09-29 18:19:02.395	2024-09-29 19:24:50.858	clyhm29ou0000dnteppm9du5n
2	ServiceFeature	Fast delivery 	انجاز سريع	Fast delivery 	التوصيل السريع يشير إلى النقل السريع والفعال للبضائع أو الخدمات إلى العملاء، مما يضمن تقليل وقت الانتظار بين تقديم الطلب وتسليمه. هذه الخدمة ضرورية لتلبية توقعات العملاء في عالم اليوم سريع الوتيرة، حيث يتم تفضيل السرعة والراحة. تعتمد الشركات التي تقدم التوصيل السريع على لوجستيات محسّنة، وأنظمة تتبع متقدمة، وسلسلة إمداد مبسطة لضمان التنفيذ في الوقت المحدد. سواء كان التوصيل في نفس اليوم أو في اليوم التالي أو الشحن السريع، يعزز التوصيل السريع من رضا العملاء، يبني الولاء، ويوفر ميزة تنافسية في صناعات مثل التجارة الإلكترونية، توصيل الطعام، وخدمات الشحن.	more	/front/service-features/feature2.svg	المديد	\N	\N	2024-09-29 18:43:55.109	2024-09-29 19:24:50.858	clyhm29ou0000dnteppm9du5n
3	ServiceFeature	Best Efficient  	وثوقية عالية	"More efficient" refers to achieving better results with less effort, time, or resources. In various contexts, whether it's a business process, a machine, or a service, being more efficient means maximizing productivity while minimizing waste or inefficiencies. Efficiency improvements can involve optimizing workflows, using advanced technologies, reducing costs, or enhancing speed and accuracy. The goal of becoming more efficient is to streamline operations, improve outcomes, and maintain high-quality standards while reducing the resources required to achieve them. Efficiency is a key factor in competitiveness and long-term success.	"أكثر كفاءة" يشير إلى تحقيق نتائج أفضل بجهد أو وقت أو موارد أقل. في مختلف السياقات، سواء كانت عملية تجارية، أو آلة، أو خدمة، تعني الكفاءة العالية زيادة الإنتاجية مع تقليل الهدر أو نقاط الضعف. يمكن أن تشمل تحسينات الكفاءة تحسين سير العمل، استخدام تقنيات متقدمة، تقليل التكاليف، أو زيادة السرعة والدقة. الهدف من زيادة الكفاءة هو تبسيط العمليات، وتحسين النتائج، والحفاظ على معايير الجودة العالية مع تقليل الموارد المطلوبة لتحقيقها. الكفاءة هي عامل رئيسي في التنافسية والنجاح طويل الأمد.	\N	/front/service-features/feature5.svg	\N	\N	\N	2024-09-29 18:47:11.388	2024-09-29 19:24:50.858	clyhm29ou0000dnteppm9du5n
4	ServiceFeature	Integrity service	خدمات متكاملة	A "Service Feature" refers to a specific function, characteristic, or aspect of a service that adds value to the user experience. These features differentiate a service from its competitors by offering unique benefits or capabilities. Service features can include things like 24/7 customer support, advanced customization options, fast delivery, or user-friendly interfaces. Highlighting key service features helps customers understand what sets a service apart and why it suits their needs. Well-defined service features play a crucial role in enhancing customer satisfaction and promoting brand loyalty.	ميزة الخدمة تشير إلى وظيفة أو سمة أو جانب محدد من الخدمة يضيف قيمة إلى تجربة المستخدم. تميز هذه الميزات الخدمة عن المنافسين من خلال تقديم فوائد أو قدرات فريدة. يمكن أن تشمل ميزات الخدمة مثل الدعم الفني على مدار الساعة، خيارات التخصيص المتقدمة، التوصيل السريع، أو الواجهات سهلة الاستخدام. تسليط الضوء على الميزات الأساسية للخدمة يساعد العملاء على فهم ما يميز الخدمة ولماذا تلبي احتياجاتهم. تلعب ميزات الخدمة المحددة جيدًا دورًا حاسمًا في تعزيز رضا العملاء وتعزيز الولاء للعلامة التجارية.	\N	/front/service-features/feature7.svg	\N	\N	\N	2024-09-29 18:52:22.042	2024-09-29 19:24:50.858	clyhm29ou0000dnteppm9du5n
\.


--
-- Data for Name: ServiceTag; Type: TABLE DATA; Schema: public; Owner: default
--

COPY public."ServiceTag" ("serviceId", "tagId") FROM stdin;
50	4
52	5
57	6
57	1
57	2
57	4
60	2
60	5
58	2
50	2
\.


--
-- Data for Name: ServiceTool; Type: TABLE DATA; Schema: public; Owner: default
--

COPY public."ServiceTool" ("serviceId", "toolId") FROM stdin;
52	3
52	5
57	5
57	3
57	4
60	4
60	5
60	3
60	6
58	10
58	8
50	2
50	3
63	1
64	1
65	1
66	1
67	1
68	1
50	1
50	4
50	5
50	10
50	15
50	9
50	18
\.


--
-- Data for Name: Session; Type: TABLE DATA; Schema: public; Owner: default
--

COPY public."Session" (id, "sessionToken", "userId", expires) FROM stdin;
\.


--
-- Data for Name: Skill; Type: TABLE DATA; Schema: public; Owner: default
--

COPY public."Skill" (id, name, slug, description, image, icon) FROM stdin;
\.


--
-- Data for Name: SocialNetwork; Type: TABLE DATA; Schema: public; Owner: default
--

COPY public."SocialNetwork" (id, linkedin, github, x, facebook, youtube, website, instgram, pinterest, reddit, "tikTok", snapchat, "createdAt", "updatedAt") FROM stdin;
\.


--
-- Data for Name: Step; Type: TABLE DATA; Schema: public; Owner: default
--

COPY public."Step" (id, name, description, sequence, image, icon, "phaseId", "createdAt", "updatedAt", "descriptionAr", "nameAr") FROM stdin;
7	Articulate Problem Statements	\N	2	\N	\N	21	2024-09-25 20:44:46.708	2024-09-26 00:37:29.764	\N	صياغة بيانات المشكلة
1	Identify Objectives	Define the goals of the research to understand what questions need answering.	1	\N	\N	20	2024-09-25 19:42:37.628	2024-09-25 20:30:50.527	: تحديد أهداف البحث لفهم الأسئلة التي يجب الإجابة عليه	تحديد الأهداف
10	Collaborate with Stakeholders	\N	5	\N	\N	21	2024-09-25 20:46:46.536	2024-09-26 00:37:29.764	\N	التعاون مع أصحاب المصلحة
6	Develop User Personas	\N	1	\N	\N	21	2024-09-25 20:30:50.527	2024-09-26 00:37:29.764	\N	تطوير شخصيات المستخدمي
11	Brainstorm Solutions	Host brainstorming sessions to generate a wide array of ideas without judgment.	1	\N	\N	19	2024-09-26 00:43:53.062	2024-09-26 00:42:33.524	 استخدام معايير مثل القابلية للتنفيذ وتأثير المستخدم والتوافق مع الأهداف لتحديد الأفكار التي يجب متابعتها	عصف ذهني للحلول
12	Sketch Initial Concepts	\N	\N	\N	\N	19	2024-09-26 00:45:21.871	2024-09-26 00:44:29.963	\N	رسم المفاهيم الأولية
4	Secondary Research	Review existing literature, studies, and reports relevant to the project to inform your understanding.	4	\N	\N	21	2024-09-25 19:46:44.585	2024-09-25 21:06:37.575	 مراجعة الأدبيات والدراسات والتقارير الحالية ذات الصلة بالمشروع لإثراء الفهم	جمع أبحاث ثانوية
8	Set Design Goals	\N	3	\N	\N	19	2024-09-25 20:46:46.536	2024-09-26 00:46:39.472	\N	تحديد أهداف التصميم
9	Create a Project Scope:	\N	4	\N	\N	22	2024-09-25 20:46:46.536	2024-09-25 21:16:30.283	\N	إنشاء نطاق المشروع
2	Conduct User Interviews	Synthesize findings into a clear document that highlights key insights, user needs, and design opportunities	2	\N	\N	20	2024-09-25 19:42:37.628	2024-09-25 21:17:48.895	التواصل مع المستخدمين المحتملين لجمع رؤى نوعية حول احتياجاتهم ونقاط	 مقابلات مع المستخدمين
3	Competitive Analysis	Analyze competitors' products or services to identify strengths, weaknesses, and market opportunities.	3	\N	\N	20	2024-09-25 19:46:44.585	2024-09-25 21:18:16.645	 تحليل منتجات أو خدمات المنافسين لتحديد نقاط القوة والضعف والفرص في السوق	إجراء تحليل تنافسي
5	Create a Research Summary:	Synthesize findings into a clear document that highlights key insights, user needs, and design opportunities	5	\N	\N	20	2024-09-25 19:46:44.585	2024-09-25 21:18:16.645	 تلخيص النتائج في وثيقة واضحة تسلط الضوء على الرؤى الرئيسية واحتياجات المستخدمين	إنشاء ملخص بحث
13	Build Interactive Prototypes	\N	3	\N	\N	18	2024-09-26 00:48:53.231	2024-09-26 00:47:41.923	\N	تطوير نماذج عالية الدقة
14	Establish Design Systems	\N	\N	\N	\N	22	2024-09-26 00:51:19.572	2024-09-26 00:52:10.494	\N	 إنشاء أنظمة تصميم
15	Conduct Design Reviews	\N	\N	\N	\N	22	2024-09-26 00:53:20.454	2024-09-26 00:52:30.589	\N	إجراء مراجعات تصميم
16	Iterate on Designs	\N	\N	\N	\N	22	2024-09-26 00:54:55.612	2024-09-26 00:53:59.2	\N	تكرار التصاميم
\.


--
-- Data for Name: Subscription; Type: TABLE DATA; Schema: public; Owner: default
--

COPY public."Subscription" (id, "userId", "planId", "startDate", "endDate", status, "createdAt", "updatedAt") FROM stdin;
\.


--
-- Data for Name: Tag; Type: TABLE DATA; Schema: public; Owner: default
--

COPY public."Tag" (id, name, slug, image, icon, description, "userId", "createdAt", "updatedAt", "descriptionAr", "nameAr", "SubTitle", "SubTitleAr", "TitleAr", title) FROM stdin;
4	Printing	printing	/tags/images/c651736e-be2f-4b2b-b4c6-e4f014f724a3-1.jpg	/tags/icons/7b2e67ee-e89f-4c89-9612-4b2a9156b031-icon4.svg	To address the error and improve the Create component, let's ensure the component returns the necessary form and displays the appropriate content.	clyhm29ou0000dnteppm9du5n	2024-07-27 09:48:22.312	2024-07-27 09:48:22.312	\N	\N	\N	\N	\N	\N
5	Content	content	/tags/images/7e6ecebb-1699-4274-80d8-cca97ab09422-offset-printr.jpg	/tags/icons/d3f7ed3c-5d66-405a-a2d2-346c6f06b414-icon6.svg	To address the error and improve the Create component, let's ensure the component returns the necessary form and displays the appropriate content.	clyhm29ou0000dnteppm9du5n	2024-07-27 09:48:22.312	2024-07-27 09:48:22.312	\N	\N	\N	\N	\N	\N
1	Development	development	/tags/images/4d2d1baf-4a47-4f26-ba57-fdd0ff04be76-2.jpg	/tags/icons/e7aa8e90-8703-472d-85ce-ca411ce5193b-icon1.svg	Development DevelopmentDevelopmentDevelopment Development DevelopmentDevelopment Development	clyhm29ou0000dnteppm9du5n	2024-07-27 09:48:22.312	2024-07-27 09:48:22.312	\N	\N	\N	\N	\N	\N
2	Programming	programming	/tags/images/290e40b7-0933-4004-8695-299775999772-6.jpg	/tags/icons/012f139c-411a-4750-ad59-f230abd8cda2-icon4.svg	Programming Programming Programming Programming Programming Programming Programming Programming	clyhm29ou0000dnteppm9du5n	2024-07-27 09:48:22.312	2024-07-27 09:48:22.312	\N	\N	\N	\N	\N	\N
6	Advertisement 	advertisement	\N	\N	\N	clyhm29ou0000dnteppm9du5n	2024-07-27 09:48:22.312	2024-07-27 09:48:22.312	\N	\N	\N	\N	\N	\N
7	Programming3	programming3	\N	\N	\N	clyhm29ou0000dnteppm9du5n	2024-09-05 15:12:04.645	2024-09-05 15:12:04.645	\N	\N	\N	\N	\N	\N
\.


--
-- Data for Name: Task; Type: TABLE DATA; Schema: public; Owner: default
--

COPY public."Task" (id, name, description, priority, "dueDate", "estimatedHours", "actualHours", "startDate", "endDate", "createdAt", "updatedAt", "completedAt", "projectId", icon, image, progress, status) FROM stdin;
3	Programming44	gtrgtr	low	2024-08-14 00:00:00	6	677	2024-08-15 00:00:00	2024-08-14 00:00:00	2024-08-27 09:05:53.136	2024-08-27 09:05:53.136	2024-08-22 00:00:00	cm0c77n3s0003jfex5d6uyepn			767	\N
4	Javat	gtrgtr	low	2024-08-29 00:00:00	3	4	2024-08-15 00:00:00	2024-08-23 00:00:00	2024-08-28 02:48:21.438	2024-08-28 02:48:21.438	2024-08-23 00:00:00	cm0d916uz00018quypvf1ron0	/project/tasks/icons/3911d776-719e-43c3-8f42-4cd0a2d7afc2-15.jpg	/project/tasks/imagesadab93d3-6677-4f31-90f6-b4be71820a73-7.jpg	5	\N
5	Programming Task3	rtgtrgtrgtrgtr	low	2024-08-12 00:00:00	3	4	2024-08-08 00:00:00	2024-08-30 00:00:00	2024-08-28 07:52:29.493	2024-08-28 07:52:29.493	2024-08-01 00:00:00	cm0dk4ntb0007yqubdjyu77po			4	\N
6	Implement design	37yrf4rh45 4yry4rb45 4ryt4grybeybve gefvbgfvegve gevgfevfgevfre 	high	2024-08-14 00:00:00	40	38	2024-08-21 00:00:00	2024-08-22 00:00:00	2024-09-01 03:41:44.278	2024-09-01 03:41:44.278	2024-08-07 00:00:00	cm0dk4ntb0007yqubdjyu77po			48	\N
7	Printing Data template 	tgtgt	low	2024-08-12 00:00:00	55	34	2024-08-28 00:00:00	2024-08-30 00:00:00	2024-09-01 03:44:56.278	2024-09-01 03:44:56.278	2024-08-15 00:00:00	cm0dk4ntb0007yqubdjyu77po	/project/tasks/icons/b4a705ee-9cc6-4c93-9fde-2ebd16b2721a-14.jpg	/project/tasks/imagesd7f22e9d-3f83-44c5-a3a6-394a13df9924-2.jpg	34	\N
8	Remove Design Background	erfrtgt	low	2024-08-29 00:00:00	43	33	2024-08-16 00:00:00	2024-08-17 00:00:00	2024-09-01 03:47:29.876	2024-09-01 03:47:29.876	2024-09-07 00:00:00	cm0dk4ntb0007yqubdjyu77po	/project/tasks/icons/03e9c842-cdfe-4181-b0eb-63eb7219dd8d-16.jpeg	/project/tasks/imagese8676c9e-0513-491a-9a8a-f9af847f2304-11.jpg	78	\N
9	Planning development phase 	This approach avoids any issues with Tailwind's purging mechanism and ensures that the width is applied as intended. This approach avoids any issues with Tailwind's purging mechanism and ensures that the width is applied as intended.	low	2024-09-25 00:00:00	11	14	2024-09-25 00:00:00	2024-09-26 00:00:00	2024-09-01 04:25:35.247	2024-09-01 04:25:35.247	2024-09-27 00:00:00	cm0dk4ntb0007yqubdjyu77po	/project/tasks/icons/8863de49-c1bd-4c57-8859-13dd75686e7e-17.jpg	/project/tasks/images228463e0-e4ca-453c-b9dc-af116033ad02-8.jpg	30	\N
10	Business Requirements added  	This approach avoids any issues with Tailwind's purging mechanism and ensures that the width is applied as intended.	low	2024-09-05 00:00:00	12	19	2024-10-04 00:00:00	2024-10-08 00:00:00	2024-09-01 04:28:33.101	2024-09-01 04:28:33.101	2024-09-26 00:00:00	cm0dk4ntb0007yqubdjyu77po	/project/tasks/icons/c0a77f43-c03c-4245-b423-c8877a3f5879-1.jpg	/project/tasks/images73f6c063-80ca-4de9-9038-798814f21fd3-7.jpg	17	\N
11	Testing Analysis Phase	This approach avoids any issues with Tailwind's purging mechanism and ensures that the width is applied as intended.	medium	2024-09-25 00:00:00	44	34	2024-09-18 00:00:00	2024-09-26 00:00:00	2024-09-01 04:31:13.733	2024-09-01 04:31:13.733	2024-10-11 00:00:00	cm0dk4ntb0007yqubdjyu77po	/project/tasks/icons/553c7fef-34b7-4cb4-9bd5-4ce0628b7c71-16.jpg	/project/tasks/imagesc6774640-7694-4024-b303-63b1bea906b9-12.jpg	14	\N
12	Task phas1	This setup should give you a solid foundation for displaying your nested menu structure in a React component. The ElementDisplay component's recursive nature allows for deep nesting of elements, handling even complex menu structures with multiple levels of sub-elements.	low	2024-09-05 00:00:00	9	11	2024-10-03 00:00:00	2024-10-12 00:00:00	2024-09-02 15:54:22.427	2024-09-02 15:54:22.427	2024-09-05 00:00:00	cm0l6e16y0001k71mgu08zugv	/project/tasks/icons/0d7b4e2c-4c7d-43d9-9cc7-cdcc4bf04dd2-icon6.svg	/project/tasks/images2225ac5e-6865-4337-bcef-91824109a258-18.jpg	18	\N
13	Task phas2	This setup should give you a solid foundation for displaying your nested menu structure in a React component. The ElementDisplay component's recursive nature allows for deep nesting of elements, handling even complex menu structures with multiple levels of sub-elements.	low	2024-09-05 00:00:00	16	17	2024-10-03 00:00:00	2024-10-12 00:00:00	2024-09-02 15:55:28.272	2024-09-02 15:55:28.272	2024-09-05 00:00:00	cm0l6e16y0001k71mgu08zugv	/project/tasks/icons/e0f4a9c8-6bc1-4d6a-bb7d-75fb089e4479-basic11.svg	/project/tasks/images5dac04f1-6ae7-4cb3-9188-84f39551d116-13.jpg	27	\N
14	Task phas3	This setup should give you a solid foundation for displaying your nested menu structure in a React component. The ElementDisplay component's recursive nature allows for deep nesting of elements, handling even complex menu structures with multiple levels of sub-elements.	low	2024-09-10 00:00:00	165	173	2024-10-25 00:00:00	2024-11-07 00:00:00	2024-09-02 15:56:25.518	2024-09-02 15:56:25.518	2024-09-13 00:00:00	cm0l6e16y0001k71mgu08zugv	/project/tasks/icons/c6ade2fe-121a-40e5-b2f9-7f06a28e73ec-basic10.svg	/project/tasks/images719eca1f-d93b-4dd7-918a-db4f69b0d0d2-5.jpg	274	\N
15	Task phas4	This setup should give you a solid foundation for displaying your nested menu structure in a React component. The ElementDisplay component's recursive nature allows for deep nesting of elements, handling even complex menu structures with multiple levels of sub-elements.	high	2024-09-08 00:00:00	184	211	2024-10-05 00:00:00	2024-11-07 00:00:00	2024-09-02 15:57:20.711	2024-09-02 15:57:20.711	2024-09-13 00:00:00	cm0l6e16y0001k71mgu08zugv	/project/tasks/icons/cdbe9438-3b8f-470b-8594-074354309523-basic7.svg	/project/tasks/imagesc5822838-c4bd-4fec-abba-4afc0e25dc08-2.jpg	292	\N
\.


--
-- Data for Name: Team; Type: TABLE DATA; Schema: public; Owner: default
--

COPY public."Team" (id, name, icon, image, description, status, "departmentId", "createdAt", "updatedAt", "locationId") FROM stdin;
1	Programming	/employees/team/images/1319db7d-8e14-4e1f-8d25-2d00cfca5436-13.jpg		efrefre	yes	\N	2024-08-15 14:33:55.887	2024-08-15 14:33:55.887	1
2	Printing	/employees/team/images/c869b580-d642-4653-ba11-ae339bc9333a-18.jpg		bgthythyt	yes	\N	2024-08-16 12:25:33.616	2024-08-16 12:25:33.616	2
3	Java	/employees/team/images/d3d851c5-9875-4ae1-b7db-f893177a5fe1-11.jpg		5g565	yes	\N	2024-08-16 12:56:29.715	2024-08-16 12:56:29.715	1
4	Content	/employees/team/images/6b77b8a9-9433-42c5-ada4-a2df75dcee6c-8.jpg		erfre	yes	\N	2024-08-16 13:00:19.129	2024-08-16 13:00:19.129	2
8	Ahmed 	/employees/team/images/faaa2817-c70f-4d49-8396-fd244fce3017-17.jpg		gthythythyt	yes	\N	2024-08-28 02:32:04.599	2024-08-28 02:32:04.599	1
9	Programming Team	/employees/team/images/b3673eb3-153c-4d81-8738-22648eb1fb3b-14.jpg		Programming team desc	yes	\N	2024-08-28 02:41:48.825	2024-08-28 02:41:48.825	1
\.


--
-- Data for Name: TeamEmployee; Type: TABLE DATA; Schema: public; Owner: default
--

COPY public."TeamEmployee" ("employeeId", "teamId") FROM stdin;
2	2
2	3
2	4
\.


--
-- Data for Name: Testimonial; Type: TABLE DATA; Schema: public; Owner: default
--

COPY public."Testimonial" (id, content, rating, "videoContent", "customerId", "serviceId", "createdAt", "updatedAt", image, published, response, title, "userId", verified, "contentAr", "titleAr") FROM stdin;
5	I am thoroughly impressed by the brochure design services provided by this talented team. They created a visually striking and professionally polished brochure that beautifully showcases our real estate properties. The attention to detail in the layout, typography, and overall design has truly elevated the perception of our brand in the market. The brochures have been extremely well-received by potential buyers, helping us convey the value of our properties with clarity and style. The team was incredibly easy to work with, delivering on time and exceeding expectations every step of the way.	909	\N	\N	60	2024-08-03 05:19:40.084	2024-10-23 10:17:37.944	/testimonials/images/user-3.jpg	t	\N	High-Quality Brochure Design	\N	f	 "أنا معجب بشدة بخدمات تصميم الكتيب التي قدمها هذا الفريق الموهوب. لقد قاموا بإنشاء كتيب مذهل بصريًا واحترافي للغاية يعرض عقاراتنا بشكل رائع. كان الاهتمام بالتفاصيل في التخطيط والخطوط والتصميم العام قد رفع بالفعل تصور علامتنا التجارية في السوق. تم استقبال الكتيبات بشكل رائع من قبل المشترين المحتملين، مما ساعدنا على نقل قيمة عقاراتنا بوضوح وأناقة. كان الفريق سهل التعامل للغاية، وسلم المشروع في الوقت المحدد وتجاوز التوقعات في كل مرحلة.	تصميم كتيب عالي الجودة
4	My experience working with this team on our new logo design was nothing short of excellent. From the very first meeting, they took the time to understand our brand identity and objectives. The final logo not only captures the essence of our business but also stands out with its unique and professional appearance. They were incredibly responsive to feedback and made adjustments quickly and thoughtfully. The final product has been met with admiration from both customers and colleagues alike. I am beyond satisfied with their work and wouldn't hesitate to collaborate with them again in the future.	988	\N	\N	60	2024-08-02 18:39:03.831	2024-10-23 10:17:37.944	/testimonials/images/user-4.jpg	t	\N	Outstanding Logo Design	\N	f	جربتي مع هذا الفريق في تصميم شعارنا الجديد كانت ممتازة بكل المقاييس. من أول اجتماع، خصصوا الوقت لفهم هوية علامتنا التجارية وأهدافنا. الشعار النهائي لا يلتقط فقط جوهر أعمالنا، بل يتميز بمظهره الفريد والاحترافي. كانوا متجاوبين للغاية مع الملاحظات وقاموا بإجراء التعديلات بسرعة وبفكر مدروس. المنتج النهائي نال إعجاب العملاء والزملاء على حد سواء. أنا راضٍ تمامًا عن عملهم ولن أتردد في التعاون معهم مرة أخرى في المستقبل	تصميم شعار رائع
6	Their approach was strategic and creative, resulting in visually compelling posts that truly resonated with our target audience. Not only did they help us increase our followers and engagement rates, but they also improved brand recognition and loyalty. Their expertise in designing for multiple social platforms allowed us to maintain a consistent and impactful brand message across all channels. I am extremely pleased with the results, and I look forward to working with them on future campaigns.	124	\N	\N	\N	2024-08-21 10:10:39.572	2024-10-23 10:16:56.698	/testimonials/images/user-2.jpg	t	\N	Impressive Social Media Campaign	\N	f	عززت الحملة التي أنشأها هذا الفريق بشكل كبير من حضور علامتنا التجارية على الإنترنت. كان نهجهم استراتيجيًا وإبداعيًا، مما أدى إلى منشورات مرئية جذابة تواصلت بالفعل مع جمهورنا المستهدف. لم يساعدونا فقط في زيادة عدد المتابعين ومعدلات التفاعل، بل عززوا أيضًا التعرف على العلامة التجارية والولاء لها. خبرتهم في التصميم لمنصات التواصل الاجتماعي المختلفة سمحت لنا بالحفاظ على رسالة علامتنا التجارية قوية ومتسقة عبر جميع القنوات. أنا راضٍ للغاية عن النتائج، وأتطلع إلى العمل معهم في الحملات المستقبلية	حملة مميزة على وسائل التواصل الاجتماعي
2	The web design services provided by this team were absolutely outstanding. They took the time to understand every detail about my business, making sure that the final product was aligned with my brand vision. The website they created is not only aesthetically pleasing but also user-friendly, with great functionality across all devices. Since the launch, I have seen a noticeable increase in user engagement and positive feedback from my clients. Their attention to detail and dedication to delivering top-quality work truly sets them apart. I highly recommend their services to anyone in need of professional web design.	334	\N	\N	\N	2024-08-01 08:12:56.251	2024-10-23 10:17:37.944	/testimonials/images/user-5.jpg	t	\N	Exceptional Web Design Services	\N	f	 "كانت خدمات تصميم المواقع التي قدمها هذا الفريق رائعة للغاية. لقد أخذوا الوقت الكافي لفهم كل التفاصيل المتعلقة بعملي، مما يضمن أن المنتج النهائي يتماشى مع رؤية علامتي التجارية. الموقع الذي أنشأوه ليس فقط جذابًا من الناحية الجمالية، ولكنه أيضًا سهل الاستخدام وعملي على جميع الأجهزة. منذ إطلاق الموقع، لاحظت زيادة كبيرة في تفاعل المستخدمين وردود الفعل الإيجابية من العملاء. اهتمامهم بالتفاصيل وحرصهم على تقديم عمل عالي الجودة يميزهم حقًا. أوصي بشدة بخدماتهم لأي شخص يحتاج إلى تصميم مواقع احترافي.	خدمات تصميم مواقع رائعة
\.


--
-- Data for Name: TestimonialCategory; Type: TABLE DATA; Schema: public; Owner: default
--

COPY public."TestimonialCategory" ("testimonialId", "categoryId") FROM stdin;
\.


--
-- Data for Name: TestimonialTag; Type: TABLE DATA; Schema: public; Owner: default
--

COPY public."TestimonialTag" ("testimonialId", "tagId") FROM stdin;
2	2
2	5
5	2
5	5
5	1
6	6
6	1
6	4
\.


--
-- Data for Name: Tool; Type: TABLE DATA; Schema: public; Owner: default
--

COPY public."Tool" (id, name, slug, description, image, icon, "userId", "createdAt", "updatedAt", "descriptionAr", "nameAr") FROM stdin;
2	Vue3	vue3	This is development service catefory desctipon code for more details design basic concerpy 	/tools-media/icons/vue.png	/tools-media/icons/vue.svg	clyhm29ou0000dnteppm9du5n	2024-07-22 07:31:32.33	2024-12-06 08:14:17.782	\N	Vue3
3	ReactJS	reactjs	To address the error and improve the Create component, let's ensure the component returns the necessary form and displays the appropriate content.	/tools-media/icons/react.png	/tools-media/icons/react.svg	clyhm29ou0000dnteppm9du5n	2024-07-24 10:33:02.536	2024-12-06 08:14:17.782	\N	ReactJS
5	NestJS	nestJS	To address the error and improve the Create component, let's ensure the component returns the necessary form and displays the appropriate content.	/tools/images/4520d6b3-bd9a-4693-a2a6-9184b26c68a7-21.webp	/tools-media/icons/nestjs.svg	clyhm29ou0000dnteppm9du5n	2024-07-24 10:42:31.833	2024-12-06 08:16:29.671	\N	NestJS
6	laravel	laravel	To address the error and improve the Create component, let's ensure the component returns the necessary form and displays the appropriate content.	/tools/images/28054b46-176d-4f63-833b-35743e7782f6-19.webp	/tools-media/icons/laravel.svg	clyhm29ou0000dnteppm9du5n	2024-07-24 10:55:10.862	2024-12-06 08:16:29.671	\N	laravel
8	python	new	\N	/tools-media/icons/python.svg	/tools-media/icons/python.svg	clyhm29ou0000dnteppm9du5n	2024-07-25 05:38:14.953	2024-12-07 10:09:51.564	\N	new
9	Hibernate	hibernate	\N	/tools-media/icons/hibernate.svg	/tools-media/icons/hibernate.svg	clyhm29ou0000dnteppm9du5n	2024-07-25 07:49:49.719	2024-12-07 10:09:51.564	\N	hibernate
10	nextjs	nextjs	\N	/tools-media/icons/nextjs.svg	/tools-media/icons/nextjs.svg	clyhm29ou0000dnteppm9du5n	2024-07-25 12:39:56.342	2024-12-07 10:09:51.564	\N	nextjs
11	wordpress	wordpress	\N	/tools-media/icons/wordpress.svg	/tools-media/icons/wordpress.svg	clyhm29ou0000dnteppm9du5n	2024-07-25 12:40:09.143	2024-12-07 10:13:22.606	\N	wordpress
23	Canva	canva	\N	/tools-media/icons/canva.svg	/tools-media/icons/canva.svg	clyhm29ou0000dnteppm9du5n	2024-12-08 08:22:38.361	2024-12-08 08:21:26.026	\N	Canva
4	Spring	Spring	To address the error and improve the Create component, let's ensure the component returns the necessary form and displays the appropriate content.	/tools/images/82536992-1774-40a3-8cf8-7b66218f254b-20.webp	/tools-media/icons/spring.svg	clyhm29ou0000dnteppm9du5n	2024-07-24 10:40:47.461	2024-12-06 08:14:17.782	\N	Spring
12	nodejs	nodejs	\N	/tools-media/icons/nodejs.svg	/tools-media/icons/nodejs.svg	clyhm29ou0000dnteppm9du5n	2024-07-25 12:40:38.267	2024-12-07 10:13:22.606	\N	nodejs
13	JSP	jsp	\N	/tools-media/icons/jsp.svg	/tools-media/icons/jsp.svg	clyhm29ou0000dnteppm9du5n	2024-07-25 15:50:47.239	2024-12-07 10:13:22.606	\N	rrree
14	javascript	javascript	\N	/tools-media/icons/javascript.svg	/tools-media/icons/javascript.svg	clyhm29ou0000dnteppm9du5n	2024-07-25 15:57:32.73	2024-12-08 01:02:12.826	\N	javascript
15	Angular	angular	\N	/tools-media/icons/angular.svg	/tools-media/icons/angular.svg	clyhm29ou0000dnteppm9du5n	2024-07-25 15:58:03.234	2024-12-08 01:05:39.204	\N	angular
16	html	html	\N	/tools-media/icons/html.svg	/tools-media/icons/html.svg	clyhm29ou0000dnteppm9du5n	2024-07-27 14:23:55.696	2024-12-08 01:07:08.054	\N	html
17	css	css	\N	/tools-media/icons/css.svg	/tools-media/icons/css.svg	clyhm29ou0000dnteppm9du5n	2024-08-27 03:01:46.674	2024-12-08 01:08:20.942	\N	css
24	Sketch	sketch	\N	\N	/tools-media/icons/sketch.svg	clyhm29ou0000dnteppm9du5n	2024-12-08 08:25:47.381	2024-12-08 08:25:07.165	\N	Sketch
18	Svelte	svelte	\N	/tools-media/icons/svelte.svg	/tools-media/icons/svelte.svg	clyhm29ou0000dnteppm9du5n	2024-12-08 01:11:00.902	2024-12-08 03:58:25.239	\N	Svelte
19	photoshop	photoshop	\N	/tools-media/icons/photoshop.svg	/tools-media/icons/photoshop.svg	clyhm29ou0000dnteppm9du5n	2024-12-08 08:13:16.531	2024-12-08 08:11:40.797	\N	photoshop
20	illustrator	illustrator	\N	/tools-media/icons/illustrator.svg	/tools-media/icons/illustrator.svg	clyhm29ou0000dnteppm9du5n	2024-12-08 08:15:43.841	2024-12-08 08:13:46.773	\N	illustrator
22	Figma	figma	\N	/tools/images/figma.svg	/tools-media/icons/figma.svg	clyhm29ou0000dnteppm9du5n	2024-12-08 08:19:15.493	2024-12-08 08:34:26.457	\N	Figma
21	InDesign	inDesign	\N	/tools/images/indesign.svg	/tools-media/icons/indesign.svg	clyhm29ou0000dnteppm9du5n	2024-12-08 08:18:10.595	2024-12-08 08:34:26.457	\N	InDesign
1	Java technology	java-technology	Java is a versatile, object-oriented programming language designed for reliability, security, and platform independence. It enables developers to build robust applications that can run seamlessly across various operating systems through the Java Virtual Machine (JVM). With its extensive standard libraries, support for multithreading, and strong emphasis on security, Java is widely used for web applications, enterprise solutions, mobile apps, and more. Its scalability and performance make it a preferred choice for both small projects and large-scale systems.	/tools-media/images/java2.jpg	/tools-media/icons/java.svg	clyhm29ou0000dnteppm9du5n	2024-07-22 03:02:23.997	2025-01-06 23:26:10.302	جافا هي لغة برمجة متعددة الاستخدامات موجهة للكائنات، مصممة لتوفير الموثوقية والأمان والاستقلالية عن المنصة. تتيح للمطورين إنشاء تطبيقات قوية يمكن تشغيلها بسلاسة عبر أنظمة تشغيل مختلفة من خلال آلة جافا الافتراضية (JVM). بفضل مكتباتها القياسية الواسعة، ودعمها لتعدد الخيوط، وتركيزها القوي على الأمان، تُستخدم جافا على نطاق واسع في تطوير تطبيقات الويب، والحلول المؤسسية، وتطبيقات الهاتف المحمول، والمزيد. وتعتبر قابلية التوسع والأداء العالي من الأسباب التي تجعلها الخيار المفضل للمشاريع الصغيرة والأنظمة واسعة النطاق.	تقنية الجافا
\.


--
-- Data for Name: Vendor; Type: TABLE DATA; Schema: public; Owner: default
--

COPY public."Vendor" (id, name, slug, description, logo, website, email, phone, address, "createdAt", "updatedAt") FROM stdin;
\.


--
-- Data for Name: VerificationToken; Type: TABLE DATA; Schema: public; Owner: default
--

COPY public."VerificationToken" (identifier, token, expires) FROM stdin;
\.


--
-- Data for Name: Work; Type: TABLE DATA; Schema: public; Owner: default
--

COPY public."Work" (id, title, description, "imageUrls", "serviceId", "locationId", client, highlights, "createdAt", "updatedAt", "userId", icon, image, "workUrl", "clientAr", "descriptionAr", "highlightsAr", "titleAr") FROM stdin;
2	Custom Design for Online Store	 Developed a visually appealing and user-friendly e-commerce website for an online fashion retailer. The design emphasizes an intuitive shopping experience, with optimized product galleries and a smooth checkout process. Fully responsive, ensuring a seamless browsing experience on mobile devices.	{}	50	1	frefre	frefrerefref	2024-07-26 08:42:47.495	2025-01-08 08:26:34.574	clyhm29ou0000dnteppm9du5n	\N	/works-media/images/webWork2.webp	\N	\N	الوصف: تم تطوير موقع تجارة إلكترونية جذاب وسهل الاستخدام لمتجر تجزئة للأزياء عبر الإنترنت. يركز التصميم على تجربة تسوق سلسة، مع معارض منتجات محسّنة وعملية شراء سلسة. متوافق تمامًا مع الأجهزة المحمولة لضمان تجربة تصفح سلسة.	\N	موقع التجارة الإلكترونية
1	Corporate Logo Design	 Created a sleek and modern logo for a technology company that focuses on simplicity and brand recognition. The design incorporates clean lines and a bold color palette, reflecting the company’s innovative approach. The logo is adaptable for various digital and print formats, ensuring consistency across platforms.	{}	50	1	gtrgtr	gtr	2024-07-26 08:08:34.442	2025-01-08 08:20:53.613	clyhm29ou0000dnteppm9du5n	\N	/works-media/images/webWork1.webp	\N	\N	الوصف: تم تصميم شعار أنيق وحديث لشركة تقنية تركز على البساطة والاعتراف بالعلامة التجارية. يتضمن التصميم خطوطًا نظيفة ولوحة ألوان جريئة، مما يعكس النهج المبتكر للشركة. الشعار قابل للتكيف مع تنسيقات مختلفة للطباعة والرقمية لضمان التناسق عبر المنصات.	\N	 تصميم شعار الشركة
19	User-Friendly Interface for Fitness App	Developed a modern and visually captivating menu for a restaurant chain. The design highlights the signature dishes with vibrant images and a well-organized layout, making it easy for customers to navigate. The menu was designed to enhance the dining experience and drive customer engagement.	{/works-media/images/e00864ed-c144-4cf6-bf6f-baac83fae165-2.jpg,/works-media/images/9999323d-72e3-479f-b405-157f06b0516b-6.jpg,/works-media/images/983c717f-65be-47bd-82c9-9dbf241e794d-12.jpg,/works-media/images/8971146b-d1ce-49b4-92d4-0f6a7d466957-13.jpg}	50	1	hytht	thythyt	2024-07-27 12:17:16.238	2025-01-08 08:26:34.574	clyhm29ou0000dnteppm9du5n	/works/icons/d4b82c59-602a-4f62-86fc-9ddd734c54d5-basic9.svg	/works-media/images/webWork4.webp	\N	\N	تم تطوير قائمة حديثة وجذابة لسلسلة مطاعم. يبرز التصميم الأطباق المميزة من خلال صور حيوية وتخطيط منظم جيدًا يسهل على العملاء التنقل. تم تصميم القائمة لتعزيز تجربة الطعام وزيادة التفاعل مع العملاء.	\N	واجهة سهلة الاستخدام لتطبيق اللياقة البدنية
20	Creative Graphic Designs for Fashion Brand 	Developed creative and engaging social media graphics for a fashion brand’s advertising campaign. The designs incorporated vibrant visuals and trendy typography to attract a younger audience. Each post was optimized for various social platforms, driving higher engagement rates and brand visibility.	{}	50	1	juyjuy	jyjyu	2024-07-27 14:18:21.312	2025-01-08 08:26:34.574	clyhm29ou0000dnteppm9du5n	/works/icons/3611eb65-18fd-492f-8639-bdd9f9b62d5b-basic8.svg	/works-media/images/webWork5.webp	\N	\N	 تم تطوير رسومات إبداعية وجذابة لوسائل التواصل الاجتماعي لحملة إعلانية لعلامة أزياء. تضمنت التصاميم صورًا مرئية حيوية وخطوطًا عصرية لجذب جمهور شاب. تم تحسين كل منشور للمنصات الاجتماعية المختلفة، مما زاد من معدلات التفاعل ورؤية العلامة التجارية.	\N	تصاميم جرافيك إبداعية لإعلانات علامة أزياء
18	Real Estate Brochure	 Designed an elegant and professional brochure for a real estate company showcasing premium properties. The brochure features high-quality imagery, sleek layouts, and clear, concise information. The goal was to convey luxury while providing prospective buyers with detailed property descriptions.	{}	50	1	Ahmed Mohammed	rtgtr	2024-07-27 12:08:18.192	2025-01-08 08:26:34.574	clyhm29ou0000dnteppm9du5n	/works/icons/698b4d06-775f-4d63-9756-f3171e055131-basic11.svg	/works-media/images/webWork3.webp	\N	\N	الوصف: تم تصميم كتيب أنيق واحترافي لشركة عقارات تعرض عقارات فاخرة. يتضمن الكتيب صورًا عالية الجودة، وتخطيطات أنيقة، ومعلومات واضحة وموجزة. الهدف هو إيصال الفخامة مع تزويد المشترين المحتملين بوصف تفصيلي للعقارات.	\N	 تصميم كتيب أنيق للتسويق العقاري
27	Rental Management App	 Manage your rental properties effortlessly with tools for payment tracking, lease agreements, tenant communication, and maintenance requests—all in one app.	{}	\N	\N	\N	\N	2025-01-03 16:42:05.984	2025-01-03 16:48:06.897	clyhm29ou0000dnteppm9du5n	\N	/works-media/images/brandWork11.webp	\N	\N	إدارة عقاراتك المؤجرة بسهولة باستخدام أدوات تتبع الدفعات، واتفاقيات الإيجار، والتواصل مع المستأجرين، وطلبات الصيانة—all من خلال تطبيق واحد.	\N	تطبيق إدارة الإيجارات
26	Virtual Property Tour App	 This app offers potential buyers the ability to explore properties virtually through high-quality 360-degree tours, saving time while providing a realistic viewing experience.	{}	\N	\N	\N	\N	2025-01-03 16:40:28.875	2025-01-03 16:48:06.897	clyhm29ou0000dnteppm9du5n	\N	/works-media/images/brandWork8.webp	\N	\N	يتيح هذا التطبيق للمشترين المحتملين استكشاف العقارات افتراضيًا من خلال جولات عالية الجودة بزاوية 360 درجة، مما يوفر الوقت ويوفر تجربة مشاهدة واقعية.	\N	تطبيق جولات العقارات الافتراضية
25	Real Estate Agent App	 Tailored for real estate agents, this app streamlines property management, client interactions, and deal tracking to ensure smooth and efficient transactions.	{}	\N	\N	\N	\N	2025-01-03 16:39:01.866	2025-01-03 16:48:06.897	clyhm29ou0000dnteppm9du5n	\N	/works-media/images/brandWork7.webp	\N	\N	مصمم خصيصًا لوكلاء العقارات، يسهل هذا التطبيق إدارة العقارات، والتواصل مع العملاء، وتتبع الصفقات لضمان إجراء المعاملات بسلاسة وكفاءة.	\N	تطبيق وكلاء العقارات
24	Property Listing App	A mobile platform that allows users to browse properties with detailed descriptions, high-quality images, and pricing options. Designed to help buyers and renters quickly find their ideal property.	{}	\N	\N	\N	\N	2025-01-03 16:36:14.049	2025-01-03 16:48:06.897	clyhm29ou0000dnteppm9du5n	\N	/works-media/images/brandWork6.webp	\N	\N	 منصة متنقلة تتيح للمستخدمين تصفح العقارات مع أوصاف تفصيلية وصور عالية الجودة وخيارات أسعار. مصمم لمساعدة المشترين والمستأجرين على العثور بسرعة على العقار المثالي.	\N	تطبيق قوائم العقارات
30	Neighborhood Insights App	Discover detailed information about neighborhoods, including proximity to schools, amenities, safety ratings, and demographic data to make informed property decisions.	{}	\N	\N	\N	\N	2025-01-03 22:07:40.872	2025-01-03 22:04:57.738	clyhm29ou0000dnteppm9du5n	\N	/works-media/images/brandWork14.webp	\N	\N	اكتشف معلومات تفصيلية عن الأحياء، بما في ذلك قربها من المدارس، والمرافق، وتقييمات السلامة، والبيانات الديموغرافية لاتخاذ قرارات عقارية مستنيرة.	\N	تطبيق رؤى الأحياء
28	Real Estate Investment App	A dedicated platform for investors to analyze market trends, compare properties, and identify lucrative real estate opportunities based on detailed financial data.	{}	\N	\N	\N	\N	2025-01-03 22:01:17.201	2025-01-03 22:02:29.561	clyhm29ou0000dnteppm9du5n	\N	/works-media/images/brandWork12.webp	\N	\N	منصة مخصصة للمستثمرين لتحليل اتجاهات السوق، ومقارنة العقارات، وتحديد فرص الاستثمار العقاري المربحة بناءً على بيانات مالية مفصلة.	\N	تطبيق استثمار العقارات
29	Home Loan Calculator App	Simplify mortgage calculations with this app, offering features like interest rate comparisons, monthly payment estimates, and affordability assessments.	{}	\N	\N	\N	\N	2025-01-03 22:04:27.741	2025-01-03 22:02:36.179	clyhm29ou0000dnteppm9du5n	\N	/works-media/images/brandWork13.webp	\N	\N	تبسيط حسابات الرهن العقاري باستخدام هذا التطبيق، والذي يوفر ميزات مثل مقارنة أسعار الفائدة، وتقدير المدفوعات الشهرية، وتقييم القدرة المالية.	\N	تطبيق حاسبة قروض المنازل
31	Real-Time Property Alerts App	Stay ahead of the market with instant alerts for new property listings, price changes, and exclusive deals tailored to your preferences.	{}	\N	\N	\N	\N	2025-01-04 17:43:08.861	2025-01-04 17:41:12.257	clyhm29ou0000dnteppm9du5n	\N	/works-media/images/brandWork15.webp	\N	\N	كن على اطلاع دائم على السوق مع التنبيهات الفورية لقوائم العقارات الجديدة، وتغيرات الأسعار، والعروض الحصرية المصممة وفقًا لتفضيلاتك.	\N	تطبيق تنبيهات العقارات في الوقت الفعلي
21	Event Poster Design	Designed a bold and eye-catching poster for a large music festival. The design included vibrant colors and dynamic typography to capture the energy of the event. The poster was used for both digital and print media, ensuring widespread visibility and audience engagement.	{}	50	1	trgtr	rgr	2024-07-27 14:23:20.298	2025-01-08 08:26:34.574	clyhm29ou0000dnteppm9du5n	/works/icons/75de8ce8-824a-4a34-922d-7d0d3d9aee9b-basic12.svg	/works-media/images/webWork6.webp	\N	\N	الوصف: تم تصميم ملصق جريء وجذاب لمهرجان موسيقي كبير. تضمنت التصميم ألوانًا حيوية وخطوطًا ديناميكية لتعكس حيوية الحدث. تم استخدام الملصق في الوسائط الرقمية والمطبوعة لضمان رؤية واسعة وتفاعل الجمهور.	\N	ملصق جريء وجذاب لمهرجان 
22	E-Commerce Platform Development	Built a robust and scalable e-commerce platform with a seamless user experience, advanced filtering options, and secure payment integrations. The platform supports thousands of daily transactions and offers personalized shopping recommendations to enhance customer satisfaction.	{}	50	\N	\N	\N	2024-07-28 06:43:50.307	2025-01-08 08:26:34.574	clyhm29ou0000dnteppm9du5n	\N	/works-media/images/webWork7.webp	\N	\N	قمنا بتطوير منصة تجارة إلكترونية قوية وقابلة للتوسع، توفر تجربة مستخدم سلسة مع خيارات تصفية متقدمة ودمج آمن لبوابات الدفع. تدعم المنصة آلاف المعاملات اليومية وتقدم توصيات تسوق مخصصة لتعزيز رضا العملا	\N	تطوير منصة التجارة الإلكترونية
23	Custom Content Management System (CMS)	Developed a custom CMS for a large media company, enabling the team to easily manage and publish articles, videos, and podcasts. The CMS includes a user-friendly interface, advanced analytics, and SEO tools to optimize content visibility across search engines.	{}	50	2	hythyt	tyhyt	2024-08-07 19:13:01.501	2025-01-08 08:26:34.574	clyhm29ou0000dnteppm9du5n	/works/icons/71c7d6c3-4ef2-4fdb-a9cb-3e9df69ed6df-basic10.svg	/works-media/images/webWork8.webp	\N	\N	تم تطوير نظام إدارة محتوى مخصص لشركة إعلامية كبيرة، مما يتيح للفريق إدارة ونشر المقالات والفيديوهات والبودكاست بسهولة. يتضمن النظام واجهة سهلة الاستخدام، وتحليلات متقدمة، وأدوات تحسين محركات البحث لتحسين ظهور المحتوى في محركات البحث.	\N	نظام إدارة محتوى مخصص
\.


--
-- Data for Name: WorkCategory; Type: TABLE DATA; Schema: public; Owner: default
--

COPY public."WorkCategory" ("workId", "categoryId") FROM stdin;
1	57
19	57
21	57
20	57
2	56
18	57
2	57
22	57
23	57
\.


--
-- Data for Name: WorkTag; Type: TABLE DATA; Schema: public; Owner: default
--

COPY public."WorkTag" ("workId", "tagId") FROM stdin;
2	5
2	1
2	6
2	2
19	1
19	4
23	1
18	2
18	5
20	6
\.


--
-- Data for Name: WorkTool; Type: TABLE DATA; Schema: public; Owner: default
--

COPY public."WorkTool" ("workId", "toolId") FROM stdin;
21	5
21	4
23	5
18	5
19	4
19	5
20	12
20	10
23	4
25	1
26	1
27	1
28	1
\.


--
-- Data for Name: _CategoryToClient; Type: TABLE DATA; Schema: public; Owner: default
--

COPY public."_CategoryToClient" ("A", "B") FROM stdin;
50	cm1pno8so0007j28yunxgxl1z
52	cm1pno8so0007j28yunxgxl1z
51	cm1pno8so0007j28yunxgxl1z
57	cm1pno8so0007j28yunxgxl1z
59	cm1pno8so0007j28yunxgxl1z
49	cm1pno8so0007j28yunxgxl1z
58	cm1pno8so0007j28yunxgxl1z
56	cm1pno8so0007j28yunxgxl1z
50	cm1pnmt990006j28y9pnmdr0m
52	cm1pnmt990006j28y9pnmdr0m
51	cm1pnmt990006j28y9pnmdr0m
57	cm1pnmt990006j28y9pnmdr0m
59	cm1pnmt990006j28y9pnmdr0m
49	cm1pnmt990006j28y9pnmdr0m
58	cm1pnmt990006j28y9pnmdr0m
56	cm1pnmt990006j28y9pnmdr0m
50	cm1pnl4ct0005j28ygv4is00y
52	cm1pnl4ct0005j28ygv4is00y
51	cm1pnl4ct0005j28ygv4is00y
57	cm1pnl4ct0005j28ygv4is00y
59	cm1pnl4ct0005j28ygv4is00y
49	cm1pnl4ct0005j28ygv4is00y
58	cm1pnl4ct0005j28ygv4is00y
56	cm1pnl4ct0005j28ygv4is00y
50	cm1pnjrfv0004j28yn5ss6wq9
52	cm1pnjrfv0004j28yn5ss6wq9
51	cm1pnjrfv0004j28yn5ss6wq9
57	cm1pnjrfv0004j28yn5ss6wq9
59	cm1pnjrfv0004j28yn5ss6wq9
49	cm1pnjrfv0004j28yn5ss6wq9
58	cm1pnjrfv0004j28yn5ss6wq9
56	cm1pnjrfv0004j28yn5ss6wq9
50	cm1pneu1s0003j28ypfy56k5j
52	cm1pneu1s0003j28ypfy56k5j
51	cm1pneu1s0003j28ypfy56k5j
57	cm1pneu1s0003j28ypfy56k5j
59	cm1pneu1s0003j28ypfy56k5j
49	cm1pneu1s0003j28ypfy56k5j
58	cm1pneu1s0003j28ypfy56k5j
56	cm1pneu1s0003j28ypfy56k5j
50	cm1pmklqk000031n0obs0yygk
52	cm1pmklqk000031n0obs0yygk
51	cm1pmklqk000031n0obs0yygk
57	cm1pmklqk000031n0obs0yygk
59	cm1pmklqk000031n0obs0yygk
49	cm1pmklqk000031n0obs0yygk
58	cm1pmklqk000031n0obs0yygk
56	cm1pmklqk000031n0obs0yygk
50	cm1pnbv6x0001j28ym07t2kpp
52	cm1pnbv6x0001j28ym07t2kpp
51	cm1pnbv6x0001j28ym07t2kpp
57	cm1pnbv6x0001j28ym07t2kpp
59	cm1pnbv6x0001j28ym07t2kpp
49	cm1pnbv6x0001j28ym07t2kpp
58	cm1pnbv6x0001j28ym07t2kpp
56	cm1pnbv6x0001j28ym07t2kpp
50	cm1pndpxf0002j28y65hlhlo2
52	cm1pndpxf0002j28y65hlhlo2
51	cm1pndpxf0002j28y65hlhlo2
57	cm1pndpxf0002j28y65hlhlo2
59	cm1pndpxf0002j28y65hlhlo2
49	cm1pndpxf0002j28y65hlhlo2
58	cm1pndpxf0002j28y65hlhlo2
56	cm1pndpxf0002j28y65hlhlo2
\.


--
-- Data for Name: _CategoryToIndustry; Type: TABLE DATA; Schema: public; Owner: default
--

COPY public."_CategoryToIndustry" ("A", "B") FROM stdin;
\.


--
-- Data for Name: _CategoryToOrder; Type: TABLE DATA; Schema: public; Owner: default
--

COPY public."_CategoryToOrder" ("A", "B") FROM stdin;
\.


--
-- Data for Name: _CategoryToPhase; Type: TABLE DATA; Schema: public; Owner: default
--

COPY public."_CategoryToPhase" ("A", "B") FROM stdin;
57	20
57	19
57	21
57	22
\.


--
-- Data for Name: _CategoryToProduct; Type: TABLE DATA; Schema: public; Owner: default
--

COPY public."_CategoryToProduct" ("A", "B") FROM stdin;
57	66cc2aa5-2c56-4b1d-8971-6045e491f62e
57	86b2fbe4-be72-4627-ae77-75c8019fb127
57	e8f373ff-ac9b-44fa-88c4-b42a312f33b6
57	ba2a0ea8-6182-4e0c-995a-43e2b80f2110
57	884aa79b-47dc-4c42-b85d-f5ab6b4c5e54
57	cc0ab707-4bc7-4a7d-98d7-c6e3cb2036f1
57	cd8645c9-aeaf-44ee-a813-c57bb0d269cd
57	fdf10067-e726-4ac3-a670-fd169b861ffb
50	0e74b78c-bf3e-4def-98ed-2d578ae643fa
52	0e74b78c-bf3e-4def-98ed-2d578ae643fa
51	0e74b78c-bf3e-4def-98ed-2d578ae643fa
57	0e74b78c-bf3e-4def-98ed-2d578ae643fa
59	0e74b78c-bf3e-4def-98ed-2d578ae643fa
49	0e74b78c-bf3e-4def-98ed-2d578ae643fa
58	0e74b78c-bf3e-4def-98ed-2d578ae643fa
56	0e74b78c-bf3e-4def-98ed-2d578ae643fa
50	4b2c20ee-ff22-40e7-9a86-59e6dccbc31c
52	4b2c20ee-ff22-40e7-9a86-59e6dccbc31c
51	4b2c20ee-ff22-40e7-9a86-59e6dccbc31c
57	4b2c20ee-ff22-40e7-9a86-59e6dccbc31c
59	4b2c20ee-ff22-40e7-9a86-59e6dccbc31c
49	4b2c20ee-ff22-40e7-9a86-59e6dccbc31c
58	4b2c20ee-ff22-40e7-9a86-59e6dccbc31c
56	4b2c20ee-ff22-40e7-9a86-59e6dccbc31c
50	66cc2aa5-2c56-4b1d-8971-6045e491f62e
52	66cc2aa5-2c56-4b1d-8971-6045e491f62e
51	66cc2aa5-2c56-4b1d-8971-6045e491f62e
59	66cc2aa5-2c56-4b1d-8971-6045e491f62e
49	66cc2aa5-2c56-4b1d-8971-6045e491f62e
58	66cc2aa5-2c56-4b1d-8971-6045e491f62e
56	66cc2aa5-2c56-4b1d-8971-6045e491f62e
\.


--
-- Data for Name: _CategoryToProject; Type: TABLE DATA; Schema: public; Owner: default
--

COPY public."_CategoryToProject" ("A", "B") FROM stdin;
\.


--
-- Data for Name: _CategoryToTool; Type: TABLE DATA; Schema: public; Owner: default
--

COPY public."_CategoryToTool" ("A", "B") FROM stdin;
60	2
60	3
60	5
60	9
60	10
60	11
60	12
60	13
61	14
61	15
61	16
61	17
61	18
61	1
61	4
61	6
61	8
62	19
62	20
62	21
62	22
62	23
62	24
\.


--
-- Data for Name: _ClientToService; Type: TABLE DATA; Schema: public; Owner: default
--

COPY public."_ClientToService" ("A", "B") FROM stdin;
cm0xna63x0001xnj9iyxlgyky	50
cm0xnb0yi0003xnj987c7zjoy	50
cm0xnc5kj0005xnj94x46pkvp	50
cm0xnd9bh0007xnj9ojn1s450	50
cm1pnbv6x0001j28ym07t2kpp	50
cm1pndpxf0002j28y65hlhlo2	50
cm1pneu1s0003j28ypfy56k5j	50
cm1pnjrfv0004j28yn5ss6wq9	50
cm1pmklqk000031n0obs0yygk	50
cm0xna63x0001xnj9iyxlgyky	51
cm0xnb0yi0003xnj987c7zjoy	51
cm0xnc5kj0005xnj94x46pkvp	51
cm0xnd9bh0007xnj9ojn1s450	51
cm1pnbv6x0001j28ym07t2kpp	51
cm1pndpxf0002j28y65hlhlo2	51
cm1pneu1s0003j28ypfy56k5j	51
cm1pnjrfv0004j28yn5ss6wq9	51
cm1pmklqk000031n0obs0yygk	51
cm0xna63x0001xnj9iyxlgyky	52
cm0xnb0yi0003xnj987c7zjoy	52
cm0xnc5kj0005xnj94x46pkvp	52
cm0xnd9bh0007xnj9ojn1s450	52
cm1pnbv6x0001j28ym07t2kpp	52
cm1pndpxf0002j28y65hlhlo2	52
cm1pneu1s0003j28ypfy56k5j	52
cm1pnjrfv0004j28yn5ss6wq9	52
cm1pmklqk000031n0obs0yygk	52
cm0xna63x0001xnj9iyxlgyky	53
cm0xnb0yi0003xnj987c7zjoy	53
cm0xnc5kj0005xnj94x46pkvp	53
cm0xnd9bh0007xnj9ojn1s450	53
cm1pnbv6x0001j28ym07t2kpp	53
cm1pndpxf0002j28y65hlhlo2	53
cm1pneu1s0003j28ypfy56k5j	53
cm1pnjrfv0004j28yn5ss6wq9	53
cm1pmklqk000031n0obs0yygk	53
cm0xna63x0001xnj9iyxlgyky	54
cm0xnb0yi0003xnj987c7zjoy	54
cm0xnc5kj0005xnj94x46pkvp	54
cm0xnd9bh0007xnj9ojn1s450	54
cm1pnbv6x0001j28ym07t2kpp	54
cm1pndpxf0002j28y65hlhlo2	54
cm1pneu1s0003j28ypfy56k5j	54
cm1pnjrfv0004j28yn5ss6wq9	54
cm1pmklqk000031n0obs0yygk	54
cm0xna63x0001xnj9iyxlgyky	55
cm0xnb0yi0003xnj987c7zjoy	55
cm0xnc5kj0005xnj94x46pkvp	55
cm0xnd9bh0007xnj9ojn1s450	55
cm1pnbv6x0001j28ym07t2kpp	55
cm1pndpxf0002j28y65hlhlo2	55
cm1pneu1s0003j28ypfy56k5j	55
cm1pnjrfv0004j28yn5ss6wq9	55
cm1pmklqk000031n0obs0yygk	55
cm0xna63x0001xnj9iyxlgyky	56
cm0xnb0yi0003xnj987c7zjoy	56
cm0xnc5kj0005xnj94x46pkvp	56
cm0xnd9bh0007xnj9ojn1s450	56
cm1pnbv6x0001j28ym07t2kpp	56
cm1pndpxf0002j28y65hlhlo2	56
cm1pneu1s0003j28ypfy56k5j	56
cm1pnjrfv0004j28yn5ss6wq9	56
cm1pmklqk000031n0obs0yygk	56
cm0xna63x0001xnj9iyxlgyky	57
cm0xnb0yi0003xnj987c7zjoy	57
cm0xnc5kj0005xnj94x46pkvp	57
cm0xnd9bh0007xnj9ojn1s450	57
cm1pnbv6x0001j28ym07t2kpp	57
cm1pndpxf0002j28y65hlhlo2	57
cm1pneu1s0003j28ypfy56k5j	57
cm1pnjrfv0004j28yn5ss6wq9	57
cm1pmklqk000031n0obs0yygk	57
cm0xna63x0001xnj9iyxlgyky	58
cm0xnb0yi0003xnj987c7zjoy	58
cm0xnc5kj0005xnj94x46pkvp	58
cm0xnd9bh0007xnj9ojn1s450	58
cm1pnbv6x0001j28ym07t2kpp	58
cm1pndpxf0002j28y65hlhlo2	58
cm1pneu1s0003j28ypfy56k5j	58
cm1pnjrfv0004j28yn5ss6wq9	58
cm1pmklqk000031n0obs0yygk	58
cm0xna63x0001xnj9iyxlgyky	59
cm0xnb0yi0003xnj987c7zjoy	59
cm0xnc5kj0005xnj94x46pkvp	59
cm0xnd9bh0007xnj9ojn1s450	59
cm1pnbv6x0001j28ym07t2kpp	59
cm1pndpxf0002j28y65hlhlo2	59
cm1pneu1s0003j28ypfy56k5j	59
cm1pnjrfv0004j28yn5ss6wq9	59
cm1pmklqk000031n0obs0yygk	59
cm0xna63x0001xnj9iyxlgyky	60
cm0xnb0yi0003xnj987c7zjoy	60
cm0xnc5kj0005xnj94x46pkvp	60
cm0xnd9bh0007xnj9ojn1s450	60
cm1pnbv6x0001j28ym07t2kpp	60
cm1pndpxf0002j28y65hlhlo2	60
cm1pneu1s0003j28ypfy56k5j	60
cm1pnjrfv0004j28yn5ss6wq9	60
cm1pmklqk000031n0obs0yygk	60
cm0xna63x0001xnj9iyxlgyky	61
cm0xnb0yi0003xnj987c7zjoy	61
cm0xnc5kj0005xnj94x46pkvp	61
cm0xnd9bh0007xnj9ojn1s450	61
cm1pnbv6x0001j28ym07t2kpp	61
cm1pndpxf0002j28y65hlhlo2	61
cm1pneu1s0003j28ypfy56k5j	61
cm1pnjrfv0004j28yn5ss6wq9	61
cm1pmklqk000031n0obs0yygk	61
\.


--
-- Data for Name: _ClientToWork; Type: TABLE DATA; Schema: public; Owner: default
--

COPY public."_ClientToWork" ("A", "B") FROM stdin;
\.


--
-- Data for Name: _IndustryToPost; Type: TABLE DATA; Schema: public; Owner: default
--

COPY public."_IndustryToPost" ("A", "B") FROM stdin;
\.


--
-- Data for Name: _IndustryToService; Type: TABLE DATA; Schema: public; Owner: default
--

COPY public."_IndustryToService" ("A", "B") FROM stdin;
5	50
3	50
4	50
7	50
6	50
2	50
1	50
8	50
5	51
3	51
4	51
7	51
6	51
2	51
1	51
8	51
5	52
3	52
4	52
7	52
6	52
2	52
1	52
8	52
5	53
3	53
4	53
7	53
6	53
2	53
1	53
8	53
5	54
3	54
4	54
7	54
6	54
2	54
1	54
8	54
5	55
3	55
4	55
7	55
6	55
2	55
1	55
8	55
5	56
3	56
4	56
7	56
6	56
2	56
1	56
8	56
5	57
3	57
4	57
7	57
6	57
2	57
1	57
8	57
5	58
4	58
7	58
6	58
2	58
1	58
8	58
5	59
3	59
4	59
7	59
6	59
2	59
1	59
8	59
\.


--
-- Data for Name: _IndustryToWork; Type: TABLE DATA; Schema: public; Owner: default
--

COPY public."_IndustryToWork" ("A", "B") FROM stdin;
1	1
1	2
1	18
1	19
2	20
2	22
2	23
2	21
3	18
3	19
3	22
3	23
4	1
4	20
4	22
4	23
6	18
6	19
6	20
6	22
4	24
3	24
2	24
1	24
5	27
5	26
5	25
5	24
5	28
5	29
5	30
5	31
\.


--
-- Data for Name: _LocationToOffer; Type: TABLE DATA; Schema: public; Owner: default
--

COPY public."_LocationToOffer" ("A", "B") FROM stdin;
2	137fe2fd-7d92-4a90-a156-6cc4dfd4162f
3	137fe2fd-7d92-4a90-a156-6cc4dfd4162f
2	576adf57-34ae-45a4-a445-059fd2f8e996
3	576adf57-34ae-45a4-a445-059fd2f8e996
1	576adf57-34ae-45a4-a445-059fd2f8e996
2	d0dda690-2901-465c-9ce1-b2aa08b2665a
3	d0dda690-2901-465c-9ce1-b2aa08b2665a
4	d0dda690-2901-465c-9ce1-b2aa08b2665a
1	d0dda690-2901-465c-9ce1-b2aa08b2665a
2	e68474fb-c0e6-4966-90bd-d380d843a96b
3	e68474fb-c0e6-4966-90bd-d380d843a96b
1	e68474fb-c0e6-4966-90bd-d380d843a96b
\.


--
-- Data for Name: _LocationToProduct; Type: TABLE DATA; Schema: public; Owner: default
--

COPY public."_LocationToProduct" ("A", "B") FROM stdin;
1	0e74b78c-bf3e-4def-98ed-2d578ae643fa
1	4b2c20ee-ff22-40e7-9a86-59e6dccbc31c
1	66cc2aa5-2c56-4b1d-8971-6045e491f62e
1	86b2fbe4-be72-4627-ae77-75c8019fb127
1	ba2a0ea8-6182-4e0c-995a-43e2b80f2110
1	884aa79b-47dc-4c42-b85d-f5ab6b4c5e54
1	cc0ab707-4bc7-4a7d-98d7-c6e3cb2036f1
1	cd8645c9-aeaf-44ee-a813-c57bb0d269cd
2	0e74b78c-bf3e-4def-98ed-2d578ae643fa
2	4b2c20ee-ff22-40e7-9a86-59e6dccbc31c
2	66cc2aa5-2c56-4b1d-8971-6045e491f62e
2	86b2fbe4-be72-4627-ae77-75c8019fb127
2	ba2a0ea8-6182-4e0c-995a-43e2b80f2110
2	884aa79b-47dc-4c42-b85d-f5ab6b4c5e54
2	cc0ab707-4bc7-4a7d-98d7-c6e3cb2036f1
2	cd8645c9-aeaf-44ee-a813-c57bb0d269cd
3	0e74b78c-bf3e-4def-98ed-2d578ae643fa
3	4b2c20ee-ff22-40e7-9a86-59e6dccbc31c
3	66cc2aa5-2c56-4b1d-8971-6045e491f62e
3	86b2fbe4-be72-4627-ae77-75c8019fb127
3	ba2a0ea8-6182-4e0c-995a-43e2b80f2110
3	884aa79b-47dc-4c42-b85d-f5ab6b4c5e54
3	cc0ab707-4bc7-4a7d-98d7-c6e3cb2036f1
3	cd8645c9-aeaf-44ee-a813-c57bb0d269cd
4	0e74b78c-bf3e-4def-98ed-2d578ae643fa
4	4b2c20ee-ff22-40e7-9a86-59e6dccbc31c
4	66cc2aa5-2c56-4b1d-8971-6045e491f62e
4	86b2fbe4-be72-4627-ae77-75c8019fb127
4	ba2a0ea8-6182-4e0c-995a-43e2b80f2110
4	884aa79b-47dc-4c42-b85d-f5ab6b4c5e54
4	cc0ab707-4bc7-4a7d-98d7-c6e3cb2036f1
4	cd8645c9-aeaf-44ee-a813-c57bb0d269cd
\.


--
-- Data for Name: _LocationToService; Type: TABLE DATA; Schema: public; Owner: default
--

COPY public."_LocationToService" ("A", "B") FROM stdin;
1	50
1	51
1	52
1	53
1	54
1	55
1	56
1	57
1	58
1	59
1	60
1	61
\.


--
-- Data for Name: _OfferToService; Type: TABLE DATA; Schema: public; Owner: default
--

COPY public."_OfferToService" ("A", "B") FROM stdin;
137fe2fd-7d92-4a90-a156-6cc4dfd4162f	52
137fe2fd-7d92-4a90-a156-6cc4dfd4162f	57
576adf57-34ae-45a4-a445-059fd2f8e996	52
576adf57-34ae-45a4-a445-059fd2f8e996	57
576adf57-34ae-45a4-a445-059fd2f8e996	59
576adf57-34ae-45a4-a445-059fd2f8e996	61
576adf57-34ae-45a4-a445-059fd2f8e996	53
576adf57-34ae-45a4-a445-059fd2f8e996	50
576adf57-34ae-45a4-a445-059fd2f8e996	56
576adf57-34ae-45a4-a445-059fd2f8e996	54
576adf57-34ae-45a4-a445-059fd2f8e996	55
576adf57-34ae-45a4-a445-059fd2f8e996	63
576adf57-34ae-45a4-a445-059fd2f8e996	64
576adf57-34ae-45a4-a445-059fd2f8e996	65
576adf57-34ae-45a4-a445-059fd2f8e996	66
576adf57-34ae-45a4-a445-059fd2f8e996	67
576adf57-34ae-45a4-a445-059fd2f8e996	60
576adf57-34ae-45a4-a445-059fd2f8e996	51
576adf57-34ae-45a4-a445-059fd2f8e996	58
137fe2fd-7d92-4a90-a156-6cc4dfd4162f	59
137fe2fd-7d92-4a90-a156-6cc4dfd4162f	61
137fe2fd-7d92-4a90-a156-6cc4dfd4162f	53
137fe2fd-7d92-4a90-a156-6cc4dfd4162f	50
137fe2fd-7d92-4a90-a156-6cc4dfd4162f	56
137fe2fd-7d92-4a90-a156-6cc4dfd4162f	54
137fe2fd-7d92-4a90-a156-6cc4dfd4162f	55
137fe2fd-7d92-4a90-a156-6cc4dfd4162f	63
137fe2fd-7d92-4a90-a156-6cc4dfd4162f	64
137fe2fd-7d92-4a90-a156-6cc4dfd4162f	65
137fe2fd-7d92-4a90-a156-6cc4dfd4162f	66
137fe2fd-7d92-4a90-a156-6cc4dfd4162f	67
137fe2fd-7d92-4a90-a156-6cc4dfd4162f	60
137fe2fd-7d92-4a90-a156-6cc4dfd4162f	51
137fe2fd-7d92-4a90-a156-6cc4dfd4162f	58
d0dda690-2901-465c-9ce1-b2aa08b2665a	52
d0dda690-2901-465c-9ce1-b2aa08b2665a	57
d0dda690-2901-465c-9ce1-b2aa08b2665a	53
d0dda690-2901-465c-9ce1-b2aa08b2665a	50
d0dda690-2901-465c-9ce1-b2aa08b2665a	56
d0dda690-2901-465c-9ce1-b2aa08b2665a	54
d0dda690-2901-465c-9ce1-b2aa08b2665a	55
d0dda690-2901-465c-9ce1-b2aa08b2665a	51
d0dda690-2901-465c-9ce1-b2aa08b2665a	58
e68474fb-c0e6-4966-90bd-d380d843a96b	52
e68474fb-c0e6-4966-90bd-d380d843a96b	57
e68474fb-c0e6-4966-90bd-d380d843a96b	59
e68474fb-c0e6-4966-90bd-d380d843a96b	61
e68474fb-c0e6-4966-90bd-d380d843a96b	53
e68474fb-c0e6-4966-90bd-d380d843a96b	50
e68474fb-c0e6-4966-90bd-d380d843a96b	56
e68474fb-c0e6-4966-90bd-d380d843a96b	54
e68474fb-c0e6-4966-90bd-d380d843a96b	55
e68474fb-c0e6-4966-90bd-d380d843a96b	63
e68474fb-c0e6-4966-90bd-d380d843a96b	64
e68474fb-c0e6-4966-90bd-d380d843a96b	65
e68474fb-c0e6-4966-90bd-d380d843a96b	66
e68474fb-c0e6-4966-90bd-d380d843a96b	67
e68474fb-c0e6-4966-90bd-d380d843a96b	60
e68474fb-c0e6-4966-90bd-d380d843a96b	51
e68474fb-c0e6-4966-90bd-d380d843a96b	58
\.


--
-- Data for Name: _PackageToPlanCategory; Type: TABLE DATA; Schema: public; Owner: default
--

COPY public."_PackageToPlanCategory" ("A", "B") FROM stdin;
1	6
2	6
3	6
\.


--
-- Data for Name: _PackageToService; Type: TABLE DATA; Schema: public; Owner: default
--

COPY public."_PackageToService" ("A", "B") FROM stdin;
1	50
3	50
2	50
\.


--
-- Data for Name: _PermissionToRole; Type: TABLE DATA; Schema: public; Owner: default
--

COPY public."_PermissionToRole" ("A", "B") FROM stdin;
\.


--
-- Data for Name: _PhaseToService; Type: TABLE DATA; Schema: public; Owner: default
--

COPY public."_PhaseToService" ("A", "B") FROM stdin;
20	50
19	50
21	50
22	50
20	59
19	59
21	59
22	59
20	58
19	58
21	58
22	58
20	60
19	60
21	60
22	60
20	61
19	61
21	61
22	61
20	57
19	57
21	57
22	57
20	56
19	56
21	56
22	56
20	55
19	55
21	55
22	55
20	54
19	54
21	54
22	54
20	53
19	53
21	53
22	53
20	52
19	52
21	52
22	52
20	51
19	51
21	51
22	51
\.


--
-- Data for Name: _PlanToPlanCategory; Type: TABLE DATA; Schema: public; Owner: default
--

COPY public."_PlanToPlanCategory" ("A", "B") FROM stdin;
2	6
2	7
3	6
3	7
4	6
4	7
\.


--
-- Data for Name: _PlanToService; Type: TABLE DATA; Schema: public; Owner: default
--

COPY public."_PlanToService" ("A", "B") FROM stdin;
2	52
2	57
2	50
2	53
2	51
2	54
3	57
3	50
3	51
3	56
3	58
4	57
4	51
4	58
4	50
\.


--
-- Data for Name: _PostToPostCategory; Type: TABLE DATA; Schema: public; Owner: default
--

COPY public."_PostToPostCategory" ("A", "B") FROM stdin;
cm1i4200s0000nm8l52rtx6dj	1
cm1i4200s0000nm8l52rtx6dj	2
cm1i497e40001nm8lj1xxz1bs	2
cm2pcjj9s000283crp2r75b1o	3
cm2nkgik500004ntzxti65u47	3
cm2ngk4d10000xbjrdhubrcgs	3
cm2pcfmzy000183crniqtj204	1
cm2pc8n1l000083crfg95bqug	2
cm2pcmgsm000383crckbadgmc	1
\.


--
-- Data for Name: _PostToTool; Type: TABLE DATA; Schema: public; Owner: default
--

COPY public."_PostToTool" ("A", "B") FROM stdin;
cm2ngk4d10000xbjrdhubrcgs	1
cm1i4200s0000nm8l52rtx6dj	1
cm1i497e40001nm8lj1xxz1bs	1
cm2nkgik500004ntzxti65u47	1
\.


--
-- Data for Name: _ProductToService; Type: TABLE DATA; Schema: public; Owner: default
--

COPY public."_ProductToService" ("A", "B") FROM stdin;
0e74b78c-bf3e-4def-98ed-2d578ae643fa	50
4b2c20ee-ff22-40e7-9a86-59e6dccbc31c	50
66cc2aa5-2c56-4b1d-8971-6045e491f62e	50
86b2fbe4-be72-4627-ae77-75c8019fb127	50
e8f373ff-ac9b-44fa-88c4-b42a312f33b6	50
ba2a0ea8-6182-4e0c-995a-43e2b80f2110	50
884aa79b-47dc-4c42-b85d-f5ab6b4c5e54	50
cc0ab707-4bc7-4a7d-98d7-c6e3cb2036f1	50
cd8645c9-aeaf-44ee-a813-c57bb0d269cd	50
fdf10067-e726-4ac3-a670-fd169b861ffb	50
0e74b78c-bf3e-4def-98ed-2d578ae643fa	51
4b2c20ee-ff22-40e7-9a86-59e6dccbc31c	51
66cc2aa5-2c56-4b1d-8971-6045e491f62e	51
86b2fbe4-be72-4627-ae77-75c8019fb127	51
e8f373ff-ac9b-44fa-88c4-b42a312f33b6	51
ba2a0ea8-6182-4e0c-995a-43e2b80f2110	51
884aa79b-47dc-4c42-b85d-f5ab6b4c5e54	51
cc0ab707-4bc7-4a7d-98d7-c6e3cb2036f1	51
cd8645c9-aeaf-44ee-a813-c57bb0d269cd	51
fdf10067-e726-4ac3-a670-fd169b861ffb	51
0e74b78c-bf3e-4def-98ed-2d578ae643fa	52
4b2c20ee-ff22-40e7-9a86-59e6dccbc31c	52
66cc2aa5-2c56-4b1d-8971-6045e491f62e	52
86b2fbe4-be72-4627-ae77-75c8019fb127	52
e8f373ff-ac9b-44fa-88c4-b42a312f33b6	52
ba2a0ea8-6182-4e0c-995a-43e2b80f2110	52
884aa79b-47dc-4c42-b85d-f5ab6b4c5e54	52
cc0ab707-4bc7-4a7d-98d7-c6e3cb2036f1	52
cd8645c9-aeaf-44ee-a813-c57bb0d269cd	52
fdf10067-e726-4ac3-a670-fd169b861ffb	52
0e74b78c-bf3e-4def-98ed-2d578ae643fa	53
4b2c20ee-ff22-40e7-9a86-59e6dccbc31c	53
66cc2aa5-2c56-4b1d-8971-6045e491f62e	53
86b2fbe4-be72-4627-ae77-75c8019fb127	53
e8f373ff-ac9b-44fa-88c4-b42a312f33b6	53
ba2a0ea8-6182-4e0c-995a-43e2b80f2110	53
884aa79b-47dc-4c42-b85d-f5ab6b4c5e54	53
cc0ab707-4bc7-4a7d-98d7-c6e3cb2036f1	53
cd8645c9-aeaf-44ee-a813-c57bb0d269cd	53
fdf10067-e726-4ac3-a670-fd169b861ffb	53
0e74b78c-bf3e-4def-98ed-2d578ae643fa	54
4b2c20ee-ff22-40e7-9a86-59e6dccbc31c	54
66cc2aa5-2c56-4b1d-8971-6045e491f62e	54
86b2fbe4-be72-4627-ae77-75c8019fb127	54
e8f373ff-ac9b-44fa-88c4-b42a312f33b6	54
ba2a0ea8-6182-4e0c-995a-43e2b80f2110	54
884aa79b-47dc-4c42-b85d-f5ab6b4c5e54	54
cc0ab707-4bc7-4a7d-98d7-c6e3cb2036f1	54
cd8645c9-aeaf-44ee-a813-c57bb0d269cd	54
fdf10067-e726-4ac3-a670-fd169b861ffb	54
0e74b78c-bf3e-4def-98ed-2d578ae643fa	55
4b2c20ee-ff22-40e7-9a86-59e6dccbc31c	55
66cc2aa5-2c56-4b1d-8971-6045e491f62e	55
86b2fbe4-be72-4627-ae77-75c8019fb127	55
e8f373ff-ac9b-44fa-88c4-b42a312f33b6	55
ba2a0ea8-6182-4e0c-995a-43e2b80f2110	55
884aa79b-47dc-4c42-b85d-f5ab6b4c5e54	55
cc0ab707-4bc7-4a7d-98d7-c6e3cb2036f1	55
cd8645c9-aeaf-44ee-a813-c57bb0d269cd	55
fdf10067-e726-4ac3-a670-fd169b861ffb	55
0e74b78c-bf3e-4def-98ed-2d578ae643fa	56
4b2c20ee-ff22-40e7-9a86-59e6dccbc31c	56
66cc2aa5-2c56-4b1d-8971-6045e491f62e	56
86b2fbe4-be72-4627-ae77-75c8019fb127	56
e8f373ff-ac9b-44fa-88c4-b42a312f33b6	56
ba2a0ea8-6182-4e0c-995a-43e2b80f2110	56
884aa79b-47dc-4c42-b85d-f5ab6b4c5e54	56
cc0ab707-4bc7-4a7d-98d7-c6e3cb2036f1	56
cd8645c9-aeaf-44ee-a813-c57bb0d269cd	56
fdf10067-e726-4ac3-a670-fd169b861ffb	56
0e74b78c-bf3e-4def-98ed-2d578ae643fa	57
4b2c20ee-ff22-40e7-9a86-59e6dccbc31c	57
66cc2aa5-2c56-4b1d-8971-6045e491f62e	57
86b2fbe4-be72-4627-ae77-75c8019fb127	57
e8f373ff-ac9b-44fa-88c4-b42a312f33b6	57
ba2a0ea8-6182-4e0c-995a-43e2b80f2110	57
884aa79b-47dc-4c42-b85d-f5ab6b4c5e54	57
cc0ab707-4bc7-4a7d-98d7-c6e3cb2036f1	57
cd8645c9-aeaf-44ee-a813-c57bb0d269cd	57
fdf10067-e726-4ac3-a670-fd169b861ffb	57
0e74b78c-bf3e-4def-98ed-2d578ae643fa	58
4b2c20ee-ff22-40e7-9a86-59e6dccbc31c	58
66cc2aa5-2c56-4b1d-8971-6045e491f62e	58
86b2fbe4-be72-4627-ae77-75c8019fb127	58
e8f373ff-ac9b-44fa-88c4-b42a312f33b6	58
ba2a0ea8-6182-4e0c-995a-43e2b80f2110	58
884aa79b-47dc-4c42-b85d-f5ab6b4c5e54	58
cc0ab707-4bc7-4a7d-98d7-c6e3cb2036f1	58
cd8645c9-aeaf-44ee-a813-c57bb0d269cd	58
fdf10067-e726-4ac3-a670-fd169b861ffb	58
0e74b78c-bf3e-4def-98ed-2d578ae643fa	59
4b2c20ee-ff22-40e7-9a86-59e6dccbc31c	59
66cc2aa5-2c56-4b1d-8971-6045e491f62e	59
86b2fbe4-be72-4627-ae77-75c8019fb127	59
e8f373ff-ac9b-44fa-88c4-b42a312f33b6	59
ba2a0ea8-6182-4e0c-995a-43e2b80f2110	59
884aa79b-47dc-4c42-b85d-f5ab6b4c5e54	59
cc0ab707-4bc7-4a7d-98d7-c6e3cb2036f1	59
cd8645c9-aeaf-44ee-a813-c57bb0d269cd	59
fdf10067-e726-4ac3-a670-fd169b861ffb	59
0e74b78c-bf3e-4def-98ed-2d578ae643fa	60
4b2c20ee-ff22-40e7-9a86-59e6dccbc31c	60
66cc2aa5-2c56-4b1d-8971-6045e491f62e	60
86b2fbe4-be72-4627-ae77-75c8019fb127	60
e8f373ff-ac9b-44fa-88c4-b42a312f33b6	60
ba2a0ea8-6182-4e0c-995a-43e2b80f2110	60
884aa79b-47dc-4c42-b85d-f5ab6b4c5e54	60
cc0ab707-4bc7-4a7d-98d7-c6e3cb2036f1	60
cd8645c9-aeaf-44ee-a813-c57bb0d269cd	60
fdf10067-e726-4ac3-a670-fd169b861ffb	60
0e74b78c-bf3e-4def-98ed-2d578ae643fa	61
4b2c20ee-ff22-40e7-9a86-59e6dccbc31c	61
66cc2aa5-2c56-4b1d-8971-6045e491f62e	61
86b2fbe4-be72-4627-ae77-75c8019fb127	61
e8f373ff-ac9b-44fa-88c4-b42a312f33b6	61
ba2a0ea8-6182-4e0c-995a-43e2b80f2110	61
884aa79b-47dc-4c42-b85d-f5ab6b4c5e54	61
cc0ab707-4bc7-4a7d-98d7-c6e3cb2036f1	61
cd8645c9-aeaf-44ee-a813-c57bb0d269cd	61
fdf10067-e726-4ac3-a670-fd169b861ffb	61
\.


--
-- Data for Name: _ProductToTag; Type: TABLE DATA; Schema: public; Owner: default
--

COPY public."_ProductToTag" ("A", "B") FROM stdin;
cc0ab707-4bc7-4a7d-98d7-c6e3cb2036f1	6
cc0ab707-4bc7-4a7d-98d7-c6e3cb2036f1	7
\.


--
-- Data for Name: _ProjectToTool; Type: TABLE DATA; Schema: public; Owner: default
--

COPY public."_ProjectToTool" ("A", "B") FROM stdin;
cm0buc0wm000131r1khep012q	17
cm0dk4ntb0007yqubdjyu77po	8
cm0dk4ntb0007yqubdjyu77po	10
cm0l6e16y0001k71mgu08zugv	6
cm0l6e16y0001k71mgu08zugv	8
cm0l6e16y0001k71mgu08zugv	9
cm0l6e16y0001k71mgu08zugv	10
\.


--
-- Data for Name: _RoleToUser; Type: TABLE DATA; Schema: public; Owner: default
--

COPY public."_RoleToUser" ("A", "B") FROM stdin;
\.


--
-- Data for Name: _ServiceToServiceFeature; Type: TABLE DATA; Schema: public; Owner: default
--

COPY public."_ServiceToServiceFeature" ("A", "B") FROM stdin;
50	1
50	2
50	3
50	4
\.


--
-- Data for Name: _TaskToUser; Type: TABLE DATA; Schema: public; Owner: default
--

COPY public."_TaskToUser" ("A", "B") FROM stdin;
\.


--
-- Data for Name: _prisma_migrations; Type: TABLE DATA; Schema: public; Owner: default
--

COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
64bfec51-087c-48e2-95ee-5a5082d818a5	72cf7107387bf6e9b35e7db4d252d6375427923307970de75e7c537954a53934	2024-08-09 14:10:15.51449+00	20240809141014_after_added_works10	\N	\N	2024-08-09 14:10:15.087118+00	1
29036430-6ae6-454d-948b-b14680b44b93	439e6a3a2c18cbb62bc3ee87600a8cf2dad61c4c7434b23e8f709b7e9ef02938	2024-07-11 17:44:11.205689+00	20240711110757_init	\N	\N	2024-07-11 17:44:10.938218+00	1
b3501b11-f1e8-4d2d-a6bf-3459d7119384	3b7f74a3cf8d1b5726599d5dfaf03b8f20b82222e76f53d501faba2d4044a3b0	2024-07-11 17:44:38.97433+00	20240711174438_category_added	\N	\N	2024-07-11 17:44:38.694973+00	1
85c84d49-e1a2-440c-b4ac-690d772fcd07	17411eb7b9a3ba02bd2cae592a558281fc22a1b7df6f96c4923bde1aea90dfa6	2024-07-12 15:49:11.75411+00	20240712154911_dbupdated	\N	\N	2024-07-12 15:49:11.410681+00	1
f1b19620-698e-4fee-9641-dc36cf67b184	1ab029e7051e68606e4ebc2e357b4459b0928c3d5d882f6e813220fb51cb2d9d	2024-08-09 19:33:23.742125+00	20240809193323_after_added_works11	\N	\N	2024-08-09 19:33:23.390898+00	1
39654f45-89f9-4747-b6cd-c523abaf0bd7	e17a97d2b90381381a512109608bd4062accc759fc042f1135013187d8261bad	2024-07-12 18:10:09.988166+00	20240712181009_work_added	\N	\N	2024-07-12 18:10:09.633099+00	1
092552cd-c510-4069-b913-42081d5629f4	6e9234b2dfcd5ea138b65af318bc2d931c1fc5860b6161e79106567cf0e8dd36	2024-07-27 09:48:22.535328+00	20240727094821_after_added_works	\N	\N	2024-07-27 09:48:22.119982+00	1
2af91aaf-9c2e-4851-8174-3dd0378b7e14	9f88740c3a4301067f97fb20d4d03360c39a0a40c9a5221ca10c129cc5f5a047	2024-09-02 06:44:45.123364+00	20240902064444_after_added_works28	\N	\N	2024-09-02 06:44:44.828335+00	1
c03ec0b7-7298-4c36-82be-54fb8214b63b	3e0ba2cf18fb8d3b67587bc68707c7426041c27b7ec3a079cb939f3cc48d3ec1	2024-07-27 10:00:27.918343+00	20240727100027_after_added_works1	\N	\N	2024-07-27 10:00:27.682901+00	1
3a923c82-3b7b-426f-8170-3ac3a0aa20e4	626a3d8a85e2ecf2a1566ba60339ce1983063b0a1f23f3f831976fa07d981c52	2024-08-09 20:22:59.220243+00	20240809202258_after_added_works12	\N	\N	2024-08-09 20:22:58.903066+00	1
14170825-85e0-437f-917b-ed373aadbe2e	0ea0d0e2f04b013cc0987326b5eb32cb3c0610291404766a0f2dcad2bee2b1a5	2024-07-27 10:11:31.331739+00	20240727101130_after_added_works2	\N	\N	2024-07-27 10:11:31.009389+00	1
4b906d83-604b-408e-8983-09889592b211	f203d8bf14881979b1b820d748998abbf224d10471d96de379c607036d51366d	2024-07-28 12:51:37.830162+00	20240728125137_after_added_works4	\N	\N	2024-07-28 12:51:37.503204+00	1
0f6b0a74-6ad4-42a8-a508-9846556ee8e0	02277295bf3d2fc717eee9b102b86076d636388f2eb1450ff1796210b601d13c	2024-08-26 01:52:37.729504+00	20240826015237_after_added_works20	\N	\N	2024-08-26 01:52:37.466839+00	1
d00ee871-64ab-4494-bb21-5540ef7dbe80	6ab7ba5dc56b5ff8e9cca251e23d4f62939f650f154a4db4c780ffc95c1e59a1	2024-07-28 13:36:34.746008+00	20240728133634_after_added_works5	\N	\N	2024-07-28 13:36:34.422662+00	1
c5f97a4c-19d4-49af-b3a5-143255c48ec0	9dc9ba4f17b45c71fe0e3e1543481f43f170181c5a4cf81bd904707e39283de6	2024-08-10 15:41:23.698109+00	20240810154123_after_added_works13	\N	\N	2024-08-10 15:41:23.475039+00	1
8d3bbe26-59dc-4154-81b9-3ee7aab71669	97de8e58d6e589b3756afff5bb704e20a838f128a94f1a532c1c7f5669225aea	2024-07-29 04:33:09.838222+00	20240729043309_after_added_works6	\N	\N	2024-07-29 04:33:09.528309+00	1
4750571b-7c39-4dcf-914d-841b6c4782a8	c65ba9324847605a97553deae4943057b1aaacaeeff91f67387b90cc9f35ee01	2024-07-31 10:06:50.993719+00	20240731100650_after_added_works7	\N	\N	2024-07-31 10:06:50.661905+00	1
0dc5c81b-bae6-4fe5-9ecd-c07f3d37c59b	1c35f10924752c625cd4cb410e978e9ddd0ae2d485647b23459ce719a4082298	2024-08-01 08:09:08.242539+00	20240801080907_after_added_works8	\N	\N	2024-08-01 08:09:07.995795+00	1
12042cdc-4cd4-42a7-9f58-1ab1de6dc56a	77dba8cad6aac182719356fdf80eca845d5bce7e14c7c8179498f59e85113434	2024-08-14 16:30:13.451671+00	20240814163012_after_added_works14	\N	\N	2024-08-14 16:30:13.036532+00	1
d43e61c5-092c-4361-a01b-2bf566321991	a27baa2a5c8c264e1b83e849f441e54f69e1b42c9be756e28481a3347cf628ea	2024-08-09 12:49:06.591415+00	20240809124905_after_added_works9	\N	\N	2024-08-09 12:49:06.272653+00	1
915a034f-edc0-409c-9511-7f8b2b701c01	791cb5d0b0b79bc3408ebbbb04ae11967b014bd7a98eee531279569b8aa41b26	2024-09-01 06:38:52.751013+00	20240901063851_after_added_works25	\N	\N	2024-09-01 06:38:52.343799+00	1
62fa51b5-0aec-476c-afc0-72d8ba70ac36	77bd5fc4c31f65944dfc450b6c30aef5b6b617b3b39201f7d8c53c5829bf9fe6	2024-08-26 01:55:22.842612+00	20240826015521_after_added_works21	\N	\N	2024-08-26 01:55:22.204297+00	1
6f89aca4-178e-410d-82c1-39b8ca023c48	b948da4616be82e9f12322cd16fef3458155b3bb3a0b6401e5d89fc1fe115470	2024-08-14 18:21:54.811022+00	20240814182154_after_added_works15	\N	\N	2024-08-14 18:21:54.567932+00	1
829b23c2-269d-4bf7-82c3-87050045c55f	0485be0e5738d78917b5aca831a7c9e58c907baea5d2ea6c19924bde2760f40b	2024-08-15 14:31:45.522772+00	20240815143144_after_added_works16	\N	\N	2024-08-15 14:31:45.059166+00	1
fbd7d487-dc98-4241-81e7-b0e36cb15ae9	6edef625a3e9b9ed1329677bf8e5a14e9218924e80441aacfab1a88612ec5807	2024-08-19 17:51:54.367643+00	20240819175153_after_added_works17	\N	\N	2024-08-19 17:51:54.041076+00	1
0b84bfcd-aecb-47b2-a5e0-37f13dce0c5e	d7c78bee22a0a9b1592eef354545bc3c8cfec3b82324516709ac8b1821e383c3	2024-08-26 03:53:35.845186+00	20240826035335_after_added_works22	\N	\N	2024-08-26 03:53:35.593701+00	1
26ecfbb0-6931-48a2-a0a9-fc8e9054cf1e	99ac66fe4d3515258bfcf82064cc238b15535d9d0a614f0d5ed8c3c86da271d5	2024-08-26 01:23:53.355799+00	20240826012352_after_added_works19	\N	\N	2024-08-26 01:23:53.093088+00	1
5a801caa-1f0d-4cf9-969c-6f42daecbcec	99a015171fb69ef76e493b6d5a286aa7252b24b84ca6278955b06b8e95d5ec30	2024-08-27 04:00:39.29323+00	20240827040038_after_added_works23	\N	\N	2024-08-27 04:00:39.074273+00	1
05c57f0d-8785-497b-8660-009b68525f8d	2df0f0436c6a6a4d42f3a0532078e56ff34cd8842108f1946a221eac76ae9655	2024-09-01 06:58:13.456285+00	20240901065812_after_added_works26	\N	\N	2024-09-01 06:58:13.149948+00	1
f0771fb1-9dad-4742-a6b4-dd3f55761604	ef8172275fd735824f4327c1cd463acaa373bd356a70cadcb4e3eb9936d9018f	2024-08-27 07:14:59.955613+00	20240827071459_after_added_works24	\N	\N	2024-08-27 07:14:59.665532+00	1
9db60406-c3d9-4b13-b8b5-4b2749acbf2c	324f96068a1ce314cd2a843c7b387ad9e308fa788667f48e03da04bbeb3e37af	2024-09-01 13:03:26.401633+00	20240901130325_after_added_works27	\N	\N	2024-09-01 13:03:26.06259+00	1
be3616be-0946-41ac-98f1-bf5799ef4f26	720a50530a48cf4c05fd37dd40c937acea9f650859a12613a6e1d191f577c0a9	2024-09-05 17:05:50.257634+00	20240905170549_after_added_works32	\N	\N	2024-09-05 17:05:49.99934+00	1
a114e0c2-8040-4f5a-b801-306ba3da2595	ac288b8b991dcb6ce2aee35fc0a1c2bb5d22fca357a85f280a5a5b649234b3f6	2024-09-04 10:49:12.191209+00	20240904104911_after_added_works29	\N	\N	2024-09-04 10:49:11.840916+00	1
b8159e67-9b87-4750-bc24-599cf046ef8e	212d315329f6e85e037304e6f249e4e6ed5905f69e44c278e47c1d0ff8e65c22	2024-09-04 14:45:07.164814+00	20240904144506_after_added_works31	\N	\N	2024-09-04 14:45:06.894482+00	1
e8e1acd8-9914-4067-9bbb-1d1746adfe82	3057920408a03652c07723b00f1b7b547213139bbd873c6abda371d5327fca8d	2024-09-04 14:32:36.236585+00	20240904143235_after_added_works30	\N	\N	2024-09-04 14:32:35.982+00	1
7bc9f482-b15f-447f-9b57-e237bb40836d	359bbe3c19cddbf03f2b23a61215bbf877568602f89dcf4f4e7c02b587bf59a3	2024-09-05 17:14:51.886213+00	20240905171451_after_added_works33	\N	\N	2024-09-05 17:14:51.596346+00	1
b847c8e7-db23-4055-83e3-2a9ee9388e3e	70ca1f29e0bd808effc77fa1149655b9d49cff30f804fdcbad333e5620406f33	2024-09-06 07:32:24.564205+00	20240906073224_after_added_works34	\N	\N	2024-09-06 07:32:24.292644+00	1
2d934986-89d6-4edd-8144-aa6cec5d8e56	30adf7403d9ba3f6f64adf7c0d73ba3c34b9139cdd43fd6f243ffbc619fa3516	2024-09-07 14:17:42.318344+00	20240907141741_after_added_works35	\N	\N	2024-09-07 14:17:42.024042+00	1
0e7c9f4f-e908-4369-b787-9807029eb9a2	d8cee0b5752172d05ec7f7cdf888ba8e7a7dbc3c8860d7555929928d537557a6	2024-09-07 16:04:04.150195+00	20240907160403_after_added_works36	\N	\N	2024-09-07 16:04:03.879089+00	1
4c3548a2-891b-441b-b15b-891d4d5f7907	147d82d3276dcfffa112210f51aca959ee91722aa8a99c04616a88ee79a5bf40	2024-09-08 10:29:36.21999+00	20240908102935_after_added_works37	\N	\N	2024-09-08 10:29:35.957795+00	1
373669ac-ba71-46e4-8f02-650a0a4e5ded	1ad8a61d5c7831e386bd772cf21c409667b58f48170f5ea96bb81aebbaad8ac2	2024-09-09 06:34:16.076842+00	20240909063415_after_added_works38	\N	\N	2024-09-09 06:34:15.799585+00	1
7096701f-a05a-4371-ad34-f0e3700239d0	f2c2a71bd9e853bd95a5928656b5a397401335cd26fba1d4d66853a346640708	2024-10-03 01:43:43.943603+00	20241003014343_after_added_works64	\N	\N	2024-10-03 01:43:43.692597+00	1
b7063975-4884-4418-bb76-76b2ea55b4f2	c5e7110c99e4048838d95a21b732118f25b8b61006b2b65c24ba444cc0b36e59	2024-09-10 12:35:34.389964+00	20240910123533_after_added_works39	\N	\N	2024-09-10 12:35:33.938989+00	1
7130f9e8-023e-4dcb-b128-0bebbe44f0f7	fb8e13e7dd8e7ddc31c7a58d472c7cd8e2da343dc79a2259485d6d2f5ee74b3e	2024-09-25 16:49:42.45218+00	20240925164941_after_added_works51	\N	\N	2024-09-25 16:49:42.08329+00	1
e150d03f-ac44-4587-bb1f-7cab8effd882	bac584e92a1db735065529a593992ebe913da912070789f0630b0e85592bc8bd	2024-09-10 16:52:23.950083+00	20240910165223_after_added_works40	\N	\N	2024-09-10 16:52:23.671018+00	1
ed6f92ae-00f5-4dfc-8160-165b6799ed7a	cc87f6ee02200426e8559c1a526235c111d7ef46c47b2b9fa3b371f5a7eb68db	2024-09-10 18:54:49.941146+00	20240910185449_after_added_works41	\N	\N	2024-09-10 18:54:49.630385+00	1
7c40a435-1535-449a-9782-c8d9789fad75	3d773e23b1bb825b41625426fc08a003d927c85c1be52c5492497db86f205adc	2024-09-30 19:00:54.260943+00	20240930190053_after_added_works60	\N	\N	2024-09-30 19:00:53.946028+00	1
a53c1420-f848-416f-8e80-fad3bc7ba146	82578e4b4240eb7eaff91b19a894082acc5a90598e9391fe83817229865e9c1b	2024-09-21 21:57:22.049437+00	20240921215721_after_added_works43	\N	\N	2024-09-21 21:57:21.722763+00	1
60756d88-981e-477b-950c-b051544a1975	667f30fbe69c6f9de987bb649c64678e566ca8b0babfa2adeb9d2cd9e612d06a	2024-09-27 00:12:53.622407+00	20240927001253_after_added_works52	\N	\N	2024-09-27 00:12:53.343312+00	1
cdad4689-c5ae-48d4-9cc4-50a73d4d375a	4b6fac6f20568f4452fc44a53699523efcfc0586f6764d4badf7fefd8a8cfd3d	2024-09-21 23:01:21.357269+00	20240921230120_after_added_works44	\N	\N	2024-09-21 23:01:21.055865+00	1
6e490947-8b7e-4415-816a-d1ae659ce780	c68daaf679192f56f6f0a3748f075ffd4af5c63a7677c4b01bee714add8320ab	2024-09-21 23:34:07.157443+00	20240921233406_after_added_works45	\N	\N	2024-09-21 23:34:06.85941+00	1
fe5d67f5-35d8-40e9-a2c8-bfe3ee5a64f7	7ebf6b7819e68e0285fe25428c2eb02eb2fab3dc47da15d86ad560bc63257b79	2024-09-23 15:01:54.788288+00	20240923150153_after_added_works46	\N	\N	2024-09-23 15:01:54.433299+00	1
01608277-fda0-45fa-b6f9-7ee1d20dc15d	a825d71c2f23dd14eac1be30f29c2fa3d3117698725334715257368b4c20549e	2024-09-27 00:19:12.502904+00	20240927001911_after_added_works53	\N	\N	2024-09-27 00:19:12.223562+00	1
3c0ffb4f-0c2e-4136-8d48-e09fc226f74e	e8d848177cdbde30068d6f1c0231231ae600e39ce613ab54315802a270db7057	2024-09-23 15:21:19.153221+00	20240923152118_after_added_works47	\N	\N	2024-09-23 15:21:18.857316+00	1
0495a99e-985c-4169-a025-56b30f40ae59	64f2c8c0c34ef5460f971749a85124edb65e9809513075ee50f0239f84066982	2024-09-23 18:32:01.736732+00	20240923183201_after_added_works48	\N	\N	2024-09-23 18:32:01.498491+00	1
4438dff9-7172-4f8d-a1ee-ff14159d8971	e7b6ee90c08aa2f16784116a7a736b2019e6be322adb883a360efb3a40e5c40b	2024-09-23 18:42:42.210701+00	20240923184241_after_added_works49	\N	\N	2024-09-23 18:42:41.955749+00	1
8dc3a141-04ce-4add-9a5d-c89090e4900f	52c9e1d1bccd58730e25b18b860388eed4900e6815cd1adf2333baf6a5627e20	2024-09-27 00:37:08.363931+00	20240927003707_after_added_works54	\N	\N	2024-09-27 00:37:08.084688+00	1
0d32c466-924b-4dc5-a7e3-0421977ff67d	e1f2add863d1ba270fb8b82bad45ceb94a001ed7f416b45359f38205aba45224	2024-09-23 22:43:37.940863+00	20240923224337_after_added_works50	\N	\N	2024-09-23 22:43:37.489743+00	1
4f65f978-cbca-4cea-a4c0-b1768ee88391	3bbd5dfebab0d9df97bd36c5e75e40d7ba146f73e397ae1144f5b5a36e9ce463	2024-09-23 22:47:27.674325+00	20240923224727_after_added_works51	\N	\N	2024-09-23 22:47:27.447533+00	1
8c31d949-b49f-47cb-b961-a063a2ce6d36	9693f340f1298ed6546bfd44aa732a63ad2c470d7a9d66b467026b1d708cb1fb	2024-09-30 23:05:12.791986+00	20240930230512_after_added_works62	\N	\N	2024-09-30 23:05:12.525572+00	1
421e61e2-2121-4e35-b3bb-bcc5ba19c0da	04e23bbcef4b028b0f6cbacfbf746696844152e2ff902727008d89d878da84c9	2024-09-28 00:04:03.285258+00	20240928000402_after_added_works56	\N	\N	2024-09-28 00:04:03.026074+00	1
f6598b3d-9848-43f8-aa0c-5658f5033ec5	db0636f5547f53c439cdb721309dfdf0ee395bc2398af989aee95a36325a091c	2024-09-28 15:46:29.198478+00	20240928154628_after_added_works56	\N	\N	2024-09-28 15:46:28.799521+00	1
3ebb9bd6-3283-4cc3-b3f2-63e9d47dbf27	fdc707e564df35344f94d2870aceab79ae2cf9bb063ec47b9015ce7b4ada4789	2024-10-20 15:06:37.723212+00	20241020150637_after_added_works67	\N	\N	2024-10-20 15:06:37.437092+00	1
bc01f826-a2f8-4c75-a44a-c63b31ec9519	dc41e26d4d6e76b8aa378d93bd936d23d4cd6e32d23414c7ad195c0aaddb86e9	2024-09-29 17:07:53.859519+00	20240929170753_after_added_works58	\N	\N	2024-09-29 17:07:53.549064+00	1
0f22d691-6d7f-41da-bca0-c51f36c00917	f45bd02336f1edbcdf8b73c416178d00663b6bc3f8a85c9d94660278d21e5072	2024-10-01 01:55:44.079876+00	20241001015543_after_added_works61	\N	\N	2024-10-01 01:55:43.773851+00	1
03353505-7ae4-44fe-9172-7be6e36b5ab2	3e24205daf7235f5c612bf1bd698a4dfc6660dd239c80a6aae06c39ed3348f99	2024-09-30 18:49:27.314798+00	20240930184926_after_added_works59	\N	\N	2024-09-30 18:49:27.031643+00	1
11411b81-1446-49f4-b00d-7e02d7fc2e4a	bb67c9dd1740d3b30df8876f3de2e3a2fddc79d8432ab7ba1d7a0c240c4ff97d	2024-10-03 06:20:58.655085+00	20241003062058_after_added_works64	\N	\N	2024-10-03 06:20:58.304958+00	1
da8239b7-ae80-4006-a354-5430010d5546	0276f69d595cd05919ebc5cb986d4aed6f0221675ecf618502bdd2e73155444e	2024-10-01 03:27:52.835136+00	20241001032752_after_added_works62	\N	\N	2024-10-01 03:27:52.501103+00	1
2d478ee8-25c0-4561-bbe9-50a61ec56cc6	2bcdbf774cc4fa26dc43f2a17034e55ef9668d01f36daac35258ff2dfc1ca09e	2024-10-02 06:02:57.210251+00	20241002060256_after_added_works63	\N	\N	2024-10-02 06:02:56.793935+00	1
9149b355-24b7-40f9-a521-763da005d9d7	6b232cd94d473eb3a2163645c933e10e885edbe076718ce2f7c8a24b00baaefa	2024-10-15 06:49:04.020063+00	20241015064903_after_added_works66	\N	\N	2024-10-15 06:49:03.750178+00	1
2204f2ec-4fd6-4714-a25f-6209bc3b948a	76ecb5af55af96ab3314476d16c0658c74799c11c321a55e7e8ae11071014fa6	2024-10-03 06:52:44.184114+00	20241003065243_after_added_works65	\N	\N	2024-10-03 06:52:43.846489+00	1
6d3be42f-0d75-4355-aa5d-ace55c2c1b58	0dd388f20f699b01dee63902ac3836c6a6f8094f76bf0e788a70daaff6570e26	2024-10-14 14:06:39.101601+00	20241014140634_after_added_works65	\N	\N	2024-10-14 14:06:37.716031+00	1
e87c8384-9d6e-4ccd-908c-1a9d9ecf109d	bb7a8b48eb93a47bfe86a65d1e478eae87fe6dc4f4309cceeb7100bbd0ebdb44	2024-10-20 14:37:24.586147+00	20241020143723_after_added_works66	\N	\N	2024-10-20 14:37:24.176559+00	1
587bd58f-26b6-4092-9c1c-ba5c2e1bd12d	b830d7c185ac51fe118e7f53cb27d6c49912ba1e0e337c6f98484ae17a364d47	2024-10-21 21:31:27.884186+00	20241021213127_after_added_works68	\N	\N	2024-10-21 21:31:27.610365+00	1
666accb8-1c29-4e1e-ae9b-f05d36a600e0	aefc3fec86bdcce73a06b26914b9d8fed7ae2d7da3321318ad33ec78262a4756	2024-10-30 20:21:53.583004+00	20241030202152_after_added_works68	\N	\N	2024-10-30 20:21:53.277723+00	1
7f4466b6-0c26-406b-b904-d37bb41dc3a1	92c3e2769fe96fdc0b20b3f1d79a51759b38f9c2cc24b997faf33a9d317555fb	2024-11-01 16:30:56.212617+00	20241101163055_after_added_works69	\N	\N	2024-11-01 16:30:55.73686+00	1
8d2cddb4-e548-4eff-8d10-7e583717feca	adc25f30458108f03ec23e238c6fbddc6161dcb777e936cdc029f45891e758a6	2024-11-01 23:48:23.848213+00	20241101234823_after_added_works70	\N	\N	2024-11-01 23:48:23.50964+00	1
b2869935-5a51-403f-8da7-275c45634069	670e325db81a8ec8956060b106a1a6a647ae218807b204cd4f6c635037e44eb1	2024-11-07 03:46:21.750891+00	20241107034621_after_added_works71	\N	\N	2024-11-07 03:46:21.429823+00	1
c7127cb1-04ba-4ce5-91c1-607d66d3e828	c234792a4491bc3a9990b13d43d19686e483dce22e64d139979fe37a6f3c2963	2024-11-07 08:25:23.391356+00	20241107082522_after_added_works72	\N	\N	2024-11-07 08:25:23.113861+00	1
98d7322f-c670-4562-84a3-700f245497b1	d5534ca7e8a1dca9fbf2949a8c447ecfda43a34c216515a783bad744e7ea8f3c	2024-11-08 02:10:55.227457+00	20241108021054_after_added_works74	\N	\N	2024-11-08 02:10:54.929824+00	1
e63122b6-c653-4534-a2cf-d02bb117fd93	78a5dd3884c550f5cddcd8993b5381d4491e9ea29fe675cb1f7862b6f14e743c	2024-12-05 06:10:55.290665+00	20241205061054_migrate_75_updated	\N	\N	2024-12-05 06:10:55.027887+00	1
aa0b2a0b-4476-4317-a7a4-05540891ebe6	a9bb9ed7b486e59901f0665cfe7d2953f74e3f605f8e846440de368c020a5abc	2025-01-02 14:26:23.245534+00	20250102142622_migrate_76_updated	\N	\N	2025-01-02 14:26:22.831116+00	1
3ec0472a-adf7-4f13-abb7-72207c35ef37	928358d9e947f566f582c8b78850687eb0b5fd3074e17143565771e02e5b2f85	2025-01-04 19:40:49.583389+00	20250104194048_migrate_77_updated	\N	\N	2025-01-04 19:40:49.22071+00	1
dff8ef62-f99b-4a5e-bf65-e1a3bd6f5651	ea663a4b7fd594d8afbca41f02fbbe659e029ae1b7a9d0c4fbc11f9473bd5ed3	2025-01-14 02:08:11.221106+00	20250114020810_migrate_78_updated	\N	\N	2025-01-14 02:08:10.939106+00	1
feac440c-56a4-4b59-9316-a1355aa03ddc	e3f215f517561060d0ed7d59f0c74762e105c27bc46684d2b7d466dc000adee0	2025-01-14 13:44:14.735501+00	20250114134409_migrate_79_updated	\N	\N	2025-01-14 13:44:11.632908+00	1
cba97509-1ec5-4b2b-a4a3-3a628e8c772b	043870e5fe9552df6c4820a65fbbb0619a8bebf3b74a41990979067e36f76160	2025-01-18 05:03:56.612921+00	20250118050355_migrate_80_updated	\N	\N	2025-01-18 05:03:56.268583+00	1
d2c9aa9d-ff36-4454-a1a3-35d01025fb56	822a87925f6423c54d9190a4c2d84abc5d1b158deeab1fc2e80d036a1f9bfdcf	2025-01-24 16:40:13.249657+00	20250124164012_migrate_81_updated	\N	\N	2025-01-24 16:40:12.942787+00	1
ee012a64-793d-4682-8e00-2b7a8c80014d	4c103d24df0986ec4e5ef2296a0a48d6185a032b90e8e25bb1c2ebc5ec9acf4d	\N	20250125104014_migrate_82_updated	A migration failed to apply. New migrations cannot be applied before the error is recovered from. Read more about how to resolve migration issues in a production database: https://pris.ly/d/migrate-resolve\n\nMigration name: 20250125104014_migrate_82_updated\n\nDatabase error code: 23505\n\nDatabase error:\nERROR: could not create unique index "Team_nameAr_key"\nDETAIL: Key ("nameAr")=(general) is duplicated.\n\nDbError { severity: "ERROR", parsed_severity: Some(Error), code: SqlState(E23505), message: "could not create unique index \\"Team_nameAr_key\\"", detail: Some("Key (\\"nameAr\\")=(general) is duplicated."), hint: None, position: None, where_: None, schema: Some("public"), table: Some("Team"), column: None, datatype: None, constraint: Some("Team_nameAr_key"), file: Some("tuplesort.c"), line: Some(4423), routine: Some("comparetup_index_btree") }\n\n   0: sql_schema_connector::apply_migration::apply_script\n           with migration_name="20250125104014_migrate_82_updated"\n             at schema-engine/connectors/sql-schema-connector/src/apply_migration.rs:106\n   1: schema_core::commands::apply_migrations::Applying migration\n           with migration_name="20250125104014_migrate_82_updated"\n             at schema-engine/core/src/commands/apply_migrations.rs:91\n   2: schema_core::state::ApplyMigrations\n             at schema-engine/core/src/state.rs:201	2025-01-25 10:55:28.56588+00	2025-01-25 10:40:14.780524+00	0
56408eb5-ad65-435a-a764-1ac38201eb2a	4c103d24df0986ec4e5ef2296a0a48d6185a032b90e8e25bb1c2ebc5ec9acf4d	2025-01-25 10:55:28.653236+00	20250125104014_migrate_82_updated		\N	2025-01-25 10:55:28.653236+00	0
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: default
--

COPY public.users (id, user_name, email, password, phone, confirmed_password, created_at, updated_at, "emailVerified", image, role, "clientId") FROM stdin;
clyhm29ou0000dnteppm9du5n	ahmed	samnaddeen2000@gmail.com	$2b$10$SMdELJv5044uZejgJVNYLOyC.NSXyuEAg0g2.duAqaSXQlUa/bX4q	12345678	123123123	2024-07-11 18:37:07.849	2024-07-11 18:39:32.712	2024-07-11 18:39:32.71	\N	user	\N
clzlpr6qn0000138det9i950j	SameAli	alsumairia39@gmail.com	$2b$10$BD6tbYUdCrBfelOX0QVEreprgC3.H6.wy5pmOPvMwaeRRb.LRxgNe	12345678	12345678	2024-08-08 20:11:16.309	2024-08-08 20:11:16.309	\N	\N	admin	\N
clzlq5m870000llv5xscpvqqb	sumairi	sumairia63@gmail.com	$2b$10$yF5V0SsQXTrlpsyNgH3WbunDgpWC6M32jtExjxbzqPOSpaixPHG8m	12345678	12345678	2024-08-08 20:22:29.534	2024-08-08 20:22:29.534	\N	\N	admin	\N
cm03o10dz0000h46tnmyqs0mj	maher	maher@gmail.com	$2b$10$uXOtMCrUSw3MA/1lNDmLguND2J8ttgE8wGSskOFP2BMckX.yErPfm	5312127	mahermaherM$9	2024-08-21 09:42:46.582	2024-08-21 09:42:46.582	\N	\N	user	\N
cm03o27il0003h46tbyxlfo0h	maker	basma94ghanem@gmail.com	$2b$10$D5nDVDUOiMbBT322JjsVb.xk/u.ZhdUAPN7kbQBHFcVwPJP2eTp6q	5312127	mahermaherM$9	2024-08-21 09:43:42.264	2024-08-21 09:43:42.264	\N	\N	user	\N
cm03osjma0000eemwbsykbk48	admin	admin@gmail.com	$2b$10$APpnOXPquUHM4i0lWagLtOLO3BGXLwnKVlAfAuhbrbv7s0ac5qlna	531212711	adminadminM$9	2024-08-21 10:04:11.219	2024-08-21 10:05:45.731	2024-08-21 10:04:09.14	\N	admin	\N
\.


--
-- Name: AboutUsSection_id_seq; Type: SEQUENCE SET; Schema: public; Owner: default
--

SELECT pg_catalog.setval('public."AboutUsSection_id_seq"', 2, true);


--
-- Name: AdminMenu_id_seq; Type: SEQUENCE SET; Schema: public; Owner: default
--

SELECT pg_catalog.setval('public."AdminMenu_id_seq"', 61, true);


--
-- Name: Category_id_seq; Type: SEQUENCE SET; Schema: public; Owner: default
--

SELECT pg_catalog.setval('public."Category_id_seq"', 62, true);


--
-- Name: CompanyMenu_id_seq; Type: SEQUENCE SET; Schema: public; Owner: default
--

SELECT pg_catalog.setval('public."CompanyMenu_id_seq"', 9, true);


--
-- Name: Department_id_seq; Type: SEQUENCE SET; Schema: public; Owner: default
--

SELECT pg_catalog.setval('public."Department_id_seq"', 1, false);


--
-- Name: Element_id_seq; Type: SEQUENCE SET; Schema: public; Owner: default
--

SELECT pg_catalog.setval('public."Element_id_seq"', 214, true);


--
-- Name: EmployeeProfile_id_seq; Type: SEQUENCE SET; Schema: public; Owner: default
--

SELECT pg_catalog.setval('public."EmployeeProfile_id_seq"', 2, true);


--
-- Name: Explore_id_seq; Type: SEQUENCE SET; Schema: public; Owner: default
--

SELECT pg_catalog.setval('public."Explore_id_seq"', 15, true);


--
-- Name: Feature_id_seq; Type: SEQUENCE SET; Schema: public; Owner: default
--

SELECT pg_catalog.setval('public."Feature_id_seq"', 6, true);


--
-- Name: HeroSection_id_seq; Type: SEQUENCE SET; Schema: public; Owner: default
--

SELECT pg_catalog.setval('public."HeroSection_id_seq"', 12, true);


--
-- Name: Industry_id_seq; Type: SEQUENCE SET; Schema: public; Owner: default
--

SELECT pg_catalog.setval('public."Industry_id_seq"', 8, true);


--
-- Name: Location_id_seq; Type: SEQUENCE SET; Schema: public; Owner: default
--

SELECT pg_catalog.setval('public."Location_id_seq"', 4, true);


--
-- Name: Market_id_seq; Type: SEQUENCE SET; Schema: public; Owner: default
--

SELECT pg_catalog.setval('public."Market_id_seq"', 3, true);


--
-- Name: MenuParent_id_seq; Type: SEQUENCE SET; Schema: public; Owner: default
--

SELECT pg_catalog.setval('public."MenuParent_id_seq"', 16, true);


--
-- Name: PackageFeatureLink_id_seq; Type: SEQUENCE SET; Schema: public; Owner: default
--

SELECT pg_catalog.setval('public."PackageFeatureLink_id_seq"', 30, true);


--
-- Name: PackageFeature_id_seq; Type: SEQUENCE SET; Schema: public; Owner: default
--

SELECT pg_catalog.setval('public."PackageFeature_id_seq"', 20, true);


--
-- Name: Package_id_seq; Type: SEQUENCE SET; Schema: public; Owner: default
--

SELECT pg_catalog.setval('public."Package_id_seq"', 3, true);


--
-- Name: PageSection_id_seq; Type: SEQUENCE SET; Schema: public; Owner: default
--

SELECT pg_catalog.setval('public."PageSection_id_seq"', 10, true);


--
-- Name: Page_id_seq; Type: SEQUENCE SET; Schema: public; Owner: default
--

SELECT pg_catalog.setval('public."Page_id_seq"', 5, true);


--
-- Name: Partner_id_seq; Type: SEQUENCE SET; Schema: public; Owner: default
--

SELECT pg_catalog.setval('public."Partner_id_seq"', 1, false);


--
-- Name: Permission_id_seq; Type: SEQUENCE SET; Schema: public; Owner: default
--

SELECT pg_catalog.setval('public."Permission_id_seq"', 1, false);


--
-- Name: Phase_id_seq; Type: SEQUENCE SET; Schema: public; Owner: default
--

SELECT pg_catalog.setval('public."Phase_id_seq"', 22, true);


--
-- Name: PlanCategory_id_seq; Type: SEQUENCE SET; Schema: public; Owner: default
--

SELECT pg_catalog.setval('public."PlanCategory_id_seq"', 7, true);


--
-- Name: Plan_id_seq; Type: SEQUENCE SET; Schema: public; Owner: default
--

SELECT pg_catalog.setval('public."Plan_id_seq"', 4, true);


--
-- Name: PostCategory_id_seq; Type: SEQUENCE SET; Schema: public; Owner: default
--

SELECT pg_catalog.setval('public."PostCategory_id_seq"', 3, true);


--
-- Name: Role_id_seq; Type: SEQUENCE SET; Schema: public; Owner: default
--

SELECT pg_catalog.setval('public."Role_id_seq"', 1, false);


--
-- Name: ServiceCode_id_seq; Type: SEQUENCE SET; Schema: public; Owner: default
--

SELECT pg_catalog.setval('public."ServiceCode_id_seq"', 7, true);


--
-- Name: ServiceFeature_id_seq; Type: SEQUENCE SET; Schema: public; Owner: default
--

SELECT pg_catalog.setval('public."ServiceFeature_id_seq"', 4, true);


--
-- Name: Service_id_seq; Type: SEQUENCE SET; Schema: public; Owner: default
--

SELECT pg_catalog.setval('public."Service_id_seq"', 68, true);


--
-- Name: Skill_id_seq; Type: SEQUENCE SET; Schema: public; Owner: default
--

SELECT pg_catalog.setval('public."Skill_id_seq"', 1, false);


--
-- Name: SocialNetwork_id_seq; Type: SEQUENCE SET; Schema: public; Owner: default
--

SELECT pg_catalog.setval('public."SocialNetwork_id_seq"', 1, false);


--
-- Name: Step_id_seq; Type: SEQUENCE SET; Schema: public; Owner: default
--

SELECT pg_catalog.setval('public."Step_id_seq"', 16, true);


--
-- Name: Subscription_id_seq; Type: SEQUENCE SET; Schema: public; Owner: default
--

SELECT pg_catalog.setval('public."Subscription_id_seq"', 1, false);


--
-- Name: Tag_id_seq; Type: SEQUENCE SET; Schema: public; Owner: default
--

SELECT pg_catalog.setval('public."Tag_id_seq"', 7, true);


--
-- Name: Task_id_seq; Type: SEQUENCE SET; Schema: public; Owner: default
--

SELECT pg_catalog.setval('public."Task_id_seq"', 15, true);


--
-- Name: Team_id_seq; Type: SEQUENCE SET; Schema: public; Owner: default
--

SELECT pg_catalog.setval('public."Team_id_seq"', 9, true);


--
-- Name: Testimonial_id_seq; Type: SEQUENCE SET; Schema: public; Owner: default
--

SELECT pg_catalog.setval('public."Testimonial_id_seq"', 6, true);


--
-- Name: Tool_id_seq; Type: SEQUENCE SET; Schema: public; Owner: default
--

SELECT pg_catalog.setval('public."Tool_id_seq"', 24, true);


--
-- Name: Work_id_seq; Type: SEQUENCE SET; Schema: public; Owner: default
--

SELECT pg_catalog.setval('public."Work_id_seq"', 31, true);


--
-- Name: AboutUsSection AboutUsSection_pkey; Type: CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."AboutUsSection"
    ADD CONSTRAINT "AboutUsSection_pkey" PRIMARY KEY (id);


--
-- Name: Account Account_pkey; Type: CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."Account"
    ADD CONSTRAINT "Account_pkey" PRIMARY KEY (id);


--
-- Name: AdminMenu AdminMenu_pkey; Type: CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."AdminMenu"
    ADD CONSTRAINT "AdminMenu_pkey" PRIMARY KEY (id);


--
-- Name: BillingInfo BillingInfo_pkey; Type: CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."BillingInfo"
    ADD CONSTRAINT "BillingInfo_pkey" PRIMARY KEY (id);


--
-- Name: Category Category_pkey; Type: CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."Category"
    ADD CONSTRAINT "Category_pkey" PRIMARY KEY (id);


--
-- Name: Client Client_pkey; Type: CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."Client"
    ADD CONSTRAINT "Client_pkey" PRIMARY KEY (id);


--
-- Name: CompanyMenu CompanyMenu_pkey; Type: CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."CompanyMenu"
    ADD CONSTRAINT "CompanyMenu_pkey" PRIMARY KEY (id);


--
-- Name: Customer Customer_pkey; Type: CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."Customer"
    ADD CONSTRAINT "Customer_pkey" PRIMARY KEY (id);


--
-- Name: Department Department_pkey; Type: CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."Department"
    ADD CONSTRAINT "Department_pkey" PRIMARY KEY (id);


--
-- Name: Element Element_pkey; Type: CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."Element"
    ADD CONSTRAINT "Element_pkey" PRIMARY KEY (id);


--
-- Name: EmployeeProfile EmployeeProfile_pkey; Type: CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."EmployeeProfile"
    ADD CONSTRAINT "EmployeeProfile_pkey" PRIMARY KEY (id);


--
-- Name: EmployeeSkill EmployeeSkill_pkey; Type: CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."EmployeeSkill"
    ADD CONSTRAINT "EmployeeSkill_pkey" PRIMARY KEY ("employeeProfileId", "skillId");


--
-- Name: Explore Explore_pkey; Type: CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."Explore"
    ADD CONSTRAINT "Explore_pkey" PRIMARY KEY (id);


--
-- Name: Feature Feature_pkey; Type: CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."Feature"
    ADD CONSTRAINT "Feature_pkey" PRIMARY KEY (id);


--
-- Name: HeroSection HeroSection_pkey; Type: CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."HeroSection"
    ADD CONSTRAINT "HeroSection_pkey" PRIMARY KEY (id);


--
-- Name: Industry Industry_pkey; Type: CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."Industry"
    ADD CONSTRAINT "Industry_pkey" PRIMARY KEY (id);


--
-- Name: Invoice Invoice_pkey; Type: CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."Invoice"
    ADD CONSTRAINT "Invoice_pkey" PRIMARY KEY (id);


--
-- Name: Location Location_pkey; Type: CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."Location"
    ADD CONSTRAINT "Location_pkey" PRIMARY KEY (id);


--
-- Name: MarketPage MarketPage_pkey; Type: CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."MarketPage"
    ADD CONSTRAINT "MarketPage_pkey" PRIMARY KEY ("marketId", "pageId");


--
-- Name: Market Market_pkey; Type: CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."Market"
    ADD CONSTRAINT "Market_pkey" PRIMARY KEY (id);


--
-- Name: Media Media_pkey; Type: CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."Media"
    ADD CONSTRAINT "Media_pkey" PRIMARY KEY (id);


--
-- Name: MenuParent MenuParent_pkey; Type: CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."MenuParent"
    ADD CONSTRAINT "MenuParent_pkey" PRIMARY KEY (id);


--
-- Name: Offer Offer_pkey; Type: CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."Offer"
    ADD CONSTRAINT "Offer_pkey" PRIMARY KEY (id);


--
-- Name: Order Order_pkey; Type: CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."Order"
    ADD CONSTRAINT "Order_pkey" PRIMARY KEY (id);


--
-- Name: PackageFeatureLink PackageFeatureLink_pkey; Type: CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."PackageFeatureLink"
    ADD CONSTRAINT "PackageFeatureLink_pkey" PRIMARY KEY (id);


--
-- Name: PackageFeature PackageFeature_pkey; Type: CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."PackageFeature"
    ADD CONSTRAINT "PackageFeature_pkey" PRIMARY KEY (id);


--
-- Name: Package Package_pkey; Type: CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."Package"
    ADD CONSTRAINT "Package_pkey" PRIMARY KEY (id);


--
-- Name: PageSection PageSection_pkey; Type: CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."PageSection"
    ADD CONSTRAINT "PageSection_pkey" PRIMARY KEY (id);


--
-- Name: Page Page_pkey; Type: CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."Page"
    ADD CONSTRAINT "Page_pkey" PRIMARY KEY (id);


--
-- Name: Partner Partner_pkey; Type: CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."Partner"
    ADD CONSTRAINT "Partner_pkey" PRIMARY KEY (id);


--
-- Name: Permission Permission_pkey; Type: CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."Permission"
    ADD CONSTRAINT "Permission_pkey" PRIMARY KEY (id);


--
-- Name: Phase Phase_pkey; Type: CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."Phase"
    ADD CONSTRAINT "Phase_pkey" PRIMARY KEY (id);


--
-- Name: PlanCategory PlanCategory_pkey; Type: CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."PlanCategory"
    ADD CONSTRAINT "PlanCategory_pkey" PRIMARY KEY (id);


--
-- Name: Plan Plan_pkey; Type: CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."Plan"
    ADD CONSTRAINT "Plan_pkey" PRIMARY KEY (id);


--
-- Name: PostCategory PostCategory_pkey; Type: CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."PostCategory"
    ADD CONSTRAINT "PostCategory_pkey" PRIMARY KEY (id);


--
-- Name: Post Post_pkey; Type: CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."Post"
    ADD CONSTRAINT "Post_pkey" PRIMARY KEY (id);


--
-- Name: Price Price_pkey; Type: CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."Price"
    ADD CONSTRAINT "Price_pkey" PRIMARY KEY (id);


--
-- Name: Product Product_pkey; Type: CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."Product"
    ADD CONSTRAINT "Product_pkey" PRIMARY KEY (id);


--
-- Name: Project Project_pkey; Type: CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."Project"
    ADD CONSTRAINT "Project_pkey" PRIMARY KEY (id);


--
-- Name: Role Role_pkey; Type: CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."Role"
    ADD CONSTRAINT "Role_pkey" PRIMARY KEY (id);


--
-- Name: ServiceCategory ServiceCategory_pkey; Type: CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."ServiceCategory"
    ADD CONSTRAINT "ServiceCategory_pkey" PRIMARY KEY ("serviceId", "categoryId");


--
-- Name: ServiceCode ServiceCode_pkey; Type: CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."ServiceCode"
    ADD CONSTRAINT "ServiceCode_pkey" PRIMARY KEY (id);


--
-- Name: ServiceFeature ServiceFeature_pkey; Type: CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."ServiceFeature"
    ADD CONSTRAINT "ServiceFeature_pkey" PRIMARY KEY (id);


--
-- Name: ServiceTag ServiceTag_pkey; Type: CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."ServiceTag"
    ADD CONSTRAINT "ServiceTag_pkey" PRIMARY KEY ("serviceId", "tagId");


--
-- Name: ServiceTool ServiceTool_pkey; Type: CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."ServiceTool"
    ADD CONSTRAINT "ServiceTool_pkey" PRIMARY KEY ("serviceId", "toolId");


--
-- Name: Service Service_pkey; Type: CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."Service"
    ADD CONSTRAINT "Service_pkey" PRIMARY KEY (id);


--
-- Name: Session Session_pkey; Type: CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."Session"
    ADD CONSTRAINT "Session_pkey" PRIMARY KEY (id);


--
-- Name: Skill Skill_pkey; Type: CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."Skill"
    ADD CONSTRAINT "Skill_pkey" PRIMARY KEY (id);


--
-- Name: SocialNetwork SocialNetwork_pkey; Type: CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."SocialNetwork"
    ADD CONSTRAINT "SocialNetwork_pkey" PRIMARY KEY (id);


--
-- Name: Step Step_pkey; Type: CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."Step"
    ADD CONSTRAINT "Step_pkey" PRIMARY KEY (id);


--
-- Name: Subscription Subscription_pkey; Type: CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."Subscription"
    ADD CONSTRAINT "Subscription_pkey" PRIMARY KEY (id);


--
-- Name: Tag Tag_pkey; Type: CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."Tag"
    ADD CONSTRAINT "Tag_pkey" PRIMARY KEY (id);


--
-- Name: Task Task_pkey; Type: CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."Task"
    ADD CONSTRAINT "Task_pkey" PRIMARY KEY (id);


--
-- Name: TeamEmployee TeamEmployee_pkey; Type: CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."TeamEmployee"
    ADD CONSTRAINT "TeamEmployee_pkey" PRIMARY KEY ("employeeId", "teamId");


--
-- Name: Team Team_pkey; Type: CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."Team"
    ADD CONSTRAINT "Team_pkey" PRIMARY KEY (id);


--
-- Name: TestimonialCategory TestimonialCategory_pkey; Type: CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."TestimonialCategory"
    ADD CONSTRAINT "TestimonialCategory_pkey" PRIMARY KEY ("testimonialId", "categoryId");


--
-- Name: TestimonialTag TestimonialTag_pkey; Type: CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."TestimonialTag"
    ADD CONSTRAINT "TestimonialTag_pkey" PRIMARY KEY ("testimonialId", "tagId");


--
-- Name: Testimonial Testimonial_pkey; Type: CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."Testimonial"
    ADD CONSTRAINT "Testimonial_pkey" PRIMARY KEY (id);


--
-- Name: Tool Tool_pkey; Type: CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."Tool"
    ADD CONSTRAINT "Tool_pkey" PRIMARY KEY (id);


--
-- Name: Vendor Vendor_pkey; Type: CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."Vendor"
    ADD CONSTRAINT "Vendor_pkey" PRIMARY KEY (id);


--
-- Name: WorkCategory WorkCategory_pkey; Type: CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."WorkCategory"
    ADD CONSTRAINT "WorkCategory_pkey" PRIMARY KEY ("workId", "categoryId");


--
-- Name: WorkTag WorkTag_pkey; Type: CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."WorkTag"
    ADD CONSTRAINT "WorkTag_pkey" PRIMARY KEY ("workId", "tagId");


--
-- Name: WorkTool WorkTool_pkey; Type: CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."WorkTool"
    ADD CONSTRAINT "WorkTool_pkey" PRIMARY KEY ("workId", "toolId");


--
-- Name: Work Work_pkey; Type: CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."Work"
    ADD CONSTRAINT "Work_pkey" PRIMARY KEY (id);


--
-- Name: _prisma_migrations _prisma_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: Account_provider_providerAccountId_key; Type: INDEX; Schema: public; Owner: default
--

CREATE UNIQUE INDEX "Account_provider_providerAccountId_key" ON public."Account" USING btree (provider, "providerAccountId");


--
-- Name: Category_slug_key; Type: INDEX; Schema: public; Owner: default
--

CREATE UNIQUE INDEX "Category_slug_key" ON public."Category" USING btree (slug);


--
-- Name: Client_email_key; Type: INDEX; Schema: public; Owner: default
--

CREATE UNIQUE INDEX "Client_email_key" ON public."Client" USING btree (email);


--
-- Name: CompanyMenu_url_key; Type: INDEX; Schema: public; Owner: default
--

CREATE UNIQUE INDEX "CompanyMenu_url_key" ON public."CompanyMenu" USING btree (url);


--
-- Name: Customer_email_key; Type: INDEX; Schema: public; Owner: default
--

CREATE UNIQUE INDEX "Customer_email_key" ON public."Customer" USING btree (email);


--
-- Name: Customer_name_key; Type: INDEX; Schema: public; Owner: default
--

CREATE UNIQUE INDEX "Customer_name_key" ON public."Customer" USING btree (name);


--
-- Name: Department_name_key; Type: INDEX; Schema: public; Owner: default
--

CREATE UNIQUE INDEX "Department_name_key" ON public."Department" USING btree (name);


--
-- Name: EmployeeProfile_socialNetworkId_key; Type: INDEX; Schema: public; Owner: default
--

CREATE UNIQUE INDEX "EmployeeProfile_socialNetworkId_key" ON public."EmployeeProfile" USING btree ("socialNetworkId");


--
-- Name: EmployeeProfile_userId_key; Type: INDEX; Schema: public; Owner: default
--

CREATE UNIQUE INDEX "EmployeeProfile_userId_key" ON public."EmployeeProfile" USING btree ("userId");


--
-- Name: Explore_url_key; Type: INDEX; Schema: public; Owner: default
--

CREATE UNIQUE INDEX "Explore_url_key" ON public."Explore" USING btree (url);


--
-- Name: Invoice_invoiceNumber_key; Type: INDEX; Schema: public; Owner: default
--

CREATE UNIQUE INDEX "Invoice_invoiceNumber_key" ON public."Invoice" USING btree ("invoiceNumber");


--
-- Name: Order_orderNumber_key; Type: INDEX; Schema: public; Owner: default
--

CREATE UNIQUE INDEX "Order_orderNumber_key" ON public."Order" USING btree ("orderNumber");


--
-- Name: PackageFeatureLink_packageId_featureId_key; Type: INDEX; Schema: public; Owner: default
--

CREATE UNIQUE INDEX "PackageFeatureLink_packageId_featureId_key" ON public."PackageFeatureLink" USING btree ("packageId", "featureId");


--
-- Name: Package_slug_key; Type: INDEX; Schema: public; Owner: default
--

CREATE UNIQUE INDEX "Package_slug_key" ON public."Package" USING btree (slug);


--
-- Name: Partner_email_key; Type: INDEX; Schema: public; Owner: default
--

CREATE UNIQUE INDEX "Partner_email_key" ON public."Partner" USING btree (email);


--
-- Name: Partner_slug_key; Type: INDEX; Schema: public; Owner: default
--

CREATE UNIQUE INDEX "Partner_slug_key" ON public."Partner" USING btree (slug);


--
-- Name: Permission_name_key; Type: INDEX; Schema: public; Owner: default
--

CREATE UNIQUE INDEX "Permission_name_key" ON public."Permission" USING btree (name);


--
-- Name: Permission_slug_key; Type: INDEX; Schema: public; Owner: default
--

CREATE UNIQUE INDEX "Permission_slug_key" ON public."Permission" USING btree (slug);


--
-- Name: PlanCategory_slug_key; Type: INDEX; Schema: public; Owner: default
--

CREATE UNIQUE INDEX "PlanCategory_slug_key" ON public."PlanCategory" USING btree (slug);


--
-- Name: Plan_slug_key; Type: INDEX; Schema: public; Owner: default
--

CREATE UNIQUE INDEX "Plan_slug_key" ON public."Plan" USING btree (slug);


--
-- Name: PostCategory_slug_key; Type: INDEX; Schema: public; Owner: default
--

CREATE UNIQUE INDEX "PostCategory_slug_key" ON public."PostCategory" USING btree (slug);


--
-- Name: Post_slug_key; Type: INDEX; Schema: public; Owner: default
--

CREATE UNIQUE INDEX "Post_slug_key" ON public."Post" USING btree (slug);


--
-- Name: Price_serviceId_locationId_key; Type: INDEX; Schema: public; Owner: default
--

CREATE UNIQUE INDEX "Price_serviceId_locationId_key" ON public."Price" USING btree ("serviceId", "locationId");


--
-- Name: Product_sku_key; Type: INDEX; Schema: public; Owner: default
--

CREATE UNIQUE INDEX "Product_sku_key" ON public."Product" USING btree (sku);


--
-- Name: Product_slug_idx; Type: INDEX; Schema: public; Owner: default
--

CREATE INDEX "Product_slug_idx" ON public."Product" USING btree (slug);


--
-- Name: Product_slug_key; Type: INDEX; Schema: public; Owner: default
--

CREATE UNIQUE INDEX "Product_slug_key" ON public."Product" USING btree (slug);


--
-- Name: Role_name_key; Type: INDEX; Schema: public; Owner: default
--

CREATE UNIQUE INDEX "Role_name_key" ON public."Role" USING btree (name);


--
-- Name: Role_slug_key; Type: INDEX; Schema: public; Owner: default
--

CREATE UNIQUE INDEX "Role_slug_key" ON public."Role" USING btree (slug);


--
-- Name: ServiceCode_code_key; Type: INDEX; Schema: public; Owner: default
--

CREATE UNIQUE INDEX "ServiceCode_code_key" ON public."ServiceCode" USING btree (code);


--
-- Name: Session_sessionToken_key; Type: INDEX; Schema: public; Owner: default
--

CREATE UNIQUE INDEX "Session_sessionToken_key" ON public."Session" USING btree ("sessionToken");


--
-- Name: Skill_name_key; Type: INDEX; Schema: public; Owner: default
--

CREATE UNIQUE INDEX "Skill_name_key" ON public."Skill" USING btree (name);


--
-- Name: Skill_slug_key; Type: INDEX; Schema: public; Owner: default
--

CREATE UNIQUE INDEX "Skill_slug_key" ON public."Skill" USING btree (slug);


--
-- Name: Tag_slug_key; Type: INDEX; Schema: public; Owner: default
--

CREATE UNIQUE INDEX "Tag_slug_key" ON public."Tag" USING btree (slug);


--
-- Name: Team_name_key; Type: INDEX; Schema: public; Owner: default
--

CREATE UNIQUE INDEX "Team_name_key" ON public."Team" USING btree (name);


--
-- Name: Tool_slug_key; Type: INDEX; Schema: public; Owner: default
--

CREATE UNIQUE INDEX "Tool_slug_key" ON public."Tool" USING btree (slug);


--
-- Name: Vendor_slug_idx; Type: INDEX; Schema: public; Owner: default
--

CREATE INDEX "Vendor_slug_idx" ON public."Vendor" USING btree (slug);


--
-- Name: Vendor_slug_key; Type: INDEX; Schema: public; Owner: default
--

CREATE UNIQUE INDEX "Vendor_slug_key" ON public."Vendor" USING btree (slug);


--
-- Name: VerificationToken_identifier_token_key; Type: INDEX; Schema: public; Owner: default
--

CREATE UNIQUE INDEX "VerificationToken_identifier_token_key" ON public."VerificationToken" USING btree (identifier, token);


--
-- Name: VerificationToken_token_key; Type: INDEX; Schema: public; Owner: default
--

CREATE UNIQUE INDEX "VerificationToken_token_key" ON public."VerificationToken" USING btree (token);


--
-- Name: _CategoryToClient_AB_unique; Type: INDEX; Schema: public; Owner: default
--

CREATE UNIQUE INDEX "_CategoryToClient_AB_unique" ON public."_CategoryToClient" USING btree ("A", "B");


--
-- Name: _CategoryToClient_B_index; Type: INDEX; Schema: public; Owner: default
--

CREATE INDEX "_CategoryToClient_B_index" ON public."_CategoryToClient" USING btree ("B");


--
-- Name: _CategoryToIndustry_AB_unique; Type: INDEX; Schema: public; Owner: default
--

CREATE UNIQUE INDEX "_CategoryToIndustry_AB_unique" ON public."_CategoryToIndustry" USING btree ("A", "B");


--
-- Name: _CategoryToIndustry_B_index; Type: INDEX; Schema: public; Owner: default
--

CREATE INDEX "_CategoryToIndustry_B_index" ON public."_CategoryToIndustry" USING btree ("B");


--
-- Name: _CategoryToOrder_AB_unique; Type: INDEX; Schema: public; Owner: default
--

CREATE UNIQUE INDEX "_CategoryToOrder_AB_unique" ON public."_CategoryToOrder" USING btree ("A", "B");


--
-- Name: _CategoryToOrder_B_index; Type: INDEX; Schema: public; Owner: default
--

CREATE INDEX "_CategoryToOrder_B_index" ON public."_CategoryToOrder" USING btree ("B");


--
-- Name: _CategoryToPhase_AB_unique; Type: INDEX; Schema: public; Owner: default
--

CREATE UNIQUE INDEX "_CategoryToPhase_AB_unique" ON public."_CategoryToPhase" USING btree ("A", "B");


--
-- Name: _CategoryToPhase_B_index; Type: INDEX; Schema: public; Owner: default
--

CREATE INDEX "_CategoryToPhase_B_index" ON public."_CategoryToPhase" USING btree ("B");


--
-- Name: _CategoryToProduct_AB_unique; Type: INDEX; Schema: public; Owner: default
--

CREATE UNIQUE INDEX "_CategoryToProduct_AB_unique" ON public."_CategoryToProduct" USING btree ("A", "B");


--
-- Name: _CategoryToProduct_B_index; Type: INDEX; Schema: public; Owner: default
--

CREATE INDEX "_CategoryToProduct_B_index" ON public."_CategoryToProduct" USING btree ("B");


--
-- Name: _CategoryToProject_AB_unique; Type: INDEX; Schema: public; Owner: default
--

CREATE UNIQUE INDEX "_CategoryToProject_AB_unique" ON public."_CategoryToProject" USING btree ("A", "B");


--
-- Name: _CategoryToProject_B_index; Type: INDEX; Schema: public; Owner: default
--

CREATE INDEX "_CategoryToProject_B_index" ON public."_CategoryToProject" USING btree ("B");


--
-- Name: _CategoryToTool_AB_unique; Type: INDEX; Schema: public; Owner: default
--

CREATE UNIQUE INDEX "_CategoryToTool_AB_unique" ON public."_CategoryToTool" USING btree ("A", "B");


--
-- Name: _CategoryToTool_B_index; Type: INDEX; Schema: public; Owner: default
--

CREATE INDEX "_CategoryToTool_B_index" ON public."_CategoryToTool" USING btree ("B");


--
-- Name: _ClientToService_AB_unique; Type: INDEX; Schema: public; Owner: default
--

CREATE UNIQUE INDEX "_ClientToService_AB_unique" ON public."_ClientToService" USING btree ("A", "B");


--
-- Name: _ClientToService_B_index; Type: INDEX; Schema: public; Owner: default
--

CREATE INDEX "_ClientToService_B_index" ON public."_ClientToService" USING btree ("B");


--
-- Name: _ClientToWork_AB_unique; Type: INDEX; Schema: public; Owner: default
--

CREATE UNIQUE INDEX "_ClientToWork_AB_unique" ON public."_ClientToWork" USING btree ("A", "B");


--
-- Name: _ClientToWork_B_index; Type: INDEX; Schema: public; Owner: default
--

CREATE INDEX "_ClientToWork_B_index" ON public."_ClientToWork" USING btree ("B");


--
-- Name: _IndustryToPost_AB_unique; Type: INDEX; Schema: public; Owner: default
--

CREATE UNIQUE INDEX "_IndustryToPost_AB_unique" ON public."_IndustryToPost" USING btree ("A", "B");


--
-- Name: _IndustryToPost_B_index; Type: INDEX; Schema: public; Owner: default
--

CREATE INDEX "_IndustryToPost_B_index" ON public."_IndustryToPost" USING btree ("B");


--
-- Name: _IndustryToService_AB_unique; Type: INDEX; Schema: public; Owner: default
--

CREATE UNIQUE INDEX "_IndustryToService_AB_unique" ON public."_IndustryToService" USING btree ("A", "B");


--
-- Name: _IndustryToService_B_index; Type: INDEX; Schema: public; Owner: default
--

CREATE INDEX "_IndustryToService_B_index" ON public."_IndustryToService" USING btree ("B");


--
-- Name: _IndustryToWork_AB_unique; Type: INDEX; Schema: public; Owner: default
--

CREATE UNIQUE INDEX "_IndustryToWork_AB_unique" ON public."_IndustryToWork" USING btree ("A", "B");


--
-- Name: _IndustryToWork_B_index; Type: INDEX; Schema: public; Owner: default
--

CREATE INDEX "_IndustryToWork_B_index" ON public."_IndustryToWork" USING btree ("B");


--
-- Name: _LocationToOffer_AB_unique; Type: INDEX; Schema: public; Owner: default
--

CREATE UNIQUE INDEX "_LocationToOffer_AB_unique" ON public."_LocationToOffer" USING btree ("A", "B");


--
-- Name: _LocationToOffer_B_index; Type: INDEX; Schema: public; Owner: default
--

CREATE INDEX "_LocationToOffer_B_index" ON public."_LocationToOffer" USING btree ("B");


--
-- Name: _LocationToProduct_AB_unique; Type: INDEX; Schema: public; Owner: default
--

CREATE UNIQUE INDEX "_LocationToProduct_AB_unique" ON public."_LocationToProduct" USING btree ("A", "B");


--
-- Name: _LocationToProduct_B_index; Type: INDEX; Schema: public; Owner: default
--

CREATE INDEX "_LocationToProduct_B_index" ON public."_LocationToProduct" USING btree ("B");


--
-- Name: _LocationToService_AB_unique; Type: INDEX; Schema: public; Owner: default
--

CREATE UNIQUE INDEX "_LocationToService_AB_unique" ON public."_LocationToService" USING btree ("A", "B");


--
-- Name: _LocationToService_B_index; Type: INDEX; Schema: public; Owner: default
--

CREATE INDEX "_LocationToService_B_index" ON public."_LocationToService" USING btree ("B");


--
-- Name: _OfferToService_AB_unique; Type: INDEX; Schema: public; Owner: default
--

CREATE UNIQUE INDEX "_OfferToService_AB_unique" ON public."_OfferToService" USING btree ("A", "B");


--
-- Name: _OfferToService_B_index; Type: INDEX; Schema: public; Owner: default
--

CREATE INDEX "_OfferToService_B_index" ON public."_OfferToService" USING btree ("B");


--
-- Name: _PackageToPlanCategory_AB_unique; Type: INDEX; Schema: public; Owner: default
--

CREATE UNIQUE INDEX "_PackageToPlanCategory_AB_unique" ON public."_PackageToPlanCategory" USING btree ("A", "B");


--
-- Name: _PackageToPlanCategory_B_index; Type: INDEX; Schema: public; Owner: default
--

CREATE INDEX "_PackageToPlanCategory_B_index" ON public."_PackageToPlanCategory" USING btree ("B");


--
-- Name: _PackageToService_AB_unique; Type: INDEX; Schema: public; Owner: default
--

CREATE UNIQUE INDEX "_PackageToService_AB_unique" ON public."_PackageToService" USING btree ("A", "B");


--
-- Name: _PackageToService_B_index; Type: INDEX; Schema: public; Owner: default
--

CREATE INDEX "_PackageToService_B_index" ON public."_PackageToService" USING btree ("B");


--
-- Name: _PermissionToRole_AB_unique; Type: INDEX; Schema: public; Owner: default
--

CREATE UNIQUE INDEX "_PermissionToRole_AB_unique" ON public."_PermissionToRole" USING btree ("A", "B");


--
-- Name: _PermissionToRole_B_index; Type: INDEX; Schema: public; Owner: default
--

CREATE INDEX "_PermissionToRole_B_index" ON public."_PermissionToRole" USING btree ("B");


--
-- Name: _PhaseToService_AB_unique; Type: INDEX; Schema: public; Owner: default
--

CREATE UNIQUE INDEX "_PhaseToService_AB_unique" ON public."_PhaseToService" USING btree ("A", "B");


--
-- Name: _PhaseToService_B_index; Type: INDEX; Schema: public; Owner: default
--

CREATE INDEX "_PhaseToService_B_index" ON public."_PhaseToService" USING btree ("B");


--
-- Name: _PlanToPlanCategory_AB_unique; Type: INDEX; Schema: public; Owner: default
--

CREATE UNIQUE INDEX "_PlanToPlanCategory_AB_unique" ON public."_PlanToPlanCategory" USING btree ("A", "B");


--
-- Name: _PlanToPlanCategory_B_index; Type: INDEX; Schema: public; Owner: default
--

CREATE INDEX "_PlanToPlanCategory_B_index" ON public."_PlanToPlanCategory" USING btree ("B");


--
-- Name: _PlanToService_AB_unique; Type: INDEX; Schema: public; Owner: default
--

CREATE UNIQUE INDEX "_PlanToService_AB_unique" ON public."_PlanToService" USING btree ("A", "B");


--
-- Name: _PlanToService_B_index; Type: INDEX; Schema: public; Owner: default
--

CREATE INDEX "_PlanToService_B_index" ON public."_PlanToService" USING btree ("B");


--
-- Name: _PostToPostCategory_AB_unique; Type: INDEX; Schema: public; Owner: default
--

CREATE UNIQUE INDEX "_PostToPostCategory_AB_unique" ON public."_PostToPostCategory" USING btree ("A", "B");


--
-- Name: _PostToPostCategory_B_index; Type: INDEX; Schema: public; Owner: default
--

CREATE INDEX "_PostToPostCategory_B_index" ON public."_PostToPostCategory" USING btree ("B");


--
-- Name: _PostToTool_AB_unique; Type: INDEX; Schema: public; Owner: default
--

CREATE UNIQUE INDEX "_PostToTool_AB_unique" ON public."_PostToTool" USING btree ("A", "B");


--
-- Name: _PostToTool_B_index; Type: INDEX; Schema: public; Owner: default
--

CREATE INDEX "_PostToTool_B_index" ON public."_PostToTool" USING btree ("B");


--
-- Name: _ProductToService_AB_unique; Type: INDEX; Schema: public; Owner: default
--

CREATE UNIQUE INDEX "_ProductToService_AB_unique" ON public."_ProductToService" USING btree ("A", "B");


--
-- Name: _ProductToService_B_index; Type: INDEX; Schema: public; Owner: default
--

CREATE INDEX "_ProductToService_B_index" ON public."_ProductToService" USING btree ("B");


--
-- Name: _ProductToTag_AB_unique; Type: INDEX; Schema: public; Owner: default
--

CREATE UNIQUE INDEX "_ProductToTag_AB_unique" ON public."_ProductToTag" USING btree ("A", "B");


--
-- Name: _ProductToTag_B_index; Type: INDEX; Schema: public; Owner: default
--

CREATE INDEX "_ProductToTag_B_index" ON public."_ProductToTag" USING btree ("B");


--
-- Name: _ProjectToTool_AB_unique; Type: INDEX; Schema: public; Owner: default
--

CREATE UNIQUE INDEX "_ProjectToTool_AB_unique" ON public."_ProjectToTool" USING btree ("A", "B");


--
-- Name: _ProjectToTool_B_index; Type: INDEX; Schema: public; Owner: default
--

CREATE INDEX "_ProjectToTool_B_index" ON public."_ProjectToTool" USING btree ("B");


--
-- Name: _RoleToUser_AB_unique; Type: INDEX; Schema: public; Owner: default
--

CREATE UNIQUE INDEX "_RoleToUser_AB_unique" ON public."_RoleToUser" USING btree ("A", "B");


--
-- Name: _RoleToUser_B_index; Type: INDEX; Schema: public; Owner: default
--

CREATE INDEX "_RoleToUser_B_index" ON public."_RoleToUser" USING btree ("B");


--
-- Name: _ServiceToServiceFeature_AB_unique; Type: INDEX; Schema: public; Owner: default
--

CREATE UNIQUE INDEX "_ServiceToServiceFeature_AB_unique" ON public."_ServiceToServiceFeature" USING btree ("A", "B");


--
-- Name: _ServiceToServiceFeature_B_index; Type: INDEX; Schema: public; Owner: default
--

CREATE INDEX "_ServiceToServiceFeature_B_index" ON public."_ServiceToServiceFeature" USING btree ("B");


--
-- Name: _TaskToUser_AB_unique; Type: INDEX; Schema: public; Owner: default
--

CREATE UNIQUE INDEX "_TaskToUser_AB_unique" ON public."_TaskToUser" USING btree ("A", "B");


--
-- Name: _TaskToUser_B_index; Type: INDEX; Schema: public; Owner: default
--

CREATE INDEX "_TaskToUser_B_index" ON public."_TaskToUser" USING btree ("B");


--
-- Name: users_clientId_key; Type: INDEX; Schema: public; Owner: default
--

CREATE UNIQUE INDEX "users_clientId_key" ON public.users USING btree ("clientId");


--
-- Name: users_email_key; Type: INDEX; Schema: public; Owner: default
--

CREATE UNIQUE INDEX users_email_key ON public.users USING btree (email);


--
-- Name: AboutUsSection AboutUsSection_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."AboutUsSection"
    ADD CONSTRAINT "AboutUsSection_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Account Account_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."Account"
    ADD CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: AdminMenu AdminMenu_menuParentId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."AdminMenu"
    ADD CONSTRAINT "AdminMenu_menuParentId_fkey" FOREIGN KEY ("menuParentId") REFERENCES public."MenuParent"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: AdminMenu AdminMenu_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."AdminMenu"
    ADD CONSTRAINT "AdminMenu_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: BillingInfo BillingInfo_orderId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."BillingInfo"
    ADD CONSTRAINT "BillingInfo_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES public."Order"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Category Category_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."Category"
    ADD CONSTRAINT "Category_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Client Client_createdById_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."Client"
    ADD CONSTRAINT "Client_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: CompanyMenu CompanyMenu_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."CompanyMenu"
    ADD CONSTRAINT "CompanyMenu_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Department Department_departmentHeadId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."Department"
    ADD CONSTRAINT "Department_departmentHeadId_fkey" FOREIGN KEY ("departmentHeadId") REFERENCES public."EmployeeProfile"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: Element Element_menuId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."Element"
    ADD CONSTRAINT "Element_menuId_fkey" FOREIGN KEY ("menuId") REFERENCES public."AdminMenu"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: Element Element_parentId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."Element"
    ADD CONSTRAINT "Element_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES public."Element"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: EmployeeProfile EmployeeProfile_socialNetworkId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."EmployeeProfile"
    ADD CONSTRAINT "EmployeeProfile_socialNetworkId_fkey" FOREIGN KEY ("socialNetworkId") REFERENCES public."SocialNetwork"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: EmployeeProfile EmployeeProfile_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."EmployeeProfile"
    ADD CONSTRAINT "EmployeeProfile_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: EmployeeSkill EmployeeSkill_employeeProfileId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."EmployeeSkill"
    ADD CONSTRAINT "EmployeeSkill_employeeProfileId_fkey" FOREIGN KEY ("employeeProfileId") REFERENCES public."EmployeeProfile"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: EmployeeSkill EmployeeSkill_skillId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."EmployeeSkill"
    ADD CONSTRAINT "EmployeeSkill_skillId_fkey" FOREIGN KEY ("skillId") REFERENCES public."Skill"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Explore Explore_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."Explore"
    ADD CONSTRAINT "Explore_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Feature Feature_toolId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."Feature"
    ADD CONSTRAINT "Feature_toolId_fkey" FOREIGN KEY ("toolId") REFERENCES public."Tool"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: HeroSection HeroSection_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."HeroSection"
    ADD CONSTRAINT "HeroSection_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Industry Industry_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."Industry"
    ADD CONSTRAINT "Industry_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Invoice Invoice_clientId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."Invoice"
    ADD CONSTRAINT "Invoice_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES public."Client"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: Invoice Invoice_serviceId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."Invoice"
    ADD CONSTRAINT "Invoice_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES public."Service"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: MarketPage MarketPage_marketId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."MarketPage"
    ADD CONSTRAINT "MarketPage_marketId_fkey" FOREIGN KEY ("marketId") REFERENCES public."Market"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: MarketPage MarketPage_pageId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."MarketPage"
    ADD CONSTRAINT "MarketPage_pageId_fkey" FOREIGN KEY ("pageId") REFERENCES public."Page"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: Market Market_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."Market"
    ADD CONSTRAINT "Market_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Media Media_clientId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."Media"
    ADD CONSTRAINT "Media_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES public."Client"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: Media Media_orderId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."Media"
    ADD CONSTRAINT "Media_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES public."Order"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: Media Media_productId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."Media"
    ADD CONSTRAINT "Media_productId_fkey" FOREIGN KEY ("productId") REFERENCES public."Product"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: Media Media_projectId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."Media"
    ADD CONSTRAINT "Media_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES public."Project"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: Media Media_tasktId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."Media"
    ADD CONSTRAINT "Media_tasktId_fkey" FOREIGN KEY ("tasktId") REFERENCES public."Task"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: MenuParent MenuParent_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."MenuParent"
    ADD CONSTRAINT "MenuParent_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Offer Offer_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."Offer"
    ADD CONSTRAINT "Offer_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Order Order_clientId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."Order"
    ADD CONSTRAINT "Order_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES public."Client"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: Order Order_orderManagerId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."Order"
    ADD CONSTRAINT "Order_orderManagerId_fkey" FOREIGN KEY ("orderManagerId") REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: Order Order_serviceId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."Order"
    ADD CONSTRAINT "Order_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES public."Service"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: PackageFeatureLink PackageFeatureLink_featureId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."PackageFeatureLink"
    ADD CONSTRAINT "PackageFeatureLink_featureId_fkey" FOREIGN KEY ("featureId") REFERENCES public."PackageFeature"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: PackageFeatureLink PackageFeatureLink_packageId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."PackageFeatureLink"
    ADD CONSTRAINT "PackageFeatureLink_packageId_fkey" FOREIGN KEY ("packageId") REFERENCES public."Package"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Package Package_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."Package"
    ADD CONSTRAINT "Package_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: PageSection PageSection_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."PageSection"
    ADD CONSTRAINT "PageSection_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Page Page_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."Page"
    ADD CONSTRAINT "Page_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Partner Partner_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."Partner"
    ADD CONSTRAINT "Partner_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Phase Phase_projectId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."Phase"
    ADD CONSTRAINT "Phase_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES public."Project"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: Phase Phase_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."Phase"
    ADD CONSTRAINT "Phase_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: PlanCategory PlanCategory_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."PlanCategory"
    ADD CONSTRAINT "PlanCategory_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Plan Plan_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."Plan"
    ADD CONSTRAINT "Plan_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: PostCategory PostCategory_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."PostCategory"
    ADD CONSTRAINT "PostCategory_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Post Post_authorId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."Post"
    ADD CONSTRAINT "Post_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: Price Price_locationId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."Price"
    ADD CONSTRAINT "Price_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES public."Location"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: Price Price_productId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."Price"
    ADD CONSTRAINT "Price_productId_fkey" FOREIGN KEY ("productId") REFERENCES public."Product"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: Price Price_serviceId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."Price"
    ADD CONSTRAINT "Price_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES public."Service"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: Product Product_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."Product"
    ADD CONSTRAINT "Product_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Product Product_vendorId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."Product"
    ADD CONSTRAINT "Product_vendorId_fkey" FOREIGN KEY ("vendorId") REFERENCES public."Vendor"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: Project Project_clientId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."Project"
    ADD CONSTRAINT "Project_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES public."Client"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: Project Project_teamId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."Project"
    ADD CONSTRAINT "Project_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES public."Team"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: Project Project_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."Project"
    ADD CONSTRAINT "Project_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: ServiceCategory ServiceCategory_categoryId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."ServiceCategory"
    ADD CONSTRAINT "ServiceCategory_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES public."Category"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: ServiceCategory ServiceCategory_serviceId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."ServiceCategory"
    ADD CONSTRAINT "ServiceCategory_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES public."Service"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: ServiceFeature ServiceFeature_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."ServiceFeature"
    ADD CONSTRAINT "ServiceFeature_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: ServiceTag ServiceTag_serviceId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."ServiceTag"
    ADD CONSTRAINT "ServiceTag_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES public."Service"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: ServiceTag ServiceTag_tagId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."ServiceTag"
    ADD CONSTRAINT "ServiceTag_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES public."Tag"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: ServiceTool ServiceTool_serviceId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."ServiceTool"
    ADD CONSTRAINT "ServiceTool_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES public."Service"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: ServiceTool ServiceTool_toolId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."ServiceTool"
    ADD CONSTRAINT "ServiceTool_toolId_fkey" FOREIGN KEY ("toolId") REFERENCES public."Tool"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: Service Service_codeId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."Service"
    ADD CONSTRAINT "Service_codeId_fkey" FOREIGN KEY ("codeId") REFERENCES public."ServiceCode"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: Service Service_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."Service"
    ADD CONSTRAINT "Service_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Session Session_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."Session"
    ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: Step Step_phaseId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."Step"
    ADD CONSTRAINT "Step_phaseId_fkey" FOREIGN KEY ("phaseId") REFERENCES public."Phase"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: Subscription Subscription_planId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."Subscription"
    ADD CONSTRAINT "Subscription_planId_fkey" FOREIGN KEY ("planId") REFERENCES public."Plan"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Subscription Subscription_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."Subscription"
    ADD CONSTRAINT "Subscription_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Tag Tag_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."Tag"
    ADD CONSTRAINT "Tag_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Task Task_projectId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."Task"
    ADD CONSTRAINT "Task_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES public."Project"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: TeamEmployee TeamEmployee_employeeId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."TeamEmployee"
    ADD CONSTRAINT "TeamEmployee_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES public."EmployeeProfile"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: TeamEmployee TeamEmployee_teamId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."TeamEmployee"
    ADD CONSTRAINT "TeamEmployee_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES public."Team"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: Team Team_departmentId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."Team"
    ADD CONSTRAINT "Team_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES public."Department"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: Team Team_locationId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."Team"
    ADD CONSTRAINT "Team_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES public."Location"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: TestimonialCategory TestimonialCategory_categoryId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."TestimonialCategory"
    ADD CONSTRAINT "TestimonialCategory_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES public."Category"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: TestimonialCategory TestimonialCategory_testimonialId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."TestimonialCategory"
    ADD CONSTRAINT "TestimonialCategory_testimonialId_fkey" FOREIGN KEY ("testimonialId") REFERENCES public."Testimonial"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: TestimonialTag TestimonialTag_tagId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."TestimonialTag"
    ADD CONSTRAINT "TestimonialTag_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES public."Tag"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: TestimonialTag TestimonialTag_testimonialId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."TestimonialTag"
    ADD CONSTRAINT "TestimonialTag_testimonialId_fkey" FOREIGN KEY ("testimonialId") REFERENCES public."Testimonial"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: Testimonial Testimonial_customerId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."Testimonial"
    ADD CONSTRAINT "Testimonial_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES public."Customer"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: Testimonial Testimonial_serviceId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."Testimonial"
    ADD CONSTRAINT "Testimonial_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES public."Service"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: Testimonial Testimonial_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."Testimonial"
    ADD CONSTRAINT "Testimonial_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: Tool Tool_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."Tool"
    ADD CONSTRAINT "Tool_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: WorkCategory WorkCategory_categoryId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."WorkCategory"
    ADD CONSTRAINT "WorkCategory_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES public."Category"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: WorkCategory WorkCategory_workId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."WorkCategory"
    ADD CONSTRAINT "WorkCategory_workId_fkey" FOREIGN KEY ("workId") REFERENCES public."Work"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: WorkTag WorkTag_tagId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."WorkTag"
    ADD CONSTRAINT "WorkTag_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES public."Tag"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: WorkTag WorkTag_workId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."WorkTag"
    ADD CONSTRAINT "WorkTag_workId_fkey" FOREIGN KEY ("workId") REFERENCES public."Work"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: WorkTool WorkTool_toolId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."WorkTool"
    ADD CONSTRAINT "WorkTool_toolId_fkey" FOREIGN KEY ("toolId") REFERENCES public."Tool"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: WorkTool WorkTool_workId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."WorkTool"
    ADD CONSTRAINT "WorkTool_workId_fkey" FOREIGN KEY ("workId") REFERENCES public."Work"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: Work Work_locationId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."Work"
    ADD CONSTRAINT "Work_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES public."Location"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: Work Work_serviceId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."Work"
    ADD CONSTRAINT "Work_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES public."Service"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: Work Work_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."Work"
    ADD CONSTRAINT "Work_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: _CategoryToClient _CategoryToClient_A_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."_CategoryToClient"
    ADD CONSTRAINT "_CategoryToClient_A_fkey" FOREIGN KEY ("A") REFERENCES public."Category"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: _CategoryToClient _CategoryToClient_B_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."_CategoryToClient"
    ADD CONSTRAINT "_CategoryToClient_B_fkey" FOREIGN KEY ("B") REFERENCES public."Client"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: _CategoryToIndustry _CategoryToIndustry_A_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."_CategoryToIndustry"
    ADD CONSTRAINT "_CategoryToIndustry_A_fkey" FOREIGN KEY ("A") REFERENCES public."Category"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: _CategoryToIndustry _CategoryToIndustry_B_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."_CategoryToIndustry"
    ADD CONSTRAINT "_CategoryToIndustry_B_fkey" FOREIGN KEY ("B") REFERENCES public."Industry"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: _CategoryToOrder _CategoryToOrder_A_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."_CategoryToOrder"
    ADD CONSTRAINT "_CategoryToOrder_A_fkey" FOREIGN KEY ("A") REFERENCES public."Category"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: _CategoryToOrder _CategoryToOrder_B_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."_CategoryToOrder"
    ADD CONSTRAINT "_CategoryToOrder_B_fkey" FOREIGN KEY ("B") REFERENCES public."Order"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: _CategoryToPhase _CategoryToPhase_A_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."_CategoryToPhase"
    ADD CONSTRAINT "_CategoryToPhase_A_fkey" FOREIGN KEY ("A") REFERENCES public."Category"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: _CategoryToPhase _CategoryToPhase_B_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."_CategoryToPhase"
    ADD CONSTRAINT "_CategoryToPhase_B_fkey" FOREIGN KEY ("B") REFERENCES public."Phase"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: _CategoryToProduct _CategoryToProduct_A_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."_CategoryToProduct"
    ADD CONSTRAINT "_CategoryToProduct_A_fkey" FOREIGN KEY ("A") REFERENCES public."Category"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: _CategoryToProduct _CategoryToProduct_B_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."_CategoryToProduct"
    ADD CONSTRAINT "_CategoryToProduct_B_fkey" FOREIGN KEY ("B") REFERENCES public."Product"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: _CategoryToProject _CategoryToProject_A_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."_CategoryToProject"
    ADD CONSTRAINT "_CategoryToProject_A_fkey" FOREIGN KEY ("A") REFERENCES public."Category"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: _CategoryToProject _CategoryToProject_B_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."_CategoryToProject"
    ADD CONSTRAINT "_CategoryToProject_B_fkey" FOREIGN KEY ("B") REFERENCES public."Project"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: _CategoryToTool _CategoryToTool_A_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."_CategoryToTool"
    ADD CONSTRAINT "_CategoryToTool_A_fkey" FOREIGN KEY ("A") REFERENCES public."Category"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: _CategoryToTool _CategoryToTool_B_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."_CategoryToTool"
    ADD CONSTRAINT "_CategoryToTool_B_fkey" FOREIGN KEY ("B") REFERENCES public."Tool"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: _ClientToService _ClientToService_A_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."_ClientToService"
    ADD CONSTRAINT "_ClientToService_A_fkey" FOREIGN KEY ("A") REFERENCES public."Client"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: _ClientToService _ClientToService_B_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."_ClientToService"
    ADD CONSTRAINT "_ClientToService_B_fkey" FOREIGN KEY ("B") REFERENCES public."Service"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: _ClientToWork _ClientToWork_A_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."_ClientToWork"
    ADD CONSTRAINT "_ClientToWork_A_fkey" FOREIGN KEY ("A") REFERENCES public."Client"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: _ClientToWork _ClientToWork_B_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."_ClientToWork"
    ADD CONSTRAINT "_ClientToWork_B_fkey" FOREIGN KEY ("B") REFERENCES public."Work"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: _IndustryToPost _IndustryToPost_A_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."_IndustryToPost"
    ADD CONSTRAINT "_IndustryToPost_A_fkey" FOREIGN KEY ("A") REFERENCES public."Industry"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: _IndustryToPost _IndustryToPost_B_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."_IndustryToPost"
    ADD CONSTRAINT "_IndustryToPost_B_fkey" FOREIGN KEY ("B") REFERENCES public."Post"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: _IndustryToService _IndustryToService_A_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."_IndustryToService"
    ADD CONSTRAINT "_IndustryToService_A_fkey" FOREIGN KEY ("A") REFERENCES public."Industry"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: _IndustryToService _IndustryToService_B_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."_IndustryToService"
    ADD CONSTRAINT "_IndustryToService_B_fkey" FOREIGN KEY ("B") REFERENCES public."Service"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: _IndustryToWork _IndustryToWork_A_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."_IndustryToWork"
    ADD CONSTRAINT "_IndustryToWork_A_fkey" FOREIGN KEY ("A") REFERENCES public."Industry"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: _IndustryToWork _IndustryToWork_B_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."_IndustryToWork"
    ADD CONSTRAINT "_IndustryToWork_B_fkey" FOREIGN KEY ("B") REFERENCES public."Work"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: _LocationToOffer _LocationToOffer_A_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."_LocationToOffer"
    ADD CONSTRAINT "_LocationToOffer_A_fkey" FOREIGN KEY ("A") REFERENCES public."Location"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: _LocationToOffer _LocationToOffer_B_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."_LocationToOffer"
    ADD CONSTRAINT "_LocationToOffer_B_fkey" FOREIGN KEY ("B") REFERENCES public."Offer"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: _LocationToProduct _LocationToProduct_A_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."_LocationToProduct"
    ADD CONSTRAINT "_LocationToProduct_A_fkey" FOREIGN KEY ("A") REFERENCES public."Location"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: _LocationToProduct _LocationToProduct_B_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."_LocationToProduct"
    ADD CONSTRAINT "_LocationToProduct_B_fkey" FOREIGN KEY ("B") REFERENCES public."Product"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: _LocationToService _LocationToService_A_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."_LocationToService"
    ADD CONSTRAINT "_LocationToService_A_fkey" FOREIGN KEY ("A") REFERENCES public."Location"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: _LocationToService _LocationToService_B_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."_LocationToService"
    ADD CONSTRAINT "_LocationToService_B_fkey" FOREIGN KEY ("B") REFERENCES public."Service"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: _OfferToService _OfferToService_A_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."_OfferToService"
    ADD CONSTRAINT "_OfferToService_A_fkey" FOREIGN KEY ("A") REFERENCES public."Offer"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: _OfferToService _OfferToService_B_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."_OfferToService"
    ADD CONSTRAINT "_OfferToService_B_fkey" FOREIGN KEY ("B") REFERENCES public."Service"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: _PackageToPlanCategory _PackageToPlanCategory_A_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."_PackageToPlanCategory"
    ADD CONSTRAINT "_PackageToPlanCategory_A_fkey" FOREIGN KEY ("A") REFERENCES public."Package"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: _PackageToPlanCategory _PackageToPlanCategory_B_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."_PackageToPlanCategory"
    ADD CONSTRAINT "_PackageToPlanCategory_B_fkey" FOREIGN KEY ("B") REFERENCES public."PlanCategory"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: _PackageToService _PackageToService_A_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."_PackageToService"
    ADD CONSTRAINT "_PackageToService_A_fkey" FOREIGN KEY ("A") REFERENCES public."Package"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: _PackageToService _PackageToService_B_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."_PackageToService"
    ADD CONSTRAINT "_PackageToService_B_fkey" FOREIGN KEY ("B") REFERENCES public."Service"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: _PermissionToRole _PermissionToRole_A_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."_PermissionToRole"
    ADD CONSTRAINT "_PermissionToRole_A_fkey" FOREIGN KEY ("A") REFERENCES public."Permission"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: _PermissionToRole _PermissionToRole_B_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."_PermissionToRole"
    ADD CONSTRAINT "_PermissionToRole_B_fkey" FOREIGN KEY ("B") REFERENCES public."Role"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: _PhaseToService _PhaseToService_A_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."_PhaseToService"
    ADD CONSTRAINT "_PhaseToService_A_fkey" FOREIGN KEY ("A") REFERENCES public."Phase"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: _PhaseToService _PhaseToService_B_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."_PhaseToService"
    ADD CONSTRAINT "_PhaseToService_B_fkey" FOREIGN KEY ("B") REFERENCES public."Service"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: _PlanToPlanCategory _PlanToPlanCategory_A_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."_PlanToPlanCategory"
    ADD CONSTRAINT "_PlanToPlanCategory_A_fkey" FOREIGN KEY ("A") REFERENCES public."Plan"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: _PlanToPlanCategory _PlanToPlanCategory_B_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."_PlanToPlanCategory"
    ADD CONSTRAINT "_PlanToPlanCategory_B_fkey" FOREIGN KEY ("B") REFERENCES public."PlanCategory"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: _PlanToService _PlanToService_A_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."_PlanToService"
    ADD CONSTRAINT "_PlanToService_A_fkey" FOREIGN KEY ("A") REFERENCES public."Plan"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: _PlanToService _PlanToService_B_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."_PlanToService"
    ADD CONSTRAINT "_PlanToService_B_fkey" FOREIGN KEY ("B") REFERENCES public."Service"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: _PostToPostCategory _PostToPostCategory_A_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."_PostToPostCategory"
    ADD CONSTRAINT "_PostToPostCategory_A_fkey" FOREIGN KEY ("A") REFERENCES public."Post"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: _PostToPostCategory _PostToPostCategory_B_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."_PostToPostCategory"
    ADD CONSTRAINT "_PostToPostCategory_B_fkey" FOREIGN KEY ("B") REFERENCES public."PostCategory"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: _PostToTool _PostToTool_A_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."_PostToTool"
    ADD CONSTRAINT "_PostToTool_A_fkey" FOREIGN KEY ("A") REFERENCES public."Post"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: _PostToTool _PostToTool_B_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."_PostToTool"
    ADD CONSTRAINT "_PostToTool_B_fkey" FOREIGN KEY ("B") REFERENCES public."Tool"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: _ProductToService _ProductToService_A_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."_ProductToService"
    ADD CONSTRAINT "_ProductToService_A_fkey" FOREIGN KEY ("A") REFERENCES public."Product"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: _ProductToService _ProductToService_B_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."_ProductToService"
    ADD CONSTRAINT "_ProductToService_B_fkey" FOREIGN KEY ("B") REFERENCES public."Service"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: _ProductToTag _ProductToTag_A_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."_ProductToTag"
    ADD CONSTRAINT "_ProductToTag_A_fkey" FOREIGN KEY ("A") REFERENCES public."Product"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: _ProductToTag _ProductToTag_B_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."_ProductToTag"
    ADD CONSTRAINT "_ProductToTag_B_fkey" FOREIGN KEY ("B") REFERENCES public."Tag"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: _ProjectToTool _ProjectToTool_A_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."_ProjectToTool"
    ADD CONSTRAINT "_ProjectToTool_A_fkey" FOREIGN KEY ("A") REFERENCES public."Project"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: _ProjectToTool _ProjectToTool_B_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."_ProjectToTool"
    ADD CONSTRAINT "_ProjectToTool_B_fkey" FOREIGN KEY ("B") REFERENCES public."Tool"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: _RoleToUser _RoleToUser_A_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."_RoleToUser"
    ADD CONSTRAINT "_RoleToUser_A_fkey" FOREIGN KEY ("A") REFERENCES public."Role"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: _RoleToUser _RoleToUser_B_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."_RoleToUser"
    ADD CONSTRAINT "_RoleToUser_B_fkey" FOREIGN KEY ("B") REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: _ServiceToServiceFeature _ServiceToServiceFeature_A_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."_ServiceToServiceFeature"
    ADD CONSTRAINT "_ServiceToServiceFeature_A_fkey" FOREIGN KEY ("A") REFERENCES public."Service"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: _ServiceToServiceFeature _ServiceToServiceFeature_B_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."_ServiceToServiceFeature"
    ADD CONSTRAINT "_ServiceToServiceFeature_B_fkey" FOREIGN KEY ("B") REFERENCES public."ServiceFeature"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: _TaskToUser _TaskToUser_A_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."_TaskToUser"
    ADD CONSTRAINT "_TaskToUser_A_fkey" FOREIGN KEY ("A") REFERENCES public."Task"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: _TaskToUser _TaskToUser_B_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public."_TaskToUser"
    ADD CONSTRAINT "_TaskToUser_B_fkey" FOREIGN KEY ("B") REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: users users_clientId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: default
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT "users_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES public."Client"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: default
--

REVOKE USAGE ON SCHEMA public FROM PUBLIC;


--
-- Name: DEFAULT PRIVILEGES FOR SEQUENCES; Type: DEFAULT ACL; Schema: public; Owner: cloud_admin
--

ALTER DEFAULT PRIVILEGES FOR ROLE cloud_admin IN SCHEMA public GRANT ALL ON SEQUENCES  TO neon_superuser WITH GRANT OPTION;


--
-- Name: DEFAULT PRIVILEGES FOR TABLES; Type: DEFAULT ACL; Schema: public; Owner: cloud_admin
--

ALTER DEFAULT PRIVILEGES FOR ROLE cloud_admin IN SCHEMA public GRANT ALL ON TABLES  TO neon_superuser WITH GRANT OPTION;


--
-- PostgreSQL database dump complete
--

