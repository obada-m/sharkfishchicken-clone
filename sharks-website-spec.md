# Sharks Fish & Chicken Website Technical Specification

## Executive Summary

Sharks Fish & Chicken operates a **multi-platform restaurant website system** serving multiple Illinois locations through specialized ordering platforms, Wix implementations, and third-party delivery integrations. The brand maintains consistency in messaging and menu structure while adapting to different technical platforms based on operational needs.

## Complete Site Architecture

### Primary Platform Structure

**Main Corporate Website**: `sharkfishchicken.com`

- **Homepage**: Brand overview with food gallery and ordering CTAs
- **Menu Section**: Complete categorized menu with pricing (`/menu`)
- **Story Section**: Brand history and values (`/story`)
- **Locations Directory**: All restaurant locations (`/page/locations`)

### Location-Specific Page Architecture

**Service Area Pages**:

- Pattern: `/places/[area-name]`
- Examples: `/places/homewood`, `/places/east-hazel-crest`, `/places/markham`

### Ordering Platform Architecture

**Primary Ordering System**: `ordersharksfishandchicken.com`

- **Location Subdomains**: `[location].ordersharksfishandchicken.com`
- **Catering Pages**: `/Catering` endpoint for bulk orders
- **Alternative Systems**: Talech POS integration for specific locations

## Complete Menu Structure & Content Organization

### Menu Category Hierarchy

1. **House Favorites** (Priority placement)
2. **Wings Wings Wings** (Signature category)
3. **Fish Dinners**: Catfish, Ocean Perch, Tilapia, Jack Salmon
4. **Chicken Dinners**: Wings, Tenders, Mixed pieces
5. **Shrimp Dinners**: Medium and Jumbo options
6. **Combo Dinners**: 2-item and 3-item combinations
7. **Family Meals**: Bulk quantities (30-100 pieces)
8. **Party Wings**: Large quantity wing orders (50-100 wings)
9. **Fish & Chicken Combos**: Mixed protein options
10. **Kids Meals**: Child-friendly portions
11. **Sandwiches & Burgers**: Handheld options
12. **Salads & Sides**: Okra, cornmeal balls, fries
13. **Desserts & Beverages**: 12oz and 20oz sodas
14. **Seasonings**: Lemon Pepper, Cajun, Garlic, Plain

### Menu Item Structure

**Data Fields Required**:

- Item name and description
- Price range ($7.99 - $79.99)
- Portion information (piece counts, serving sizes)
- Customization options (seasonings, cooking preferences)
- Ingredient lists and allergen information
- Category classification and sorting order

## Complete Interactive Elements Documentation

### Core Ordering System Features

**Shopping Cart Functionality**:

- Dynamic item count display
- Real-time price calculation ($0.00 empty state)
- Cart collapse/expand toggle
- "View Cart [count] $[total]" format
- Checkout button as primary CTA
- Cart persistence across navigation

**Menu Navigation System**:

- Category-based expandable sections
- Individual item selection with quantity controls
- Customization dropdowns for seasonings and options
- Search functionality for menu item discovery
- Responsive mobile-optimized browsing

### Order Type Selection Interface

**Available Order Methods**:

- **Pickup**: In-store collection with time estimates
- **Delivery**: Address-based radius validation
- **In Store**: Dine-in option for location visits
- **Curbside**: Contactless pickup with car details
- **Phone Orders**: Integrated calling functionality

### Scheduling and Timing System

**Order Timing Options**:

- **ASAP**: 10-25 minute preparation estimate
- **Schedule Order**: Future date/time selection interface
- Time slot picker with availability checking
- Location-specific delivery time calculations

### Form Systems and Validation

**Order Customization Forms**:

- Dropdown selectors for sauces and seasonings
- Quantity input fields with +/- controls
- Special instructions text areas
- Allergen preference checkboxes

**Checkout and Payment Forms**:

- Customer information collection
- Address validation for delivery orders
- Phone number formatting and verification
- Payment method selection interface

### Dynamic State Management

**Loading and Status Indicators**:

- "Loading, please wait..." process states
- Real-time inventory availability checks
- Order confirmation and tracking displays
- Store status messaging ("not accepting orders")

## Visual Design System Specifications

### Brand Identity Elements

**Logo System**:

- Primary logo available in PNG (2000x1939px) and AI vector formats
- Brand variations: "Big Sharks Fish & Chicken" and "Sharks Fish & Chicken"
- Combination mark featuring text and imagery elements
- Consistent application across all platforms

### Typography Hierarchy

**Text Structure Requirements**:

- **Primary Headers**: Category names and major sections
- **Secondary Headers**: Menu item names with bold emphasis
- **Body Text**: Item descriptions using appetizing adjectives
- **Price Display**: Prominent numerical formatting
- **Micro-copy**: Hours, disclaimers, contact information

### Content Language Patterns

**Descriptive Language**: "Delicious," "Crispy," "Fresh," "Golden," "Expertly fried"
**Action-Oriented CTAs**: "Order online," "Add to cart," "Choose your location"
**Community Messaging**: References to families, locals, established history

### UI Component Library

**Navigation Components**:

- Top navigation with Home/Menu/Locations/Story sections
- Location selection dropdown with service area mapping
- Mobile hamburger menu for responsive navigation
- Breadcrumb systems for location pages

**Card Components**:

- **Menu Item Cards**: Image, title, description, price, add-to-cart button
- **Location Cards**: Address, hours, phone, directions, order online CTA
- **Promotional Cards**: Special offers with compelling imagery

**Button Systems**:

- **Primary Actions**: "Order Online" with brand color background
- **Secondary Actions**: "View Menu," "Get Directions" with outline style
- **Cart Actions**: Add/remove controls with quantity displays

**Form Elements**:

- Input fields with clear labels and validation states
- Dropdown menus for customization options
- Radio buttons for order type selection
- Checkbox groups for add-ons and preferences

## Technical Implementation Architecture

### Platform Technology Stack

**Multi-Platform Approach Identified**:

1. **Custom Ordering Platform** (`ordersharksfishandchicken.com`)

   - Specialized restaurant ordering system
   - Location-specific subdomain architecture
   - Real-time inventory and order management
   - Integrated payment processing

2. **Wix Implementation** (Georgia locations)

   - Wix website builder platform
   - Static image hosting via `static.wixstatic.com` CDN
   - Drag-and-drop content management
   - Built-in responsive templates

3. **Talech POS Integration** (select locations)
   - Professional point-of-sale system integration
   - Advanced order type selection
   - Enhanced scheduling interfaces
   - Real-time synchronization with kitchen operations

### Frontend Technical Requirements

**HTML Structure**:

- Semantic markup optimized for restaurant ordering
- Mobile-first responsive design implementation
- Clean URL structure with SEO-friendly patterns
- Structured data markup for local business schema

**CSS Architecture**:

- Mobile-first responsive grid systems
- Touch-friendly interface elements (44px+ touch targets)
- Smooth transitions and loading state animations
- Brand-consistent color scheme and typography scale

**JavaScript Functionality**:

- Asynchronous cart updates and menu loading
- Real-time price calculations and inventory checks
- Location-based service area validation
- Progressive web app features for mobile ordering

### Backend System Requirements

**Database Architecture**:

- **Menu Management**: Dynamic menu with real-time inventory tracking
- **Order Processing**: Relational structure for orders, customers, locations
- **Multi-location Support**: Centralized data with location-specific configurations
- **Customer Management**: User accounts, order history, loyalty points

**API Integration Requirements**:

- Payment gateway APIs (credit cards, digital wallets)
- Third-party delivery platform APIs (DoorDash, Uber Eats, Postmates)
- Mapping and geolocation services for delivery zones
- POS system synchronization for order management
- Email and SMS notification systems

### Third-Party Integrations

**Delivery Platform Integrations**:

- **DoorDash**: DashPass subscription, real-time tracking, group ordering
- **Uber Eats**: Uber One integration, upfront pricing, recommendation engine
- **Postmates**: Menu synchronization, real-time availability updates

**Payment Processing**:

- Credit card processing with PCI compliance
- Digital wallet support (Apple Pay, Google Pay, PayPal, Venmo)
- Loyalty program integration with points accumulation
- Split payment and group ordering capabilities

### Security and Performance Requirements

**Security Implementation**:

- SSL/TLS encryption across all platforms
- PCI-compliant payment processing
- Customer data encryption and privacy protection
- Secure API authentication for integrations

**Performance Optimization**:

- CDN implementation for static assets
- Image optimization and responsive sizing
- Progressive loading for menu content
- Caching strategies for frequently accessed data
- Mobile-optimized loading prioritization

## User Experience Flow Documentation

### Primary Customer Journeys

**Location Discovery Flow**:

1. Homepage visit → Location finder
2. Service area detection or manual selection
3. Nearest location display with hours/availability
4. "Order Online" CTA to location-specific ordering platform

**Menu Browsing and Ordering Flow**:

1. Menu category selection
2. Item browsing with filtering/search
3. Item customization (seasonings, quantities)
4. Add to cart with real-time total updates
5. Cart review and modification
6. Order type selection (pickup/delivery/dine-in)
7. Scheduling (ASAP or future time)
8. Customer information and payment
9. Order confirmation and tracking

### Responsive Design Behaviors

**Mobile-Specific Features**:

- Collapsible menu categories for easy browsing
- Large, touch-friendly buttons throughout interface
- Simplified checkout flow optimized for mobile
- Click-to-call functionality for phone orders
- GPS integration for automatic location detection

**Desktop Enhancements**:

- Multi-column menu layouts for efficient browsing
- Hover states on interactive elements
- Expanded product information display
- Enhanced filtering and search capabilities

## Business Logic and Content Management

### Operating Hours System

**Standard Hours Pattern**:

- **Sunday-Thursday**: 10:00 AM - 12:00 AM
- **Friday-Saturday**: 10:00 AM - 2:00 AM
- Location-specific variations with dynamic display
- Holiday hours and special occasion modifications

### Location-Specific Customization

**Per-Location Variables**:

- Address and contact information
- Operating hours and service availability
- Menu variations and pricing differences
- Delivery area definitions and fees
- Staff information and local promotions

### Content Management Requirements

**Dynamic Content Systems**:

- Menu item management with pricing updates
- Promotional banner rotation and scheduling
- Location-specific content and announcements
- Review and testimonial integration
- Photo gallery management for food items

## Advanced Features for Full Functionality

### Loyalty and Customer Retention

**Rewards Program Features**:

- Point accumulation system for online orders
- Redemption options for free food items
- Tier-based benefits for frequent customers
- Birthday and anniversary special offers
- Email marketing integration for promotions

### Analytics and Business Intelligence

**Tracking Requirements**:

- Order conversion tracking across platforms
- Location performance analytics
- Menu item popularity and profit analysis
- Customer behavior and retention metrics
- Peak hours and capacity planning data

### Administrative Backend

**Management Interface Requirements**:

- Multi-location dashboard with unified control
- Menu management with bulk updates
- Order monitoring and kitchen integration
- Staff scheduling and payroll integration
- Inventory tracking and supplier management

## Implementation Recommendations

### Development Approach

**Phase 1: Core Website Structure**

- Homepage with location finder
- Menu display system with basic ordering
- Location pages with essential information
- Mobile-responsive design foundation

**Phase 2: Ordering System Integration**

- Shopping cart functionality
- Payment processing integration
- Order management and kitchen display
- Customer notification systems

**Phase 3: Advanced Features**

- Third-party delivery platform integration
- Loyalty program implementation
- Advanced analytics and reporting
- Administrative dashboard completion

### Platform Strategy

**Single Platform Consolidation**:
Rather than the current multi-platform approach, consider consolidating to a unified restaurant management platform that can handle:

- Multi-location management
- Integrated ordering and POS systems
- Comprehensive analytics and reporting
- Scalable architecture for future growth

This comprehensive specification provides all the technical details, user flows, design requirements, and implementation guidance needed to recreate the complete Sharks Fish & Chicken website functionality while potentially improving upon the current fragmented platform approach.
